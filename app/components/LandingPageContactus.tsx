/* eslint-disable react/display-name */
"use client";
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Image from "next/image";
import PartnerStatsCard from "./PartnerStatsCard";
import { useRouter } from "next/navigation";

const CRM_API_URL =
  "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

// import { sendFormAdmin, sendFormUser } from "./emailJsService";
// Fallback stubs - replace these with real implementations from your email service
const sendFormAdmin = async (data: Record<string, unknown>) => {
  console.debug("sendFormAdmin called (stub)", data);
  return Promise.resolve();
};
const sendFormUser = async (data: Record<string, unknown>) => {
  console.debug("sendFormUser called (stub)", data);
  return Promise.resolve();
};
import { sendWithEmailJS } from "../emailjs";

declare global {
  interface Window {
    TrustedForm?: {
      certify?: () => void;
    };
  }
}

const validateName = (value: string) => {
  const cleaned = value.trim();

  if (!cleaned) return "Full name is required";

  //  Only alphabets + spaces allowed
  if (!/^[A-Za-z ]+$/.test(cleaned)) return "Name must contain only letters";

  //  Must contain at least 2 words
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length < 2) return "Please enter first and last name";

  return "";
};

const formatUSAMobile = (input: string): string => {
  // Remove all non-digits
  const digits = input.replace(/\D/g, "").slice(0, 10);

  if (digits.length === 0) return "";

  if (digits.length <= 3) return `(${digits}`;

  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

// SIMPLIFIED validation - exactly 9 digits (after removing prefix)
const validateUSAMobile = (input: string): boolean => {
  const digits = input.replace(/\D/g, "");
  return digits.length === 10;
};

const formatEmail = (input: string): string => {
  if (!input) return "";

  let cleaned = String(input).trim().toLowerCase();
  cleaned = cleaned.replace(/[^\w@.\-+]/g, "");

  const atIndex = cleaned.indexOf("@");
  if (atIndex !== -1) {
    const beforeAt = cleaned.substring(0, atIndex);
    const afterAt = cleaned.substring(atIndex + 1).replace(/@/g, "");
    cleaned = beforeAt + "@" + afterAt;
  }

  return cleaned;
};

const validateEmail = (input: string) => {
  if (!input) return { isValid: false, reason: "empty" };

  const email = String(input).trim().toLowerCase();

  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) {
    return { isValid: false, reason: "invalid" };
  }

  const [localPart, domainPart] = email.split("@");

  if (!localPart || localPart.length === 0) {
    return { isValid: false, reason: "invalid" };
  }

  if (localPart.includes("..")) {
    return { isValid: false, reason: "invalid" };
  }

  if (localPart.startsWith(".") || localPart.endsWith(".")) {
    return { isValid: false, reason: "invalid" };
  }

  if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) {
    return { isValid: false, reason: "invalid" };
  }

  if (!domainPart || domainPart.length === 0) {
    return { isValid: false, reason: "invalid" };
  }

  if (domainPart.includes("..")) {
    return { isValid: false, reason: "invalid" };
  }

  if (
    domainPart.startsWith(".") ||
    domainPart.endsWith(".") ||
    domainPart.startsWith("-") ||
    domainPart.endsWith("-")
  ) {
    return { isValid: false, reason: "invalid" };
  }

  if (!domainPart.includes(".")) {
    return { isValid: false, reason: "invalid" };
  }

  if (!/^[a-zA-Z0-9.-]+$/.test(domainPart)) {
    return { isValid: false, reason: "invalid" };
  }

  const domainParts = domainPart.split(".");

  for (const part of domainParts) {
    if (!part || part.length === 0) {
      return { isValid: false, reason: "invalid" };
    }

    if (part.startsWith("-") || part.endsWith("-")) {
      return { isValid: false, reason: "invalid" };
    }

    if (!/^[a-zA-Z0-9-]+$/.test(part)) {
      return { isValid: false, reason: "invalid" };
    }
  }

  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
    return { isValid: false, reason: "invalid" };
  }

  return { isValid: true, reason: null };
};

type CustomCaptchaProps = {
  onCaptchaChange?: (value: boolean) => void;
  resetTrigger?: boolean;
  disabled?: boolean;
};

const CustomCaptcha: React.FC<CustomCaptchaProps> = ({
  onCaptchaChange,
  resetTrigger,
  disabled = false,
}) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState<number[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Use refs to track current state for cleanup
  const isSpeakingRef = useRef(false);
  const speechSynthRef = useRef<SpeechSynthesis | null>(null);

  const generateCaptcha = () => {
    if (isSpeakingRef.current) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      isSpeakingRef.current = false;
    }

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const offsets: number[] = [];

    // Generate 6 random characters with random vertical offsets
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      // Generate offsets between -5 and 5
      offsets.push(parseFloat((Math.random() * 10 - 5).toFixed(2)));
    }

    setCaptchaText(result);
    setCharOffsets(offsets);
    setUserInput("");
    setIsValid(false);
    onCaptchaChange?.(false);
  };

  // Initial generation
  useEffect(() => {
    generateCaptcha();
    speechSynthRef.current = window.speechSynthesis;

    // Cleanup function
    return () => {
      if (speechSynthRef.current && isSpeakingRef.current) {
        speechSynthRef.current.cancel();
      }
    };
  }, []);

  // Reset when resetTrigger changes
  useEffect(() => {
    if (resetTrigger) {
      generateCaptcha();
    }
  }, [resetTrigger]);

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      generateCaptcha();
    }, 60000);

    return () => {
      clearInterval(timer);
      if (speechSynthRef.current && isSpeakingRef.current) {
        speechSynthRef.current.cancel();
      }
    };
  }, []); // Empty dependency array since generateCaptcha is stable

  const speakCaptcha = () => {
    if (!("speechSynthesis" in window) || !captchaText) {
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    isSpeakingRef.current = true;
    setIsSpeaking(true);

    const voices = window.speechSynthesis.getVoices();
    let selectedVoice: SpeechSynthesisVoice | null = null;

    // Try to find a male US voice
    if (voices.length > 0) {
      selectedVoice =
        voices.find(
          (voice) =>
            (voice.lang === "en-US" &&
              voice.name.toLowerCase().includes("male")) ||
            voice.name.toLowerCase().includes("david") ||
            voice.name.toLowerCase().includes("microsoft david"),
        ) ||
        voices.find((voice) => voice.lang === "en-US") ||
        voices[0];
    }

    let currentIndex = 0;
    const speakNextChar = () => {
      if (currentIndex < captchaText.length && isSpeakingRef.current) {
        const char = captchaText[currentIndex];
        const utterance = new SpeechSynthesisUtterance(char);

        // Configure speech properties
        utterance.rate = 0.5;
        utterance.pitch = 0.9;
        utterance.volume = 1.0;
        utterance.lang = "en-US";

        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

        utterance.onend = () => {
          currentIndex++;
          if (currentIndex < captchaText.length && isSpeakingRef.current) {
            // Small delay between characters for better clarity
            setTimeout(speakNextChar, 200);
          } else {
            isSpeakingRef.current = false;
            setIsSpeaking(false);
          }
        };

        utterance.onerror = () => {
          isSpeakingRef.current = false;
          setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
      } else {
        isSpeakingRef.current = false;
        setIsSpeaking(false);
      }
    };

    // Start speaking
    speakNextChar();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    // Case-insensitive comparison for better UX
    const valid = value.toLowerCase() === captchaText.toLowerCase();
    setIsValid(valid);
    onCaptchaChange?.(valid);
  };

  const handleAudioToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudioEnabled(e.target.checked);

    // Cancel speech when disabling audio
    if (!e.target.checked && isSpeakingRef.current) {
      window.speechSynthesis.cancel();
      isSpeakingRef.current = false;
      setIsSpeaking(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="bg-gray-100 p-3 rounded font-mono text-lg tracking-wider select-none relative overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, #ccc, #ccc 1px, transparent 1px, transparent 5px)`,
              backgroundSize: "100% 10px",
              backgroundPosition: "0 50%",
            }}
          />

          {/* CAPTCHA text with offsets */}
          <div className="relative z-10 flex justify-center">
            {captchaText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${charOffsets[index] || 0}px)`,
                  display: "inline-block",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
                className="mx-0.5"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex gap-2 items-center justify-start sm:justify-start">
          <button
            type="button"
            onClick={generateCaptcha}
            disabled={disabled}
            className={`px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 ${
              disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
            }`}
            title="Refresh CAPTCHA"
            aria-label="Refresh CAPTCHA"
          >
            ↻
          </button>

          {audioEnabled && (
            <button
              type="button"
              onClick={speakCaptcha}
              disabled={disabled || isSpeaking}
              className={`px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 ${
                disabled || isSpeaking
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              title={isSpeaking ? "Speaking..." : "Listen to CAPTCHA"}
              aria-label={isSpeaking ? "Speaking..." : "Listen to CAPTCHA"}
            >
              {isSpeaking ? "🔊🎵" : "🔊"}
            </button>
          )}
        </div>
      </div>

      {/* Audio toggle */}
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="enableAudio"
          checked={audioEnabled}
          onChange={handleAudioToggle}
          disabled={disabled}
          className="mr-2"
        />
        <label
          htmlFor="enableAudio"
          className={`text-sm ${disabled ? "text-gray-400" : "text-gray-700"}`}
        >
          Enable Audio
        </label>
      </div>

      {/* Input field */}
      <div className="mt-3">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder="Enter CAPTCHA"
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
            disabled
              ? "bg-gray-100 cursor-not-allowed border-gray-300"
              : userInput !== "" && !isValid
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
          }`}
          aria-describedby={
            userInput !== "" && !isValid ? "captcha-error" : undefined
          }
        />

        {/* Validation messages */}
        {userInput !== "" && !isValid && !disabled && (
          <p id="captcha-error" className="text-red-500 text-sm mt-1">
            CAPTCHA does not match. Please try again.
          </p>
        )}

        {isValid && !disabled && (
          <p className="text-green-500 text-sm mt-1">
            ✓ CAPTCHA verified successfully
          </p>
        )}

        {disabled && (
          <p className="text-gray-500 text-sm mt-1">
            CAPTCHA verification is disabled
          </p>
        )}
      </div>
    </div>
  );
};

// Function to get the initial landing URL
let initialLandingUrl: string | null = null;

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";

  // If we haven't stored the initial URL yet, store it
  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }

  return initialLandingUrl;
};

// Function to get IP address
const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};

// const ArrowUpRightIcon = React.memo(() => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="18"
//     height="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//   >
//     <line x1="7" y1="17" x2="17" y2="7"></line>
//     <polyline points="7 7 17 7 17 17"></polyline>
//   </svg>
// ));

const MagnifyingGlassIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6907 4.18009C12.9396 4.84724 13.0759 5.56704 13.0759 6.31755C13.0759 7.80807 12.5399 9.17913 11.6451 10.2589L17.4418 15.8602L16.4135 16.8539L10.6167 11.2526C9.49937 12.1172 8.08047 12.6351 6.53791 12.6351C2.92953 12.6351 0 9.80411 0 6.3176C0 2.83108 2.92977 7.0079e-05 6.53791 7.0079e-05C8.56007 7.0079e-05 10.3688 0.889283 11.5688 2.28501L10.535 3.28308C9.60391 2.13931 8.15854 1.40456 6.53784 1.40456C3.73179 1.40456 1.45342 3.60611 1.45342 6.3176C1.45342 7.01371 1.60331 7.67733 1.87493 8.27688L5.31144 5.10969C5.5976 4.84634 6.04819 4.85162 6.32707 5.12198L7.99405 6.73101L13.5064 1.40449H12.3545V0H15.2615C15.663 0 15.9882 0.314247 15.9882 0.702247V3.51124H14.5347V2.39818L12.6907 4.18009Z"
      fill="#F2C438"
    />
  </svg>
));

const DocumentIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="23"
    viewBox="0 0 20 23"
    fill="none"
  >
    <path
      d="M6.11128 20.1207C4.52273 20.1207 3.23029 18.8283 3.23029 17.2398V3.69531C2.23878 3.81395 1.51155 4.69647 1.60123 5.69378L2.86184 19.9039C2.90332 20.3968 3.13577 20.8443 3.5177 21.1626C3.85528 21.4442 4.27291 21.5947 4.70982 21.5947C4.76287 21.5947 4.81688 21.5928 4.86993 21.5879L15.5238 20.6418C15.951 20.6032 16.3378 20.4151 16.6416 20.1209H6.11025L6.11128 20.1207Z"
      fill="#F2C438"
    />
    <path
      d="M15.0938 4.31599C15.0938 4.52336 15.2625 4.69311 15.4709 4.69311H18.3153C18.2555 4.60919 18.1909 4.52625 18.1166 4.45101L15.3253 1.66657C15.2539 1.5952 15.1748 1.53443 15.0938 1.47656L15.0938 4.31599Z"
      fill="#F2C438"
    />
    <path
      d="M15.4642 5.71295C14.6888 5.71295 14.058 5.08216 14.058 4.3067V1.12201C14.0416 1.12201 14.0261 1.11719 14.0098 1.11719H6.10185C5.08044 1.11719 4.25 1.94763 4.25 2.96904V17.235C4.25 18.2564 5.08044 19.0868 6.10185 19.0868H16.8011C17.8225 19.0868 18.653 18.2564 18.653 17.235L18.6539 5.75348C18.6539 5.73998 18.6501 5.72648 18.6501 5.71297L15.4642 5.71295ZM9.01558 6.26465C9.01558 5.9811 9.2461 5.75058 9.52966 5.75058H10.5877V4.6925C10.5877 4.40895 10.8182 4.17843 11.1018 4.17843H12.0731C12.3566 4.17843 12.5871 4.40895 12.5871 4.6925V5.75058H13.6452C13.9288 5.75058 14.1593 5.98109 14.1593 6.26465V7.23591C14.1593 7.51947 13.9288 7.74998 13.6452 7.74998H12.5871V8.80806C12.5871 9.09161 12.3566 9.32213 12.0731 9.32213H11.1018C10.8182 9.32213 10.5877 9.09162 10.5877 8.80806V7.74998H9.52966C9.2461 7.74998 9.01558 7.51947 9.01558 7.23591V6.26465ZM14.2346 17.013H7.03262C6.74906 17.013 6.51855 16.7825 6.51855 16.499C6.51855 16.2154 6.74906 15.9849 7.03262 15.9849H14.2346C14.5181 15.9849 14.7487 16.2154 14.7487 16.499C14.7487 16.7825 14.5182 17.013 14.2346 17.013ZM16.2919 14.4407H7.03262C6.74906 14.4407 6.51855 14.2102 6.51855 13.9266C6.51855 13.6431 6.74906 13.4126 7.03262 13.4126H16.2919C16.5754 13.4126 16.806 13.6431 16.806 13.9266C16.806 14.2102 16.5754 14.4407 16.2919 14.4407ZM16.2919 11.8684H7.03262C6.74906 11.8684 6.51855 11.6378 6.51855 11.3543C6.51855 11.0707 6.74906 10.8402 7.03262 10.8402H16.2919C16.5754 10.8402 16.806 11.0707 16.806 11.3543C16.806 11.6378 16.5754 11.8684 16.2919 11.8684Z"
      fill="#F2C438"
    />
  </svg>
));

const MoneyBagIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
  >
    <g clipPath="url(#clip0_1041_3424)">
      <path
        d="M14.1328 5.24219C15.7002 6.72556 17.5742 9.06205 18.0547 11.5186C19.1117 16.8685 15.624 20.1012 10.1152 20.0352C0.220859 20.0682 -0.0567272 10.5033 6.21191 5.36816C8.62943 5.96417 11.2595 5.83331 13.6826 5.5C13.8808 5.46397 14.0367 5.36827 14.1328 5.24219ZM10.1152 8.11914C9.78499 8.11923 9.51465 8.38944 9.51465 8.71973V9.23047C6.80188 9.84784 7.36185 13.1112 10.1152 13.1279C11.6872 13.1805 11.6872 14.6354 10.1152 14.6895C9.47877 14.6894 8.92688 14.3235 8.92676 13.9092C8.92676 13.579 8.65628 13.3088 8.32617 13.3086C7.98985 13.3086 7.72559 13.5788 7.72559 13.9092C7.72566 14.828 8.48179 15.6089 9.51465 15.8252V16.3359C9.53005 17.1267 10.7004 17.1222 10.7158 16.3359V15.8252C11.7488 15.609 12.5116 14.8281 12.5117 13.9092C12.5117 12.8161 11.4365 11.9268 10.1152 11.9268C9.47881 11.9267 8.92601 11.5608 8.92578 11.1465C8.92578 10.7321 9.47868 10.3653 10.1152 10.3652C10.7519 10.3652 11.3105 10.7321 11.3105 11.1465C11.3258 11.9345 12.495 11.936 12.5117 11.1465C12.5117 10.2275 11.7488 9.44669 10.7158 9.23047V8.71973C10.7158 8.38938 10.4456 8.11914 10.1152 8.11914ZM10.7754 0.102539C11.2933 -0.0776368 11.8343 0.130754 12.2832 0.396484C12.9393 -0.112172 13.9589 0.391538 13.8809 1.23828C13.8746 1.29594 13.8139 2.11149 13.4844 3.12402C14.3476 3.04753 14.5789 4.15568 13.6768 4.31348C11.3272 4.70385 8.91853 4.63778 6.54785 4.31348C5.55992 4.11374 5.95034 2.93289 6.86621 3.1416C6.56605 2.3491 6.39145 1.62876 6.36133 1.23828C6.2968 0.376527 7.2937 -0.106152 7.96484 0.396484C8.41372 0.132247 8.94583 -0.0776306 9.4668 0.102539L10.0312 0.276367C10.1679 0.337785 10.634 0.128247 10.7754 0.102539Z"
        fill="#F2C438"
      />
    </g>
    <defs>
      <clipPath id="clip0_1041_3424">
        <rect width="20" height="21.3699" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#162766"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const BlueShapeSVG = React.memo(() => (
  <svg
    viewBox="0 0 876 758"
    className="w-full h-full object-cover"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <path
        id="blue-shape-path-about"
        d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V293.033C876 301.408 872.499 309.401 866.344 315.081L629.886 533.261C623.731 538.941 620.23 546.935 620.23 555.31V728C620.23 744.569 606.799 758 590.23 758H151.809C142.474 758 133.671 753.655 127.994 746.244L6.18525 587.245C2.17388 582.009 0 575.597 0 569V267.171V30Z"
        fill="#162766"
      />

      <clipPath id="blue-shape-clip-about">
        <use href="#blue-shape-path-about" />
      </clipPath>
    </defs>
    <use href="#blue-shape-path-about" fill="#162766" />
    <image
      href="/cbg1.svg"
      width="900"
      height="775"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#blue-shape-clip-about)"
      style={{
        mixBlendMode: "multiply",
        opacity: 0.9,
      }}
    />
  </svg>
));

const LightShapeSVG = React.memo(() => (
  <svg
    viewBox="0 0 665 643"
    className="w-full h-full object-cover"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <path
        id="light-shape-path-about"
        d="M30 643C13.4315 643 0 629.569 0 613V509.978C0 501.019 4.00472 492.528 10.9185 486.829L240.212 297.829C249.43 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4314 268.201 0 284.77 0H635C651.569 0 665 13.4315 665 30V593C665 620.614 642.614 643 615 643H30Z"
      />
      <clipPath id="light-shape-clip-about">
        <use href="#light-shape-path-about" />
      </clipPath>
    </defs>
    <use href="#light-shape-path-about" fill="#F0F2F4" />
    <image
      href="/cbg2.png"
      width="850"
      height="660"
      x="-80"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#light-shape-clip-about)"
    />
  </svg>
));
const checkboxClass = `
  mt-1
  w-[16px] h-[16px]
  min-w-[16px] min-h-[16px]
  max-w-[16px] max-h-[16px]
  rounded-[5px]
  border border-[#162766]
  bg-white
  appearance-none
  cursor-pointer
  relative
  flex-shrink-0

  checked:bg-[#F5C844]
  checked:border-[#F5C844]

  focus:outline-none
  focus:ring-0
  focus:ring-offset-0

  after:content-['']
  after:absolute
  after:hidden
  after:left-[4px]
  after:top-[1px]
  after:w-[5px]
  after:h-[9px]
  after:border-white
  after:border-r-[2px]
  after:border-b-[2px]
  after:rotate-45

  checked:after:block
`;

const categories = [
  "Ozempic Lawsuit",
  "Mesothelioma Lawsuit",
  "Depo-Provera Lawsuit",
  "Roundup Cancer Lawsuit",
  "Talcum Powder Lawsuit",
  "Tesla Autopilot Recall Lawsuit",
  "MacLaren Sexual Abuse Lawsuit",
  "Sexual Abuse Lawsuit",
  "Motor Vehicle Accident Lawsuit",
  "Slip and Fall Injury Lawsuit",
  "18-Wheeler Accident Lawsuit",
];
// Add this stepper component near the top of your file, after the existing components
const StepperForm: React.FC<DesktopLandingProps> = ({
  formData,
  handleChange,
  showCaptcha,
  onCaptchaChange,
  resetTrigger,
  handleSubmit,
  isFormValid,
  phoneError,
  emailError,
  nameError,
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  successDialogOpen,
  setSuccessDialogOpen,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);
  const [localErrors, setLocalErrors] = useState<{ [key: string]: string }>({});

  // Steps configuration
  const steps = [
    { number: 1, title: "Contact Info" },
    { number: 2, title: "Case Details" },
    { number: 3, title: "Consent" },
  ];

  // Validation for each step
  const validateStep = (step: number): boolean => {
    const errors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.name?.trim()) {
        errors.name = "Name is required";
      } else if (
        formData.name
          .trim()
          .split(" ")
          .filter((w) => w.length > 0).length < 2
      ) {
        errors.name = "Please enter your full name";
      }

      if (!formData.email?.trim()) {
        errors.email = "Email is required";
      } else if (!validateEmail(formData.email).isValid) {
        errors.email = "Please enter a valid email";
      }
    }

    if (step === 2 && !formData.category) {
      errors.category = "Please select a concern";
    }

    if (step === 3 && !formData.consent) {
      // Consent validation handled by the checkbox required attribute
    }

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(Math.min(currentStep + 1, 3));
      setLocalErrors({});
    }
  };

  const handleBack = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
    setLocalErrors({});
  };

  const handleStepSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep < 3) {
      handleNext();
    } else {
      // Only submit if form is valid
      if (isFormValid) {
        handleSubmit(e);
      }
    }
  };

  // Custom handler that updates form and clears errors
  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    // Clear error for this field if user starts typing
    const { name } = e.target;
    if (localErrors[name]) {
      setLocalErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form
      className="w-full bg-white rounded-xl shadow-2xl border border-[#e5e8ef] p-4 md:p-5 space-y-3"
      onSubmit={handleStepSubmit}
    >
      <input
        type="hidden"
        id="xxTrustedFormCertUrl_desktop"
        name="xxTrustedFormCertUrl"
        value={certId || ""}
      />
      <input
        type="hidden"
        id="xxTrustedFormCertToken_desktop"
        name="xxTrustedFormCertToken"
        value={tokenUrl || ""}
      />
      <input
        type="hidden"
        id="xxTrustedFormPingUrl_desktop"
        name="xxTrustedFormPingUrl"
        value={pingUrl || ""}
      />

      {/* Header with Stepper */}
      <div className="mb-2">
        <p
          className="font-semibold text-base md:text-[16px] mb-3"
          style={{
            fontFamily: '"Noto Serif"',
            fontWeight: 600,
            lineHeight: "140%",
          }}
        >
          <span style={{ color: "#162766" }}>Take the </span>
          <span style={{ color: "#F2C438" }}>First Step</span>
        </p>

        {/* Stepper Progress */}
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${currentStep >= step.number ? "bg-[#162766] text-white" : "bg-gray-200 text-gray-500"}
                  ${currentStep === step.number ? "ring-2 ring-[#F2C438] ring-offset-2" : ""}`}
                >
                  {step.number}
                </div>
                <span className="text-xs mt-1 text-gray-600 hidden md:block">
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${currentStep > step.number ? "bg-[#162766]" : "bg-gray-200"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full">
          <div className="flex items-end w-full">
            <div className="w-[60px] h-[2px] bg-[#F2C438] flex-shrink-0"></div>
            <div className="w-full h-[2px] bg-[#DDE6FF] flex-grow"></div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[180px]">
        {currentStep === 1 && (
          <div className="space-y-2 animate-fadeIn">
            <p className="text-sm text-gray-600 mb-2">
              Please provide your contact information
            </p>
            {[
              {
                name: "name",
                type: "text",
                placeholder: "Full Name",
                required: true,
                error: nameError || localErrors.name,
              },
              {
                name: "email",
                type: "email",
                placeholder: "Email Address",
                required: true,
                error: emailError || localErrors.email,
              },
              {
                name: "phone",
                type: "tel",
                placeholder: "Phone Number",
                required: true,
                error: phoneError,
              },
            ].map(({ name, type, placeholder, required, error }) => (
              <div key={name} className="mb-1">
                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={(formData[name] as string) || ""}
                  onChange={handleStepChange}
                  disabled={isSubmitting}
                  required={required}
                  className="w-full border py-2.5 bg-transparent transition-colors duration-200 
                    font-urbanist text-sm font-normal leading-normal px-3
                    text-[#808080]
                    placeholder:text-[#808080] placeholder:font-urbanist 
                    placeholder:text-sm placeholder:font-normal placeholder:leading-normal
                    border-[#D0D5DD] rounded-lg disabled:opacity-50
                    focus:outline-none focus:ring-1 focus:ring-[#F2C438] focus:border-[#F2C438]"
                />
                {error && (
                  <p className="text-red-500 text-xs mt-0.5" role="alert">
                    {error}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-2 animate-fadeIn">
            <p className="text-sm text-gray-600 mb-2">
              Tell us about your case
            </p>

            {/* Category Dropdown */}
            <div className="relative mb-1">
              <button
                type="button"
                onClick={() => setCategoryOpen((v) => !v)}
                className="w-full h-[38px] border border-[#D0D5DD] rounded-lg bg-white px-3 flex items-center justify-between text-sm font-urbanist text-[#808080] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F2C438] focus:border-[#F2C438]"
              >
                <span
                  className={
                    formData.category ? "text-[#162766]" : "text-[#808080]"
                  }
                >
                  {formData.category || "Select Your Concern"}
                </span>
                <span className="flex items-center justify-center w-5 h-5 rounded-[4px] bg-[#F5C844] shrink-0">
                  <ChevronDownIcon
                    className={`w-3 h-3 text-black transition-transform ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {localErrors.category && (
                <p className="text-red-500 text-xs mt-0.5" role="alert">
                  {localErrors.category}
                </p>
              )}

              {categoryOpen && (
                <div className="absolute z-20 mt-1 w-full rounded-lg border border-[#E8E9F0] bg-white shadow-lg overflow-hidden">
                  {categories.map((item) => {
                    const isSelected = formData.category === item;
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => {
                          handleChange({
                            target: { name: "category", value: item },
                          } as React.ChangeEvent<HTMLInputElement>);
                          setCategoryOpen(false);
                          if (localErrors.category) {
                            setLocalErrors((prev) => ({
                              ...prev,
                              category: "",
                            }));
                          }
                        }}
                        className={`group w-full h-[36px] px-3 flex items-center justify-between cursor-pointer text-xs transition-colors ${
                          isSelected
                            ? "bg-[#162766] text-white"
                            : "text-[#162766] hover:bg-[#162766] hover:text-white"
                        }`}
                      >
                        <span className="truncate">{item}</span>
                        <span
                          className={`text-[#F2C438] transition-opacity duration-150 ${
                            isSelected
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          ✓
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* How Can We Help */}
            <input
              name="caseHistory"
              value={(formData.caseHistory as string) || ""}
              onChange={handleStepChange}
              placeholder="How Can We Help? (Optional)"
              disabled={isSubmitting}
              className="w-full h-[38px] border border-[#D0D5DD] rounded-lg bg-white px-3 text-sm font-urbanist text-[#162766] placeholder:text-[#9aa1b2] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F2C438] focus:border-[#F2C438] disabled:opacity-50"
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-2 animate-fadeIn">
            <p className="text-sm text-gray-600 mb-2">Review and consent</p>

            {/* Consent Checkbox */}
            <div className="text-xs text-[#5a627e] bg-gray-50 p-3 rounded-lg">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleStepChange}
                  required
                  className="mt-0.5 w-3.5 h-3.5 text-[#162766] border-[#D0D5DD] rounded focus:ring-[#F2C438]"
                />
                <div className="leading-tight">
                  <span>
                    I agree to the{" "}
                    <span className="text-[#162766] font-bold underline cursor-pointer">
                      <a href="/privacy-policy">
                        {" "}
                        Privacy Policy &amp; Disclaimer
                      </a>
                    </span>{" "}
                    and give my express written consent
                  </span>
                  {!showFullConsent && (
                    <button
                      type="button"
                      className="text-[#162766] font-bold px-1"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowFullConsent(true);
                      }}
                    >
                      Read more
                    </button>
                  )}
                  {showFullConsent && (
                    <>
                      <span className="block mt-1">
                        {" "}
                        to affiliates and/or attorneys to contact me at the
                        number provided above, even if this number is a wireless
                        number or if I am presently listed on a Do Not Call
                        list. I understand that I may be contacted by telephone,
                        email, text message, or mail regarding case options and
                        that I may be called using automatic dialing equipment.
                        Message and data rates may apply. My consent does not
                        require purchase. This is legal advertising.{" "}
                        <button
                          type="button"
                          className="text-[#162766] font-bold px-1"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowFullConsent(false);
                          }}
                        >
                          Show less
                        </button>
                      </span>
                    </>
                  )}
                </div>
              </label>
            </div>

            {/* Captcha */}
            <div className="text-xs text-[#5a627e] bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <input
                  id="captchabox-check"
                  name="captchaCheck"
                  type="checkbox"
                  checked={showCaptcha || false}
                  onChange={handleStepChange}
                  disabled={isSubmitting}
                  className="w-3.5 h-3.5 text-[#162766] border-[#D0D5DD] rounded focus:ring-[#F2C438] disabled:opacity-50"
                />
                <label
                  htmlFor="captchabox-check"
                  className={isSubmitting ? "opacity-50" : ""}
                >
                  Please check this box so we know you&apos;re a person and not
                  a computer
                </label>
              </div>

              {showCaptcha && (
                <div className="mt-2">
                  <CustomCaptcha
                    onCaptchaChange={onCaptchaChange}
                    resetTrigger={resetTrigger}
                    disabled={isSubmitting}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2 mt-4">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handleBack}
            disabled={isSubmitting}
            className="px-4 py-2.5 text-sm font-semibold text-[#162766] border border-[#162766] rounded-full hover:bg-gray-50 transition-colors flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
        )}

        <button
          type={currentStep === 3 ? "submit" : "button"}
          onClick={currentStep === 3 ? undefined : handleNext}
          disabled={isSubmitting || (currentStep === 3 && !isFormValid)}
          className={`px-4 py-2.5 text-sm font-semibold rounded-full transition-all flex-1 ${
            currentStep === 3 && !isFormValid
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#162766] text-white hover:bg-[#0e1a44] disabled:opacity-50 disabled:cursor-not-allowed"
          }`}
        >
          {currentStep === 3 ? (
            isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Loading"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Form"
            )
          ) : (
            "Continue"
          )}
        </button>
      </div>

      {/* Step Indicator */}
      <div className="text-center text-xs text-gray-500 mt-2">
        Step {currentStep} of {steps.length}
      </div>
    </form>
  );
};
// --- Mobile Landing ---
const MobileLanding: React.FC<DesktopLandingProps> = ({
  formData,
  handleChange,
  showCaptcha,
  onCaptchaChange,
  resetTrigger,
  handleSubmit,
  isFormValid,
  phoneError,
  emailError,
  nameError,
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  successDialogOpen,
  setSuccessDialogOpen,
  setOpen,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);

  return (
    <div className="block lg:hidden w-full bg-white font-sans px-4 py-6">
      {/* ⬅️ MOBILE SAME | ⬆️ TABLET WIDER */}
      <div className="w-full max-w-[420px] md:max-w-[680px] mx-auto">
        {/* HERO CARD */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/contactheromob.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "cover",
          }}
        >
          <div className="p-5  pb-14 md:p-12 md:pb-16">
            <div className="inline-block mb-5 md:mb-6">
              <h1
                className="  font-noto-serif text-[#F2C438] font-normal capitalize
                  text-[35px] leading-[36.773px] md:mb-10 mb-5 mt-3
                  md:text-[38px] md:leading-[52px]"
              >
                <span className="block-inline md:block text-white">
                  Get Your{" "}
                </span>
                <span className="block-inline text-[#f2c94c]">
                  Free Case Review
                </span>
                <span className="block-inline text-white"> Today</span>
              </h1>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-[#f2c94c] mt-0.5 flex-shrink-0">
                    <MagnifyingGlassIcon />
                  </div>
                  <p
                    className="text-[#d0d5e2] font-urbanist font-normal leading-relaxed md:text-[18px] text-[15px]"
                    style={{
                      lineHeight: "24px",
                      letterSpacing: "0px",
                    }}
                  >
                    <span className="block-inline text-[#F2C438]"> Free, </span>{" "}
                    Confidential Case Reviews.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#f2c94c] mt-0.5 flex-shrink-0">
                    <DocumentIcon />
                  </div>
                  <p
                    className="text-[#d0d5e2] font-urbanist font-normal leading-relaxed md:text-[18px] text-[15px]"
                    style={{
                      lineHeight: "24px",
                      letterSpacing: "0px",
                    }}
                  >
                    Serving All{" "}
                    <span className="block-inline text-[#F2C438]">
                      50 States.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#f2c94c] mt-0.5 flex-shrink-0">
                    <MoneyBagIcon />
                  </div>
                  <p
                    className="text-[#d0d5e2] font-urbanist font-normal leading-relaxed md:text-[18px] text-[15px]"
                    style={{
                      lineHeight: "24px",
                      letterSpacing: "0px",
                    }}
                  >
                    <span className="block-inline text-[#F2C438]">No Fees</span>{" "}
                    Unless You Win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-6 bg-[#F3F4F6] rounded-2xl p-5 md:p-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#e5e8ef]">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="hidden"
                id="xxTrustedFormCertUrl_desktop"
                name="xxTrustedFormCertUrl"
                value={certId || ""}
              />
              <input
                type="hidden"
                id="xxTrustedFormCertToken_desktop"
                name="xxTrustedFormCertToken"
                value={tokenUrl || ""}
              />
              <input
                type="hidden"
                id="xxTrustedFormPingUrl_desktop"
                name="xxTrustedFormPingUrl"
                value={pingUrl || ""}
              />
              <div className="flex items-start justify-between">
                <p
                  className="font-semibold"
                  style={{
                    fontFamily: '"Noto Serif"',
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "160%",
                  }}
                >
                  <span style={{ color: "#162766" }}>Take the </span>
                  <span style={{ color: "#F2C438" }}>First Step</span>
                </p>
                {/* <button
                  type="button"
                  aria-label="Close form"
                  className="w-6 h-6 rounded-md bg-[#0f1c4d] text-[#F2C438] flex items-center justify-center text-xs font-bold"
                >
                  <span className="-translate-y-[1px]">×</span>
                </button> */}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginBottom: "25px",
                  width: "100%",
                }}
              >
                {/* Yellow Tip */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="3"
                  viewBox="0 0 89 3"
                  fill="none"
                  style={{ display: "block" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89 3L1 3L0 0L89 0V3Z"
                    fill="#F2C438"
                  />
                </svg>
                {/* Blue Extension (Stretches) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="6"
                  viewBox="0 0 182 6"
                  preserveAspectRatio="none"
                  fill="none"
                  style={{ display: "block", flexGrow: 1 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 5L0 6L76.2071 6L85.2071 1H90L182 1V0L90 0L84.7929 0L75.7929 5L0 5Z"
                    fill="#DDE6FF"
                  />
                </svg>
              </div>

              {[
                {
                  name: "name",
                  type: "text",
                  placeholder: "Full Name",
                  required: true,
                },
                {
                  name: "phone",
                  type: "tel",
                  placeholder: "Phone Number",
                  required: true,
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email Address",
                  required: true,
                },
              ].map(({ name, type, placeholder, required }) => (
                <div key={name}>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={(formData[name] as string) || ""}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required={required}
                    aria-invalid={
                      (name === "name" && nameError) ||
                      (name === "phone" && phoneError) ||
                      (name === "email" && emailError)
                        ? "true"
                        : "false"
                    }
                    aria-describedby={
                      name === "name" && nameError
                        ? `${name}-error-mobile`
                        : name === "phone" && phoneError
                          ? `${name}-error-mobile`
                          : name === "email" && emailError
                            ? `${name}-error-mobile`
                            : undefined
                    }
                    className="w-full border-2 py-3 bg-transparent transition-colors duration-300
           font-urbanist text-[16px] font-semibold text-[#808080] leading-normal p-3
           placeholder:text-[#808080] placeholder:font-urbanist placeholder:text-[16px]
           placeholder:font-semibold placeholder:leading-normal
           border-[#D0D5DD] rounded-xl   disabled:opacity-50"
                  />
                  {name === "name" && nameError && (
                    <p
                      id={`${name}-error-mobile`}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {nameError}
                    </p>
                  )}
                  {name === "phone" && phoneError && (
                    <p
                      id={`${name}-error-mobile`}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {phoneError}
                    </p>
                  )}
                  {name === "email" && emailError && (
                    <p
                      id={`${name}-error-mobile`}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {emailError}
                    </p>
                  )}
                </div>
              ))}

              <div className="relative">
                {/* BUTTON */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCategoryOpen((v) => !v);
                  }}
                  className="
      w-full h-[44px]
      border border-[#e5e8ef]
      rounded-md
      bg-white
      px-3
      flex items-center justify-between
      text-[15px]
      font-urbanist
      transition-colors
      focus:outline-none
    "
                >
                  <span
                    className={
                      formData.category ? "text-[#162766]" : "text-[#9aa1b2]"
                    }
                  >
                    {formData.category || "Select Your Concern"}
                  </span>

                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#f2c94c] shrink-0">
                    <ChevronDownIcon
                      className={`w-4 h-4 text-black transition-transform ${
                        categoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* DROPDOWN */}
                {categoryOpen && (
                  <div className="absolute z-30 mt-1 w-full rounded-md border border-[#e5e8ef] bg-white shadow-lg overflow-hidden">
                    {[
                      "Personal Injury",
                      "Class Action",
                      "Medical Malpractice",
                      "Other",
                    ].map((item) => {
                      const isSelected = formData.category === item;

                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => {
                            handleChange({
                              target: { name: "category", value: item },
                            } as React.ChangeEvent<HTMLInputElement>);
                            setCategoryOpen(false);
                          }}
                          className={`w-full h-[44px] px-3 flex items-center justify-between text-[14px] transition-colors ${
                            isSelected
                              ? "bg-[#162766] text-white"
                              : "text-[#162766] hover:bg-[#162766] hover:text-white"
                          }`}
                        >
                          <span className="truncate">{item}</span>
                          <span
                            className={
                              isSelected ? "text-[#F2C438]" : "opacity-0"
                            }
                          >
                            ✓
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <input
                name="caseHistory"
                value={formData.caseHistory}
                onChange={handleChange}
                placeholder="How Can We Help?"
                className="
    w-full
    flex-1
    self-stretch
    rounded-md
    border border-[#e5e8ef]
    bg-white
    px-[10px]
    py-[10px]
    text-[15px]
    font-urbanist
    font-normal
    text-[#162766]
    leading-[18px]
    focus:outline-none
    focus:ring-2
     

    placeholder:text-[#808080]
    placeholder:font-urbanist
    placeholder:font-normal
    placeholder:text-[15px]
    placeholder:leading-[18px]
    placeholder:capitalize
  "
              />

              <div className="space-y-2 text-[10px] text-[#5a627e]">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className={checkboxClass}
                  />

                  <div className="text-[#5a627e] text-[10px] leading-relaxed">
                    {/* Always visible short text */}
                    <span>
                      I agree to the{" "}
                      <span className="text-[#162766] font-bold underline cursor-pointer">
                        <a href="/privacy-policy"> Privacy Policy &amp; Disclaimer</a>
                       
                      </span>{" "}
                      and give my express written consent
                    </span>

                    {/* Read more */}
                    {!showFullConsent && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowFullConsent(true);
                        }}
                        className="ml-1 text-[#162766] font-bold underline"
                      >
                        Read more
                      </button>
                    )}

                    {/* Expanded text */}
                    {showFullConsent && (
                      <>
                        <span>
                          {" "}
                          to affiliates and/or attorneys to contact me at the
                          number provided above, even if this number is a
                          wireless number or if I am presently listed on a Do
                          Not Call list. I understand that I may be contacted by
                          telephone, email, text message, or mail regarding case
                          options and that I may be called using automatic
                          dialing equipment. Message and data rates may apply.
                          My consent does not require purchase. This is legal
                          advertising.
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowFullConsent(false);
                          }}
                          className="ml-1 text-[#162766] font-bold underline"
                        >
                          Show less
                        </button>
                      </>
                    )}
                  </div>
                </label>

                <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0">
                  <input
                    id="captcha-mobile"
                    name="captchaCheck"
                    type="checkbox"
                    checked={showCaptcha || false}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`${checkboxClass} disabled:opacity-50`}
                  />

                  <label
                    htmlFor="captcha-mobile"
                    className={isSubmitting ? "opacity-50" : ""}
                  >
                    Please check this box so we know you&apos;re a person and
                    not a computer
                  </label>
                </div>

                {showCaptcha && (
                  <CustomCaptcha
                    onCaptchaChange={onCaptchaChange}
                    resetTrigger={resetTrigger}
                    disabled={isSubmitting}
                  />
                )}

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-[#162766] text-[#FFFFFF] font-semibold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#023437]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Loading"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Get Started"
                  )}
                </button>
              </div>
              {successDialogOpen && (
                <div
                  className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50 rounded-lg"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Success message"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (setSuccessDialogOpen) setSuccessDialogOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (setSuccessDialogOpen) setSuccessDialogOpen(false);
                      }
                    }}
                    className="w-full max-h-[70vh] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-lg"
                    aria-label="Close success dialog"
                  >
                    <Image
                      src="/thankyoucard.png"
                      alt="Success"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

type DesktopLandingProps = {
  formData: {
    name?: string;
    email?: string;
    phone?: string;
    category?: string;
    caseHistory?: string;
    consent?: boolean;
    state?: string;
    [key: string]: unknown;
  };

  setSuccessDialogOpen?: React.Dispatch<React.SetStateAction<boolean>>;

  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;

  showCaptcha: boolean;
  onCaptchaChange: (value: boolean) => void;
  resetTrigger?: boolean;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;

  phoneError?: string;
  emailError?: string;
  nameError?: string;

  certId: string;
  tokenUrl: string;
  pingUrl: string;

  isSubmitting: boolean;
  submitMessage?: { type: "success" | "error"; text: string } | null;

  successDialogOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// --- Desktop Landing ---
const DesktopLanding: React.FC<DesktopLandingProps> = ({
  formData,
  handleChange,
  showCaptcha,
  onCaptchaChange,
  resetTrigger,
  handleSubmit,
  isFormValid,
  phoneError,
  emailError,
  nameError,
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  successDialogOpen,
  setSuccessDialogOpen,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);

  //  TrustedForm – run EVERY time popup opens
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.TrustedForm && window.TrustedForm.certify) {
        window.TrustedForm.certify();
        // console.log("TrustedForm certified on popup open");
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (successDialogOpen) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 2000); // reload after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [successDialogOpen]);

  return (
    <div className="hidden lg:flex w-full justify-center bg-white font-sans lg:py-1  lg:px-5 xl:px-10">
      <div
        className="
          relative
          w-full
          max-w-[1600px]
          min-h-[700px]
          2xl:min-h-[820px]
          overflow-hidden

          bg-[url('/contactusfinalshvglgbigger.svg')]

          xl:bg-[url('/contactusfinalsvg.svg')]

          bg-no-repeat
          bg-center
          bg-contain
        "
      >
        {/* ================= CONTENT GRID ================= */}
        <div className="relative z-10 w-full h-full grid grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative">
            {/* ======= Get Your Free Case Review Today BLOCK (POSITIONABLE) ======= */}
            <div
              className="
                absolute
                lg:left-[20%] lg:top-[10%]
                xl:left-[10%] xl:top-[12%]
                2xl:left-[10%] 2xl:top-[12%]
                max-w-[620px]
              "
            >
              <h1
                className="
                  font-noto-serif
                  font-normal
                  capitalize
                  text-[#fff]
                  text-[60px]
                  leading-[60px]
                
                  mb-8
                "
              >
                Get Your Free{" "}
                <span className="text-[#F2C438]">Case Review</span> Today
              </h1>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MagnifyingGlassIcon />
                  <p className="text-blue-100 text-[18px] leading-[24px]">
                    <span className="text-[#F2C438]">Free,</span> Confidential
                    Case Reviews.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <DocumentIcon />
                  <p className="text-blue-100 text-[18px] leading-[24px]">
                    Serving All{" "}
                    <span className="text-[#F2C438]">50 States.</span>
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <MoneyBagIcon />
                  <p className="text-blue-100 text-[18px] leading-[24px]">
                    <span className="text-[#F2C438]">No Fees</span> Unless You
                    Win.
                  </p>
                </div>
              </div>
            </div>

            {/* ======= STATS CARD (INDEPENDENT) ======= */}
            <div
              className="
    absolute

    lg:left-[20%] lg:bottom-[10%] lg:scale-[0.85]
    xl:left-[40%] xl:bottom-[10%] xl:scale-[0.95]
    2xl:left-[38%] 2xl:bottom-[12%] 2xl:scale-[1]
  "
            >
              <PartnerStatsCard />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
    relative
    h-full

    pl-[42%] pt-[10%]

    sm:pl-[42%] sm:pt-[10%]
    md:pl-[42%] md:pt-[10%]

    lg:pl-[30%] lg:pr-[20%] lg:pt-[10%]

    xl:pl-[40%] xl:pr-[2%] xl:pt-[12%]

    2xl:pl-[40%] 2xl:pr-[2%] 2xl:pt-[12%]
  "
          >
            <form
              className="
    w-full
    max-w-[460px]
    xl:max-w-[500px]
    2xl:max-w-[540px]

    h-[520px]
    2xl:h-[600px]

    bg-white
    rounded-2xl
    shadow-[0_20px_50px_rgba(0,0,0,0.15)]
    border border-[#e5e8ef]

    p-5
    xl:p-6

    space-y-3

    overflow-y-auto
    modern-scroll
  "
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                id="xxTrustedFormCertUrl_desktop"
                name="xxTrustedFormCertUrl"
                value={certId || ""}
              />
              <input
                type="hidden"
                id="xxTrustedFormCertToken_desktop"
                name="xxTrustedFormCertToken"
                value={tokenUrl || ""}
              />
              <input
                type="hidden"
                id="xxTrustedFormPingUrl_desktop"
                name="xxTrustedFormPingUrl"
                value={pingUrl || ""}
              />

              {/* Header */}
              <div className="mb-2">
                <p
                  className="font-semibold text-base md:text-[16px]"
                  style={{
                    fontFamily: '"Noto Serif"',
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                >
                  <span style={{ color: "#162766" }}>Take the </span>
                  <span style={{ color: "#F2C438" }}>First Step</span>
                </p>

                {/* Divider Line - Simplified */}
                <div className="w-full mt-2">
                  <div className="flex items-end w-full">
                    <div className="w-[60px] h-[2px] bg-[#F2C438] flex-shrink-0"></div>
                    <div className="w-full h-[2px] bg-[#DDE6FF] flex-grow"></div>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-2">
                {[
                  {
                    name: "name",
                    type: "text",
                    placeholder: "Full Name",
                    required: true,
                  },
                  {
                    name: "phone",
                    type: "tel",
                    placeholder: "Phone Number",
                    required: true,
                  },
                  {
                    name: "email",
                    type: "email",
                    placeholder: "Email Address",
                    required: true,
                  },
                ].map(({ name, type, placeholder, required }) => (
                  <div key={name} className="mb-1">
                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      value={(formData[name] as string) || ""}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required={required}
                      aria-invalid={
                        (name === "name" && nameError) ||
                        (name === "phone" && phoneError) ||
                        (name === "email" && emailError)
                          ? "true"
                          : "false"
                      }
                      aria-describedby={
                        name === "name" && nameError
                          ? `${name}-error`
                          : name === "phone" && phoneError
                            ? `${name}-error`
                            : name === "email" && emailError
                              ? `${name}-error`
                              : undefined
                      }
                      className="w-full border py-2.5 bg-transparent transition-colors duration-200 
            font-urbanist text-sm font-normal leading-normal px-3
            text-[#808080]
            placeholder:text-[#808080] placeholder:font-urbanist 
            placeholder:text-sm placeholder:font-normal placeholder:leading-normal
            border-[#D0D5DD] rounded-lg disabled:opacity-50
            focus:outline-none focus:ring-1 focus:ring-[#F2C438] focus:border-[#F2C438]"
                    />
                    {name === "name" && nameError && (
                      <p
                        id={`${name}-error`}
                        className="text-red-500 text-xs mt-0.5"
                        role="alert"
                      >
                        {nameError}
                      </p>
                    )}
                    {name === "phone" && phoneError && (
                      <p
                        id={`${name}-error`}
                        className="text-red-500 text-xs mt-0.5"
                        role="alert"
                      >
                        {phoneError}
                      </p>
                    )}
                    {name === "email" && emailError && (
                      <p
                        id={`${name}-error`}
                        className="text-red-500 text-xs mt-0.5"
                        role="alert"
                      >
                        {emailError}
                      </p>
                    )}
                  </div>
                ))}

                {/* Category Dropdown */}
                <div className="relative mb-1">
                  <button
                    type="button"
                    onClick={() => setCategoryOpen((v) => !v)}
                    className="w-full h-[38px] border border-[#D0D5DD] rounded-lg bg-white px-3 flex items-center justify-between text-sm font-urbanist text-[#808080] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F2C438] focus:border-[#F2C438]"
                  >
                    <span
                      className={
                        formData.category ? "text-[#162766]" : "text-[#808080]"
                      }
                    >
                      {formData.category || "Select Your Concern"}
                    </span>
                    <span className="flex items-center justify-center w-5 h-5 rounded-[4px] bg-[#F5C844] shrink-0">
                      <ChevronDownIcon
                        className={`w-3 h-3 text-black transition-transform ${
                          categoryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {categoryOpen && (
                    <div className="absolute z-20 mt-1 w-full rounded-lg border border-[#E8E9F0] bg-white shadow-lg overflow-hidden">
                      {categories.map((item) => {
                        const isSelected = formData.category === item;
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => {
                              handleChange({
                                target: { name: "category", value: item },
                              } as React.ChangeEvent<HTMLInputElement>);
                              setCategoryOpen(false);
                            }}
                            className={`group w-full h-[36px] px-3 flex items-center justify-between cursor-pointer text-xs transition-colors ${
                              isSelected
                                ? "bg-[#162766] text-white"
                                : "text-[#162766] hover:bg-[#162766] hover:text-white"
                            }`}
                          >
                            <span className="truncate">{item}</span>
                            <span
                              className={`text-[#F2C438] transition-opacity duration-150 ${
                                isSelected
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-100"
                              }`}
                            >
                              ✓
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* How Can We Help */}
                <input
                  name="caseHistory"
                  value={(formData.caseHistory as string) || ""}
                  onChange={handleChange}
                  placeholder="How Can We Help?"
                  disabled={isSubmitting}
                  className="w-full h-[38px] border border-[#D0D5DD] rounded-lg bg-white px-3 text-sm font-urbanist text-[#162766] placeholder:text-[#9aa1b2] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F2C438] focus:border-[#F2C438] disabled:opacity-50"
                />
              </div>

              {/* Checkboxes - Two Columns Layout */}
              <div className="mt-3 space-y-2">
                {/* First Checkbox - Full Width */}

                {/* Second Checkbox - Privacy Policy */}
                <div className="text-xs text-[#5a627e]">
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-3.5 h-3.5 text-[#162766] border-[#D0D5DD] rounded focus:ring-[#F2C438]"
                    />
                    <div className="leading-tight">
                      <span>
                        I agree to the{" "}
                        <span className="text-[#162766] font-bold underline cursor-pointer">
                          <a href="/privacy-policy"> Privacy Policy &amp; Disclaimer</a>
                          
                        </span>{" "}
                        and give my express written consent
                      </span>
                      {!showFullConsent && (
                        <button
                          type="button"
                          className="text-[#162766] font-bold px-1"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowFullConsent(true);
                          }}
                        >
                          Read more
                        </button>
                      )}
                      {showFullConsent && (
                        <>
                          <span>
                            {" "}
                            to affiliates and/or attorneys to contact me at the
                            number provided above, even if this number is a
                            wireless number or if I am presently listed on a Do
                            Not Call list. I understand that I may be contacted
                            by telephone, email, text message, or mail regarding
                            case options and that I may be called using
                            automatic dialing equipment. Message and data rates
                            may apply. My consent does not require purchase.
                            This is legal advertising.
                          </span>

                          <button
                            type="button"
                            className="text-[#162766] font-bold px-1 inline"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowFullConsent(false);
                            }}
                          >
                            Show less
                          </button>
                        </>
                      )}
                    </div>
                  </label>
                </div>

                {/* Captcha Checkbox - Inline with text */}
                <div className="flex items-center gap-2 text-xs text-[#5a627e]">
                  <input
                    id="captchabox-check"
                    name="captchaCheck"
                    type="checkbox"
                    checked={showCaptcha || false}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-3.5 h-3.5 text-[#162766] border-[#D0D5DD] rounded focus:ring-[#F2C438] disabled:opacity-50"
                  />
                  <label
                    htmlFor="captchabox-check"
                    className={isSubmitting ? "opacity-50" : ""}
                  >
                    Please check this box so we know you&apos;re a person and
                    not a computer
                  </label>
                </div>

                {/* Captcha Component */}
                {showCaptcha && (
                  <div className="mt-2">
                    <CustomCaptcha
                      onCaptchaChange={onCaptchaChange}
                      resetTrigger={resetTrigger}
                      disabled={isSubmitting}
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-[#162766] text-white font-semibold py-2.5 rounded-full transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed mt-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-label="Loading"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Get Started"
                  )}
                </button>
              </div>

              {/* Success Dialog */}
              {successDialogOpen && (
                <div
                  className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[9999] p-4"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Success message"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (setSuccessDialogOpen) setSuccessDialogOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (setSuccessDialogOpen) setSuccessDialogOpen(false);
                      }
                    }}
                    className="absolute inset-0 w-full h-full"
                    aria-label="Close success dialog"
                  ></button>
                  <div className="relative max-w-sm w-full">
                    <Image
                      src="/thankyoucard.png"
                      alt="Success"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPageContactus: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  type FormDataType = {
    name: string;
    phone: string;
    email: string;
    category: string;
    state: string;
    caseHistory: string;
    consent: boolean;
    needHelp?: boolean;
  };

  const initialData = useMemo<FormDataType>(
    () => ({
      name: "",
      phone: "",
      email: "",
      category: "",
      state: "",
      caseHistory: "",
      consent: false,
      needHelp: true,
    }),
    [],
  );

  const [formData, setFormData] = useState<FormDataType>(initialData);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [captchaValid, setCaptchaValid] = useState<boolean>(false);
  const [resetTrigger, setResetTrigger] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [pingUrl, setPingUrl] = useState<string>("");
  const [certId, setCertId] = useState<string>("");
  const [tokenUrl, setTokenUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState<boolean>(false);

  const [leadId, setLeadId] = useState<number | null>(null);
  const [earlySent, setEarlySent] = useState(false);

  type SubmitMessageType = { type: "success" | "error"; text: string } | null;
  const [submitMessage, setSubmitMessage] = useState<SubmitMessageType>(null);

  const emailSent = useRef(false);

  const createEarlyLead = async (fullName: string, phoneDigits: string) => {
    const cleaned = phoneDigits.replace(/\D/g, "");

    const earlyBody = {
      countryName: "USA",
      brandType:'Internal',
      brandName: "C2A",
      websiteName: "Connect 2 Attorney",
      formname: "Contact Page form",
      vertical:'General',
      formPath:'https://connect2attorney.com/contact-us',
      data: {
        name: fullName,
        phone: `+1${cleaned}`,
        submissionDate: new Date().toISOString(),
        trustedFormCertUrl: certId || "",
        trustedFormToken: tokenUrl || "",
        trustedFormPingUrl: pingUrl || "",
        sourceUrl: window.location.href,
      },
    };

    const res = await fetch(CRM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(earlyBody),
    });

    if (!res.ok) throw new Error(await res.text());

    const json = await res.json();

    // console.log("Early Lead Created:", json);

    return json.id;
  };

  const earlyLeadLock = useRef(false);

  const handlePhoneChange = useCallback(
    async (value: string) => {
      const formatted = formatUSAMobile(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));

      const phoneDigits = formatted.replace(/\D/g, "");

      if (phoneDigits.length !== 10) return;

      if (earlySent) return;

      if (earlyLeadLock.current) return;

      const fullName = formData.name.trim();
      if (fullName.split(" ").length < 2) return;

      earlyLeadLock.current = true;

      try {
        const newId = await createEarlyLead(fullName, phoneDigits);

        setLeadId(newId);
        setEarlySent(true);
      } catch (err) {
        console.error("Early Lead Failed:", err);

        earlyLeadLock.current = false;
      }
    },
    [formData.name, earlySent],
  );

  const handleEmailChange = useCallback(
    async (value: string) => {
      const formatted = formatEmail(value);
      setFormData((prev) => ({ ...prev, email: formatted }));

      if (!validateEmail(formatted).isValid) return;

      //  Only if lead exists
      if (!leadId) return;

      // Prevent duplicate email update
      if (emailSent.current) return;
      emailSent.current = true;

      try {
        const rawPhone = formData.phone.replace(/\D/g, "");
        const updateBody = {
          countryName: "USA",
          brandType:'Internal',
          brandName: "C2A",
          websiteName: "Connect 2 Attorney",
          formname: "Contact Page form",
          vertical:'General',
          formPath:'https://connect2attorney.com/contact-us',
          data: {
            name: formData.name,
            phone: `+1${rawPhone}`,
            email: formatted,
            ipAddress: await getIPAddress(),
            submissionDate: new Date().toISOString(),
            trustedFormCertUrl: certId || "",
            trustedFormToken: tokenUrl || "",
            trustedFormPingUrl: pingUrl || "",
            sourceUrl: window.location.href,
          },
        };

        const res = await fetch(`${CRM_API_URL}/${leadId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateBody),
        });

        if (!res.ok) {
          console.error(" Email Update Failed:", await res.text());
          return;
        }

        // console.log(" Email Updated Successfully for Lead:", leadId);
      } catch (err) {
        console.error(" Email Update Error:", err);
      }
    },
    [leadId],
  );

  const handleNameChange = useCallback((value: string) => {
    //  Remove non letters instantly
    const cleaned = value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ");

    const error = validateName(cleaned);

    setNameError(error);

    setFormData((prev) =>
      prev.name === cleaned ? prev : { ...prev, name: cleaned },
    );
  }, []);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      try {
        const target = e.target as
          | HTMLInputElement
          | HTMLSelectElement
          | HTMLTextAreaElement;
        const { name, value, type } = target;
        const checked = (target as HTMLInputElement).checked;

        if (submitMessage) setSubmitMessage(null);

        if (name === "captchaCheck") {
          setShowCaptcha(checked);
          setCaptchaValid(false);
          if (checked) {
            setResetTrigger((t) => !t); // only generate once when enabling
          }

          return;
        }

        if (name === "phone") {
          handlePhoneChange(value);
          return;
        }

        if (name === "email") {
          handleEmailChange(value);
          return;
        }

        if (name === "name") {
          handleNameChange(value);
          return;
        }

        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      } catch (error) {
        console.error("Error handling form change:", error);
      }
    },
    [handleNameChange, handlePhoneChange, handleEmailChange, submitMessage],
  );

  const onCaptchaChange = useCallback((valid: boolean) => {
    setCaptchaValid(valid);
  }, []);

  const isPhoneValid = useMemo(() => {
    if (!formData.phone) return false;
    return validateUSAMobile(formData.phone);
  }, [formData.phone]);

  const isEmailValid = useMemo(() => {
    if (!formData.email) return false;
    const validation = validateEmail(formData.email);
    return validation.isValid;
  }, [formData.email]);

  const isFullNameValid = useMemo(() => {
    if (!formData.name || formData.name.trim() === "") return false;
    const trimmed = formData.name.trim();
    const words = trimmed.split(" ").filter((word) => word.length > 0);
    return words.length >= 2 && trimmed.length >= 3;
  }, [formData.name]);

  const isFormFilled = useMemo(() => {
    return (
      isFullNameValid &&
      isPhoneValid &&
      isEmailValid &&
      formData.category &&
      formData.consent
    );
  }, [
    isFullNameValid,
    isPhoneValid,
    isEmailValid,
    formData.category,
    formData.consent,
  ]);

  const isFormValid = useMemo(() => {
    return isFormFilled && captchaValid;
  }, [isFormFilled, captchaValid]);

  useEffect(() => {
    let observerInstance: MutationObserver | null = null;
    let timeoutId: number | null = null;

    const initializeTrustedFormObserver = () => {
      try {
        observerInstance = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "value"
            ) {
              const targetNode = mutation.target as HTMLElement | null;

              try {
                const el = targetNode as
                  | HTMLInputElement
                  | HTMLSelectElement
                  | HTMLTextAreaElement
                  | null;
                if (
                  el &&
                  el.name === "xxTrustedFormCertUrl" &&
                  (el as HTMLInputElement).value
                ) {
                  setCertId((el as HTMLInputElement).value);
                }

                if (
                  el &&
                  el.name === "xxTrustedFormPingUrl" &&
                  (el as HTMLInputElement).value
                ) {
                  setPingUrl((el as HTMLInputElement).value);
                }

                if (
                  el &&
                  el.name === "xxTrustedFormCertToken" &&
                  (el as HTMLInputElement).value
                ) {
                  setTokenUrl((el as HTMLInputElement).value);
                }
              } catch (error) {
                console.warn("TrustedForm observer error:", error);
              }
            }
          });
        });

        const startObserving = () => {
          try {
            const trustedFormFields = document.querySelectorAll(
              '[name="xxTrustedFormCertUrl"], [name="xxTrustedFormPingUrl"], [name="xxTrustedFormCertToken"]',
            );

            trustedFormFields.forEach((field) => {
              const el = field as
                | HTMLInputElement
                | HTMLSelectElement
                | HTMLTextAreaElement;
              if (el && observerInstance) {
                observerInstance.observe(el, {
                  attributes: true,
                  attributeFilter: ["value"],
                });

                if ((el as HTMLInputElement).value) {
                  switch (el.name) {
                    case "xxTrustedFormCertUrl":
                      setCertId((el as HTMLInputElement).value);
                      break;
                    case "xxTrustedFormPingUrl":
                      setPingUrl((el as HTMLInputElement).value);
                      break;
                    case "xxTrustedFormCertToken":
                      setTokenUrl((el as HTMLInputElement).value);
                      break;
                    default:
                      break;
                  }
                }
              }
            });
          } catch (error) {
            console.warn("Error starting TrustedForm observation:", error);
          }
        };

        timeoutId = window.setTimeout(startObserving, 1000);
      } catch (error) {
        console.error("Error initializing TrustedForm observer:", error);
      }
    };

    initializeTrustedFormObserver();

    return () => {
      try {
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        if (observerInstance) {
          observerInstance.disconnect();
        }
      } catch (error) {
        console.error("Error cleaning up TrustedForm observer:", error);
      }
    };
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      //       if (!leadId) {
      //   alert("Lead not created yet. Please enter phone first.");
      //   return;
      // }

      if (!isFormValid || isSubmitting) return;

      setIsSubmitting(true);
      setSubmitMessage(null);

      try {
        const rawPhone = formData.phone?.replace(/\D/g, "") || "";

        const apiBody = {
          countryName: "USA",
          brandType:'Internal',
          brandName: "C2A",
          websiteName: "Connect 2 Attorney",
          formname: "Contact Page Form",
          finalSubmit: "true",
          formPath:'https://connect2attorney.com/contact-us',
          data: {
            name: formData.name,
            email: formData.email,
            phone: `+1${rawPhone}`,
            caseType: formData.category,
            description: formData.caseHistory,
            ipAddress: await getIPAddress(),
            trustedFormCertUrl: certId || "",
            trustedFormToken: tokenUrl || "",
            trustedFormPingUrl: pingUrl || "",
            sourceUrl: window.location.href,
            submissionDate: new Date().toISOString(),
          },
        };

        //  EMAILJS — MUST SUCCEED
        await sendWithEmailJS(apiBody);

        // CRM — MUST SUCCEED
        await fetch(`${CRM_API_URL}/${leadId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiBody),
        });

        //  SUCCESS
        setFormData(initialData);
        setSuccessDialogOpen(true);
        setShowCaptcha(false);
        setCaptchaValid(false);
        setResetTrigger((t) => !t);
        setPhoneError("");
        setEmailError("");
        setNameError("");
        setSubmitMessage({
          type: "success",
          text: "Form submitted successfully! You should receive a confirmation email shortly.",
        });
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitMessage({
          type: "error",
          text: "There was an error submitting your form. Please try again or contact us directly.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      isFormValid,
      isSubmitting,
      formData,
      certId,
      tokenUrl,
      pingUrl,
      initialData,
      leadId,
    ],
  );
  const router = useRouter();

  useEffect(() => {
    if (!successDialogOpen) return;

    const timer = setTimeout(() => {
      router.refresh(); // re-fetch server data
      // or router.push("/")
    }, 2000);

    return () => clearTimeout(timer);
  }, [successDialogOpen, router]);
  return (
    <>
      <MobileLanding
        formData={formData}
        handleChange={handleChange}
        showCaptcha={showCaptcha}
        onCaptchaChange={onCaptchaChange}
        resetTrigger={resetTrigger}
        handleSubmit={handleSubmit}
        isFormValid={Boolean(isFormValid)}
        phoneError={phoneError}
        emailError={emailError}
        nameError={nameError}
        certId={certId}
        tokenUrl={tokenUrl}
        pingUrl={pingUrl}
        isSubmitting={isSubmitting}
        successDialogOpen={successDialogOpen}
        setOpen={setOpen}
      />
      <DesktopLanding
        formData={formData}
        handleChange={handleChange}
        showCaptcha={showCaptcha}
        onCaptchaChange={onCaptchaChange}
        resetTrigger={resetTrigger}
        handleSubmit={handleSubmit}
        isFormValid={Boolean(isFormValid)}
        phoneError={phoneError}
        emailError={emailError}
        nameError={nameError}
        certId={certId}
        tokenUrl={tokenUrl}
        pingUrl={pingUrl}
        isSubmitting={isSubmitting}
        successDialogOpen={successDialogOpen}
        setOpen={setOpen}
      />
    </>
  );
};

export default LandingPageContactus;

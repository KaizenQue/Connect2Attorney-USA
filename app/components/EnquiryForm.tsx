/* eslint-disable react/display-name */
'use client'
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

declare global {
  interface Window {
    TrustedForm?: {
      certify?: () => void;
    };
  }
}

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
  const [captchaText, setCaptchaText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [charOffsets, setCharOffsets] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const generateCaptcha = useCallback(() => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const offsets: string[] = [];
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      offsets.push((Math.random() * 10 - 5).toFixed(2));
    }

    setCaptchaText(result);
    setCharOffsets(offsets);
    setIsValid(false);
    if (onCaptchaChange) onCaptchaChange(false);
  }, [isSpeaking, onCaptchaChange]);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  useEffect(() => {
    if (resetTrigger) {
      generateCaptcha();
    }
  }, [resetTrigger, generateCaptcha]);

  useEffect(() => {
    const timer = setInterval(() => {
      generateCaptcha();
    }, 60000);

    return () => {
      clearInterval(timer);
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking, generateCaptcha]);

  const speakCaptcha = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);

      const voices = window.speechSynthesis.getVoices();
      const maleUsVoice =
        voices.find(
          (voice) =>
            voice.lang === "en-US" && voice.name.toLowerCase().includes("david")
        ) || voices.find((voice) => voice.lang === "en-US");

      let currentIndex = 0;
      const speakNextChar = () => {
        if (currentIndex < captchaText.length) {
          const char = captchaText[currentIndex];
          const utterance = new SpeechSynthesisUtterance(char);
          utterance.rate = 0.5;
          utterance.pitch = 0.9;
          utterance.volume = 1.0;
          utterance.lang = "en-US";

          if (maleUsVoice) {
            utterance.voice = maleUsVoice;
          }

          utterance.onend = () => {
            currentIndex++;
            speakNextChar();
          };

          window.speechSynthesis.speak(utterance);
        } else {
          setIsSpeaking(false);
        }
      };

      speakNextChar();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === captchaText;
    setIsValid(valid);
    if (onCaptchaChange) onCaptchaChange(valid);
  };

  const handleAudioToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudioEnabled(e.target.checked);
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="bg-gray-100 p-3 rounded font-mono text-lg tracking-wider select-none relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, #ccc, #ccc 1px, transparent 1px, transparent 5px)`,
              backgroundSize: "100% 10px",
              backgroundPosition: "0 50%",
            }}
          />
          <div className="relative z-10">
            {captchaText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${parseFloat(
                    charOffsets[index] || "0"
                  )}px)`,
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
        <div className="flex gap-2 items-center justify-start sm:justify-start">
          <button
            type="button"
            onClick={generateCaptcha}
            disabled={disabled}
            className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 disabled:opacity-50"
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
              className={`px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 disabled:opacity-50 ${
                isSpeaking ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title="Listen to CAPTCHA"
              aria-label="Listen to CAPTCHA"
            >
              {isSpeaking ? "🔊🎵" : "🔊"}
            </button>
          )}
          <input
            type="checkbox"
            id="enableAudio"
            checked={audioEnabled}
            onChange={handleAudioToggle}
            disabled={disabled}
            className="mr-2"
          />
          
        </div>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="enableAudio"
          checked={audioEnabled}
          onChange={handleAudioToggle}
          className="mr-2"
        />
        <label htmlFor="enableAudio" className="text-sm text-gray-700">
          Enable Audio
        </label>
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter CAPTCHA"
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            userInput !== "" && !isValid
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
        />
        {userInput !== "" && !isValid && (
          <p className="text-red-500 text-sm mt-1">CAPTCHA does not match</p>
        )}
        {isValid && (
          <p className="text-green-500 text-sm mt-1">
            ✓ CAPTCHA verified successfully
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



const formatUSAMobile = (input: string): string => {
  if (!input) return "";

  let raw = String(input).trim();

  if (raw === "+") return "+";

  const plus = raw.startsWith("+") ? "+" : "";
  raw = plus + raw.replace(/\+/g, "").replace(/[^\d]/g, "");

  let prefix = "";
  let digits = "";

  if (raw.startsWith("+1")) {
    prefix = "+1";
    digits = raw.slice(2);
  } else if (raw.startsWith("0")) {
    prefix = "0";
    digits = raw.slice(1);
  } else if (raw.startsWith("+")) {
    prefix = "+";
    digits = raw.slice(1);
  } else {
    digits = raw;
  }

  // Limit to exactly 9 digits
  digits = digits.slice(0, 9);

  // Format as XXX XXX XXX
  let formatted = digits;
  if (digits.length <= 3) {
    formatted = digits;
  } else if (digits.length <= 6) {
    formatted = `${digits.slice(0, 3)} ${digits.slice(3)}`;
  } else {
    formatted = `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(
      6
    )}`;
  }

  // Construct output
  if (prefix === "+1") {
    return `${prefix} ${formatted}`.trim();
  } else if (prefix === "0") {
    return `${prefix}${formatted}`.trim();
  } else if (prefix === "+") {
    return formatted ? `+${formatted}` : "+";
  } else {
    return formatted;
  }
};

// SIMPLIFIED validation - exactly 9 digits (after removing prefix)
const validateUSAMobile = (input: string): boolean => {
  if (!input) return false;

  const raw = String(input).trim();

  // Remove all non-digits except the first + if present
  let digitsOnly = raw.replace(/[^\d+]/g, "");

  // Remove the prefix to count actual phone digits
  if (digitsOnly.startsWith("+1")) {
    digitsOnly = digitsOnly.slice(2);
  } else if (digitsOnly.startsWith("0")) {
    digitsOnly = digitsOnly.slice(1);
  } else if (digitsOnly.startsWith("+")) {
    digitsOnly = digitsOnly.slice(1);
  }

  // Must be exactly 9 digits
  digitsOnly = digitsOnly.replace(/\D/g, "");
  return digitsOnly.length === 9;
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

type FormMainDesktopProps = {
  formData: {
    name?: string;
    email?: string;
    phone?: string;
    caseType?: string;
    description?: string;
    consent?: boolean;
    state?: string;
    [key: string]: unknown;
  };

  setSuccessDialogOpen?: React.Dispatch<React.SetStateAction<boolean>>;

  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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


const FormMainDesktop: React.FC<FormMainDesktopProps> = ({
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
  //  TrustedForm – run EVERY time popup opens
  useEffect(() => {
    if (!setOpen) return;

    const interval = setInterval(() => {
      if (window.TrustedForm && window.TrustedForm.certify) {
        window.TrustedForm.certify();
        // console.log("TrustedForm certified on popup open");
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [setOpen]);

  return (
    <div className="hidden md:block relative bg-[#FFFBF3] text-[#023437] p-3 md:p-4 border border-white/20 overflow-y-auto max-h-[90vh]">
      {/* CLOSE BUTTON (Desktop) */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#162766] shadow flex items-center justify-center text-[#F2C438] text-sm md:text-base cursor-pointer transition z-10"
        aria-label="Close form"
      >
        ✕
      </button>

      <div className="pt-0">
        <h2 className="text-left font-playfair text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-[#162766]">
          Take the <span className="text-[#F2C438]">First Step</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3 mt-2 md:mt-3" noValidate>
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
            <div key={name} className="space-y-0.5">
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
                className="w-full border py-2 md:py-2.5 bg-transparent transition-colors duration-300 
                  font-urbanist text-sm md:text-[14px] font-normal leading-normal px-3
                  text-[#808080]
                  placeholder:text-[#808080] placeholder:font-urbanist 
                  placeholder:text-sm md:placeholder:text-[14px] placeholder:font-normal placeholder:leading-normal
                  border-[#D0D5DD] rounded-lg focus:border-[#C09F53] focus:outline-none disabled:opacity-50"
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

          <div className="relative">
            <select
              name="category"
              value={formData.caseType || ""}
              onChange={handleChange}
              disabled={isSubmitting}
              required
              className="appearance-none w-full border py-2 md:py-2.5 bg-transparent transition-colors duration-300 
                font-urbanist text-sm md:text-[14px] font-normal leading-normal px-3
                text-[#808080]
                placeholder:text-[#808080] placeholder:font-urbanist 
                placeholder:text-sm md:placeholder:text-[14px] placeholder:font-normal placeholder:leading-normal
                border-[#D0D5DD] rounded-lg focus:border-[#C09F53] focus:outline-none disabled:opacity-50"
            >
              <option value="" disabled>
                Select your concern
              </option>
              <option value="Mesothelioma Lawsuit">Mesothelioma Lawsuit</option>
              <option value="Truck Accident Claims">Truck Accident Claims</option>
              <option value="Rideshare Class Action Lawsuits">
                Rideshare Class Action Lawsuits
              </option>
              <option value="Motor Vehicle Accident">
                Motor Vehicle Accident
              </option>
              <option value="Other">Other</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center justify-center w-7 h-full">
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </span>
          </div>

          {/* CASE HISTORY TEXTAREA */}
          <div>
            <textarea
              name="caseHistory"
              value={formData.description || ""}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="How Can We Help?"
              rows={2}
              className="w-full border py-2 md:py-2.5 bg-transparent transition-colors duration-300 
                font-urbanist text-sm md:text-[14px] font-normal leading-normal px-3
                text-[#808080]
                placeholder:text-[#808080] placeholder:font-urbanist 
                placeholder:text-sm md:placeholder:text-[14px] placeholder:font-normal placeholder:leading-normal
                border-[#D0D5DD] rounded-lg focus:border-[#C09F53] focus:outline-none disabled:opacity-50 resize-none"
            />
          </div>

          {/* CHECKBOXES */}
          <div className="space-y-1.5 md:space-y-2">
            <div className="flex items-start gap-1.5 font-opensans text-xs font-normal text-[#023437] leading-snug">
              <input
                id="needhelp"
                name="needHelp"
                type="checkbox"
                checked={Boolean(formData.needHelp)}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-0.5 w-3.5 h-3.5 accent-[#C09F53] disabled:opacity-50 flex-shrink-0"
              />
              <label
                htmlFor="needhelp"
                className={isSubmitting ? "opacity-50" : ""}
              >
                I Would Be Needing Help To File A Claim
              </label>
            </div>
            
            <div className="flex items-start gap-1.5 font-opensans text-xs font-normal leading-snug text-[#023437]">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent || false}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="mt-0.5 w-3.5 h-3.5 accent-[#C09F53] disabled:opacity-50 flex-shrink-0"
              />
              <label htmlFor="consent" className={isSubmitting ? "opacity-50" : ""}>
                I agree to the{" "}
                <a href="privacy-policy" className="underline font-bold text-[#162766] hover:opacity-80">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="disclaimer" className="underline font-bold text-[#162766] hover:opacity-80">
                  Disclaimer
                </a>{" "}
                and give my express written consent, affiliates and/or lawyer to
                contact me via the number provided even if this number is a wireless
                number or if I am presently listed on a Do Not Call list. I
                understand that I may be contacted by telephone, email, text message
                or mail regarding case options and that my call may be recorded
                and/or monitored. Message & data rates may apply. My consent does
                not require purchase. This is legal advertising.
              </label>
            </div>

            <div className="flex items-start gap-1.5 font-opensans text-xs font-normal text-[#023437] leading-snug">
              <input
                id="captchabox-check"
                name="captchaCheck"
                type="checkbox"
                checked={showCaptcha || false}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-0.5 w-3.5 h-3.5 disabled:opacity-50 flex-shrink-0"
              />
              <label
                htmlFor="captchabox-check"
                className={isSubmitting ? "opacity-50" : ""}
              >
                Please check this box so we know you&apos;re a person and not a computer
              </label>
            </div>
          </div>

          {showCaptcha && (
            <div className="py-0.5">
              <CustomCaptcha
                onCaptchaChange={onCaptchaChange}
                resetTrigger={resetTrigger}
                disabled={isSubmitting}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-[#162766] text-white font-semibold py-2.5 md:py-3 rounded-full transition-all duration-300 shadow hover:shadow-md hover:bg-[#1a327a] text-sm md:text-[14px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow focus:outline-none focus:ring-2 focus:ring-[#162766] focus:ring-offset-1"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-white"
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
        </form>
      </div>

      {successDialogOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[9999]"
          role="dialog"
          aria-modal="true"
          aria-label="Success message"
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                if (setSuccessDialogOpen) setSuccessDialogOpen(false);
              }}
              className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 text-base md:text-lg hover:bg-gray-100 transition-colors z-20"
              aria-label="Close success dialog"
            >
              ✕
            </button>
            <Image
              src="/thankyoucarddesktop.svg"
              alt="Success"
              width={800}
              height={500}
              className="w-[90vw] max-w-[500px] h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

const FormMainMobile: React.FC<FormMainDesktopProps> = ({
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
}) => (
  <> 
    <div className="md:hidden relative bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-white/20">
      {/* CLOSE BUTTON (Mobile) */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#023437] shadow-md 
               flex items-center justify-center text-white text-lg cursor-pointer
               hover:bg-[#023437]/90 transition"
      >
        ✕
      </button>
      <input type="hidden" name="xxTrustedFormCertUrl" value={certId || ""} />
      <input
        type="hidden"
        name="xxTrustedFormCertToken"
        value={tokenUrl || ""}
      />
      <input type="hidden" name="xxTrustedFormPingUrl" value={pingUrl || ""} />

      <h2 className="text-left font-playfair text-[40px] font-extrabold leading-normal text-[#023437] tracking-[-0.6px] mb-6">
        Take the <span className="text-[#F2C438]">First Step</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 relative" noValidate>
        {[
          {
            name: "name",
            type: "text",
            placeholder: "Full Name",
            required: true,
          },
          { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
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
           border-[#D0D5DD] rounded-xl focus:border-[#C09F53] disabled:opacity-50"
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

        <div className="relative w-full">
          <select
            name="category"
            value={formData.caseType || ""}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="appearance-none w-full border-2 py-3 bg-transparent transition-colors duration-300 
           font-urbanist text-[16px] font-semibold leading-normal p-2
           text-[#808080]
           placeholder:text-[#808080] placeholder:font-urbanist 
           placeholder:text-[16px] placeholder:font-semibold placeholder:leading-normal
           border-[#D0D5DD] rounded-xl focus:border-[#C09F53] disabled:opacity-50"
          >
            <option value="" disabled>
              Select your concern
            </option>
            <option value="Mesothelioma Lawsuit">Mesothelioma Lawsuit</option>
            <option value="Truck Accident Claims">Truck Accident Claims</option>
            <option value="Rideshare Class Action Lawsuits">
              Rideshare Class Action Lawsuits
            </option>
            <option value="Motor Vehicle Accident">
              Motor Vehicle Accident
            </option>
            <option value="Other">Other</option>
          </select>

          <span className="pointer-events-none absolute inset-y-2.5 right-2 flex items-center justify-center w-8 h-8 bg-[#F5C844] rounded-md">
                  <ChevronDownIcon />
                </span>
        </div>

      

        {/* NEW CASE HISTORY TEXTAREA (Mobile) */}
        <div>
          <textarea
            name="caseHistory"
            value={formData.description || ""}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="How Can We Help?"
            rows={4}
            className="w-full border-2 py-3 bg-transparent transition-colors duration-300
           font-urbanist  text-[15px] font-normal leading-normal p-2
           text-[#808080]
           placeholder:text-[#808080] placeholder:font-urbanist 
           placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal
           border-[#D0D5DD] rounded-xl focus:border-[#C09F53] disabled:opacity-50"
          />
        </div>
          <div className="flex items-start mb-0 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0 min-h-[50px] sm:min-h-[45px] md:min-h-[40px] lg:min-h-[35px]">
          <input
            id="needhelp-mobile"
            name="needHelp"
            type="checkbox"
            checked={Boolean(formData.needHelp)}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50 flex-shrink-0"
          />
          <label
            htmlFor="needhelp-mobile"
            className={isSubmitting ? "opacity-50" : ""}
          >
            I Would Be Needing Help To File A Claim
          </label>
        </div>

        <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0">
          <input
            id="consent-mobile"
            name="consent"
            type="checkbox"
            checked={formData.consent || false}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
          />
          <label
            htmlFor="consent-mobile"
            className={isSubmitting ? "opacity-50" : ""}
          >
            I agree to the{" "}
            <a href="privacy-policy" className="underline font-bold text-[#162766]">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="disclaimer" className="underline font-bold text-[#162766]">
              Disclaimer
            </a>{" "}
            and give my express written consent, affiliates and/or lawyer to
            contact me via the number provided even if this number is a wireless
            number or if I am presently listed on a Do Not Call list. I
            understand that I may be contacted by telephone, email, text message
            or mail regarding case options and that my call may be recorded
            and/or monitored. Message & data rates may apply. My consent does
            not require purchase. This is legal advertising.
          </label>
        </div>

        <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0">
          <input
            id="captcha-mobile"
            name="captchaCheck"
            type="checkbox"
            checked={showCaptcha || false}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
          />
          <label
            htmlFor="captcha-mobile"
            className={isSubmitting ? "opacity-50" : ""}
          >
            Please check this box so we know you&apos;re a person and not a computer
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

        {successDialogOpen && (
          <div
            className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50 rounded-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Success message"
          >
            <button
              type="button"
              onClick={() => { if (setSuccessDialogOpen) setSuccessDialogOpen(false); }}
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
  </>
);

const EnquiryForm: React.FC<{ setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setOpen }) => {
  type FormDataType = {
    name: string;
    phone: string;
    email: string;
    caseType: string;
    state: string;
    description: string;
    consent: boolean;
    needHelp?: boolean;
  };

  const initialData = useMemo<FormDataType>(() => ({
    name: "",
    phone: "",
    email: "",
    caseType: "",
    state: "",
    description: "",
    consent: false,
    needHelp: false,
  }), []);

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
  type SubmitMessageType = { type: "success" | "error"; text: string } | null;
  const [submitMessage, setSubmitMessage] = useState<SubmitMessageType>(null);

  const handlePhoneChange = useCallback((value: string) => {
    try {
      const formatted = formatUSAMobile(value);
      const isValid = validateUSAMobile(formatted);

      // Simple error message
      let nextPhoneError = "";
      if (value && value.trim() !== "" && !isValid) {
        nextPhoneError = "Please enter a valid phone number";
      }

      setPhoneError((prev) =>
        prev === nextPhoneError ? prev : nextPhoneError
      );

      setFormData((prev) => {
        if (prev.phone === formatted) return prev;
        return { ...prev, phone: formatted };
      });
    } catch (error) {
      console.error("Error handling phone change:", error);
      setPhoneError("Error formatting phone number");
    }
  }, []);

const handleEmailChange = useCallback((value: string) => {
    try {
      const formatted = formatEmail(value);
      const validation = validateEmail(formatted);

      let nextEmailError = "";

      if (value && value.trim() !== "" && !validation.isValid) {
        nextEmailError = "Please enter a valid email address ";
      }

      setEmailError((prev) =>
        prev === nextEmailError ? prev : nextEmailError
      );

      setFormData((prev) => {
        if (prev.email === formatted) return prev;
        return { ...prev, email: formatted };
      });
    } catch (error) {
      console.error("Error handling email change:", error);
      setEmailError("Please enter a valid email address ");
    }
  }, []);

  const handleNameChange = useCallback((value:string) => {
    try {
      const cleaned = value.replace(/\s{3,}/g, "  ");

      const trimmedForValidation = cleaned.trim();
      const wordsForValidation = trimmedForValidation
        .split(/\s+/)
        .filter((word) => word.length > 0);

      let nextNameError = "";

      if (trimmedForValidation && trimmedForValidation.length > 0) {
        if (wordsForValidation.length < 2) {
          nextNameError = "Please enter your full name (first and last name)";
        } else if (trimmedForValidation.length < 3) {
          nextNameError = "Please enter your full name (first and last name)";
        }
      }

      setNameError((prev) => (prev === nextNameError ? prev : nextNameError));

      setFormData((prev) =>
        prev.name === cleaned ? prev : { ...prev, name: cleaned }
      );
    } catch (error) {
      console.error("Error handling name change:", error);
      setNameError("Please enter your full name (first and last name)");
    }
  }, []);

  const handleChange = useCallback(
     (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
      try {
        const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const { name, value, type } = target;
        const checked = (target as HTMLInputElement).checked;

        if (submitMessage) setSubmitMessage(null);

        if (name === "captchaCheck") {
          setShowCaptcha(checked);
          setCaptchaValid(false);
          setResetTrigger((t) => !t);
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
    [handleNameChange, handlePhoneChange, handleEmailChange, submitMessage]
  );

  const onCaptchaChange = useCallback((valid:boolean) => {
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
      formData.caseType &&
      formData.consent
    );
  }, [
    isFullNameValid,
    isPhoneValid,
    isEmailValid,
    formData.caseType,
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
                const el = targetNode as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
                if (el && el.name === "xxTrustedFormCertUrl" && (el as HTMLInputElement).value) {
                  setCertId((el as HTMLInputElement).value);
                }

                if (el && el.name === "xxTrustedFormPingUrl" && (el as HTMLInputElement).value) {
                  setPingUrl((el as HTMLInputElement).value);
                }

                if (el && el.name === "xxTrustedFormCertToken" && (el as HTMLInputElement).value) {
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
              '[name="xxTrustedFormCertUrl"], [name="xxTrustedFormPingUrl"], [name="xxTrustedFormCertToken"]'
            );

            trustedFormFields.forEach((field) => {
              const el = field as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
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
      if (!isFormValid || isSubmitting) return;

      setIsSubmitting(true);
      setSubmitMessage(null);

      try {
        const rawPhone = formData.phone?.replace(/\D/g, "") || "";

        const submitData = {
          ...formData,
          phone: rawPhone,
          certId: certId || "",
          tokenUrl: tokenUrl || "",
          pingUrl: pingUrl || "",
        };
        try {
          await Promise.all([
            sendFormAdmin(submitData),
            sendFormUser(submitData),
          ]);
          await fetch(
            "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                countryName: "USA",
                brandName: "C2A",
                websiteName: "Connect 2 Attorney",
                formname: "Enquiry Form",
                data: {
                  name: submitData.name,
                  email: submitData.email,
                  phone: `+1${submitData.phone}`,
                  caseType: submitData.caseType,
                  state: submitData.state,
                  description: submitData.description,
                  needHelp: submitData.needHelp || false,
                  ipAddress: await getIPAddress(),
                  trustedFormCertUrl: submitData.certId,
                  trustedFormToken: submitData.tokenUrl,
                  trustedFormPingUrl: submitData.pingUrl,
                  submissionDate: new Date().toISOString(),
                  sourceUrl: getSourceUrl(),
                },
              }),
            }
          );
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
        } catch (err) {
          console.error("Email sending error:", err);
          try {
            await sendFormAdmin(submitData);
            await fetch(
              "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  countryName: "USA",
                  brandName: "C2A",
                  websiteName: "Connect 2 Attorney",
                  formname: "Enquiry Form",
                  data: {
                    name: submitData.name,
                    email: submitData.email,
                    phone: `+1${submitData.phone}`,
                    caseType: submitData.caseType,
                    state: submitData.state,
                    description: submitData.description,
                    needHelp: submitData.needHelp || false,
                    ipAddress: await getIPAddress(),
                    trustedFormCertUrl: submitData.certId,
                    trustedFormToken: submitData.tokenUrl,
                    trustedFormPingUrl: submitData.pingUrl,
                    submissionDate: new Date().toISOString(),
                    sourceUrl: getSourceUrl(),
                  },
                }),
              }
            );
            setSubmitMessage({
              type: "success",
              text: "Form submitted successfully! Confirmation email failed, but we have received your inquiry.",
            });
            setSuccessDialogOpen(true);
          } catch (adminErr) {
            console.error("Admin email error:", adminErr);
            setSubmitMessage({
              type: "error",
              text: "There was an error submitting your form. Please try again or contact us directly.",
            });
          }
        }
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
    ]
  );

  return (
    <>
      <FormMainDesktop
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
      <FormMainMobile
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
        setSuccessDialogOpen={setSuccessDialogOpen}
        setOpen={setOpen}
      />
    </>
  );
};

export default EnquiryForm;

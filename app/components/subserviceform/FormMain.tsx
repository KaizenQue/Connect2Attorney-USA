"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Toaster } from "react-hot-toast";
// import toast from "react-hot-toast";
import { sendWithEmailJS } from "./emailJsService";
import { usePathname } from "next/navigation";

const CRM_API_URL =
  "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

const CLIENT_WEBHOOK_URL: string | null = null;
const EMAILJS_ENABLED = true;

/* ---------------- Config ---------------- */

type Step = 1 | 2 | 3 | 4;

const CASES = [
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
  "Rideshare Sexual Assault Lawsuit",
];

const SLUG_TO_CASE_MAP: Record<string, string> = {
  "ozempic-lawsuit": "Ozempic Lawsuit",
  "mesothelioma-lawsuit": "Mesothelioma Lawsuit",
  "depo-provera-lawsuit": "Depo-Provera Lawsuit",
  "roundup-lawsuit": "Roundup Cancer Lawsuit",
  "talcum-powder-lawsuit": "Talcum Powder Lawsuit",
  "tesla-autopilot-recall-lawsuit": "Tesla Autopilot Recall Lawsuit",
  "maclaren-hall-sex-abuse-lawsuit": "MacLaren Sexual Abuse Lawsuit",
  "sexual-abuse-lawsuit": "Sexual Abuse Lawsuit",
  "motor-vehicle-accident": "Motor Vehicle Accident Lawsuit",
  "slip-and-fall": "Slip and Fall Injury Lawsuit",
  "18-wheeler-accident": "18-Wheeler Accident Lawsuit",
  "rideshare-sexual-assault-lawsuit": "Rideshare Sexual Assault Lawsuit",
};

/* ---------------- Utils ---------------- */

let initialLandingUrl: string | null = null;

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";

  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }

  return initialLandingUrl;
};

const getIPAddress = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch {
    return "Unavailable";
  }
};

// const normalizePhone = (v: string) => v.replace(/\D/g, "").slice(0, 10);

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6)
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
    6,
    10,
  )}`;
};

// eslint-disable-next-line react/display-name
const PencilIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8791 4.51278C17.9583 4.63296 17.9935 4.77677 17.979 4.91994C17.9644 5.06311 17.9008 5.19686 17.7991 5.29862L10.1382 12.9586C10.0599 13.0369 9.96209 13.093 9.85491 13.1211L6.66408 13.9544C6.5586 13.982 6.44777 13.9814 6.34257 13.9528C6.23738 13.9243 6.14148 13.8687 6.06441 13.7916C5.98733 13.7145 5.93175 13.6186 5.90319 13.5135C5.87462 13.4083 5.87407 13.2974 5.90158 13.1919L6.73491 10.002C6.75983 9.90642 6.80566 9.81761 6.86908 9.74195L14.5582 2.05778C14.6754 1.94074 14.8343 1.875 14.9999 1.875C15.1655 1.875 15.3244 1.94074 15.4416 2.05778L17.7991 4.41445C17.8282 4.44515 17.8549 4.47802 17.8791 4.51278ZM16.4732 4.85612L14.9999 3.38362L7.90158 10.4819L7.38075 12.4761L9.37491 11.9553L16.4732 4.85612Z"
      fill="#162766"
    />
    <path
      d="M16.3677 14.2981C16.5954 12.3514 16.6682 10.3897 16.5852 8.43144C16.5832 8.38529 16.5909 8.33924 16.6077 8.2962C16.6244 8.25316 16.65 8.21408 16.6827 8.18144L17.5027 7.36144C17.5251 7.33891 17.5535 7.32333 17.5846 7.31656C17.6156 7.3098 17.648 7.31215 17.6777 7.32333C17.7075 7.33451 17.7333 7.35404 17.7523 7.37957C17.7712 7.40511 17.7823 7.43556 17.7843 7.46728C17.9383 9.79332 17.8797 12.1285 17.6093 14.4439C17.4127 16.1289 16.0593 17.4498 14.3818 17.6373C11.4696 17.9596 8.53073 17.9596 5.61851 17.6373C3.94184 17.4498 2.58767 16.1289 2.39101 14.4439C2.0461 11.4901 2.0461 8.50613 2.39101 5.55228C2.58767 3.86728 3.94101 2.54644 5.61851 2.35894C7.82888 2.11482 10.0558 2.05544 12.276 2.18144C12.3078 2.18373 12.3382 2.19507 12.3638 2.21412C12.3893 2.23318 12.4088 2.25915 12.42 2.28896C12.4313 2.31877 12.4337 2.35118 12.4271 2.38234C12.4205 2.4135 12.4051 2.44211 12.3827 2.46478L11.5552 3.29144C11.5228 3.32382 11.4842 3.34918 11.4416 3.36595C11.399 3.38273 11.3534 3.39055 11.3077 3.38894C9.45497 3.32549 7.6001 3.39651 5.75767 3.60144C5.21929 3.66103 4.71672 3.90038 4.33114 4.28082C3.94555 4.66126 3.69948 5.16058 3.63267 5.69811C3.29839 8.55503 3.29839 11.4412 3.63267 14.2981C3.69948 14.8356 3.94555 15.335 4.33114 15.7154C4.71672 16.0958 5.21929 16.3352 5.75767 16.3948C8.55351 16.7073 11.4468 16.7073 14.2435 16.3948C14.7819 16.3352 15.2845 16.0958 15.67 15.7154C16.0556 15.335 16.3009 14.8356 16.3677 14.2981Z"
      fill="#162766"
    />
  </svg>
));
/* ---------------- Validation ---------------- */

// const validateEmail = (value: string) => {
//   if (!value.trim()) return "Required";
//   if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email";
//   return "";
// };

const validateRequired = (v: string) => (!v.trim() ? "Required" : "");

// const validatePhone = (v: string) =>
//   normalizePhone(v).length === 10 ? "" : "Enter 10 digit phone";

/* ---------------- Analytics ---------------- */

const track = (event: string, data?: any) => {
  // console.log(" ANALYTICS:", event, data || {});
  // plug GA, Meta, etc here
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
    <div className="mt-3">
      <div className="flex items-center gap-2">
        {/* CAPTCHA box */}
        <div className="bg-gray-100 px-3 py-2 rounded font-mono text-[14px] tracking-wider select-none relative overflow-hidden min-w-[120px]">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, #ccc, #ccc 1px, transparent 1px, transparent 5px)`,
              backgroundSize: "100% 10px",
              backgroundPosition: "0 50%",
            }}
          />

          {/* CAPTCHA text */}
          <div className="relative z-10 flex justify-center">
            {captchaText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${charOffsets[index] || 0}px)`,
                  display: "inline-block",
                  textShadow: "1px 1px 1px rgba(0,0,0,0.25)",
                }}
                className="mx-[1px]"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={generateCaptcha}
            disabled={disabled}
            className={`w-8 h-8 text-[13px] text-gray-600 border border-gray-300 rounded flex items-center justify-center ${
              disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
            }`}
            title="Refresh CAPTCHA"
          >
            ↻
          </button>

          {audioEnabled && (
            <button
              type="button"
              onClick={speakCaptcha}
              disabled={disabled || isSpeaking}
              className={`w-8 h-8 text-[13px] border border-gray-300 rounded flex items-center justify-center ${
                disabled || isSpeaking
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              title={isSpeaking ? "Speaking..." : "Listen to CAPTCHA"}
            >
              🔊
            </button>
          )}
        </div>
      </div>

      {/* Audio toggle */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          id="enableAudio"
          checked={audioEnabled}
          onChange={handleAudioToggle}
          disabled={disabled}
          className="w-3.5 h-3.5"
        />
        <label
          htmlFor="enableAudio"
          className={`text-[11px] ${
            disabled ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Enable audio
        </label>
      </div>

      {/* Input */}
      <div className="mt-2">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder="Enter CAPTCHA"
          className={`w-full h-[36px] px-3 text-[13px] border rounded-md focus:outline-none focus:ring-1 ${
            disabled
              ? "bg-gray-100 cursor-not-allowed border-gray-300"
              : userInput !== "" && !isValid
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {/* Messages */}
        {userInput !== "" && !isValid && !disabled && (
          <p className="text-red-500 text-[11px] mt-1">
            CAPTCHA does not match.
          </p>
        )}

        {isValid && !disabled && (
          <p className="text-green-500 text-[11px] mt-1">✓ Verified</p>
        )}
      </div>
    </div>
  );
};

const checkboxClass = `
  mt-[2px]
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

  checked:bg-[#F2C438]
  checked:border-[#F2C438]

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
/* ---------------- Main ---------------- */

export default function Form() {
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);

  const [consentChecked, setConsentChecked] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const [leadId, setLeadId] = useState<number | null>(null);
  const [earlySent, setEarlySent] = useState(false);

  const [pingUrl, setPingUrl] = useState<string>("");
  const [certId, setCertId] = useState<string>("");
  const [tokenUrl, setTokenUrl] = useState<string>("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
  });

  const [caseType, setCaseType] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [zipError, setZipError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (
      url.searchParams.has("xxTrustedFormCertUrl") ||
      url.searchParams.has("xxTrustedFormPingUrl")
    ) {
      window.history.replaceState({}, "", url.origin + url.pathname);
    }
  }, []);
  useEffect(() => {
    if (step === 4) {
      const t = setTimeout(() => {
        //  Full reset
        setStep(1);
        setDirection("next");

        // reset form state
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          zip: "",
        });
        setCaseType("");
        setDescription("");
        setErrors({});
        setDropdownOpen(false);

        // reset captcha
        setCaptchaVerified(false);
        setShowCaptcha(false);
        setRobotChecked(false);
        setCaptchaResetTrigger((p) => !p);
      }, 3000); // ⏱ 1 second

      return () => clearTimeout(t);
    }
  }, [step]);

  /* ---------------- TrustedForm ---------------- */
  useEffect(() => {
    if (step === 1) {
      const script = document.createElement("script");
      script.src = "https://api.trustedform.com/trustedform.js";
      script.async = true;
      script.type = "text/javascript";
      script.setAttribute("data-type", "hidden");
      script.setAttribute("data-auto-populate", "true");
      document.body.appendChild(script);

      return () => {
        script.remove();
      };
    }
  }, [step]);

  useEffect(() => {
    if (step === 3) {
      setCaptchaChecked(false);
      setConsentChecked(false);
      setShowCaptcha(false);
      setCaptchaVerified(false);
      setCaptchaResetTrigger((p) => !p);
    }
  }, [step]);

  /* ---------------- Close dropdown on outside click ---------------- */
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [dropdownOpen]);

  const pathname = usePathname();

  const slug = pathname.split("/").pop()?.split("?")[0];

  useEffect(() => {
    if (!slug) return;

    const matchedCase = SLUG_TO_CASE_MAP[slug];
    if (!matchedCase) return;

    const found = CASES.find(
      (c) => c.toLowerCase() === matchedCase.toLowerCase(),
    );

    if (!found) return;

    setCaseType((prev) => prev || found);
  }, [slug]);

  useEffect(() => {
    if (!form.phone) {
      setEarlySent(false);
      setLeadId(null);
    }
  }, [form.phone]);

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

  /* ---------------- Validation ---------------- */

  const normalizePhone = (input: string) => {
    return input.replace(/\D/g, "").slice(0, 10);
  };

  const formatUSAMobile = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 0) return "";
    if (cleaned.length <= 3) return `(${cleaned}`;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  // SIMPLIFIED validation - exactly 9 digits (after removing prefix)
  const validateUSAMobile = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 10;
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

  const earlyLeadLock = useRef(false);

  const handlePhoneChange = useCallback(
    async (value: string) => {
      const formatted = formatUSAMobile(value);
      setForm((prev) => ({ ...prev, phone: formatted }));

      const phoneDigits = normalizePhone(formatted);

      //  Stop until 10 digits entered
      if (phoneDigits.length !== 10) {
        earlyLeadLock.current = false;
        return;
      }

      //  Prevent duplicates
      if (earlySent) return;
      if (earlyLeadLock.current) return;

      const fullName =
        `${form.firstName.trim()} ${form.lastName.trim()}`.trim();

      if (fullName.split(" ").length < 2) return;

      earlyLeadLock.current = true;

      try {
        await createEarlyLead(fullName, phoneDigits);
        setEarlySent(true);
      } catch (err) {
        console.error(" Early Lead Failed:", err);
        earlyLeadLock.current = false;
      }
    },
    [form.firstName, form.lastName, earlySent],
  );

  const emailUpdateLock = useRef(false);

  const handleEmailChange = useCallback(
    async (value: string) => {
      const formatted = formatEmail(value);
      setForm((prev) => ({ ...prev, email: formatted }));

      //  Only continue if valid email
      if (!validateEmail(formatted).isValid) return;

      //  Only update if leadId exists
      if (!leadId) return;

      if (emailUpdateLock.current) return;
      emailUpdateLock.current = true;

      earlyLeadLock.current = true;

      try {
        const updateBody = {
          countryName: "USA",
          brandType:'Internal',
          brandName: "C2A",
          websiteName: "Connect 2 Attorney",
          formname: "Stepper Form",
          vertical:'General',
          data: {
            name: `${form.firstName} ${form.lastName}`,
            phone: `+1${normalizePhone(form.phone)}`,
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

  const handleFirstNameChange = useCallback((value: string) => {
    const cleaned = value.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z\s'-]/g, "");
    let error = "";

    if (!cleaned.trim()) {
      error = "First name is required";
    } else if (cleaned.trim().length < 2) {
      error = "First name must be at least 2 characters";
    }

    setFirstError(error);

    setForm((prev) =>
      prev.firstName === cleaned ? prev : { ...prev, firstName: cleaned },
    );
  }, []);

  const handleLastNameChange = useCallback((value: string) => {
    const cleaned = value.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z\s'-]/g, "");
    let error = "";

    if (!cleaned.trim()) {
      error = "Last name is required";
    } else if (cleaned.trim().length < 2) {
      error = "Last name must be at least 2 characters";
    }

    setLastError(error);

    setForm((prev) =>
      prev.lastName === cleaned ? prev : { ...prev, lastName: cleaned },
    );
  }, []);

  const handleZipChange = useCallback((value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 5);
    let error = "";

    if (!cleaned) {
      error = "Zip code is required";
    } else if (cleaned.length !== 5) {
      error = "Please enter a valid 5-digit zip code";
    }

    setZipError(error);

    setForm((prev) =>
      prev.zip === cleaned ? prev : { ...prev, zip: cleaned },
    );
  }, []);

  const validateStep1 = useCallback(() => {
    const e: Record<string, string> = {};

    // FIRST NAME
    if (!form.firstName.trim()) {
      e.firstName = "First name is required";
    } else if (form.firstName.trim().length < 2) {
      e.firstName = "First name must be at least 2 characters";
    }

    // LAST NAME
    if (!form.lastName.trim()) {
      e.lastName = "Last name is required";
    } else if (form.lastName.trim().length < 2) {
      e.lastName = "Last name must be at least 2 characters";
    }
    // PHONE
    try {
      const formattedPhone = formatUSAMobile(form.phone);

      if (!form.phone.trim()) {
        e.phone = "Phone number is required";
      } else if (!validateUSAMobile(formattedPhone)) {
        e.phone = "Please enter a valid phone number";
      }
    } catch {
      e.phone = "Please enter a valid phone number";
    }

    // EMAIL
    try {
      const formattedEmail = formatEmail(form.email);
      if (!form.email?.trim()) {
        e.email = "Email address is required";
      } else if (!validateEmail(formattedEmail).isValid) {
        e.email = "Please enter a valid email address";
      }
    } catch {
      e.email = "Please enter a valid email address";
    }

    // ZIP
    if (!form.zip.trim()) {
      e.zip = "Zip code is required";
    } else if (form.zip.length !== 5) {
      e.zip = "Please enter a valid 5-digit zip code";
    }

    e.zip = validateRequired(form.zip);

    Object.keys(e).forEach((k) => !e[k] && delete e[k]);

    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form]);

  const validateStep2 = useCallback(() => {
    if (!caseType) {
      setErrors({ caseType: "Please select a case" });
      return false;
    }
    setErrors({});
    return true;
  }, [caseType]);

  const canProceed = useCallback(
    (current: Step) => {
      if (current === 1) return validateStep1();
      if (current === 2) return validateStep2();
      return true;
    },
    [validateStep1, validateStep2],
  );

  /* ---------------- Navigation ---------------- */

  const next = useCallback(() => {
    if (!canProceed(step)) return;
    track("step_complete", { step });
    setDirection("next");
    setStep((s) => (s < 4 ? ((s + 1) as Step) : s));
  }, [step, canProceed]);

  const back = useCallback(() => {
    setDirection("back");
    setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
  }, []);

  /* ---------------- Scroll to top ---------------- */
  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    track("step_view", { step });
  }, [step]);

  /* ---------------- Submit ---------------- */

  const generateUniqueSessionId = () => {
    const prefix = "CR";
    const timestamp = Date.now(); // milliseconds
    const random = Math.random().toString(36).substring(2, 10);

    return `${prefix}_${timestamp}_${random}`;
  };

  const [uniqueSessionId] = useState(() => generateUniqueSessionId());

  const createEarlyLead = async (fullName: string, phoneDigits: string) => {
    const cleaned = phoneDigits.replace(/\D/g, "");

    const earlyBody = {
      countryName: "USA",
      brandType:'Internal',
      brandName: "C2A",
      websiteName: "Connect 2 Attorney",
      formname: "Stepper form",
      vertical:'General',
      data: {
        name: fullName,
        phone: `+1${cleaned}`,
        submissionDate: new Date().toISOString(),
        uniqueSessionId: uniqueSessionId,
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

    //  store backend id
    setLeadId(json.id);
  };

  const handleSubmit = async () => {
    // if (!leadId) {
    //   console.error(" Early lead not created yet");
    //   return;
    // }
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const apiBody = {
        countryName: "USA",
        brandType:'Internal',
        brandName: "C2A",
        websiteName: "Connect 2 Attorney",
        formname: "Stepper Form",
        vertical:'General',
        finalSubmit: "true",
        data: {
          name: `${form.firstName} ${form.lastName}`,
          phone: `+1${normalizePhone(form.phone)}`,
          email: form.email,
          zip: form.zip,
          category: caseType,
          description: description,
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
        body: JSON.stringify(apiBody),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error(" CRM Failed:", errText);
        throw new Error("CRM submission failed");
      }

      // console.log(" CRM Success");

      // ============================
      //  EMAILJS (BEST EFFORT)
      // ============================
      try {
        await sendWithEmailJS(apiBody);
        // console.log(" EmailJS Sent");
      } catch (emailErr) {
        console.warn(" EmailJS Failed (CRM still saved)", emailErr);
      }

      //  ONLY show thank you if CRM succeeds
      setStep(4);
    } catch (err) {
      console.error(" Final Submit Failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="w-full flex justify-center items-center p-3 sm:p-4">
      <Toaster position="top-right" />
      <div
        ref={containerRef}
        className="
      flex flex-col
      w-full
      max-w-[447px]
      min-h-[450px]  /* Reduced from 596px */
      max-h-[calc(100vh-24px)]
      bg-white
      rounded-xl
      shadow-xl
      overflow-hidden
    "
      >
        {/* ---------------- STEP 1 ---------------- */}
        <Step active={step === 1} direction={direction}>
          <div className="flex flex-col h-full">
            <form
              className="flex flex-col h-full"
              onSubmit={async (e) => {
                e.preventDefault();

                if (!canProceed(1)) return;

                next();
              }}
            >
              {/* Hidden fields */}
              <input type="hidden" name="xxTrustedFormCertUrl" />
              <input type="hidden" name="xxTrustedFormCertToken" />
              <input type="hidden" name="xxTrustedFormPingUrl" />

              {/* CONTENT AREA - Takes available space */}
              <div id="stepper-form" className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <div className="mb-4">
                    <h2 className="text-[#162766] font-urbanist text-[20px] font-semibold leading-[26px]">
                      It&apos;s easy to get started
                    </h2>
                    <p className="text-[#6E6E6E] font-urbanist text-[13px] font-medium mt-1">
                      Provide a few details about your case and our team will
                      take it from here.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Input
                      label="First name"
                      value={form.firstName}
                      error={firstError || errors.firstName}
                      onChange={handleFirstNameChange}
                    />
                    <Input
                      label="Last name"
                      value={form.lastName}
                      error={lastError || errors.lastName}
                      onChange={handleLastNameChange}
                    />
                    <Input
                      label="Phone number"
                      value={form.phone}
                      error={phoneError || errors.phone}
                      onChange={handlePhoneChange}
                    />
                    <Input
                      label="Email"
                      value={form.email}
                      error={emailError || errors.email}
                      onChange={handleEmailChange}
                    />
                    <Input
                      label="Zip code"
                      value={form.zip}
                      error={zipError || errors.zip}
                      onChange={handleZipChange}
                    />
                  </div>
                </div>
              </div>

              {/* FOOTER - Fixed at bottom */}
              <div className="p-3 space-y-2   border-gray-100 bg-white">
                <ProgressBar step={step} />
                <button
                  type="submit"
                  className="w-full bg-[#FCCB48] text-[#162766] font-semibold py-2.5 rounded-lg"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </Step>

        {/* ---------------- STEP 2 ---------------- */}
        <Step active={step === 2} direction={direction}>
          <div className="flex flex-col h-full" ref={dropdownRef}>
            {/* CONTENT AREA - Takes available space */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-3">
                <h2 className="text-[#162766] font-urbanist text-[20px] font-semibold leading-[26px]">
                  Select Your Case
                </h2>

                <p className="font-urbanist font-medium text-[#6E6E6E] text-[13px] leading-normal">
                  Tell us about your situation, and we&apos;ll connect you with
                  the right legal support.
                </p>

                {/* Dropdown */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="w-full h-[45px] px-3 rounded-[8px] border border-[#E2E4EA] flex items-center justify-between font-poppins text-[15px] font-medium text-[#303030]"
                >
                  <span className="truncate">
                    {caseType || "Choose from the list"}
                  </span>
                  {dropdownOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {dropdownOpen && (
                  <div className="w-full rounded-md border border-[#E8E9F0] bg-white shadow-lg overflow-hidden max-h-[160px] overflow-y-auto">
                    {CASES.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setCaseType(item);
                          setDropdownOpen(false);
                          setErrors({});
                        }}
                        className={`h-[40px] px-3 flex items-center cursor-pointer text-[14px] ${
                          caseType === item
                            ? "bg-[#162766] text-white"
                            : "text-[#162766] hover:bg-[#162766] hover:text-white"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <textarea
                  placeholder="Please describe what happened"
                  className="w-full border border-[#E2E4EA] rounded-[8px] p-3 min-h-[100px] resize-y text-[14px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            {/* FOOTER - Fixed at bottom */}
            <div className="p-3 space-y-2   border-gray-100 bg-white">
              <ProgressBar step={step} />
              <button
                onClick={next}
                className="w-full bg-[#FCCB48] text-[#162766] font-semibold py-2.5 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </Step>

        {/* ---------------- STEP 3 ---------------- */}
        <Step active={step === 3} direction={direction}>
          <div className="flex flex-col h-full">
            {/* CONTENT AREA - Takes available space */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-3">
                <h2 className="text-[#162766] font-urbanist text-[20px] font-semibold leading-[26px]">
                  Confirm your Personal Details
                </h2>

                {/* Details Card */}
                <div className="border border-[#E6E8F0] rounded-xl p-3 space-y-1.5 text-[13px]">
                  <div className="flex items-center">
                    <Row label="First name" value={form.firstName} />
                    <button
                      onClick={() => {
                        setDirection("back");
                        setStep(1);
                      }}
                      className="ml-auto text-[#162766]"
                      aria-label="Edit"
                    >
                      <PencilIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <Row label="Last name" value={form.lastName} />
                  <Row label="Phone number" value={formatPhone(form.phone)} />
                  <Row label="Email" value={form.email} />
                  <Row label="Zip code" value={form.zip} />
                  <Row label="Case Type" value={caseType} />
                </div>

                {/* CONSENT + CAPTCHA */}
                <div className="pt-2 space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent-box"
                      checked={consentChecked}
                      disabled={isSubmitting}
                      className={checkboxClass}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setConsentChecked(checked);

                        if (!checked) {
                          setCaptchaChecked(false);
                          setShowCaptcha(false);
                          setCaptchaVerified(false);
                          setCaptchaResetTrigger((p) => !p);
                        }
                      }}
                    />

                    <div className="text-[#808080] text-[12px] leading-relaxed">
                      {/* Short text (always visible) */}
                      <span>
                        I agree to the{" "}
                        <span className="text-[#162766] font-semibold underline cursor-pointer">
                          <a href="/privacy-policy"> Privacy Policy &amp; Disclaimer</a>
                         
                        </span>{" "}
                        and give my express written consent.
                      </span>

                      {/* Read more button */}
                      {!showFullConsent && (
                        <button
                          type="button"
                          onClick={() => setShowFullConsent(true)}
                          className="ml-2 text-[#162766] font-semibold underline"
                        >
                          Read more
                        </button>
                      )}

                      {/* Expanded text */}
                      {showFullConsent && (
                        <>
                          <span>
                            {" "}
                            I expressly consent to receive communications from
                            written affiliates and/or attorneys at the number
                            provided above, even if this number is a wireless
                            number or if I am presently listed on a Do Not Call
                            list. I understand that I may be contacted by
                            telephone, email, text message or mail regarding
                            case options and that I may be called using
                            automatic dialing equipment. Message and data rates
                            may apply. My consent does not require purchase.
                            This is legal advertising.
                          </span>

                          <button
                            type="button"
                            onClick={() => setShowFullConsent(false)}
                            className="ml-2 text-[#162766] font-semibold underline"
                          >
                            Show less
                          </button>
                        </>
                      )}
                    </div>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      id="captchabox-check"
                      name="captchaCheck"
                      type="checkbox"
                      checked={captchaChecked}
                      disabled={isSubmitting}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setCaptchaChecked(checked);

                        if (checked) {
                          setShowCaptcha(true);
                        } else {
                          setShowCaptcha(false);
                          setCaptchaVerified(false);
                          setCaptchaResetTrigger((p) => !p);
                        }
                      }}
                      className={checkboxClass}
                    />

                    <span className="text-[#808080] text-[12px]">
                      Please check this box so we know you&apos;re a person and
                      not a computer
                    </span>
                  </label>

                  {/* CAPTCHA */}
                  {showCaptcha && (
                    <div className="pt-1">
                      <CustomCaptcha
                        onCaptchaChange={(valid) => {
                          setCaptchaVerified(valid);
                        }}
                        resetTrigger={captchaResetTrigger}
                        disabled={isSubmitting}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* FOOTER - Fixed at bottom */}
            <div className="p-3 space-y-2   border-gray-100 bg-white">
              <ProgressBar step={step} />
              <button
                disabled={isSubmitting || !consentChecked || !captchaVerified}
                className={`w-full h-[42px] rounded-lg font-semibold transition-all text-sm ${
                  isSubmitting || !captchaVerified
                    ? "bg-gray-300 cursor-not-allowed text-gray-600"
                    : "bg-[#FCCB48] text-[#162766] hover:brightness-105"
                }`}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Step>

        {/* ---------------- STEP 4 ---------------- */}
        <Step active={step === 4} direction={direction}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Background */}
            <img
              src="/bgshape.svg"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Content centered */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <img
                src="/success_check.svg"
                alt="Submission successful"
                className="w-20 h-20 mb-3"
              />

              <h2 className="font-urbanist text-[#162766] font-medium text-lg sm:text-xl md:text-2xl leading-tight mb-2">
                Thank You!
              </h2>

              <p className="font-urbanist text-[#6E6E6E] font-medium text-[14px] leading-normal text-center max-w-[240px]">
                We&apos;ve received your request and will begin processing it
                shortly.
              </p>
            </div>
          </div>
        </Step>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Step({
  active,
  direction,
  children,
}: {
  active: boolean;
  direction: "next" | "back";
  children: React.ReactNode;
}) {
  if (!active) return null;

  return (
    <div
      className={`
        w-full h-full
        flex flex-col
        transition-all duration-300 ease-out
        ${
          direction === "next"
            ? "animate-in slide-in-from-right"
            : "animate-in slide-in-from-left"
        }
      `}
    >
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <input
        className={`
          w-full
          h-[42px]  /* Reduced from 50px */
          px-3      /* Reduced from 14px */
          rounded-[6px]
          border
          ${error ? "border-red-400" : "border-[#E2E4EA]"}
          bg-white
          font-poppins
          text-[14px]  /* Reduced from 15px */
          font-medium
          leading-[16px]
          text-[#303030]
          placeholder:text-[#303030]
          placeholder:opacity-70
          focus:outline-none
          focus:border-[#162766]
          transition
        `}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* Error message */}
      <div className="min-h-[8px] mt-0.5 pl-1">
        {error && (
          <p className="text-[9px] text-red-500 leading-tight">{error}</p>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 whitespace-nowrap">{label}:</span>
      <span className="font-medium text-[#162766] break-all">{value}</span>
    </div>
  );
}

function ProgressBar({ step }: { step: number }) {
  const percent = (step / 4) * 100;

  return (
    <div
      className="
        relative
        w-full
        h-[8px]
        bg-[#E8E9F0]
        rounded-full
        overflow-hidden
      "
    >
      <div
        className="
          h-full
          bg-[#162766]
          transition-all
          duration-300
          ease-out
        "
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

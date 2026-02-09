import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import "./EnquiryForm2.css";
import { sendWithEmailJS } from "../emailjs";
// import { Phone } from "lucide-react";

const CRM_API_URL =
  "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

// Import required icons and components
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const GreyUnderlineSVG = () => (
  <svg
    width="100%"
    height="6"
    viewBox="0 0 182 6"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5L0 6L76.2071 6L85.2071 1H90L182 1V0L90 0L84.7929 0L75.7929 5L0 5Z"
      fill="#DDE6FF"
    />
  </svg>
);

// Utility functions (add these or import from your existing files)
const formatUSAMobile = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 0) return "";
  if (cleaned.length <= 3) return `(${cleaned}`;
  if (cleaned.length <= 6)
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
};

const validateUSAMobile = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10;
};

const formatEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

const validateEmail = (email: string): { isValid: boolean } => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return { isValid: emailRegex.test(email) };
};

const getIPAddress = async (): Promise<string> => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch {
    return "Unknown";
  }
};

const getSourceUrl = (): string => {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
  return "Unknown";
};

const checkboxClass = `
  appearance-none
  w-[16px] h-[16px] min-w-[16px] min-h-[16px]
  rounded-[5px]
  border border-[#162766]
  bg-white
  cursor-pointer
  flex-shrink-0
  grid place-content-center
  transition-colors
  checked:bg-[#F2C438]
  checked:border-[#162766]
  focus:outline-none focus:ring-0 focus:ring-offset-0
  after:content-['']
  after:w-[8px] after:h-[5px]
  after:border-l-[2px] after:border-b-[2px]
  after:border-white
  after:rotate-[-45deg]
  after:scale-0
  checked:after:scale-100
`;

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
  const inputClass =
    "w-full h-[48px] rounded-[8px] border border-[#D0D5DD] bg-white px-[12px] text-[15px] font-urbanist text-[#162766] placeholder:text-[#808080] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus:outline-none focus:ring-2 focus:ring-[#F5C844] disabled:opacity-50";

  return (
    <div className="block lg:hidden w-full bg-white font-sans">
      {/* Form content - takes full screen height */}
      <div className="w-full px-4 py-6 h-[100svh] md:h-auto ">
        <form
          className="w-full max-w-[420px] md:max-w-[680px] mx-auto"
          onSubmit={handleSubmit}
        >
          {/* Hidden TrustedForm Fields */}
          <input
            type="hidden"
            name="xxTrustedFormCertUrl"
            value={certId || ""}
          />
          <input
            type="hidden"
            name="xxTrustedFormCertToken"
            value={tokenUrl || ""}
          />
          <input
            type="hidden"
            name="xxTrustedFormPingUrl"
            value={pingUrl || ""}
          />

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between font-noto-serif text-[24px] md:text-[30px] font-semibold leading-[36px] md:leading-[48px]">
              <div className="flex items-center gap-2">
                <span className="text-[#162766]">Take the</span>
                <span className="text-[#F2C438]">First Step</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen?.(false)}
                className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close form"
              >
                <span className="absolute w-[18px] h-[2px] bg-[#162766] rotate-45 rounded-full" />
                <span className="absolute w-[18px] h-[2px] bg-[#162766] -rotate-45 rounded-full" />
              </button>
            </div>

            <div className="flex items-end mt-3 w-full gap-3">
              <div className="h-[3px] w-[80px] md:w-[120px] bg-[#F2C438] rounded-full" />
              <div className="flex-1">
                <GreyUnderlineSVG />
              </div>
            </div>
          </div>

          {/* Fields grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-4">
            {/* Name */}
            <div className="space-y-1">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                value={(formData.name as string) || ""}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                aria-invalid={nameError ? "true" : "false"}
                aria-describedby={nameError ? "name-error-mobile" : undefined}
                className={inputClass}
              />
              {nameError && (
                <p
                  id="name-error-mobile"
                  className="text-red-500 text-[12px] font-urbanist"
                  role="alert"
                >
                  {nameError}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={(formData.phone as string) || ""}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                aria-invalid={phoneError ? "true" : "false"}
                aria-describedby={phoneError ? "phone-error-mobile" : undefined}
                className={inputClass}
              />
              {phoneError && (
                <p
                  id="phone-error-mobile"
                  className="text-red-500 text-[12px] font-urbanist"
                  role="alert"
                >
                  {phoneError}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1 md:col-span-2">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={(formData.email as string) || ""}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                aria-invalid={emailError ? "true" : "false"}
                aria-describedby={emailError ? "email-error-mobile" : undefined}
                className={inputClass}
              />
              {emailError && (
                <p
                  id="email-error-mobile"
                  className="text-red-500 text-[12px] font-urbanist"
                  role="alert"
                >
                  {emailError}
                </p>
              )}
            </div>

            {/* Custom Select */}
            <div className="relative w-full md:col-span-2">
              <button
                type="button"
                onClick={() => setCategoryOpen((v) => !v)}
                className={`${inputClass} flex items-center justify-between text-left`}
                disabled={isSubmitting}
              >
                <span
                  className={`${
                    formData.category ? "text-[#162766]" : "text-[#808080]"
                  }`}
                >
                  {formData.category || "Select Your Concern"}
                </span>
                <span className="flex items-center justify-center w-[28px] h-[28px] rounded-[6px] bg-[#F5C844] shrink-0">
                  <ChevronDownIcon
                    className={`w-4 h-4 text-black transition-transform ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {categoryOpen && (
                <div className="absolute z-20 mt-1 w-full rounded-[8px] border border-[#E8E9F0] bg-white shadow-lg overflow-hidden">
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
                        className={`group w-full h-[44px] px-3 flex items-center justify-between cursor-pointer text-[14px] transition-colors ${
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
          </div>

          {/* Case field */}
          <div className="mb-4">
            <input
              type="text"
              name="caseHistory"
              value={formData.caseHistory || ""}
              onChange={handleChange}
              placeholder="How Can We Help?"
              disabled={isSubmitting}
              className={inputClass}
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 mb-4">
            {/* Privacy Policy checkbox */}
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent || false}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className={`mt-[2px] ${checkboxClass}`}
              />

              <div className="text-[#808080] font-urbanist text-[10px] tracking-[-0.2px] leading-relaxed">
                {/* Always visible short text */}
                <span>
                  I agree to the{" "}
                  <span className="text-[#162766] font-semibold underline">
                    Privacy Policy &amp; Disclaimer
                  </span>{" "}
                  and give my express written consent
                </span>

                {/* Read more */}
                {!showFullConsent && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation(); // 🚫 prevent checkbox toggle
                      setShowFullConsent(true);
                    }}
                    className="ml-1 text-[#162766] font-semibold underline"
                  >
                    Read more
                  </button>
                )}

                {/* Expanded text */}
                {showFullConsent && (
                  <>
                    <span>
                      {" "}
                      to affiliates and/or attorneys to contact me at the number
                      provided above, even if this number is a wireless number
                      or if I am presently listed on a Do Not Call list. I
                      understand that I may be contacted by telephone, email,
                      text message, or mail regarding case options and that I
                      may be called using automatic dialing equipment. Message
                      and data rates may apply. My consent does not require
                      purchase. This is legal advertising.
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation(); // 🚫 prevent checkbox toggle
                        setShowFullConsent(false);
                      }}
                      className="ml-1 text-[#162766] font-semibold underline"
                    >
                      Show less
                    </button>
                  </>
                )}
              </div>
            </label>

            {/* Captcha checkbox */}
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <input
                  id="captchabox-check-mobile"
                  name="captchaCheck"
                  type="checkbox"
                  checked={showCaptcha || false}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`mt-[2px] ${checkboxClass}`}
                />
                <span className="text-[#808080] font-urbanist text-[10px] tracking-[-0.2px]">
                  Please check this box so we know you&apos;re a person and not
                  a computer
                </span>
              </label>

              {showCaptcha && (
                <div className="pl-6">
                  <CustomCaptcha
                    onCaptchaChange={onCaptchaChange}
                    resetTrigger={resetTrigger}
                    disabled={isSubmitting}
                  />
                </div>
              )}
            </div>

            {/* Claim help checkbox */}
            {/* <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="needHelp"
                checked={formData.needHelp || false}
                onChange={handleChange}
                disabled={isSubmitting}
                 className={`mt-[2px] ${checkboxClass}`}
              />
              <span className="text-[#808080] font-urbanist text-[10px] tracking-[-0.2px]">
                I would be needing help to file a claim?
              </span>
            </label> */}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full h-[54px] bg-[#162766] text-white font-semibold rounded-full text-[16px] hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
        </form>

        {/* Success Dialog */}
        {successDialogOpen && (
          <div
            className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50"
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
              className="w-full max-h-[70vh] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200"
              aria-label="Close success dialog"
            >
              <Image
                src="/thankyoucard.png"
                alt="Success"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Type definitions
type DesktopLandingProps = {
  formData: {
    name?: string;
    email?: string;
    phone?: string;
    category?: string;
    caseHistory?: string;
    consent?: boolean;
    state?: string;
    needHelp?: boolean;
    [key: string]: unknown;
  };
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
  successDialogOpen: boolean;
  setSuccessDialogOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// DesktopLanding component remains mostly the same but add missing setSuccessDialogOpen prop
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
  setOpen,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).TrustedForm && (window as any).TrustedForm.certify) {
        (window as any).TrustedForm.certify();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const [categoryOpen, setCategoryOpen] = useState(false);
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

  const inputClass =
    "h-[36px] w-full rounded-[8px] border border-[#D0D5DD] bg-white px-[12px] text-[15px] font-urbanist text-[#162766] placeholder:text-[#9aa1b2] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus:outline-none focus:ring-2 focus:ring-[#F5C844]";
  const [showFullConsent, setShowFullConsent] = useState(false);

  return (
    <div className="hidden lg:flex w-full justify-center font-sans  overflow-x-clip">
      <div className="w-full max-w-[1800px] px-6 xl:px-16 2xl:px-24 flex justify-end relative overflow-x-clip">
        <div className="w-full lg:w-[520px] xl:w-[560px] 2xl:w-[620px] flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            {successDialogOpen ? (
              /* ================= SUCCESS STATE ================= */
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/thankyoucardfull.svg"
                  alt="Thank you"
                  width={700}
                  height={700}
                  className="w-full h-auto max-w-[620px]"
                  priority
                />
              </div>
            ) : (
              /* ================= FORM STATE ================= */
              <form
                className="    w-full
    bg-white
    rounded-[20px]
    shadow-2xl
    border
    border-[#e3e8f0]
    px-4
    pt-2
    pb-2
    max-h-screen
    overflow-y-auto
    modern-scroll
"
                onSubmit={handleSubmit}
              >
                {/* Hidden TrustedForm Fields */}
                <input
                  type="hidden"
                  name="xxTrustedFormCertUrl"
                  value={certId || ""}
                />
                <input
                  type="hidden"
                  name="xxTrustedFormCertToken"
                  value={tokenUrl || ""}
                />
                <input
                  type="hidden"
                  name="xxTrustedFormPingUrl"
                  value={pingUrl || ""}
                />

                {/* ================= YOUR FORM CONTENT BELOW (UNCHANGED) ================= */}
                {/* Header */}
                <div className="mb-2">
                  {/* HEADING + BUTTON ROW */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="font-noto-serif text-[30px] font-semibold leading-[48px] flex items-center">
                      <span className="text-[#162766]">Take the </span>
                      <span className="ml-1 text-[#F2C438]">First Step</span>
                    </p>

                    {/* CTA BUTTON */}
                    <button
                      type="button"
                      onClick={() => setOpen?.(false)}
                      className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Close form"
                    >
                      <span className="absolute w-[18px] h-[2px] bg-[#162766] rotate-45 rounded-full" />
                      <span className="absolute w-[18px] h-[2px] bg-[#162766] -rotate-45 rounded-full" />
                    </button>
                  </div>

                  {/* UNDERLINE */}
                  <div className="flex items-end mt-[10px] w-full gap-[10px]">
                    <div className="h-[3px] w-[120px] bg-[#F2C438] rounded-full" />
                    <div className="flex-1">
                      <GreyUnderlineSVG />
                    </div>
                  </div>
                </div>

                {/* Fields grid */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-[10px]">
                  <div className="space-y-1">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={(formData.name as string) || ""}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={inputClass}
                      aria-invalid={nameError ? "true" : "false"}
                    />
                    {nameError && (
                      <p
                        className="text-red-500 text-[10px] font-urbanist"
                        role="alert"
                      >
                        {nameError}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={(formData.phone as string) || ""}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={inputClass}
                      aria-invalid={phoneError ? "true" : "false"}
                    />
                    {phoneError && (
                      <p
                        className="text-red-500 text-[12px] font-urbanist"
                        role="alert"
                      >
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1 col-span-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={(formData.email as string) || ""}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={inputClass}
                      aria-invalid={emailError ? "true" : "false"}
                    />
                    {emailError && (
                      <p
                        className="text-red-500 text-[12px] font-urbanist"
                        role="alert"
                      >
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Custom Select */}
                  <div className="relative w-full col-span-2">
                    <button
                      type="button"
                      onClick={() => setCategoryOpen((v) => !v)}
                      className={`${inputClass} flex items-center justify-between text-left`}
                      disabled={isSubmitting}
                    >
                      <span
                        className={`${
                          formData.category
                            ? "text-[#162766]"
                            : "text-[#808080]"
                        }`}
                      >
                        {formData.category || "Select Your Concern"}
                      </span>
                      <span className="flex items-center justify-center w-[28px] h-[28px] rounded-[6px] bg-[#F5C844] shrink-0">
                        <ChevronDownIcon
                          className={`w-4 h-4 text-black transition-transform ${
                            categoryOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {categoryOpen && (
                      <div className="absolute z-20 mt-1 w-full rounded-[8px] border border-[#E8E9F0] bg-white shadow-lg overflow-hidden">
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
                              className={`group w-full h-[44px] px-3 flex items-center justify-between cursor-pointer text-[14px] transition-colors ${
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
                </div>

                {/* Case field */}
                <input
                  type="text"
                  name="caseHistory"
                  value={formData.caseHistory || ""}
                  onChange={handleChange}
                  placeholder="How Can We Help?"
                  disabled={isSubmitting}
                  className={`${inputClass} mb-[16px]`}
                />

                {/* Checkboxes */}
                <div className="grid grid-cols-2 gap-x-[18px] gap-y-[12px] mb-[18px]">
                  <label className="flex items-start gap-[8px]">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent || false}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`mt-[2px] ${checkboxClass}`}
                    />

                    <div className="text-[#808080] font-urbanist text-[10px] tracking-[-0.2px] leading-relaxed">
                      {/* Always visible short text */}
                      <span>
                        I agree to the{" "}
                        <span className="text-[#162766] font-semibold underline">
                          <a href="/privacy-policy">Privacy Policy & Disclaimer </a>
                        </span>{" "}
                        and give my express written consent
                      </span>

                      {/* Read more */}
                      {!showFullConsent && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation(); // 🚫 prevent checkbox toggle
                            setShowFullConsent(true);
                          }}
                          className="ml-1 text-[#162766] font-semibold underline"
                        >
                          Read more
                        </button>
                      )}

                      {/* Expanded legal text */}
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
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation(); // 🚫 prevent checkbox toggle
                              setShowFullConsent(false);
                            }}
                            className="ml-1 text-[#162766] font-semibold underline"
                          >
                            Show less
                          </button>
                        </>
                      )}
                    </div>
                  </label>

                  <div className="flex flex-col gap-[8px]">
                    <label className="flex items-start gap-[8px]">
                      <input
                        id="captchabox-check"
                        name="captchaCheck"
                        type="checkbox"
                        checked={showCaptcha || false}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`mt-[2px] ${checkboxClass}`}
                      />
                      <span className="text-[#808080] font-urbanist text-[10px] tracking-[-0.2px] capitalize">
                        Please check this box so we know you&apos;re a person &
                        not a computer
                      </span>
                    </label>

                    {showCaptcha && (
                      <div className="pl-[22px]">
                        <CustomCaptcha
                          onCaptchaChange={onCaptchaChange}
                          resetTrigger={resetTrigger}
                          disabled={isSubmitting}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full h-[54px] mt-[8px] bg-[#162766] text-white font-semibold rounded-full text-[16px] hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Get started"
                  )}
                </button>
              </form>
            )}
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
      needHelp: false,
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
      brandType:"Internal",
      brandName: "C2A",
      websiteName: "Connect 2 Attorney",
      formname: "Enquiry Form",
      vertical:'General',
      formPath:'https://connect2attorney.com/',
      data: {
        name: fullName,
        phone: `+1${cleaned}`,
        submissionDate: new Date().toISOString(),
        trustedFormCertUrl: certId || "",
        trustedFormToken: tokenUrl || "",
        trustedFormPingUrl: pingUrl || "",
        pageSource: window.location.href,
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
      if (phoneDigits.length !== 10) {
        earlyLeadLock.current = false;
        return;
      }

      if (earlySent || leadId) return;
      if (earlyLeadLock.current) return;

      const fullName = formData.name.trim();
      if (fullName.split(" ").length < 2) return;

       earlyLeadLock.current = true;

      try {
        const newId = await createEarlyLead(fullName, phoneDigits);
        setLeadId(newId);
        setEarlySent(true);
      } catch (err) {
        console.error(" Early Lead Failed:", err);
      }
    },
    [formData.name, earlySent, leadId],
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
          brandType : "Internal",
          brandName: "C2A",
          websiteName: "Connect 2 Attorney",
          formname: "Enquiry Form",
          vertical:'General',
          formPath:'https://connect2attorney.com/',
          data: {
            name: formData.name,
            phone: `+1${rawPhone}`,
            email: formatted,
            ipAddress: await getIPAddress(),
            submissionDate: new Date().toISOString(),
            trustedFormCertUrl: certId || "",
            trustedFormToken: tokenUrl || "",
            trustedFormPingUrl: pingUrl || "",
            pageSource: window.location.href,
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
    try {
      const cleaned = value.replace(/[^a-zA-Z\s]/g, "").replace(/\s{2,}/g, " ");

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
        prev.name === cleaned ? prev : { ...prev, name: cleaned },
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
          formname: "Enquiry Form",
          vertical:'General',
          formPath:'https://connect2attorney.com/',
          finalSubmit: "true",
          data: {
            name: formData.name,
            email: formData.email,
            phone: `+1${rawPhone}`,
            caseType: formData.category,
            description: formData.caseHistory,
            state: formData.state || "",
            ipAddress: await getIPAddress(),
            trustedFormCertUrl: certId || "",
            trustedFormToken: tokenUrl || "",
            trustedFormPingUrl: pingUrl || "",
            submissionDate: new Date().toISOString(),
            pageSource: window.location.href,
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

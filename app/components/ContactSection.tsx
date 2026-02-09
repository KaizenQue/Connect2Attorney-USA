"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Image from "next/image";
import { sendWithEmailJS } from "../emailjs";

const CRM_API_URL =
  "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

// Utility functions (matching your previous form's validation)
const validateName = (value: string) => {
  if (!value.trim()) return "This field is required";
  if (value.trim().length < 2) return "Must be at least 2 characters";
  return "";
};

const validateEmail = (value: string) => {
  if (!value.trim()) return "Email is required";
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(value)) return "Invalid email address";
  return "";
};

const formatUSAMobile = (input: string): string => {
  if (!input) return "";

  // Clean the input - remove all non-digits except plus
  const raw = input.replace(/[^\d+]/g, "");

  // Handle various formats
  if (raw.startsWith("+1")) {
    const digits = raw.slice(2).slice(0, 10);
    if (digits.length === 0) return "+1";
    if (digits.length <= 3) return `+1 (${digits}`;
    if (digits.length <= 6)
      return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }

  // If starts with 1 (without +)
  if (raw.startsWith("1") && raw.length > 1) {
    const digits = raw.slice(1).slice(0, 10);
    if (digits.length === 0) return "1";
    if (digits.length <= 3) return `1 (${digits}`;
    if (digits.length <= 6)
      return `1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }

  // Regular US number without country code
  const digits = raw.slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
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

const validateUSAMobile = (input: string): boolean => {
  if (!input) return false;

  // Remove all formatting
  const digits = input.replace(/\D/g, "");

  // Check if it's +1 format
  if (input.includes("+1")) {
    // +1 followed by 10 digits
    return digits.length === 11 && digits.startsWith("1");
  }

  // Regular 10-digit US number
  return digits.length === 10;
};

const validatePhone = (value: string) => {
  if (!value || value.trim() === "") return "Phone number is required";
  if (!validateUSAMobile(value))
    return "Please enter a valid US phone number (10 digits)";
  return "";
};

const validateMessage = (value: string) => {
  if (!value.trim()) return "Message is required";
  if (value.trim().length < 10) return "Message must be at least 10 characters";
  return "";
};

// Add these functions for consistent form handling
const getIPAddress = async (): Promise<string> => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch {
    return "Unknown";
  }
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

  const generateCaptcha = useCallback(() => {
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
  }, [onCaptchaChange]);

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
  }, [generateCaptcha]);

  // Reset when resetTrigger changes
  useEffect(() => {
    if (resetTrigger) {
      generateCaptcha();
    }
  }, [resetTrigger, generateCaptcha]);

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
  }, [generateCaptcha]);

  const speakCaptcha = useCallback(() => {
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
  }, [captchaText]);

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

const ContactSection = () => {
  type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
    needHelp: boolean;
  };

  const [form, setForm] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
    needHelp: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [trustedFormData, setTrustedFormData] = useState({
    certId: "",
    tokenUrl: "",
    pingUrl: "",
  });
  const [showFullConsent, setShowFullConsent] = useState(false);

  const [leadId, setLeadId] = useState<number | null>(null);
  const [earlySent, setEarlySent] = useState(false);

  const earlyLeadLock = useRef(false);
  const emailSent = useRef(false);

  const normalizePhoneDigits = (input: string) =>
    input.replace(/\D/g, "").slice(-10);

  const format = (input: string) => {
    const digits = normalizePhoneDigits(input);
    return digits.length === 10 ? `+1${digits}` : "";
  };

  // Live validation for each field
  const validateField = useCallback((name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  }, []);

  const sanitizeName = (value: string) =>
    value.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z\s]/g, "");

  const createEarlyLead = async (fullName: string, email: string) => {
    const body = {
      countryName: "USA",
      brandType:'Internal',
      brandName: "C2A",
      websiteName: "Connect 2 Attorney",
      formname: "Contact Section Form",
      sourceUrl: window.location.href,
      vertical:'General',
      formPath:'https://connect2attorney.com/',
      data: {
        name: fullName,
        email,
        submissionDate: new Date().toISOString(),
      },
    };

    const res = await fetch(CRM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(await res.text());

    const json = await res.json();
    return json.id; //  Return leadId
  };

  const updateLeadPhone = async (phoneformatted: string) => {
    const body = {
      countryName: "USA",
      brandType:'Internal',
      brandName: "C2A",
      websiteName: "Connect 2 Attorney",
      formname: "Contact Section Form",
      sourceUrl: window.location.href,
      vertical:'General',
      formPath:'https://connect2attorney.com/',
      data: {
        name: `${form.firstName} ${form.lastName}`.trim(),
        phone: `+1${phoneformatted}`,
        email: form.email,
        ipAddress: await getIPAddress(),
        submissionDate: new Date().toISOString(),
        trustedFormCertUrl: trustedFormData.certId,
        trustedFormToken: trustedFormData.tokenUrl,
        trustedFormPingUrl: trustedFormData.pingUrl,
      },
    };

    const res = await fetch(`${CRM_API_URL}/${leadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(await res.text());
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    //  Checkbox handler
    if (type === "checkbox") {
      if (name === "captchaCheck") {
        setShowCaptcha(checked);
        setCaptchaValid(false);
        if (checked) setResetTrigger((t) => !t);
        return;
      }

      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    //  Name handler
    if (name === "firstName" || name === "lastName") {
      const cleaned = sanitizeName(value);

      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "email") {
      const formatted = value.trim().toLowerCase();

      setForm((prev) => ({ ...prev, email: formatted }));

      if (validateEmail(formatted) !== "") return;

      if (leadId || earlySent) return;

      const fullName =
        `${form.firstName.trim()} ${form.lastName.trim()}`.trim();

      if (fullName.split(" ").length < 2) {
        // console.log(" Waiting for full name before lead create...");
        return;
      }

      try {
        // console.log(" Creating lead from email...");

        const newId = await createEarlyLead(fullName, formatted);

        setLeadId(newId);
        setEarlySent(true);

        // console.log("Lead Created From Email:", newId);
      } catch (err) {
        console.error("Lead Create Failed:", err);
      }

      return;
    }

    // PHONE SECOND → Update Lead Once
    if (name === "phone") {
      const formatted = formatUSAMobile(value);
      setForm((prev) => ({ ...prev, phone: formatted }));

      const phoneDigits = formatted.replace(/\D/g, "");
      if (phoneDigits.length !== 10) return;

      //  Lead must exist first
      if (!leadId) return;

      //  Prevent duplicate updates
      if (earlyLeadLock.current) return;
      earlyLeadLock.current = true;

      try {
        await updateLeadPhone(`+1${phoneDigits}`);

        // console.log(" Phone Updated");
      } catch (err) {
        console.error("Phone Update Failed:", err);
        earlyLeadLock.current = false;
      }

      return;
    }

    // Default field handler
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Blur validation for immediate feedback
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const error = validateField(name, form.phone);
      setErrors({ ...errors, [name]: error });
    } else {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  // Check if form is valid
  const isFormValid = useMemo(() => {
    const basicFieldsValid =
      validateName(form.firstName) === "" &&
      validateName(form.lastName) === "" &&
      validateEmail(form.email) === "" &&
      validatePhone(form.phone) === "" &&
      validateMessage(form.message) === "" &&
      form.consent;

    return basicFieldsValid && captchaValid;
  }, [form, captchaValid]);

  // Watch for TrustedForm fields (similar to your previous form)
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
                const el = targetNode as HTMLInputElement | null;
                if (el && el.name === "xxTrustedFormCertUrl" && el.value) {
                  setTrustedFormData((prev) => ({ ...prev, certId: el.value }));
                }
                if (el && el.name === "xxTrustedFormPingUrl" && el.value) {
                  setTrustedFormData((prev) => ({
                    ...prev,
                    pingUrl: el.value,
                  }));
                }
                if (el && el.name === "xxTrustedFormCertToken" && el.value) {
                  setTrustedFormData((prev) => ({
                    ...prev,
                    tokenUrl: el.value,
                  }));
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
              const el = field as HTMLInputElement;
              if (el && observerInstance) {
                observerInstance.observe(el, {
                  attributes: true,
                  attributeFilter: ["value"],
                });

                if (el.value) {
                  switch (el.name) {
                    case "xxTrustedFormCertUrl":
                      setTrustedFormData((prev) => ({
                        ...prev,
                        certId: el.value,
                      }));
                      break;
                    case "xxTrustedFormPingUrl":
                      setTrustedFormData((prev) => ({
                        ...prev,
                        pingUrl: el.value,
                      }));
                      break;
                    case "xxTrustedFormCertToken":
                      setTrustedFormData((prev) => ({
                        ...prev,
                        tokenUrl: el.value,
                      }));
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
        if (timeoutId !== null) clearTimeout(timeoutId);
        if (observerInstance) observerInstance.disconnect();
      } catch (error) {
        console.error("Error cleaning up TrustedForm observer:", error);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || submitting) return;
    if (!leadId) {
      alert("Lead not created yet. Please enter phone first.");
      return;
    }

    setSubmitting(true);

    try {
      const phoneformatted = format(form.phone);

      const finalBody = {
        countryName: "USA",
        brandType:'Internal',
        brandName: "C2A",
        websiteName: "Connect 2 Attorney",
        formname: "Contact Section Form",
        sourceUrl: window.location.href,
        vertical:'General',
        formPath:'https://connect2attorney.com/',
        finalSubmit: true,
        data: {
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: phoneformatted,
          message: form.message,
          ipAddress: await getIPAddress(),

          trustedFormCertUrl: trustedFormData.certId,
          trustedFormToken: trustedFormData.tokenUrl,
          trustedFormPingUrl: trustedFormData.pingUrl,

          submissionDate: new Date().toISOString(),
          sourceUrl: window.location.href,
        },
      };

      //  Update existing lead
      const res = await fetch(`${CRM_API_URL}/${leadId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalBody),
      });

      if (!res.ok) throw new Error(await res.text());

      // console.log(" CRM Final Submit Success");

      //  EmailJS after CRM
      await sendWithEmailJS(finalBody);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
          needHelp: false,
        });

        setLeadId(null);
        setEarlySent(false);
      }, 2000);
    } catch (err) {
      console.error(" Final Submit Failed:", err);
      alert("Submission failed. Check console.");
    } finally {
      setSubmitting(false);
    }
  };

  const fields: { name: keyof ContactFormData; label: string }[] = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Phone number" },
  ];

  return (
    <div className="flex items-start justify-center bg-white font-sans min-h-[508px] md:min-h-[508px] h-auto  ">
      <div className="flex w-full max-w-7xl">
        {/* LEFT IMAGE */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-8">
          <Image
            src="/HomeForm.png"
            alt="Contact Form"
            width={500}
            height={508}
            className="object-contain"
          />
        </div>

        {/* FORM */}
        <div className="w-full lg:w-[52%] p-6  sm:p-12">
          <h1 className="text-[35px] md:text-[50px] font-normal font-noto-serif text-[#162766] mb-8 text-center leading-[60px] capitalize">
            Take The <span className="text-[#F2C438]">First Step</span>
          </h1>

          {success && (
            <div
              className="fixed top-4 right-4 z-[9999] bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in"
              role="status"
              aria-live="polite"
            >
              <span className="text-sm font-semibold">
                Form submitted successfully!
              </span>
              <button
                onClick={() => setSuccess(false)}
                className="text-white/80 hover:text-white text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            noValidate
          >
            {/* Hidden TrustedForm Fields */}
            <input
              type="hidden"
              name="xxTrustedFormCertUrl"
              value={trustedFormData.certId}
            />
            <input
              type="hidden"
              name="xxTrustedFormCertToken"
              value={trustedFormData.tokenUrl}
            />
            <input
              type="hidden"
              name="xxTrustedFormPingUrl"
              value={trustedFormData.pingUrl}
            />

            {fields.map((field) => (
              <div key={field.name} className="space-y-1">
                <input
                  name={field.name}
                  value={String(form[field.name] ?? "")}
                  onChange={handleChange}
                  onBlur={handleChange}
                  placeholder={field.label}
                  disabled={submitting}
                  className={`w-full p-3 h-[48px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5C844] ${
                    errors[field.name] ? "border-red-500" : "border-[#D0D5DD]"
                  }`}
                  aria-invalid={!!errors[field.name]}
                  aria-describedby={
                    errors[field.name] ? `${field.name}-error` : undefined
                  }
                />
                {errors[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="text-red-500 text-sm mt-1"
                    role="alert"
                  >
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="md:col-span-2 space-y-1">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="How can we help?"
                disabled={submitting}
                className={`w-full p-3 h-20 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#F5C844] ${
                  errors.message ? "border-red-500" : "border-[#D0D5DD]"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Need Help Checkbox - commented out as in your code */}
            {/* <div className="md:col-span-2">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="needHelp"
                  checked={form.needHelp}
                  onChange={handleChange}
                  disabled={submitting}
                  className={checkboxClass}
                />
                <span className="text-[#808080] text-sm">
                  I would be needing help to file a claim?
                </span>
              </label>
            </div> */}

            {/* Consent Checkbox */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  disabled={submitting}
                  required
                  className={checkboxClass}
                />

                <div className="text-[#808080] text-sm leading-relaxed">
                  {/* Short text (always visible) */}
                  <span>
                    I agree to the{" "}
                    <span className="text-[#162766] font-semibold underline cursor-pointer">
                      <a href="/privacy-policy">Privacy Policy &amp; Disclaimer</a>
                      
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
                        provided above, even if this number is a wireless number
                        or if I am presently listed on a Do Not Call list. I
                        understand that I may be contacted by telephone, email,
                        text message or mail regarding case options and that I
                        may be called using automatic dialing equipment. Message
                        and data rates may apply. My consent does not require
                        purchase. This is legal advertising.
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
              </div>
            </div>

            {/* Captcha Checkbox */}
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-start gap-2">
                <input
                  id="captchabox-check"
                  name="captchaCheck"
                  type="checkbox"
                  checked={showCaptcha}
                  onChange={handleChange}
                  disabled={submitting}
                  className={checkboxClass}
                />
                <span className="text-[#808080] text-sm">
                  Please check this box so we know you&apos;re a person and not
                  a computer
                </span>
              </label>

              {showCaptcha && (
                <div className="pl-6">
                  <CustomCaptcha
                    onCaptchaChange={setCaptchaValid}
                    resetTrigger={resetTrigger}
                    disabled={submitting}
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={!isFormValid || submitting}
                className="w-full h-[54px] bg-[#162456] text-white py-3 rounded-full hover:bg-[#2a3b75] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

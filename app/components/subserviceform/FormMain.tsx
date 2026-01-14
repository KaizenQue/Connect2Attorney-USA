// "use client";

// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp,Check  } from "lucide-react";

// const ArrowIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="12"
//     height="12"
//     viewBox="0 0 12 12"
//     fill="none"
//   >
//     <mask
//       id="mask0_552_21704"
//       style={{ maskType: "alpha" }}
//       maskUnits="userSpaceOnUse"
//       x="0"
//       y="2"
//       width="12"
//       height="9"
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M11.7539 2.30086C12.0856 2.6391 12.0807 3.18259 11.743 3.51479L4.59722 10.5436L0.256526 6.27396C-0.0811977 5.94176 -0.0860865 5.39827 0.245606 5.06004C0.577299 4.7218 1.11997 4.7169 1.45769 5.0491L4.59722 8.13724L10.5418 2.28992C10.8796 1.95773 11.4222 1.96262 11.7539 2.30086Z"
//         fill="#006FFD"
//       />
//     </mask>
//     <g mask="url(#mask0_552_21704)">
//       <rect width="11.9995" height="11.9995" fill="#F2C438" />
//     </g>
//   </svg>
// ));

// ArrowIcon.displayName = "ArrowIcon";

// const concerns = [
//   "Medical Complications",
//   "Device Failure",
//   "Infection",
//   "Wrongful Death",
//   "Other",
// ];
// const complications = [
//   "Blood clot, stroke, or pulmonary embolism",
//   "Catheter fracture",
//   "Infection or sepsis",
//   "Cardiac puncture or pericardial effusion",
//   "Others (Specify Type)",
// ];
// // Function to get the initial landing URL
// let initialLandingUrl: string | null = null;

// const getSourceUrl = () => {
//   if (typeof window === "undefined") return "Unknown";

//   // If we haven't stored the initial URL yet, store it
//   if (!initialLandingUrl) {
//     initialLandingUrl = window.location.href;
//   }

//   return initialLandingUrl;
// };

// // Function to get IP address
// const getIPAddress = async () => {
//   try {
//     const response = await fetch("https://api.ipify.org?format=json");
//     const data = await response.json();
//     return data.ip;
//   } catch (error) {
//     console.error("Failed to get IP address:", error);
//     return "IP address not available";
//   }
// };

// /* ---------------- Validation utils ---------------- */
// const validateEmail = (value: string) => {
//   if (!value.trim()) return "This field is required";

//   const email = value.trim().toLowerCase();

//   // one @ only
//   if ((email.match(/@/g) || []).length !== 1) return "Enter a valid email address";

//   const [local, domain] = email.split("@");

//   if (!local || !domain) return "Enter a valid email address";
//   if (local.startsWith(".") || local.endsWith(".") || local.includes(".."))
//     return "Enter a valid email address";

//   if (!/^[a-zA-Z0-9._%+-]+$/.test(local))
//     return "Enter a valid email address";

//   if (!domain.includes(".")) return "Enter a valid email address";
//   if (!/^[a-zA-Z0-9.-]+$/.test(domain)) return "Enter a valid email address";

//   const parts = domain.split(".");
//   const tld = parts[parts.length - 1];

//   if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld))
//     return "Enter a valid email address";

//   return "";
// };

// const normalizeUSPhone = (value: string) => {
//   return value.replace(/\D/g, "").slice(0, 10);
// };

// const validateUSPhone = (value: string) => {
//   if (!value) return "This field is required";
//   return value.length === 10 ? "" : "Enter a valid 10-digit phone number";
// };

// const validateRequired = (value: string) => {
//   if (!value.trim()) return "This field is required";
//   return "";
// };

// const validateConcern = (value: string) => {
//   if (!value) return "Please select a concern";
//   return "";
// };

// const validateComplication = (value: string) => {
//   if (!value) return "Please select a complication type";
//   return "";
// };

// /* ---------------- Phone formatting ---------------- */
// const formatPhone = (value: string) => {
//   const numbers = value.replace(/\D/g, '');
//   if (numbers.length <= 3) return numbers;
//   if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
//   return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
// };

// export default function Form() {
//   const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
//   const [direction, setDirection] = useState<"next" | "back">("next");
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [touched, setTouched] = useState<Record<string, boolean>>({});
//   const [selectedComplication, setSelectedComplication] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [otherValue, setOtherValue] = useState("");
//   const [selectedConcern, setSelectedConcern] = useState("");
//   const [certId, setCertId] = useState("");
//   const [certUrl, setCertUrl] = useState("");
//   const [pingUrl, setPingUrl] = useState("");
//   const [step2Error, setStep2Error] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Step 1
//   const [experiencedComplication, setExperiencedComplication] =
//     useState<"Yes" | "No" | "">("");

//   // Step 2
//   const [complicationType, setComplicationType] = useState("");
//   const [otherComplicationType, setOtherComplicationType] = useState("");

//   // Contact fields
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//   });

//   const next = () => {
//     if (step === 2) {
//       // Validate step 2 before proceeding
//       const complicationError = validateComplication(selectedComplication);
//       if (complicationError) {
//         setStep2Error(complicationError);
//         return;
//       }
//       // Validate "Other" field if needed
//       if (selectedComplication === "Others (Specify Type)" && !otherValue.trim()) {
//         setStep2Error("Please specify the complication type");
//         return;
//       }
//       setStep2Error(""); // Clear error if validation passes
//     }
    
//     setDirection("next");
//     setStep((s) => (s < 4 ? ((s + 1) as any) : s));
//   };

//   const back = () => {
//     setDirection("back");
//     setStep((s) => (s > 1 ? ((s - 1) as any) : s));
//   };

//   /* --------------------------------------------------
//      TrustedForm: load ONLY on data collection step
//   -------------------------------------------------- */
//   useEffect(() => {
//     if (step === 3) {
//       const script = document.createElement("script");
//       script.src = "https://api.trustedform.com/trustedform.js";
//       script.async = true;
//       script.type = "text/javascript";
//       script.setAttribute("data-type", "hidden");
//       script.setAttribute("data-auto-populate", "true");
//       document.body.appendChild(script);

//       return () => {
//         script.remove();
//       };
//     }
//   }, [step]);

//   /* --------------------------------------------------
//      Live validation functions
//   -------------------------------------------------- */
//   const validateFirstName = (value: string) => validateRequired(value);
//   const validateLastName = (value: string) => validateRequired(value);
//   const validatePhoneLive = (value: string) => validateUSPhone(value);
//   const validateEmailLive = (value: string) => validateEmail(value);

//   /* --------------------------------------------------
//      Submit (data collection only)
//   -------------------------------------------------- */
// const handleSubmit = async () => {
//   if (isSubmitting) return;

//   const newErrors = {
//     firstName: validateRequired(form.firstName),
//     lastName: validateRequired(form.lastName),
//     phone: validateUSPhone(form.phone),
//     email: validateEmail(form.email),
//     concern: validateConcern(selectedConcern),
//   };

//   setErrors(newErrors);
//   setTouched({
//     firstName: true,
//     lastName: true,
//     phone: true,
//     email: true,
//     concern: true,
//   });

//   if (Object.values(newErrors).some(Boolean)) return;

//   setIsSubmitting(true);

//   try {
//     // ✅ TrustedForm
//     const tfCertUrl =
//       (document.querySelector(
//         'input[name="xxTrustedFormCertUrl"]'
//       ) as HTMLInputElement)?.value || "";

//     const tfPingUrl =
//       (document.querySelector(
//         'input[name="xxTrustedFormPingUrl"]'
//       ) as HTMLInputElement)?.value || "";

//     const tfCertId = tfCertUrl ? tfCertUrl.split("/").pop() || "" : "";

//     setCertUrl(tfCertUrl);
//     setPingUrl(tfPingUrl);
//     setCertId(tfCertId);

//     // ✅ FULL QUESTIONNAIRE OBJECT (HUMAN READABLE)
//     const questionnaire = {
//       step1: {
//         question:
//           "Have you or a family member experienced any of the following complications after implant?",
//         answer: experiencedComplication,
//       },

//       step2: {
//         question:
//           "Which of the following complications best describes your situation?",
//         selectedOption: selectedComplication,
//         otherText:
//           selectedComplication === "Others (Specify Type)"
//             ? otherComplicationType
//             : "",
//       },

//       step3: {
//         contact: {
//           firstName: form.firstName,
//           lastName: form.lastName,
//           phone: form.phone,
//           email: form.email,
//         },
//         concern: selectedConcern,
//       },
//     };

//     // ✅ FULL DEBUG LOG
//     console.log("🧾 FULL QUESTIONNAIRE:", questionnaire);

//     // ✅ API PAYLOAD (CRM + FULL QUESTIONNAIRE)
//     const apiBody = {
//       countryName: "USA",
//       brandName: "C2A",
//       websiteName: "Connect 2 Attorney",
//       formname: "Enquiry Form",
//       data: {
//         // CRM required fields
//         name: `${form.firstName} ${form.lastName}`,
//         email: form.email,
//         phone: `+1${form.phone}`,
//         category: selectedConcern || "",

//         // Questionnaire flattened
//         experiencedComplication: questionnaire.step1.answer,
//         complicationType: questionnaire.step2.selectedOption,
//         otherComplicationType: questionnaire.step2.otherText,

//         // Full structured dump
//         fullQuestionnaire: questionnaire,

//         // Meta
//         needHelp: false,
//         ipAddress: await getIPAddress(),

//         // TrustedForm
//         trustedFormCertUrl: tfCertUrl,
//         trustedFormToken: tfCertId,
//         trustedFormPingUrl: tfPingUrl,

//         submissionDate: new Date().toISOString(),
//       },
//     };

//     console.log("🚀 FINAL API BODY:", apiBody);

//     // const res = await fetch(
//     //   "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata",
//     //   {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/json" },
//     //     body: JSON.stringify(apiBody),
//     //   }
//     // );

//     // const text = await res.text();

//     // if (!res.ok) {
//     //   throw new Error(text || "API Error");
//     // }

//     // console.log("✅ API Success:", text);

//     next(); // Go to Thank You step
//   } catch (err) {
//     console.error("❌ Submit failed:", err);
//     alert("Submission failed. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };


//   return (
//     <div className="w-full flex items-center justify-center p-2 sm:p-3">
//       {/* Responsive height container - adjusts based on content */}
// <div
//   className="
//     flex flex-col justify-between items-center
//     bg-white rounded-lg shadow-xl overflow-hidden

//     w-full
//     max-w-[371px]

//     min-h-[450px]
//     p-[5px]
    
//   "
// >
// <div className="relative w-full flex flex-col">
//           {/* STEP 1 */}
//           <Step active={step === 1} direction={direction} stepNumber={1}>
//             <div className="flex flex-col h-full">
//               <h3 className="font-urbanist text-[#162766] font-semibold text-[15px] sm:text-[16px] md:text-[18px] leading-tight mb-3 sm:mb-4 flex-shrink-0">
//                 Have you or a family member experienced any of the following complications after implant?
//               </h3>

//               <div className="space-y-2 sm:space-y-3">
//                 <Choice
//                   label="Yes"
//                   onClick={() => {
//                     setExperiencedComplication("Yes");
//                     next();
//                   }}
//                 />

//                 <Choice
//                   label="No"
//                   onClick={() => {
//                     setExperiencedComplication("No");
//                     next();
//                   }}
//                 />
//               </div>
//             </div>
//           </Step>

//           {/* STEP 2 */}
//           <Step active={step === 2} direction={direction} stepNumber={2}>
// <div className="flex flex-col min-h-[510px] justify-between">
//               <h3 className="font-urbanist text-[#162766] font-semibold text-[15px] sm:text-[16px] md:text-[18px] leading-tight mb-3 sm:mb-4 flex-shrink-0">
//                 Have you or a family member experienced any of the following complications after implant?
//               </h3>

//               <div className="relative w-full mt-2">
//                 <button
//                   type="button"
//                   onClick={() => setDropdownOpen((v) => !v)}
//                   className="w-full h-[40px] sm:h-[44px] px-3 flex items-center justify-between rounded-md border border-[#E8E9F0] bg-white font-poppins text-sm sm:text-[14px] font-medium leading-tight text-[#303030] hover:border-[#162766] transition-colors"
//                 >
//                  <span
//   className="
//     truncate
//     font-poppins
//     text-[16px]
//     font-medium
//     leading-[20px]
//     text-[#303030]
//   "
// >
//   {selectedComplication || "Choose from the list"}
// </span>

//                   {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//                 </button>

//         {dropdownOpen && (
//   <div className="absolute z-20 mt-1 w-full rounded-md border border-[#E8E9F0] bg-white shadow-lg overflow-hidden">
//     {complications.map((item) => {
//       const isSelected = selectedComplication === item;

//       return (
//         <div
//           key={item}
//           onClick={() => {
//             setSelectedComplication(item);
//             setComplicationType(item);
//             setDropdownOpen(false);
//             setStep2Error("");
//           }}
//           className={`
//             group
//             h-[40px] sm:h-[44px]
//             px-3
//             flex items-center justify-between
//             cursor-pointer
//             text-sm sm:text-[14px]
//             transition-colors

//             ${
//               isSelected
//                 ? "bg-[#162766] text-white"
//                 : "text-[#162766] hover:bg-[#162766] hover:text-white"
//             }
//           `}
//         >
//           <span className="truncate">{item}</span>

//           {/* Checkmark */}
//           <span
//             className={`
//               text-[#F2C438]
//               transition-opacity duration-150
//               ${
//                 isSelected
//                   ? "opacity-100"
//                   : "opacity-0 group-hover:opacity-100"
//               }
//             `}
//           >
//             ✓
//           </span>
//         </div>
//       );
//     })}
//   </div>
// )}

                
//                 {/* Step 2 error message */}
//                 {step2Error && (
//                   <p className="text-red-500 text-xs mt-1">{step2Error}</p>
//                 )}
//               </div>

//               {selectedComplication === "Others (Specify Type)" && (
//                 <div className="mt-2">
//                <input
//   value={otherValue}
//   onChange={(e) => {
//     setOtherValue(e.target.value);
//     setOtherComplicationType(e.target.value);
//     if (e.target.value.trim()) {
//       setStep2Error("");
//     }
//   }}
//   placeholder="Others (Specify Type)"
//   className="
//     w-full
//     h-[44px]

//     px-4

//     rounded-[10px]
//     border border-[#E8E9F0]
//     bg-white
//     shadow-[0_0_50px_0_rgba(0,0,0,0.15)]

//     font-poppins
//     text-[16px]
//     font-medium
//     leading-[20px]
//     text-[#162766]

//     placeholder:text-[#162766]
//     placeholder:font-poppins
//     placeholder:text-[16px]
//     placeholder:font-medium
//     placeholder:leading-[20px]

//     focus:outline-none
//     focus:border-[#162766]
//   "
// />

//                 </div>
//               )}

//               {/* ✅ Push buttons to bottom */}
//               <div className="mt-auto pt-4">
//                 <Nav back={back} next={next} />
//               </div>
//             </div>
//           </Step>

//           {/* STEP 3 */}
//           <Step active={step === 3} direction={direction} stepNumber={3}>
// <div className="flex flex-col min-h-[510px]">
//               {/* ✅ Heading with breathing room */}
//               <h3 className="font-urbanist text-[#162766] font-semibold text-[15px] sm:text-[16px] md:text-[18px] leading-tight mb-3 flex-shrink-0">
//                 Have you or a family member experienced any of the following complications after implant?
//               </h3>

//               {/* ✅ Form with reduced spacing */}
//               <form className="w-full flex flex-col gap-2 sm:gap-2.5 flex-1">
//                 {/* TrustedForm hidden fields */}
//                 <input type="hidden" name="xxTrustedFormCertUrl" />
//                 <input type="hidden" name="xxTrustedFormCertToken" />
//                 <input type="hidden" name="xxTrustedFormPingUrl" />

//                 {/* First Name */}
//                 <div className="space-y-0.5">
//                   <Input
//                     placeholder="First Name"
//                     requiredMark
//                     error={!!errors.firstName && touched.firstName}
//                     value={form.firstName}
//                     onChange={(e) => {
//                       const v = e.target.value;
//                       setForm((p) => ({ ...p, firstName: v }));
//                       if (touched.firstName)
//                         setErrors((p) => ({ ...p, firstName: validateFirstName(v) }));
//                     }}
//                     onBlur={() => {
//                       setTouched((p) => ({ ...p, firstName: true }));
//                       setErrors((p) => ({
//                         ...p,
//                         firstName: validateFirstName(form.firstName),
//                       }));
//                     }}
//                   />
//                   {errors.firstName && touched.firstName && (
//                     <p className="text-red-500 text-xs">{errors.firstName}</p>
//                   )}
//                 </div>

//                 {/* Last Name */}
//                 <div className="space-y-0.5">
//                   <Input
//                     placeholder="Last Name"
//                     requiredMark
//                     error={!!errors.lastName && touched.lastName}
//                     value={form.lastName}
//                     onChange={(e) => {
//                       const v = e.target.value;
//                       setForm((p) => ({ ...p, lastName: v }));
//                       if (touched.lastName)
//                         setErrors((p) => ({ ...p, lastName: validateRequired(v) }));
//                     }}
//                     onBlur={() => {
//                       setTouched((p) => ({ ...p, lastName: true }));
//                       setErrors((p) => ({
//                         ...p,
//                         lastName: validateRequired(form.lastName),
//                       }));
//                     }}
//                   />
//                   {errors.lastName && touched.lastName && (
//                     <p className="text-red-500 text-xs">{errors.lastName}</p>
//                   )}
//                 </div>

//                 {/* Phone Number */}
//                 <div className="space-y-0.5">
//                   <Input
//                     placeholder="Phone Number"
//                     requiredMark
//                     inputMode="numeric"
//                     value={formatPhone(form.phone)}
//                     error={!!errors.phone && touched.phone}
//                     onChange={(e) => {
//                       const raw = normalizeUSPhone(e.target.value);
//                       const formatted = formatPhone(raw);
//                       setForm((p) => ({ ...p, phone: raw }));
//                       if (touched.phone) {
//                         setErrors((p) => ({
//                           ...p,
//                           phone: validatePhoneLive(raw),
//                         }));
//                       }
//                     }}
//                     onBlur={() => {
//                       setTouched((p) => ({ ...p, phone: true }));
//                       setErrors((p) => ({
//                         ...p,
//                         phone: validatePhoneLive(form.phone),
//                       }));
//                     }}
//                   />
//                   {errors.phone && touched.phone && (
//                     <p className="text-red-500 text-xs">{errors.phone}</p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div className="space-y-0.5">
//                   <Input
//                     placeholder="Email Address"
//                     requiredMark
//                     error={!!errors.email && touched.email}
//                     value={form.email}
//                     onChange={(e) => {
//                       const v = e.target.value;
//                       setForm((p) => ({ ...p, email: v }));
//                       if (touched.email)
//                         setErrors((p) => ({ ...p, email: validateEmailLive(v) }));
//                     }}
//                     onBlur={() => {
//                       setTouched((p) => ({ ...p, email: true }));
//                       setErrors((p) => ({
//                         ...p,
//                         email: validateEmailLive(form.email),
//                       }));
//                     }}
//                   />
//                   {errors.email && touched.email && (
//                     <p className="text-red-500 text-xs">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Concern Select */}
//                 <div className="space-y-0.5">
//                   <SelectConcern
//                     value={selectedConcern}
//                     options={concerns}
//                     touched={touched.concern}
//                     error={errors.concern}
//                     onChange={(v) => {
//                       setSelectedConcern(v);
//                       if (touched.concern) {
//                         setErrors((p) => ({
//                           ...p,
//                           concern: validateConcern(v),
//                         }));
//                       }
//                     }}
//                     onBlur={() => {
//                       setTouched((p) => ({ ...p, concern: true }));
//                       setErrors((p) => ({
//                         ...p,
//                         concern: validateConcern(selectedConcern),
//                       }));
//                     }}
//                   />
//                   {errors.concern && touched.concern && (
//                     <p className="text-red-500 text-xs">{errors.concern}</p>
//                   )}
//                 </div>

//                 {/* ✅ Submit Button */}
//                 <div className="pt-2 mt-auto">
//                   <button
//                     type="button"
//                     onClick={handleSubmit}
//                     className="w-full bg-[#FCCB48] text-[#162766] font-semibold py-2.5 rounded-md hover:bg-[#e5b93f] transition text-sm sm:text-[14px]"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </Step>

//           {/* STEP 4 — THANK YOU */}
//  {/* STEP 4 — THANK YOU */}
// <Step active={step === 4} direction={direction} stepNumber={4}>
//   {/* This wrapper fills the available step area */}
//   <div className="relative w-full min-h-[450px]">
//     {/* Background */}
//     <img
//       src="/bgshape.svg"
//       alt=""
//       className="absolute top-0 left-0 w-full pointer-events-none"
//     />

//     {/* Absolute center container */}
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div className="relative z-10 flex flex-col items-center text-center px-4">
//         <img
//           src="/person.svg"
//           alt="Submission successful"
//           className="w-12 h-12 mb-4"
//         />

//         <h2 className="font-urbanist text-[#162766] font-medium text-xl sm:text-2xl md:text-3xl leading-tight mb-2">
//           Thank You!
//         </h2>

//         <p className="font-urbanist text-[#162766] font-medium text-xs sm:text-sm md:text-base leading-relaxed max-w-[260px]">
//           Your case review has been submitted.
//           <br />
//           Our team will contact you shortly.
//         </p>
//       </div>
//     </div>
//   </div>
// </Step>


//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- Responsive Components ---------------- */

// function Step({
//   active,
//   direction,
//   children,
//   stepNumber,
// }: {
//   active: boolean;
//   direction: "next" | "back";
//   children: React.ReactNode;
//   stepNumber?: number;
// }) {
//   if (!active) return null; // 🔥 IMPORTANT: only render active step

//   return (
//     <div
//       className="
//         relative
//         w-full
//         transition-all
//         duration-300
//         ease-out
//         opacity-100
//         translate-x-0
//       "
//     >
//       <div
//         className={`
//           flex flex-col w-full
//           ${stepNumber === 4 ? "p-0" : "p-3 sm:p-4"}
//         `}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }


// function Choice({ label, onClick }: { label: string; onClick: () => void }) {
//   return (
//     <button
//       onClick={onClick}
//       className="group w-full h-[38px] sm:h-[42px] flex items-center justify-between px-3 rounded-md border border-[#E2E4EA] bg-white font-poppins text-sm sm:text-[14px] font-medium leading-tight text-[#303030] transition-colors duration-200 hover:bg-[#162766] hover:text-white hover:border-[#162766]"
//     >
//       <span>{label}</span>
//       <ArrowIcon className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 w-3.5 h-3.5 sm:w-4 sm:h-4" />
//     </button>
//   );
// }

// function Input(
//   props: React.InputHTMLAttributes<HTMLInputElement> & {
//     error?: boolean;
//     requiredMark?: boolean;
//   }
// ) {
//   const { error, requiredMark, placeholder, className, ...rest } = props;

//   return (
//     <div className="relative w-full">
//       {/* Required star */}
//       {requiredMark && (
//         <span className="absolute top-2 right-2 text-red-500">*</span>
//       )}

// <input
//   {...rest}
//   placeholder={placeholder}
//   className={`
//     w-full

//     h-[38px] sm:h-[42px] md:h-[46px] lg:h-[50px]

//     px-3 sm:px-4 md:px-5

//     rounded-md
//     border
//     ${error ? "border-red-400" : "border-[#D0D5DD]"}
//     bg-white
//     shadow-sm

//     font-urbanist
//     text-sm sm:text-[14px] md:text-[15px] lg:text-[16px]
//     font-medium
//     text-[#162766]
//     placeholder:text-[#808080]

//     focus:outline-none
//     focus:ring-1 focus:ring-[#162766]/20
//     focus:border-[#162766]

//     ${className}
//   `}
// />

//     </div>
//   );
// }

// function Nav({ back, next }: { back: () => void; next: () => void }) {
//   return (
//     <div className="flex gap-2 pt-2">
//       <button
//         onClick={back}
//         className="w-full rounded-md border border-gray-300 py-2 text-sm sm:text-[14px] hover:bg-gray-100 transition"
//       >
//         Back
//       </button>

//       <button
//         onClick={next}
//         className="w-full bg-[#FCCB48] text-[#162766] font-semibold py-2 rounded-md hover:bg-[#e5b93f] transition text-sm sm:text-[14px]"
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// function SelectConcern({
//   value,
//   onChange,
//   options,
//   error,
//   touched,
//   onBlur,
// }: {
//   value: string;
//   onChange: (v: string) => void;
//   options: string[];
//   error?: string;
//   touched?: boolean;
//   onBlur?: () => void;
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative w-full">
//       {/* Trigger */}
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         onBlur={onBlur}
//         className={`
//           w-full
//           h-[38px] sm:h-[40px]
//           px-3
//           flex items-center justify-between
//           rounded-md
//           border
//           ${error && touched ? "border-red-400" : "border-[#D0D5DD]"}
//           bg-white
//           shadow-sm
//           font-urbanist
//           text-sm sm:text-[14px]
//           font-medium
//           text-[#162766]
//           hover:border-[#162766]
//           focus:border-[#162766]
//         `}
//       >
//         <span className="truncate text-left">
//           {value || (
//             <>
//               Select Your Concern <span className="text-red-500">*</span>
//             </>
//           )}
//         </span>

//         <span className="w-7 h-7 flex items-center justify-center rounded bg-[#FCCB48] flex-shrink-0 ml-1.5">
//           <ChevronDown
//             size={14}
//             className={`transition-transform ${open ? "rotate-180" : ""}`}
//           />
//         </span>
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div
//           className="
// absolute top-full left-0 right-0 mt-1 z-10
//             max-h-[160px] overflow-y-auto
//             rounded-md border border-[#D0D5DD]
//             bg-white shadow-lg
//           "
//         >
//           {options.map((item) => (
//             <div
//               key={item}
//               onClick={() => {
//                 onChange(item);
//                 setOpen(false);
//               }}
//               className="
//                 px-3 py-2.5 cursor-pointer text-sm sm:text-[14px]
//                 font-urbanist text-[#162766]
//                 hover:bg-[#F4F6FA]
//               "
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }















"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { ChevronDown, ChevronUp, Pencil } from "lucide-react";

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


];

/* ---------------- Utils ---------------- */

let initialLandingUrl: string | null = null;

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";

  if (!initialLandingUrl) {
    const { origin, pathname } = window.location;
    initialLandingUrl = origin + pathname; // ✅ STRIPS QUERY PARAMS
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

const normalizePhone = (v: string) => v.replace(/\D/g, "").slice(0, 10);

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6)
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
    6,
    10
  )}`;
};
const PencilIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path  fillRule="evenodd" clipRule="evenodd" d="M17.8791 4.51278C17.9583 4.63296 17.9935 4.77677 17.979 4.91994C17.9644 5.06311 17.9008 5.19686 17.7991 5.29862L10.1382 12.9586C10.0599 13.0369 9.96209 13.093 9.85491 13.1211L6.66408 13.9544C6.5586 13.982 6.44777 13.9814 6.34257 13.9528C6.23738 13.9243 6.14148 13.8687 6.06441 13.7916C5.98733 13.7145 5.93175 13.6186 5.90319 13.5135C5.87462 13.4083 5.87407 13.2974 5.90158 13.1919L6.73491 10.002C6.75983 9.90642 6.80566 9.81761 6.86908 9.74195L14.5582 2.05778C14.6754 1.94074 14.8343 1.875 14.9999 1.875C15.1655 1.875 15.3244 1.94074 15.4416 2.05778L17.7991 4.41445C17.8282 4.44515 17.8549 4.47802 17.8791 4.51278ZM16.4732 4.85612L14.9999 3.38362L7.90158 10.4819L7.38075 12.4761L9.37491 11.9553L16.4732 4.85612Z" fill="#162766"/>
  <path d="M16.3677 14.2981C16.5954 12.3514 16.6682 10.3897 16.5852 8.43144C16.5832 8.38529 16.5909 8.33924 16.6077 8.2962C16.6244 8.25316 16.65 8.21408 16.6827 8.18144L17.5027 7.36144C17.5251 7.33891 17.5535 7.32333 17.5846 7.31656C17.6156 7.3098 17.648 7.31215 17.6777 7.32333C17.7075 7.33451 17.7333 7.35404 17.7523 7.37957C17.7712 7.40511 17.7823 7.43556 17.7843 7.46728C17.9383 9.79332 17.8797 12.1285 17.6093 14.4439C17.4127 16.1289 16.0593 17.4498 14.3818 17.6373C11.4696 17.9596 8.53073 17.9596 5.61851 17.6373C3.94184 17.4498 2.58767 16.1289 2.39101 14.4439C2.0461 11.4901 2.0461 8.50613 2.39101 5.55228C2.58767 3.86728 3.94101 2.54644 5.61851 2.35894C7.82888 2.11482 10.0558 2.05544 12.276 2.18144C12.3078 2.18373 12.3382 2.19507 12.3638 2.21412C12.3893 2.23318 12.4088 2.25915 12.42 2.28896C12.4313 2.31877 12.4337 2.35118 12.4271 2.38234C12.4205 2.4135 12.4051 2.44211 12.3827 2.46478L11.5552 3.29144C11.5228 3.32382 11.4842 3.34918 11.4416 3.36595C11.399 3.38273 11.3534 3.39055 11.3077 3.38894C9.45497 3.32549 7.6001 3.39651 5.75767 3.60144C5.21929 3.66103 4.71672 3.90038 4.33114 4.28082C3.94555 4.66126 3.69948 5.16058 3.63267 5.69811C3.29839 8.55503 3.29839 11.4412 3.63267 14.2981C3.69948 14.8356 3.94555 15.335 4.33114 15.7154C4.71672 16.0958 5.21929 16.3352 5.75767 16.3948C8.55351 16.7073 11.4468 16.7073 14.2435 16.3948C14.7819 16.3352 15.2845 16.0958 15.67 15.7154C16.0556 15.335 16.3009 14.8356 16.3677 14.2981Z" fill="#162766"/>
</svg>
));
/* ---------------- Validation ---------------- */

const validateEmail = (value: string) => {
  if (!value.trim()) return "Required";
  if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email";
  return "";
};

const validateRequired = (v: string) => (!v.trim() ? "Required" : "");

const validatePhone = (v: string) =>
  normalizePhone(v).length === 10 ? "" : "Enter 10 digit phone";

/* ---------------- Analytics ---------------- */

const track = (event: string, data?: any) => {
  console.log("📊 ANALYTICS:", event, data || {});
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

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let offsets: number[] = [];
    
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
      selectedVoice = voices.find(
        (voice) =>
          voice.lang === "en-US" && 
          voice.name.toLowerCase().includes("male") || 
          voice.name.toLowerCase().includes("david") ||
          voice.name.toLowerCase().includes("microsoft david")
      ) || voices.find((voice) => voice.lang === "en-US") || voices[0];
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
            disabled || isSpeaking ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
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
      className={`text-[11px] ${disabled ? "text-gray-400" : "text-gray-600"}`}
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
      <p className="text-green-500 text-[11px] mt-1">
        ✓ Verified
      </p>
    )}
  </div>
</div>

  );
};
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
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
      // 🔄 Full reset
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
    }, 1000); // ⏱️ 1 second

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
      setShowCaptcha(false);
      setRobotChecked(false);
      setCaptchaVerified(false);
      setCaptchaResetTrigger((prev) => !prev);
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

  /* ---------------- Validation ---------------- */

  const validateStep1 = useCallback(() => {
    const e: Record<string, string> = {};
    e.firstName = validateRequired(form.firstName);
    e.lastName = validateRequired(form.lastName);
    e.phone = validatePhone(form.phone);
    e.email = validateEmail(form.email);
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
    [validateStep1, validateStep2]
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

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const tfCertUrl =
        (document.querySelector(
          'input[name="xxTrustedFormCertUrl"]'
        ) as HTMLInputElement)?.value || "";

      const tfPingUrl =
        (document.querySelector(
          'input[name="xxTrustedFormPingUrl"]'
        ) as HTMLInputElement)?.value || "";

      const tfCertId = tfCertUrl ? tfCertUrl.split("/").pop() || "" : "";

      const apiBody = {
        countryName: "USA",
        brandName: "C2A",
        websiteName: "Connect 2 Attorney",
        formname: "Enquiry Form",
        sourceUrl: getSourceUrl(),
        data: {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: `+1${normalizePhone(form.phone)}`,
          zip: form.zip,
          caseType,
          description,
          ipAddress: await getIPAddress(),

          trustedFormCertUrl: tfCertUrl,
          trustedFormToken: tfCertId,
          trustedFormPingUrl: tfPingUrl,

          submissionDate: new Date().toISOString(),
        },
      };

      console.log("🚀 FINAL API BODY:", apiBody);

      // await fetch("...", { method: "POST", headers: {...}, body: JSON.stringify(apiBody) });

      track("form_submitted", { caseType });

      setDirection("next");
      setStep(4);
    } catch (e) {
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="w-full  flex justify-center items-center p-3 sm:p-4">
      <div
        ref={containerRef}
        className="
          flex
          flex-col

          w-full
          max-w-[447px]

          bg-white
          rounded-xl
          shadow-xl

          overflow-hidden
          overflow-y-auto
        "
      >
    {/* ---------------- STEP 1 ---------------- */}
<Step active={step === 1} direction={direction}>
  <form 
    className="flex flex-col h-full p-4"
    onSubmit={(e) => {
      e.preventDefault(); 
      next();
    }}
  >
    {/* TrustedForm hidden fields */}
    <input type="hidden" name="xxTrustedFormCertUrl" />
    <input type="hidden" name="xxTrustedFormCertToken" />
    <input type="hidden" name="xxTrustedFormPingUrl" />

    {/* Content Section - Takes available space */}
    <div className="flex-1 space-y-2"> {/* Reduced from space-y-3 */}
      <h2 className="text-[#162766] font-urbanist text-[22px] font-semibold leading-[28px]">
        It's easy to get started
      </h2>
      <p className="text-[#6E6E6E] font-urbanist text-[14px] font-medium mb-2"> {/* Added mb-2 */}
        Provide a few details and our team will take it from here.
      </p>

      <Input 
        label="First name" 
        value={form.firstName} 
        error={errors.firstName} 
        onChange={(v) => setForm(p => ({...p, firstName: v}))}
      />
      <Input 
        label="Last name" 
        value={form.lastName} 
        error={errors.lastName} 
        onChange={(v) => setForm(p => ({...p, lastName: v}))}
      />
      <Input 
        label="Phone number" 
        value={formatPhone(form.phone)} 
        error={errors.phone} 
        onChange={(v) => setForm(p => ({...p, phone: normalizePhone(v)}))}
      />
      <Input 
        label="Email" 
        value={form.email} 
        error={errors.email} 
        onChange={(v) => setForm(p => ({...p, email: v}))}
      />
      <Input 
        label="Zip code" 
        value={form.zip} 
        error={errors.zip} 
        onChange={(v) => setForm(p => ({...p, zip: v}))}
      />
    </div>

   {/* Progress Bar & Button Section - Always at bottom */}
<div className="mt-4 pt-4 -mx-5">
  <ProgressBar step={step} />
</div>

<div>
  <button
    type="submit"
    className="w-full bg-[#FCCB48] text-[#162766] font-semibold py-3 rounded-lg mt-3"
  >
    Next
  </button>
</div>

  </form>
</Step>

        {/* ---------------- STEP 2 ---------------- */}
        <Step active={step === 2} direction={direction}>
          <div className="flex flex-col h-full p-4" ref={dropdownRef}>
            {/* Content Section - Takes available space */}
            <div className="flex-1 space-y-3">
              <h2 className="text-[#162766] font-urbanist text-[22px] font-semibold leading-[28px]">
                Select Your Case
              </h2>

              {/* Custom dropdown */}
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                className="w-full h-[50px] px-4 rounded-[10px] border border-[#E2E4EA] flex items-center justify-between font-poppins text-[16px] font-medium text-[#303030]"
              >
                <span className="truncate">{caseType || "Choose from the list"}</span>
                {dropdownOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
              </button>

             {dropdownOpen && (
  <div className="mt-1 w-full rounded-md border border-[#E8E9F0] bg-white shadow-lg overflow-hidden max-h-[176px] overflow-y-auto">
    {CASES.map((item) => {
      const isSelected = caseType === item;
      return (
        <div
          key={item}
          onClick={() => {
            setCaseType(item);
            setDropdownOpen(false);
            setErrors({});
          }}
          className={`group h-[44px] px-3 flex items-center justify-between cursor-pointer transition-colors ${
            isSelected
              ? "bg-[#162766] text-white"
              : "text-[#162766] hover:bg-[#162766] hover:text-white"
          }`}
        >
          <span className="truncate">{item}</span>
          <span
            className={`text-[#F2C438] ${
              isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            ✓
          </span>
        </div>
      );
    })}
  </div>
)}


              {errors.caseType && <p className="text-xs text-red-500">{errors.caseType}</p>}

              <input
                placeholder="Please describe what happened"
                className="w-full border border-[#E2E4EA] rounded-[10px] p-3 min-h-[100px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

         {/* Progress Bar & Button Section - Always at bottom */}
<div className="mt-4 pt-4 -mx-5">
  <ProgressBar step={step} />
</div>

<div>
  <button
    onClick={next}
    className="w-full bg-[#FCCB48] text-[#162766] font-semibold py-3 rounded-lg mt-3"
  >
    Next
  </button>
</div>

          </div>
        </Step>

        {/* ---------------- STEP 3 ---------------- */}
        <Step active={step === 3} direction={direction}>
          <div className="flex flex-col h-full">

            {/* ================= CONTENT ================= */}
            <div className="flex-1 p-4 space-y-4">
              <h2 className="text-[#162766] font-urbanist text-[22px] font-semibold leading-[28px]">
                Confirm your Personal Details
              </h2>

              {/* Details Card */}
              <div className="border border-[#E6E8F0] rounded-xl p-4 space-y-2 text-sm">
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
                    <PencilIcon className="w-4 h-4" />
                  </button>
                </div>

                <Row label="Last name" value={form.lastName} />
                <Row label="Phone number" value={formatPhone(form.phone)} />
                <Row label="Email" value={form.email} />
                <Row label="Zip code" value={form.zip} />
                <Row label="Case Type" value={caseType} />
              </div>

              {/* ================= CONSENT + CAPTCHA ================= */}
              <div className="pt-2 space-y-3">

                {/* Checkbox + Text */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={robotChecked}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setRobotChecked(checked);

                      if (checked) {
                        setShowCaptcha(true);
                      } else {
                        setShowCaptcha(false);
                        setCaptchaVerified(false);
                        setCaptchaResetTrigger((p) => !p);
                      }
                    }}
                    className="mt-[3px] w-[16px] h-[16px]"
                  />

                  <span className="font-urbanist text-[12px] font-normal tracking-[0.24px] leading-[16px] text-[#425777]">
                    I hereby expressly consent to receive automated communications including calls, texts, emails, and/or prerecorded messages.
                    <br />
                    <br />
                    By submitting this form, you agree to our{" "}
                    <span className="underline cursor-pointer">Terms</span> & acknowledge our{" "}
                    <span className="underline cursor-pointer">Privacy Policy</span>.
                  </span>
                </label>

                {/* CAPTCHA */}
                {showCaptcha && (
                  <div className="pt-2">
                    <CustomCaptcha
                      onCaptchaChange={(valid) => {
                        setCaptchaVerified(valid);
                        if (valid) setRobotChecked(true);
                      }}
                      resetTrigger={captchaResetTrigger}
                      disabled={isSubmitting}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* ================= BOTTOM BAR ================= */}
            {/* Full-width progress bar */}
<div className="-mx-4">
  <ProgressBar step={step} />
</div>

{/* Button stays padded */}
<div className="p-4">
  <button
    disabled={isSubmitting || !captchaVerified}
    className={`w-full h-[48px] rounded-lg font-semibold transition-all ${
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
<Step active={step === 4} direction={direction} >
  {/* This wrapper fills the available step area */}
  <div className="relative w-full min-h-[450px]">
    {/* Background */}
    <img
      src="/bgshape.svg"
      alt=""
      className="absolute top-0 left-0 w-full pointer-events-none"
    />

    {/* Absolute center container */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src="/success_check.svg"
          alt="Submission successful"
          className="w-24 h-24 mb-4"
        />

        <h2 className="font-urbanist text-[#162766] font-medium text-xl sm:text-2xl md:text-3xl leading-tight mb-2">
          Thank You!
        </h2>

       <p className="font-urbanist text-[#6E6E6E] font-medium text-[16px] leading-normal text-center max-w-[260px]">
  We've received your request and will begin processing it shortly.
</p>

      </div>
    </div>
  </div>
</Step>


      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Step({ active, direction, children }: { active: boolean; direction: "next" | "back"; children: React.ReactNode }) {
  if (!active) return null;
  return (
    <div className={`transition-all duration-300 ease-out ${direction === "next" ? "animate-in slide-in-from-right" : "animate-in slide-in-from-left"}`}>
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
    <div className="mb-1"> {/* Reduced vertical spacing between inputs */}
      <input
        className={`
          w-full
          h-[50px]
          px-[16px]
          rounded-[10px]
          border
          ${error ? "border-red-400" : "border-[#E2E4EA]"}
          bg-white

          font-poppins
          text-[16px]
          font-medium
          leading-[20px]
          text-[#303030]

          placeholder:text-[#303030]
          placeholder:opacity-70
          placeholder:font-poppins
          placeholder:text-[16px]
          placeholder:font-medium
          placeholder:leading-[20px]

          focus:outline-none
          focus:border-[#162766]
          transition
        `}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && (
        <p className="text-[10px] text-red-500 mt-0.5 pl-1"> {/* Reduced from text-xs (12px) to 10px, tighter margin */}
          {error}
        </p>
      )}
    </div>
  );
}



function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 whitespace-nowrap">
        {label}:
      </span>
      <span className="font-medium text-[#162766] break-all">
        {value}
      </span>
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
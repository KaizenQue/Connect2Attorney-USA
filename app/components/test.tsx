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

  // ✅ TrustedForm – run EVERY time popup opens
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.TrustedForm && window.TrustedForm.certify) {
        window.TrustedForm.certify();
        console.log("TrustedForm certified on popup open");
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex bg-white overflow-hidden font-sans flex-col">
      <div className="w-full px-12 mx-auto flex flex-row relative max-w-[2000px]">
        <div className="relative w-full max-w-[1560px] mx-auto h-[750px] overflow-hidden">
          {/* Full SVG Background */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/contactusbgfull.svg"
              alt="Contact background"
              fill
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 w-full h-full px-[40px] flex items-center">
            {/* Left Content Section */}
            <div className="w-1/2 pr-12">
              <div className="max-w-[720px]">
                <h1
                  className="
                    font-noto-serif font-normal text-white capitalize
                    mb-8 lg:mb-10

                    text-[36px] leading-[44px]
                    sm:text-[44px] sm:leading-[52px]
                    md:text-[56px] md:leading-[64px]
                    lg:text-[40px] lg:leading-[50px]
                    xl:text-[76px] xl:leading-[78px]
                    2xl:text-[76px] 2xl:leading-[86px]
                  "
                >
                  Get Your{" "}
                  <span className="inline text-[#F2C438]">Free Case</span>
                  <span className="block lg:inline text-white">
                    {" "}
                    Review Today
                  </span>
                </h1>
                
                {/* ADDED: 28K Text from Screenshot */}
                <div className="mb-10 lg:mb-12">
                  <p
                    className="
                      font-noto-serif font-normal text-white
                      text-[100px] leading-[90px]
                      sm:text-[120px] sm:leading-[110px]
                      md:text-[140px] md:leading-[130px]
                      lg:text-[80px] lg:leading-[75px]
                      xl:text-[160px] xl:leading-[150px]
                      2xl:text-[180px] 2xl:leading-[170px]
                    "
                  >
                    28K
                  </p>
                </div>
                
                <div className="space-y-6 lg:space-y-7 mb-10 lg:mb-12">
                  {/* ITEM 1 */}
                  <div className="flex items-start gap-4">
                    <div className="text-[#F5C844] mt-1 flex-shrink-0">
                      <MagnifyingGlassIcon />
                    </div>
                    <p
                      className="
                        text-blue-100 font-urbanist font-bold
                        text-[16px] leading-[22px]
                        sm:text-[17px] sm:leading-[23px]
                        md:text-[18px] md:leading-[24px]
                        lg:text-[18px] lg:leading-[24px]
                      "
                    >
                      <span className="text-[#F2C438]">Free, </span>
                      Confidential Case Reviews.
                    </p>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex items-start gap-4">
                    <div className="text-[#F5C844] mt-1 flex-shrink-0">
                      <DocumentIcon />
                    </div>
                    <p
                      className="
                        text-blue-100 font-urbanist font-bold
                        text-[16px] leading-[22px]
                        sm:text-[17px] sm:leading-[23px]
                        md:text-[18px] md:leading-[24px]
                        lg:text-[18px] lg:leading-[24px]
                      "
                    >
                      Serving All{" "}
                      <span className="text-[#F2C438]">50 States.</span>
                    </p>
                  </div>

                  {/* ITEM 3 */}
                  <div className="flex items-start gap-4">
                    <div className="text-[#F5C844] mt-1 flex-shrink-0">
                      <MoneyBagIcon />
                    </div>
                    <p
                      className="
                        text-blue-100 font-urbanist font-bold
                        text-[16px] leading-[22px]
                        sm:text-[17px] sm:leading-[23px]
                        md:text-[18px] md:leading-[24px]
                        lg:text-[18px] lg:leading-[24px]
                      "
                    >
                      <span className="text-[#F2C438]">No Fees</span> Unless
                      You Win.
                    </p>
                  </div>
                </div>

                {/* Partner statistics card */}
                <div className="mt-8">
                  <Image
                    src="/Partner statistics card.svg"
                    alt="Get A Free Case Review"
                    width={200}
                    height={200}
                    className="w-82 h-42"
                  />
                </div>
              </div>
            </div>

            {/* Right Form Section - Aligned to right */}
            <div className="w-1/2 flex justify-end">
              <div
                className="
                  flex flex-col justify-center items-end
                  w-full max-w-[358px]
                "
              >
                     <form
                 className="w-full bg-white rounded-xl shadow-2xl border border-[#e5e8ef] p-4 md:p-5 space-y-3"
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
                       <span className={formData.category ? "text-[#162766]" : "text-[#808080]"}>
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
                   <label className="flex items-start gap-2 text-xs text-[#5a627e]">
                     <input 
                       type="checkbox" 
                       className="mt-0.5 w-3.5 h-3.5 text-[#162766] border-[#D0D5DD] rounded focus:ring-[#F2C438]" 
                     />
                     <span>I would be needing help to file a claim?</span>
                   </label>
                   
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
                             Privacy Policy &amp; Disclaimer
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
                               to affiliates and/or attorneys to contact me at the number provided
                               above, even if this number is a wireless number or if I am presently
                               listed on a Do Not Call list. I understand that I may be contacted by
                               telephone, email, text message, or mail regarding case options and that
                               I may be called using automatic dialing equipment. Message and data
                               rates may apply. My consent does not require purchase. This is legal
                               advertising.
                             </span>
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
                       Please check this box so we know you&apos;re a person and not a computer
                     </label>
                   </div>
               
                   {/* Captcha Component */}
                   {showCaptcha && (
                     <div className="mt-2">
                       <CustomCaptcha
                         onCaptchaChange={onCaptchaChange}
                         resetTrigger={resetTrigger}
                         disabled={isSubmitting}
                         compact={true}
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
      </div>
    </div>
  );
};
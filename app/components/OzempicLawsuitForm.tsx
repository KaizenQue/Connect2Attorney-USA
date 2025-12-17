"use client";

import React, { useState } from 'react';
import { FaCheck, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const OzempicLawsuitForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  // Step 1: Yes/No
  const [hasComplications, setHasComplications] = useState<string | null>(null);
  // Step 2: Specific Complications
  const [selectedComplication, setSelectedComplication] = useState<string | null>(null);
  const [otherComplication, setOtherComplication] = useState('');
  // Step 3: Contact Info
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    concern: ''
  });
  
  const [isCompleted, setIsCompleted] = useState(false);

  const complications = [
    "Blood clot, stroke, or pulmonary embolism",
    "Catheter fracture",
    "Infection or sepsis",
    "Cardiac puncture or pericardial effusion"
  ];

  const handleNext = () => {
    if (currentStep === 0 && hasComplications) {
        if (hasComplications === 'No') {
            // Logic for No? For now, let's proceed to contact or thank you.
            // Assuming "No" might skip step 2?
            // The image shows Step 2 is selecting complications. If "No", they likely don't select complications.
            // Let's jump to Contact (Step 2 index -> Step 3 visual) or Finish.
            // I'll assume standard lead gen: No -> Disqualified or Contact.
            // For this implementation: No -> Jump to Step 3 (Contact) or generic ending.
            // Let's just go to next step for now, but logical flow would be skip Step 2.
            setCurrentStep(2); 
        } else {
            setCurrentStep(1);
        }
    } else if (currentStep === 1) {
        if (selectedComplication) {
            setCurrentStep(2);
        }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
        // If we skipped step 1 (unlikely), just go back 1.
        // If we are at Step 2 (Contact) and came from 'No' in Step 0, we should go back to 0.
        if (currentStep === 2 && hasComplications === 'No') {
            setCurrentStep(0);
        } else {
            setCurrentStep(prev => prev - 1);
        }
    }
  };

  const handleSubmit = () => {
    // Validate form data
    if (formData.firstName && formData.lastName && formData.phone && formData.email) {
        setIsCompleted(true);
    } else {
        alert("Please fill in all fields");
    }
  };

  // Helper for contact form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center font-sans overflow-x-hidden">
      {/* Internal Styles for Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600;700&display=swap');
          .font-merriweather { font-family: 'Merriweather', serif; }
          .font-opensans { font-family: 'Open Sans', sans-serif; }
          .vertical-text { writing-mode: vertical-rl; text-orientation: mixed; }
        `}
      </style>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531206715517-5c0ba140b1b8?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-[#050e3c]/90"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between h-full max-w-6xl gap-10 lg:gap-0">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 text-left text-white">
          <h1 className="font-merriweather text-[#fdd85d] text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-4">
            Ozempic And GLP-1 <br /> Drug Lawsuit
          </h1>
          <p className="text-lg opacity-90">
             If you or a loved one suffered from Gastroparesis (Stomach Paralysis) or other complications after using Ozempic, you may be entitled to significant compensation.
          </p>
        </div>

        {/* Right Side: Stepper Form */}
        <div className="w-full lg:w-[450px] flex-shrink-0">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 min-h-[550px] flex flex-col font-opensans transition-all duration-300 relative">
            
            {!isCompleted ? (
              <>
                {/* Header Question - Consistent across steps 1 and 2 */}
                {currentStep < 2 && (
                    <p className="text-[#1a1f4d] text-lg font-bold mb-6 leading-relaxed">
                    Have you or a family member experienced any of the following complications after implant?
                    </p>
                )}
                {currentStep === 2 && (
                    <p className="text-[#1a1f4d] text-lg font-bold mb-6 leading-relaxed">
                    Have you or a family member experienced any of the following complications after implant?
                    </p>
                )}

                {/* Step 0: Yes/No */}
                {currentStep === 0 && (
                  <div className="flex-grow flex flex-col gap-4 animate-fadeIn">
                    <button
                      onClick={() => { setHasComplications('Yes'); handleNext(); }}
                      className={`w-full text-left px-5 py-4 border rounded-lg transition-all duration-200 flex justify-between items-center group
                        ${hasComplications === 'Yes' 
                          ? 'bg-[#1a1f4d] border-[#1a1f4d] text-white' 
                          : 'bg-white border-gray-200 text-gray-600 hover:border-[#1a1f4d] hover:text-[#1a1f4d]'
                        }`}
                    >
                      <span className="font-semibold">Yes</span>
                      {hasComplications === 'Yes' && <FaCheck className="text-white" />}
                    </button>

                    <button
                      onClick={() => { setHasComplications('No'); }}
                      className={`w-full text-left px-5 py-4 border rounded-lg transition-all duration-200 flex justify-between items-center group
                        ${hasComplications === 'No' 
                          ? 'bg-[#1a1f4d] border-[#1a1f4d] text-white' 
                          : 'bg-white border-gray-200 text-gray-600 hover:border-[#1a1f4d] hover:text-[#1a1f4d]'
                        }`}
                    >
                      <span className="font-semibold">No</span>
                      {hasComplications === 'No' && <FaCheck className="text-white" />}
                    </button>
                    
                     {/* Next Button for Step 0 - optional if auto-advance is preferred for Yes/No, 
                        but image shows selection state. Let's add Next button if selection is made. */}
                     <div className="mt-auto pt-6">
                        {hasComplications && (
                            <button 
                                onClick={handleNext}
                                className="w-full bg-[#f2c94c] text-[#1a1f4d] font-bold py-3 rounded-md hover:bg-[#e0b83e] transition-colors"
                            >
                                Next
                            </button>
                        )}
                     </div>
                  </div>
                )}

                {/* Step 1: Complications List */}
                {currentStep === 1 && (
                  <div className="flex-grow flex flex-col animate-fadeIn h-full">
                    <div className="flex-grow space-y-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                        <div className="relative">
                            <button 
                                className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg text-gray-500 flex justify-between items-center"
                            >
                                <span>Choose from the list</span>
                                <FaChevronDown size={12} />
                            </button>
                            
                            {/* Expanded List styling to match image "cards" */}
                            <div className="mt-2 space-y-2">
                                {complications.map((comp) => (
                                    <div 
                                        key={comp}
                                        onClick={() => { setSelectedComplication(comp); setOtherComplication(''); }}
                                        className={`p-3 border rounded-lg cursor-pointer transition-all flex justify-between items-center
                                            ${selectedComplication === comp
                                                ? 'bg-[#1a1f4d] border-[#1a1f4d] text-white'
                                                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="text-sm font-medium">{comp}</span>
                                        {selectedComplication === comp && <FaCheck size={12} />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Others Input */}
                        <div className="mt-4">
                            <input 
                                type="text"
                                placeholder="Others (Specify Type)"
                                value={otherComplication}
                                onChange={(e) => {
                                    setOtherComplication(e.target.value);
                                    setSelectedComplication('Others');
                                }}
                                className={`w-full p-3 border rounded-lg outline-none focus:border-[#1a1f4d] transition-colors
                                    ${selectedComplication === 'Others' ? 'border-[#1a1f4d] bg-[#fdfdfd]' : 'border-gray-200'}
                                `}
                            />
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-6 flex gap-3">
                        <button 
                            onClick={handleBack}
                            className="flex-1 py-3 border border-[#1a1f4d] text-[#1a1f4d] font-semibold rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Back
                        </button>
                        <button 
                            onClick={handleNext}
                            disabled={!selectedComplication && !otherComplication}
                            className={`flex-1 py-3 font-bold rounded-md transition-colors
                                ${selectedComplication || otherComplication
                                    ? 'bg-[#f2c94c] text-[#1a1f4d] hover:bg-[#e0b83e]'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }
                            `}
                        >
                            Next
                        </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Form */}
                {currentStep === 2 && (
                    <div className="flex-grow flex flex-col animate-fadeIn">
                        <div className="space-y-3">
                            <input 
                                type="text" 
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-[#1a1f4d]"
                            />
                            <input 
                                type="text" 
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-[#1a1f4d]"
                            />
                            <input 
                                type="tel" 
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-[#1a1f4d]"
                            />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-[#1a1f4d]"
                            />
                            <div className="relative">
                                <select 
                                    name="concern"
                                    value={formData.concern}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#f2c94c] rounded-lg outline-none bg-white appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Your Concern</option>
                                    <option value="Review">Case Review</option>
                                    <option value="Question">General Question</option>
                                </select>
                                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button 
                                onClick={handleSubmit}
                                className="w-full bg-[#f2c94c] text-[#1a1f4d] font-bold py-3.5 rounded-md hover:bg-[#e0b83e] transition-colors shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
              </>
            ) : (
              // Success State
              <div className="flex flex-col items-center justify-center h-full text-center animate-fadeIn py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <FaCheckCircle size={40} className="text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-[#1a1f4d] mb-4">Thank You!</h2>
                <p className="text-gray-600 text-lg">
                  Your case review has been submitted. <br/> Our team will contact you shortly.
                </p>
              </div>
            )}

            {/* Progress Bar (Optional, matches style) */}
            {!isCompleted && (
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 rounded-t-xl overflow-hidden">
                    <div 
                        className="h-full bg-[#1a1f4d] transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                    ></div>
                 </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzempicLawsuitForm;
import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex items-center justify-center bg-white p-4 font-sans py-16">
      
      {/* Main Container */}
      <div className="flex w-full max-w-6xl">
        
        {/* LEFT SIDE: Image Section 
            - 'hidden': Hides this section by default (Mobile view).
            - 'lg:flex': Shows this section only on large screens (Desktop view).
        */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-8 relative">
          {/* 
            Replace the src below with your actual composite image 
            (the one with the badge, meeting, and headphones).
          */}
          <img 
            src="/HomeForm.png" 
            alt="Contact Form" 
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT SIDE: Form Section 
            - 'w-full': Takes full width on mobile.
            - 'lg:w-1/2': Takes half width on desktop.
        */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12">
          
          {/* Heading */}
          <h1 className="text-[50px] font-noto-serif font-normal text-[#162766] mb-8 text-center leading-[60px] capitalize">
            Take The <span className="text-[#F2C438]">First Step</span>
          </h1>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* First Name */}
            <div>
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#162456] transition-colors"
              />
            </div>

            {/* Last Name */}
            <div>
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#162456] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#162456] transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#162456] transition-colors"
              />
            </div>

            {/* Message Textarea (Spans 2 columns on desktop) */}
            <div className="md:col-span-2">
              <textarea 
                placeholder="How can we help?" 
                className="w-full p-3 h-32 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#162456] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button (Spans 2 columns on desktop) */}
            <div className="md:col-span-2 mt-2">
              <button 
                type="submit" 
                className="w-full bg-[#162456] text-white font-medium py-3 px-6 rounded-full hover:bg-[#2a3b75] transition-colors"
              >
                Get started
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;


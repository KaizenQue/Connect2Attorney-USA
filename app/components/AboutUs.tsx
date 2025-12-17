import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative w-full h-[65vh] overflow-hidden font-sans">
      
      {/* 1. Background Image - Mobile */}
      <img 
        src="/AUNMN.png"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full md:hidden"
      />
      
      {/* 1. Background Image - Desktop */}
      <img 
        src="/AUNMNN.png"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full hidden md:block"
      />

      {/* 3. Left-Center Text Content */}
      <div className="absolute top-[10%] md:top-[15%] left-[3%] md:left-[5%] z-20 max-w-[90%] md:max-w-[600px] w-[94%] md:w-[90%] px-2 md:px-0">
        <h1 
          className="font-noto-serif font-normal capitalize mb-4 md:mb-6"
          style={{
            fontSize: '60px',
            lineHeight: '70px',
            letterSpacing: '0px',
          }}
        >
          <span className="text-[#1A237E]">About</span>{' '}
          <span className="text-[#FBC02D]">Us</span>
        </h1>
        <p 
          className="font-urbanist font-normal text-gray-700 mb-3 md:mb-4"
          style={{
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0px',
          }}
        >
          Free, confidential case reviews. Serving all 50 states. No fees unless you win. Understand Your Rights in Minutes Your Bridge To Trusted Legal Solutions
        </p>
        <p 
          className="font-urbanist font-normal text-gray-700"
          style={{
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0px',
          }}
        >
          C2A bridges the gap between victims seeking justice and the right legal experts they need. We transform overwhelming choices into tailored connections, isolated clients into empowered voices, and complex legal challenges into clear, guided pathways toward resolution.
        </p>
      </div>

      {/* 4. Left-Bottom Button */}
      <a 
        href="#" 
        className="absolute bottom-[3%] md:bottom-[5%] left-[3%] md:left-[5%] z-20 group bg-[#fbc02d] text-[#1a237e] px-7 py-4 rounded-2xl font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0%] align-middle inline-flex items-center gap-4 shadow-lg shadow-yellow-500/20 hover:-translate-y-1 transition-transform duration-200 w-fit md:w-auto justify-start"
      >
        About Us
        <div className="bg-[#1a237e] w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-opacity-90">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fbc02d"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </a>

    </div>
  );
};

export default AboutUs;


import React from 'react';

const OzempicInfo = () => {
  return (
    <>
      {/* 2. Main Container */}
<div className="hidden lg:flex w-full justify-center items-center bg-white font-sans pb-5">
        
        <div 
          className="
            relative w-full
            bg-[#19224D] 
            rounded-3xl 
            overflow-hidden 
            flex flex-col md:flex-row 
            items-start md:items-center
            min-h-[600px] md:min-h-[270px]
          "
        >
          
          <div 
            className="
              absolute inset-0 z-0 
              bg-no-repeat bg-cover bg-right md:bg-contain md:bg-right 
              transition-all duration-500
            bg-[url('/image21.png')] md:bg-[url('/image21.png')]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#19224D] via-[#19224D]/90 to-transparent md:bg-gradient-to-r md:from-[#19224D] md:via-[#19224D]/80 md:to-transparent"></div>
          </div>

          {/* 3. Content Section */}
          <div className="relative z-10 w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            
            <h1
              className="font-noto-serif font-normal capitalize text-white mb-6 text-[25px] md:text-[40px] leading-[50px]"
              style={{
           
               
                letterSpacing: '0px',
              }}
            >
             Start Your  
  <span className="text-[#F2C94C]"> Free Case</span> Review Today
            </h1>

           <p className="font-urbanist font-normal text-[#F9F9F9] text-[16px] leading-[30px] capitalize mb-8 max-w-lg">
  Connect2Attorney can help you take legal action.
</p>


            <button 
              className="
                bg-[#F2C94C] 
                text-[#19224D] 
                font-urbanist font-semibold
                uppercase 
                tracking-wide 
                py-4 px-8 
                rounded-lg 
                w-full max-w-md md:w-auto
                transition-transform hover:-translate-y-1 hover:bg-[#ffd65c]
                text-base
              "
              style={{ lineHeight: '100%', letterSpacing: '0%', fontWeight: 600 }}
            >
              Start a Free Case Review
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default OzempicInfo;
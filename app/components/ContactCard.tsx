import React from 'react';

const ContactCard = () => {
  return (
    // 1. PAGE WRAPPER
    // - Changed 'items-center' to 'items-end' to push content to bottom
    // - Changed 'bg-center' to 'bg-bottom' so the background skyline isn't cut off
    // - Adjusted padding: larger top padding, smaller bottom padding
    <div className="w-full flex justify-center items-end 
                    pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20
                    min-h-[600px] md:min-h-[700px] lg:min-h-[800px]
                    bg-[url('/LastSection.png')] 
                    bg-no-repeat bg-cover bg-bottom">

      {/* Container for image and overlay content */}
      <div className="relative w-full max-w-6xl px-4">

        {/* Mask group image */}
        <img
          src="/Mask group.png"
          alt="Contact section"
          className="w-full h-auto object-contain"
        />

        {/* Text and button overlay */}
        {/* Keeps original positioning logic so text doesn't break */}
        <div className="absolute left-4 md:left-0 bottom-[10%] md:bottom-[15%] lg:bottom-[18%]
                        transform translate-x-2 md:translate-x-12 lg:translate-x-16
                        flex flex-col gap-2 md:gap-5 items-start text-left
                        max-w-[90%] md:max-w-[55%] lg:max-w-[45%]">

          <h2
            className="font-noto-serif font-normal capitalize text-[#162766] leading-tight text-base sm:text-xl md:text-4xl lg:text-[60px]"
            style={{ letterSpacing: '0px', lineHeight: '1.15' }}
          >
            Still have more questions?
          </h2>

          <div>
            <button
              className="px-4 py-2 md:px-8 md:py-3.5 lg:px-10 lg:py-4
                              bg-[#F2C438] hover:bg-[#E0B030] text-[#162766] font-urbanist font-semibold
                              rounded-lg md:rounded-xl
                              transition-colors duration-200
                              shadow-lg hover:shadow-xl
                              transform hover:scale-105 transition-transform
                              text-sm sm:text-base md:text-lg"
              style={{ lineHeight: '100%', letterSpacing: '0%', fontWeight: '600' }}
            >
              Reach out to us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
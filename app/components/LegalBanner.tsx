import React from 'react';

const LegalBanner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
      
      {/* Main Card Container */}
      <div className="flex w-full max-w-[850px] flex-col drop-shadow-2xl">
        
        {/* --- Top Section (Blue Background + Text + Image) --- */}
        {/* 
            Desktop: Rounded Top-Left, Top-Right. 
            Mobile: All rounded (except bottom where button attaches).
        */}
        <div className="relative flex min-h-[260px] flex-col overflow-hidden rounded-t-3xl bg-[#111E48] md:flex-row md:rounded-br-3xl">
          
          {/* Text Content */}
          <div className="relative z-10 flex flex-1 flex-col justify-center p-8 pb-4 text-white md:max-w-[55%] md:p-12 md:pb-4">
            <h1 
              className="mb-4 font-noto-serif font-normal capitalize leading-tight"
              style={{
                fontSize: 'clamp(28px, 6vw, 60px)',
                lineHeight: 'clamp(36px, 7vw, 70px)',
                letterSpacing: '0px',
              }}
            >
              <span className="block text-[#FFC845]">Ready</span>
              to Get Started?
            </h1>
            <p 
              className="max-w-sm font-urbanist font-normal opacity-90"
              style={{
                fontSize: '18px',
                lineHeight: '24px',
                letterSpacing: '0px',
              }}
            >
              Don&apos;t wait to seek the justice you deserve. Contact us today to schedule your free case evaluation.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative h-56 w-full md:h-auto md:flex-1">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1589216532380-16206f7158ca?q=80&w=1000&auto=format&fit=crop" 
              alt="Legal Statue" 
              className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
            />
            
            {/* Blue Overlay (Monochrome Effect) */}
            <div className="absolute inset-0 bg-[#111E48] mix-blend-color opacity-80"></div>
            
            {/* Gradient Overlay (Fade text into image) */}
            {/* Gradient goes UP on mobile, LEFT-TO-RIGHT on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111E48] via-[#111E48]/60 to-transparent md:bg-gradient-to-r md:from-[#111E48] md:via-[#111E48]/50"></div>
          </div>
        </div>

        {/* --- Bottom Section (Button + Connector + Filler) --- */}
        <div className="flex h-[65px] w-full">
          
          {/* 1. The Button */}
          <a 
            href="#" 
            className="flex h-full w-full items-center justify-center rounded-b-3xl bg-[#FFC845] px-10 font-urbanist font-semibold uppercase text-[#1a1a1a] transition hover:bg-[#ffdb73] md:w-auto md:rounded-bl-3xl md:rounded-br-2xl md:rounded-tr-none md:rounded-tl-none"
            style={{
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%',
              fontWeight: '600',
            }}
          >
            Check if you Qualify
          </a>

          {/* 2. The Inverted Corner Connector (Desktop Only) */}
          {/* This creates the concave curve between the yellow button and blue filler */}
          <div className="hidden h-full w-[30px] md:block">
            <div className="h-full w-full bg-[radial-gradient(circle_at_bottom_left,transparent_30px,#111E48_31px)]"></div>
          </div>

          {/* 3. The Blue Filler (Desktop Only) */}
          <div className="mt-[-1px] hidden flex-1 rounded-br-3xl bg-[#111E48] md:block"></div>
          
        </div>

      </div>
    </div>
  );
};

export default LegalBanner;


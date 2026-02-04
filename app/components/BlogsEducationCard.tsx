import React from 'react';

const BlogsEducationCard = () => {
  return (
    <>
      {/* 
        Injecting the font here for the demo. 
        Ideally, put this in your index.css or _document.js 
      */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&display=swap');
          .blogs-bg-container {
            background-image: url('/BM.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          @media (min-width: 768px) {
            .blogs-bg-container {
              background-image: url('/BD.png');
            }
          }`}
      </style>

      {/* Page Wrapper - Full Width */}
      <div className="bg-gray-100 font-sans py-16 min-h-[400px] w-full">
        
        {/* 
          Main Container - The Deep Blue Frame 
          Using padding (p-4) and gap (gap-4) to create the borders and the central "notch"
        */}
        <div className="blogs-bg-container relative w-full p-4 rounded-[35px] flex flex-col md:flex-row gap-4 shadow-xl">
          
          {/* Floating Button (Top Right) */}
          <a 
            href="https://legalcaseinfo.com/"  target="_blank"
            className="absolute -top-5 right-8 z-20 bg-[#f2c94c] hover:bg-[#e0b83b] text-[#1a2350] font-bold py-3 px-6 rounded-xl shadow-lg flex items-center gap-3 transition-transform hover:-translate-y-1 group"
          >
            See All Blogs
            <div className="bg-[#1a2350] text-[#f2c94c] p-1 rounded-md">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>

          {/* Left Side: Text Section */}
          <div className="flex-1 bg-white rounded-t-[25px] md:rounded-l-[25px] md:rounded-r-[10px] md:rounded-tr-[10px] flex items-center justify-center md:justify-start pl-0 md:pl-16 py-12 md:py-0 relative">
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#1a2350] text-center md:text-left">
              <span className="text-[#f0c445]">Blogs</span> & <br />
              Education
            </h1>
          </div>

          {/* Right Side: Image Section */}
          <div className="flex-1 bg-white rounded-b-[25px] md:rounded-r-[25px] md:rounded-l-[10px] md:rounded-bl-[10px] overflow-hidden relative h-64 md:h-80">
            {/* 
              Image with a gradient mask overlay to soften the edges if needed, 
              though the reference implies a clean crop.
            */}
            
            {/* Optional gradient fade at the bottom left of the image to blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent md:hidden"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogsEducationCard;


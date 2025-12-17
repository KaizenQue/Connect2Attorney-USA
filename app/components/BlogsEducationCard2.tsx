import React from 'react';

const BlogsEducationCard2 = () => {
  return (
    <section
      className="relative w-full h-[65vh] bg-cover bg-center flex items-center pl-[5%] md:pl-[8%] pr-[5%] bg-[url('/BMNN.png')] md:bg-[url('/BDNN.png')]"
    >
      {/* See All Blogs Button - Top Right */}
      <a 
        href="#" 
        className="absolute top-8 md:top-10 right-[5%] z-10 group bg-[#fbc02d] text-[#1a237e] px-7 py-4 rounded-2xl font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0%] align-middle inline-flex items-center gap-4 shadow-lg shadow-yellow-500/20 hover:-translate-y-1 transition-transform duration-200 w-fit md:w-auto justify-start"
      >
        See All Blogs
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

      {/* Main Content - Left Center */}
      <div className="max-w-xl z-10">
        {/* Text / Title */}
        <h1 
          className="font-noto-serif font-normal capitalize"
          style={{
            fontSize: '60px',
            lineHeight: '70px',
            letterSpacing: '0px',
          }}
        >
          <span className="text-[#FDCF42]">Blogs</span>
          <br />
          <span className="text-[#1C2D5C]">& Education</span>
        </h1>
      </div>
    </section>
  );
};

export default BlogsEducationCard2;
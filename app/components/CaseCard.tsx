"use client";

import React from 'react';

interface CaseCardProps {
  id: number;
  title: string;
  image: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ id, title, image }) => {
  return (
    <div 
      className="
        relative h-[380px] md:h-[400px] lg:h-[420px] 
        w-[280px] sm:w-[320px] md:w-full min-w-[280px] md:min-w-0
        flex-shrink-0 md:flex-shrink
        bg-[#1e2c5f] rounded-[20px] overflow-hidden 
        group cursor-pointer snap-center
        transition-transform duration-300 lg:hover:-translate-y-2
        
        /* THE NOTCH TRICK: Top-Right colored block */
        before:content-[''] before:absolute before:top-0 before:right-0 
        before:w-[75px] before:h-[75px] 
        before:bg-[#111e4d] /* Must match container background */
        before:rounded-bl-[30px] before:z-10 before:pointer-events-none
      "
    >
      {/* Card Notch Image */}
      <div className="
        absolute top-0 right-0 w-[55px] h-[55px] 
        flex items-center justify-center z-20 
        bg-transparent
        rounded-bl-2xl 
        transition-colors duration-300
      ">
        <img 
          src="/CardNotch.png" 
          alt="Card Notch" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover block"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-0" />

      {/* Content */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 z-10 pr-4">
        <h2 className="font-noto-serif font-semibold text-[24px] text-white leading-[34px] tracking-[0%] whitespace-pre-line">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CaseCard;



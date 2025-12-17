import React from 'react';

const MassTortCard = () => {
  // Pill configuration to keep JSX clean
  const pills = [
    { color: 'navy' },
    { color: 'yellow' },
    { color: 'navy' },
    { color: 'yellow' },
    { color: 'navy' },
  ];

  return (
    <div className="w-full flex justify-start py-12 bg-white font-sans">
      <div 
        className="
          relative 
          w-[95%] 
          min-h-[280px] 
          bg-[#f2f4f6] 
          flex 
          items-center 
          overflow-hidden
          /* Mobile Clip Path (smaller cut) */
          [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)]
          /* Desktop Clip Path (larger cut - 80px) */
          md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-80px),calc(100%-80px)_100%,0_100%)]
        "
      >
        
        {/* Text Content */}
        <div 
          className="
            z-10 
            text-[#38426b] 
            font-urbanist 
            font-normal
            w-full 
            max-w-[1100px]
            
            /* Responsive Padding */
            pl-5 
            pr-[100px]
            md:pl-[50px] 
            md:pr-[180px] 
            lg:pr-[250px]
          "
          style={{
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0px',
          }}
        >
          We Specialize In Mass Tort Cases, Supporting Individuals Harmed By Defective Products, Dangerous Drugs, Or Corporate Misconduct.
        </div>

        {/* Pattern Wrapper */}
        <div className="
          absolute 
          top-[-30px] 
          bottom-[-20px] 
          flex 
          gap-[15px]
          
          /* Responsive Positioning & Scaling */
          right-[-10px] 
          scale-75 origin-top-right
          
          md:right-[60px] 
          md:scale-100
          
          lg:right-[100px]
        ">
          
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {pills.map((pill, index) => (
              <div 
                key={`left-${index}`} 
                className={`
                  w-4 h-[65px] rounded-full 
                  ${pill.color === 'navy' ? 'bg-[#172a5a]' : 'bg-[#f5c946]'}
                `}
              />
            ))}
          </div>

          {/* Right Column (Staggered) */}
          <div className="flex flex-col gap-3 pt-[50px]">
            {pills.map((pill, index) => (
              <div 
                key={`right-${index}`} 
                className={`
                  w-4 h-[65px] rounded-full 
                  ${pill.color === 'navy' ? 'bg-[#172a5a]' : 'bg-[#f5c946]'}
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MassTortCard;
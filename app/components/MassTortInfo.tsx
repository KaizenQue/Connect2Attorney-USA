// import React from 'react';

// const MassTortInfo = () => {
//   return (
//     <div 
//       className="relative w-11/12 md:w-10/12 h-[70vh] md:h-[72vh] mx-auto bg-center bg-no-repeat bg-contain overflow-hidden bg-[url('/MTHM.png')] md:bg-[url('/MTHD.png')]"
//     >

//       {/* Left-center heading */}
//       <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10">
//         <p className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
//           Ready
//         </p>
//         <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
//           To Get Started?
//         </h1>
//       </div>

//       {/* Center paragraph */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-[32rem] bg-white/10 border border-white/25 backdrop-blur-sm rounded-xl p-6 md:p-7 text-center z-10">
//         <p className="text-white text-base md:text-lg leading-relaxed">
//           Don't wait to seek the justice you deserve. Contact us today to schedule
//           your free case evaluation.
//         </p>
//       </div>

//       {/* Bottom-left button */}
//       <button className="absolute bottom-12 left-6 md:left-12 bg-[#f3c041] hover:bg-[#e5b12f] text-[#0d1d4a] font-semibold py-3 px-8 rounded shadow-lg transition duration-300 uppercase tracking-wide z-10">
//         Get a Free Case Review
//       </button>
//     </div>
//   );
// };

// export default MassTortInfo;

import React from 'react';

const MassTortInfo = () => {
  return (
    <>
      {/* 2. Main Container */}
      <div className="w-full flex justify-center items-center min-h-screen bg-white p-4 font-sans">
        
        <div 
          className="
            relative w-full max-w-7xl 
            bg-[#19224D] 
            rounded-3xl 
            shadow-2xl 
            overflow-hidden 
            flex flex-col md:flex-row 
            items-start md:items-center
            min-h-[600px] md:min-h-[400px]
          "
        >
          {/* 
             Background Image Layer 
             - Mobile: Positioned bottom-center (shows the person)
             - Desktop: Positioned center-right (shows person on right)
          */}
          <div 
            className="
              absolute inset-0 z-0 
              bg-no-repeat bg-cover bg-right md:bg-cover md:bg-right 
              transition-all duration-500
            bg-[url('/MTHM%20(2).png')] md:bg-[url('/MTHD%20(2).png')]
            "
          >
            {/* 
               Gradient Overlay 
               - Mobile: Dark gradient from top to bottom so text is readable
               - Desktop: Gradient from left to right to blend text area
            */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#19224D] via-[#19224D]/90 to-transparent md:bg-gradient-to-r md:from-[#19224D] md:via-[#19224D]/80 md:to-transparent"></div>
          </div>

          {/* 3. Content Section */}
          <div className="relative z-10 w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
            
            <h1
              className="font-noto-serif font-normal capitalize text-white mb-6"
              style={{
                fontSize: 'clamp(36px, 7vw, 60px)',
                lineHeight: 'clamp(44px, 8vw, 70px)',
                letterSpacing: '0px',
              }}
            >
              <span className="text-[#F2C94C]">Ready</span> To Get Started?
            </h1>

            <p
              className="font-urbanist font-normal text-gray-200 mb-8 max-w-lg"
              style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
            >
              Don't Wait To Seek The Justice You Deserve. Contact Us Today To Schedule Your Free Case Evaluation.
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
                shadow-lg 
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

export default MassTortInfo;
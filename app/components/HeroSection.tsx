// // // import React from 'react';

// // // const Dropdown = () => {
// // //     return (
// // //         <div 
// // //             className="flex items-center bg-white rounded-full shadow-lg border border-gray-100"
// // //             style={{
// // //                 padding: '12px 8px 12px 24px',
// // //                 minWidth: '320px',
// // //             }}
// // //         >
// // //             <span 
// // //                 className="flex-1 text-[#162766] font-medium"
// // //                 style={{ fontSize: '16px' }}
// // //             >
// // //                 Talcum Powder Lawsuit
// // //             </span>
// // //             <button 
// // //                 className="flex items-center justify-center rounded-md"
// // //                 style={{
// // //                     backgroundColor: '#F5C844',
// // //                     width: '36px',
// // //                     height: '36px',
// // //                 }}
// // //             >
// // //                 <svg 
// // //                     xmlns="http://www.w3.org/2000/svg" 
// // //                     width="16" 
// // //                     height="16" 
// // //                     viewBox="0 0 24 24" 
// // //                     fill="none" 
// // //                     stroke="#162766" 
// // //                     strokeWidth="3" 
// // //                     strokeLinecap="round" 
// // //                     strokeLinejoin="round"
// // //                 >
// // //                     <polyline points="6 9 12 15 18 9"></polyline>
// // //                 </svg>
// // //             </button>
// // //         </div>
// // //     );
// // // };

// // // const ShapeSvg = () => {
// // //     return (
// // //         <div className="relative">
// // //             <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="765"
// // //                 height="800"
// // //                 viewBox="0 0 665 643"
// // //                 fill="none"
// // //                 className="object-cover"
// // //                 preserveAspectRatio="none"
// // //             >
// // //                 <path
// // //                     d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
// // //                     fill="#F0F2F4"
// // //                 />
// // //             </svg>
// // //             {/* Dropdown positioned on top of SVG */}
// // //             <div 
// // //                 className="absolute"
// // //                 style={{
// // //                     top: '0',
// // //                     left: '50%',
// // //                     transform: 'translate(-50%, 40px)',
// // //                 }}
// // //             >
// // //                 <Dropdown />
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // const CardSvg = () => {
// // //     return (
// // //         <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             width="219"
// // //             height="119"
// // //             viewBox="0 0 219 119"
// // //             fill="none"
// // //         >
// // //             <foreignObject
// // //                 x="0"
// // //                 y="0.000326157"
// // //                 width="218.964"
// // //                 height="119"
// // //             >
// // //                 <div
// // //                     style={{
// // //                         backdropFilter: 'blur(16px)',
// // //                         clipPath: 'url(#bgblur_0_246_17970_clip_path)',
// // //                         height: '100%',
// // //                         width: '100%',
// // //                     }}
// // //                 />
// // //             </foreignObject>
// // //             <g
// // //                 filter="url(#filter0_d_246_17970)"
// // //                 data-figma-bg-blur-radius="32"
// // //             >
// // //                 <path
// // //                     d="M33.3155 16.1472C36.0971 8.08053 43.6902 2.66699 52.223 2.66699H182.964C194.01 2.66699 202.964 11.6213 202.964 22.667V69.667C202.964 80.7127 194.01 89.667 182.964 89.667H36.0161C22.2781 89.667 12.6302 76.1347 17.1086 63.1472L33.3155 16.1472Z"
// // //                     fill="#162766"
// // //                 />
// // //             </g>
// // //             <defs>
// // //                 <filter
// // //                     id="filter0_d_246_17970"
// // //                     x="0"
// // //                     y="0.000326157"
// // //                     width="218.964"
// // //                     height="119"
// // //                     filterUnits="userSpaceOnUse"
// // //                     colorInterpolationFilters="sRGB"
// // //                 >
// // //                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
// // //                     <feColorMatrix
// // //                         in="SourceAlpha"
// // //                         type="matrix"
// // //                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
// // //                         result="hardAlpha"
// // //                     />
// // //                     <feMorphology
// // //                         radius="4"
// // //                         operator="erode"
// // //                         in="SourceAlpha"
// // //                         result="effect1_dropShadow_246_17970"
// // //                     />
// // //                     <feOffset dy="13.3333" />
// // //                     <feGaussianBlur stdDeviation="10" />
// // //                     <feComposite in2="hardAlpha" operator="out" />
// // //                     <feColorMatrix
// // //                         type="matrix"
// // //                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
// // //                     />
// // //                     <feBlend
// // //                         mode="normal"
// // //                         in2="BackgroundImageFix"
// // //                         result="effect1_dropShadow_246_17970"
// // //                     />
// // //                     <feBlend
// // //                         mode="normal"
// // //                         in="SourceGraphic"
// // //                         in2="effect1_dropShadow_246_17970"
// // //                         result="shape"
// // //                     />
// // //                 </filter>
// // //                 <clipPath
// // //                     id="bgblur_0_246_17970_clip_path"
// // //                     transform="translate(0 -0.000326157)"
// // //                 >
// // //                     <path d="M33.3155 16.1472C36.0971 8.08053 43.6902 2.66699 52.223 2.66699H182.964C194.01 2.66699 202.964 11.6213 202.964 22.667V69.667C202.964 80.7127 194.01 89.667 182.964 89.667H36.0161C22.2781 89.667 12.6302 76.1347 17.1086 63.1472L33.3155 16.1472Z" />
// // //                 </clipPath>
// // //             </defs>
// // //         </svg>
// // //     );
// // // };

// // // const LeftSvg = () => {
// // //     return (
// // //         <svg xmlns="http://www.w3.org/2000/svg" width="965"
// // //             height="800" viewBox="0 0 876 643" className="object-cover"
// // //             preserveAspectRatio="none">
// // //             <path d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z" fill="#162766" />

// // //         </svg>
// // //     );
// // // };

// // // const HeroSection = () => {
// // //     return (
// // //         <section className="flex flex-col md:flex-row w-full min-h-screen relative overflow-hidden">
// // //             {/* Left Part */}
// // //             <div 
// // //                 className="w-full md:w-[55%] h-[70vh] md:h-auto relative"
// // //                 style={{
// // //                     transform: 'translateX(clamp(0%, 5vw, 10%))',
// // //                 }}
// // //             >
// // //                 <LeftSvg />
// // //             </div>

// // //             {/* Right Part */}
// // //             <div 
// // //                 className="w-full md:w-[60%] h-[80vh] md:h-auto relative"
// // //                 style={{
// // //                     transform: 'translateX(clamp(-2%, -1vw, 2%))',
// // //                 }}
// // //             >
// // //                 <ShapeSvg />
// // //                 <div 
// // //                     className="absolute"
// // //                     style={{
// // //                         bottom: 'clamp(8%, 14%, 20%)',
// // //                         right: 'clamp(12%, 20%, 28%)',
// // //                         transform: 'scale(clamp(0.9, 1vw, 1))',
// // //                     }}
// // //                 >
// // //                     <CardSvg />
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default HeroSection;


// // "use client";

// // import React from 'react';

// // // --- Icons ---

// // const ArrowUpRightIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //     <line x1="7" y1="17" x2="17" y2="7"></line>
// //     <polyline points="7 7 17 7 17 17"></polyline>
// //   </svg>
// // );

// // const ChevronDownIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //      <polyline points="6 9 12 15 18 9"></polyline>
// //   </svg>
// // );

// // const ArrowRightIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <line x1="5" y1="12" x2="19" y2="12"></line>
// //     <polyline points="12 5 19 12 12 19"></polyline>
// //   </svg>
// // );

// // const ScrollArrowIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //       <path d="M12 5v14M19 12l-7 7-7-7"/>
// //   </svg>
// // );

// // // --- Background Shapes ---

// // const BlueShapeSVG = () => (
// //     <svg viewBox="0 0 876 643" className="w-full h-full object-cover" preserveAspectRatio="none" fill="none">
// //         <path d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z" fill="#162766" />
// //     </svg>
// // );

// // const LightShapeSVG = () => (
// //     <svg viewBox="0 0 665 643" className="w-full h-full object-cover" preserveAspectRatio="none" fill="none">
// //         <path d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z" fill="#F0F2F4" />
// //     </svg>
// // );

// // // --- Components ---

// // const StatisticsCard = () => {
// //     return (
// //         <div className="bg-white rounded-[2rem] p-6 shadow-2xl w-full max-w-[400px]">
// //             <div className="flex justify-between items-start mb-8">
// //                 <div>
// //                     <h3 className="text-[#162766] font-bold text-lg leading-tight">Case Closure Statistics</h3>
// //                     <p className="text-gray-400 text-xs mt-1">MDL Cases (2025)</p>
// //                     <div className="h-1 w-12 bg-[#F5C844] mt-3 rounded-full"></div>
// //                 </div>
// //                 <div className="text-right">
// //                     <span className="text-[#162766] text-3xl font-light">1,88,511</span>
// //                 </div>
// //             </div>

// //             {/* Chart Area */}
// //             <div className="flex items-end justify-between h-32 pt-4 border-t border-gray-100 relative px-4">
// //                  {/* Background Lines */}
// //                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 top-4 bottom-6">
// //                     <div className="w-full h-px bg-[#162766]"></div>
// //                     <div className="w-full h-px bg-[#162766]"></div>
// //                     <div className="w-full h-px bg-[#162766]"></div>
// //                 </div>

// //                 {/* Bars */}
// //                 <div className="flex flex-col items-center gap-2 z-10 w-1/4">
// //                     <div className="w-full max-w-[40px] bg-gray-50 rounded-t-sm h-0"></div> {/* Empty bar for visual spacing */}
// //                     <span className="text-xs text-[#162766] font-medium">Apr</span>
// //                 </div>
// //                 <div className="flex flex-col items-center gap-2 z-10 w-1/4">
// //                     <div className="w-full max-w-[40px] bg-[#8B95B5] rounded-t-sm h-16 shadow-md"></div>
// //                     <span className="text-xs text-[#162766] font-medium">Jul</span>
// //                 </div>
// //                 <div className="flex flex-col items-center gap-2 z-10 w-1/4">
// //                     <div className="w-full max-w-[40px] bg-[#162766] rounded-t-sm h-24 shadow-md"></div>
// //                     <span className="text-xs text-[#162766] font-medium">Sept</span>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // const ScrollButton = () => (
// //     <div className="bg-[#162766] text-white rounded-2xl p-2 flex flex-col items-center justify-center w-24 h-24 shadow-2xl cursor-pointer hover:bg-[#111e4d] transition-colors relative z-50">
// //         <div className="mb-2 border border-white/30 rounded-full w-8 h-8 flex items-center justify-center">
// //              <ScrollArrowIcon />
// //         </div>
// //         <span className="text-[10px] font-medium leading-tight text-center">Scroll<br/>Down</span>
// //     </div>
// // );

// // const LandingPage = () => {
// //     return (
// //         <div className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden font-sans">

// //             <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row relative">

// //                 {/* --- LEFT SECTION (Blue) --- */}
// //                 <div className="w-full lg:w-[55%] relative z-20 min-h-[500px] lg:min-h-[750px]">
// //                     <div className="absolute inset-0 w-full h-full">
// //                         <BlueShapeSVG />
// //                     </div>

// //                     <div className="relative z-30 pt-20 px-8 md:px-16 lg:pr-32 lg:pt-32 flex flex-col justify-center h-full">
// //                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4">
// //                             <span className="font-serif text-[#F5C844] block mb-2">Justice</span>
// //                             <span className="text-white block">Starts Here</span>
// //                         </h1>
// //                         <p className="text-blue-100 text-lg md:text-xl mt-6 max-w-md font-light leading-relaxed">
// //                             Free, confidential case reviews. Serving all 50 states. 
// //                             No fees unless you win.
// //                         </p>
// //                         <div className="mt-12">
// //                             <button className="group flex items-center bg-[#F5C844] text-[#162766] px-1 pl-6 py-1 rounded-full font-bold text-lg shadow-lg hover:bg-[#e0b533] transition-all w-fit">
// //                                 <span className="mr-6">Check if you Qualify</span>
// //                                 <span className="bg-[#162766] text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
// //                                     <ArrowUpRightIcon />
// //                                 </span>
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* --- RIGHT SECTION (Light) --- */}
// //                 <div className="w-full lg:w-[55%] relative z-10 lg:-ml-28 lg:mt-0 -mt-24">

// //                     {/* SVG Background Layer */}
// //                     <div className="absolute inset-0 w-full h-full lg:scale-105 origin-top-left">
// //                         <LightShapeSVG />
// //                     </div>

// //                     {/* Content Container with Transform */}
// //                     {/* Added translate-x and safe padding to ensure it fits in the shape */}
// //                     <div 
// //                         className="relative z-30 pt-40 pb-10 px-6 h-full flex flex-col justify-center items-center lg:items-start"
// //                         style={{ transform: 'translateX(12%)' }} 
// //                     >

// //                         {/* Dropdown */}
// //                         <div className="mb-6 w-full max-w-[400px]">
// //                              <div className="flex items-center justify-between bg-white rounded-xl shadow-md border border-gray-100 p-3 pl-5 w-full">
// //                                 <span className="text-[#162766] font-bold text-sm">
// //                                     Talcum Powder Lawsuit
// //                                 </span>
// //                                 <button className="flex items-center justify-center rounded-lg bg-[#F5C844] w-8 h-8 transition hover:bg-[#e0b533]">
// //                                     <ChevronDownIcon />
// //                                 </button>
// //                             </div>
// //                         </div>

// //                         {/* Main Statistics Card */}
// //                         <div className="mb-8 w-full max-w-[400px]">
// //                             <StatisticsCard />
// //                         </div>

// //                         {/* Summary Stats Row */}
// //                         <div className="flex flex-row gap-3 w-full max-w-[480px]">
// //                             <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm flex-1">
// //                                 <p className="text-[10px] text-gray-500 mb-1">Average Settlement</p>
// //                                 <p className="text-[#162766] font-bold text-sm">$100K – $1M</p>
// //                             </div>
// //                             <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm flex-1">
// //                                 <p className="text-[10px] text-gray-500 mb-1">Time to Settlement</p>
// //                                 <p className="text-[#162766] font-bold text-sm">18–30 Months</p>
// //                             </div>
// //                              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm flex-1 relative">
// //                                 <p className="text-[10px] text-gray-500 mb-1">Time in Court</p>
// //                                 <p className="text-[#162766] font-bold text-sm">4–5 Weeks</p>

// //                                 {/* Scroll Button Absolute Positioned relative to this row, or layout */}
// //                                 <div className="absolute -right-6 top-2 transform translate-x-1/2 translate-y-2">
// //                                     <ScrollButton />
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default LandingPage;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// // --- Icons (memoized) ---
// const HandshakeIcon = () => (
//     <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-5 h-5 text-[#0f1c4d]"
//     >
//         <path d="M12 12l9 2.5a2.12 2.12 0 0 1 1.48 2.62c-.22.9-1.07 1.47-1.98 1.47H12v-6z" />
//         <path d="M12 12L3 14.5a2.12 2.12 0 0 0-1.48 2.62c.22.9 1.07 1.47 1.98 1.47H12v-6z" />
//         <path d="M15 9l-3-3-3 3" />
//         <path d="M12 6V3" />
//     </svg>
// );

// const ScaleIcon = () => (
//     <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-5 h-5 text-[#0f1c4d]"
//     >
//         <path d="M12 3v19" />
//         <path d="M5 10h14" />
//         <path d="M5 10a4 4 0 0 0-4 4" />
//         <path d="M19 10a4 4 0 0 1 4 4" />
//     </svg>
// );

// const GavelIcon = () => (
//     <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-5 h-5 text-[#0f1c4d]"
//     >
//         <path d="M14 13l-7.5 7.5c-.8.8-2.3.6-3-0.1-.7-.7-.9-2.2-.1-3L11 10" />
//         <path d="M7 8L16 17" />
//         <path d="M16 13a4 4 0 0 0-4-4" />
//         <path d="M14 4l6 6" />
//         <path d="M20 16l-3 3" />
//     </svg>
// );

// const ArrowUpRightIcon = React.memo(() => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <line x1="7" y1="17" x2="17" y2="7"></line>
//         <polyline points="7 7 17 7 17 17"></polyline>
//     </svg>
// ));

// const ChevronDownIcon = React.memo(() => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <polyline points="6 9 12 15 18 9"></polyline>
//     </svg>
// ));

// const ScrollArrowIcon = React.memo(() => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M12 5v14M19 12l-7 7-7-7" />
//     </svg>
// ));

// // --- Background Shapes ---
// const BlueShapeSVG = React.memo(() => (
//     <svg viewBox="0 0 876 643" className="w-full h-full object-cover" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
//         <defs>
//             <path
//                 id="blue-shape-path-hero"
//                 d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
//             />
//             <clipPath id="blue-shape-clip-hero">
//                 <use href="#blue-shape-path-hero" />
//             </clipPath>
//         </defs>
//         <use href="#blue-shape-path-hero" fill="#162766" />
//         <image
//             href="/AUOTL.svg"
//             width="876"
//             height="643"
//             preserveAspectRatio="xMidYMid slice"
//             clipPath="url(#blue-shape-clip-hero)"
//         />
//     </svg>
// ));

// const LightShapeSVG = React.memo(() => (
//     <svg viewBox="0 0 665 643" className="w-full h-full object-cover" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
//         <defs>
//             <path
//                 id="light-shape-path-hero"
//                 d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
//             />
//             <clipPath id="light-shape-clip-hero">
//                 <use href="#light-shape-path-hero" />
//             </clipPath>
//         </defs>
//         <use href="#light-shape-path-hero" fill="#F0F2F4" />
//         <image
//             href="/AUOTR.svg"
//             width="665"
//             height="643"
//             preserveAspectRatio="xMidYMid slice"
//             clipPath="url(#light-shape-clip-hero)"
//         />
//     </svg>
// ));

// // --- ScrollButton ---
// const ScrollButton = () => (
//     <button
//         type="button"
//         aria-label="Scroll down"
//         className="relative z-50 w-[219px] h-[119px] cursor-pointer transition-transform hover:translate-y-1 active:translate-y-0.5 focus:outline-none"
//     >
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 219 119"
//             fill="none"
//             className="w-full h-full drop-shadow-2xl"
//             aria-hidden="true"
//             focusable="false"
//         >
//             <foreignObject x="0" y="0.000326157" width="218.964" height="119">
//                 <div
//                     style={{
//                         backdropFilter: "blur(16px)",
//                         clipPath: "url(#bgblur_0_246_17969_clip_path)",
//                         height: "100%",
//                         width: "100%",
//                     }}
//                 />
//             </foreignObject>
//             <g filter="url(#filter0_d_246_17969)" data-figma-bg-blur-radius="32">
//                 <path
//                     d="M33.3155 16.1472C36.0971 8.08053 43.6902 2.66699 52.223 2.66699H182.964C194.01 2.66699 202.964 11.6213 202.964 22.667V69.667C202.964 80.7127 194.01 89.667 182.964 89.667H36.0161C22.2781 89.667 12.6302 76.1347 17.1086 63.1472L33.3155 16.1472Z"
//                     fill="#162766"
//                 />
//             </g>
//             <path
//                 d="M76.292 46.1645L76.3601 39.2998C76.3601 39.2956 76.3601 39.2914 76.3601 39.2864C76.5089 36.2974 77.7099 33.6631 79.5126 31.7658C81.3628 29.8191 83.8479 28.6488 86.4834 28.6672C89.1189 28.6488 91.6032 29.8191 93.4541 31.7658C95.2569 33.6622 96.4579 36.2974 96.6067 39.2864C96.6075 39.2956 96.6075 39.3048 96.6067 39.314C96.6524 43.9275 96.6524 48.4207 96.6067 53.0342C96.6067 53.0384 96.6067 53.0426 96.6067 53.0476C96.4579 56.0366 95.2569 58.6709 93.4541 60.5682C91.604 62.5149 89.1189 63.6852 86.4834 63.6668C83.8479 63.6852 81.3636 62.5149 79.5126 60.5682C77.7099 58.6717 76.5089 56.0366 76.3601 53.0476C76.3593 53.0384 76.3593 53.0292 76.3601 53.02L76.292 46.1645ZM91.8584 45.1909C91.988 45.0604 92.1983 45.0604 92.3288 45.1909C92.4584 45.3214 92.4584 45.533 92.3288 45.6644L86.7236 51.306C86.5939 51.4366 86.3837 51.4366 86.2532 51.306L80.648 45.6644C80.5183 45.5339 80.5183 45.3222 80.648 45.1909C80.7776 45.0604 80.9879 45.0604 81.1184 45.1909L86.4884 50.5958L91.8584 45.1909ZM91.8584 49.0641C91.988 48.9336 92.1983 48.9336 92.3288 49.0641C92.4584 49.1946 92.4584 49.4062 92.3288 49.5376L86.7236 55.1793C86.5939 55.3098 86.3837 55.3098 86.2532 55.1793L80.648 49.5376C80.5183 49.4071 80.5183 49.1954 80.648 49.0641C80.7776 48.9336 80.9879 48.9336 81.1184 49.0641L86.4884 54.469L91.8584 49.0641ZM84.2593 38.2164L84.2726 36.8989C84.2726 36.8947 84.2726 36.8905 84.2726 36.8855C84.3042 36.2447 84.5635 35.6775 84.9524 35.2693C85.3572 34.8435 85.9024 34.5875 86.4834 34.5908C87.0644 34.5875 87.6096 34.8435 88.0144 35.2693C88.4033 35.6783 88.6618 36.2447 88.6942 36.8855C88.6951 36.8947 88.6951 36.9039 88.6942 36.9131C88.7034 37.7956 88.7025 38.6556 88.6942 39.539C88.6942 39.5432 88.6942 39.5474 88.6942 39.5524C88.6626 40.1932 88.4033 40.7604 88.0144 41.1686C87.6096 41.5944 87.0644 41.8504 86.4834 41.8471C85.9024 41.8504 85.3572 41.5944 84.9524 41.1686C84.5635 40.7595 84.305 40.1932 84.2726 39.5524C84.2717 39.5432 84.2717 39.534 84.2726 39.5248L84.2593 38.2164ZM84.9342 36.9173L84.9217 38.2189L84.9342 39.5181V39.5206C84.9574 39.9949 85.1461 40.4107 85.4295 40.7085C85.7113 41.0046 86.0861 41.1828 86.4809 41.1803H86.4834C86.8782 41.1828 87.2539 41.0046 87.5348 40.7085C87.8174 40.4107 88.006 39.9949 88.0301 39.5206L88.0426 38.2189L88.0301 36.9198V36.9173C88.0069 36.4429 87.8182 36.0272 87.5348 35.7294C87.253 35.4332 86.8782 35.255 86.4834 35.2575H86.4809C86.0861 35.255 85.7104 35.4332 85.4295 35.7294C85.1469 36.0272 84.9583 36.4429 84.9342 36.9173ZM77.0217 39.319L76.9544 46.1678L77.0217 53.0142V53.0167C77.1622 55.8383 78.2925 58.3229 79.9897 60.1081C81.7168 61.9251 84.0315 63.0176 86.4809 63H86.4834C88.9336 63.0176 91.2475 61.9251 92.9746 60.1081C94.6718 58.3229 95.8021 55.8383 95.9426 53.0167L96.0099 46.1678L95.9426 39.3215V39.319C95.8021 36.4973 94.6718 34.0128 92.9746 32.2276C91.2475 30.4106 88.9328 29.318 86.4834 29.3356H86.4809C84.0307 29.318 81.7168 30.4106 79.9897 32.2276C78.2925 34.0128 77.1622 36.4973 77.0217 39.319Z"
//                 fill="white"
//             />
//             <path
//                 d="M110.931 41.849C110.403 41.849 109.895 41.7673 109.405 41.604C108.915 41.436 108.485 41.198 108.117 40.89C107.753 40.582 107.494 40.2157 107.34 39.791L108.439 39.378C108.532 39.6393 108.705 39.868 108.957 40.064C109.213 40.2553 109.514 40.4047 109.86 40.512C110.205 40.6193 110.562 40.673 110.931 40.673C111.351 40.673 111.74 40.6053 112.1 40.47C112.464 40.33 112.758 40.1363 112.982 39.889C113.206 39.6417 113.318 39.3523 113.318 39.021C113.318 38.6803 113.201 38.4027 112.968 38.188C112.734 37.9687 112.436 37.796 112.072 37.67C111.708 37.5393 111.327 37.439 110.931 37.369C110.254 37.257 109.647 37.0983 109.111 36.893C108.579 36.683 108.156 36.3913 107.844 36.018C107.536 35.6447 107.382 35.1523 107.382 34.541C107.382 33.9717 107.545 33.4747 107.872 33.05C108.203 32.6253 108.639 32.2963 109.181 32.063C109.722 31.8297 110.305 31.713 110.931 31.713C111.449 31.713 111.95 31.7947 112.436 31.958C112.926 32.1167 113.357 32.35 113.731 32.658C114.104 32.966 114.372 33.3417 114.536 33.785L113.423 34.191C113.329 33.925 113.154 33.6963 112.898 33.505C112.646 33.309 112.347 33.1597 112.002 33.057C111.661 32.9497 111.304 32.896 110.931 32.896C110.515 32.8913 110.128 32.959 109.769 33.099C109.409 33.239 109.118 33.4327 108.894 33.68C108.67 33.9273 108.558 34.2143 108.558 34.541C108.558 34.933 108.66 35.234 108.866 35.444C109.076 35.6493 109.36 35.8033 109.72 35.906C110.079 36.0087 110.483 36.0997 110.931 36.179C111.565 36.2863 112.153 36.4567 112.695 36.69C113.236 36.9187 113.67 37.2243 113.997 37.607C114.328 37.9897 114.494 38.461 114.494 39.021C114.494 39.5903 114.328 40.0873 113.997 40.512C113.67 40.9367 113.236 41.2657 112.695 41.499C112.153 41.7323 111.565 41.849 110.931 41.849ZM120.919 39.819L121.969 40.386C121.652 40.8293 121.248 41.184 120.758 41.45C120.273 41.716 119.746 41.849 119.176 41.849C118.532 41.849 117.944 41.6833 117.412 41.352C116.885 41.0207 116.463 40.5773 116.145 40.022C115.833 39.462 115.676 38.8437 115.676 38.167C115.676 37.6537 115.767 37.1753 115.949 36.732C116.131 36.284 116.381 35.892 116.698 35.556C117.02 35.2153 117.394 34.9493 117.818 34.758C118.243 34.5667 118.696 34.471 119.176 34.471C119.746 34.471 120.273 34.604 120.758 34.87C121.248 35.136 121.652 35.493 121.969 35.941L120.919 36.508C120.695 36.2327 120.429 36.0203 120.121 35.871C119.813 35.7217 119.498 35.647 119.176 35.647C118.742 35.647 118.348 35.7637 117.993 35.997C117.643 36.2257 117.366 36.5313 117.16 36.914C116.955 37.2967 116.852 37.7143 116.852 38.167C116.852 38.6197 116.955 39.0373 117.16 39.42C117.37 39.798 117.65 40.1013 118 40.33C118.355 40.5587 118.747 40.673 119.176 40.673C119.522 40.673 119.846 40.5937 120.149 40.435C120.453 40.2763 120.709 40.071 120.919 39.819ZM123.373 41.667V34.667H124.549V35.542C124.796 35.2153 125.109 34.9563 125.487 34.765C125.865 34.569 126.276 34.471 126.719 34.471C126.99 34.471 127.251 34.506 127.503 34.576L127.027 35.752C126.836 35.6913 126.649 35.661 126.467 35.661C126.117 35.661 125.795 35.7473 125.501 35.92C125.212 36.088 124.981 36.3167 124.808 36.606C124.635 36.8953 124.549 37.2173 124.549 37.572V41.667H123.373ZM131.228 41.849C130.584 41.849 129.996 41.6833 129.464 41.352C128.936 41.0207 128.514 40.5773 128.197 40.022C127.884 39.462 127.728 38.8437 127.728 38.167C127.728 37.6537 127.819 37.1753 128.001 36.732C128.183 36.284 128.432 35.892 128.75 35.556C129.072 35.2153 129.445 34.9493 129.87 34.758C130.294 34.5667 130.747 34.471 131.228 34.471C131.872 34.471 132.457 34.6367 132.985 34.968C133.517 35.2993 133.939 35.745 134.252 36.305C134.569 36.865 134.728 37.4857 134.728 38.167C134.728 38.6757 134.637 39.1517 134.455 39.595C134.273 40.0383 134.021 40.4303 133.699 40.771C133.381 41.107 133.01 41.3707 132.586 41.562C132.166 41.7533 131.713 41.849 131.228 41.849ZM131.228 40.673C131.666 40.673 132.061 40.5587 132.411 40.33C132.765 40.0967 133.043 39.791 133.244 39.413C133.449 39.0303 133.552 38.615 133.552 38.167C133.552 37.7097 133.447 37.2897 133.237 36.907C133.031 36.5243 132.754 36.2187 132.404 35.99C132.054 35.7613 131.662 35.647 131.228 35.647C130.789 35.647 130.395 35.7637 130.045 35.997C129.695 36.2257 129.417 36.5313 129.212 36.914C129.006 37.2967 128.904 37.7143 128.904 38.167C128.904 38.6337 129.009 39.0583 129.219 39.441C129.429 39.819 129.711 40.12 130.066 40.344C130.42 40.5633 130.808 40.673 131.228 40.673ZM135.958 41.667V31.167H137.134V41.667H135.958ZM138.955 41.667V31.167H140.131V41.667H138.955ZM107.48 58.667V48.867H110.721C111.397 48.867 112.032 48.9953 112.625 49.252C113.217 49.504 113.738 49.8563 114.186 50.309C114.634 50.757 114.984 51.2773 115.236 51.87C115.492 52.458 115.621 53.0903 115.621 53.767C115.621 54.4437 115.492 55.0783 115.236 55.671C114.984 56.259 114.634 56.7793 114.186 57.232C113.738 57.68 113.217 58.0323 112.625 58.289C112.032 58.541 111.397 58.667 110.721 58.667H107.48ZM108.656 57.491H110.721C111.234 57.491 111.715 57.3953 112.163 57.204C112.615 57.008 113.012 56.7397 113.353 56.399C113.693 56.0583 113.959 55.664 114.151 55.216C114.347 54.7633 114.445 54.2803 114.445 53.767C114.445 53.2537 114.347 52.773 114.151 52.325C113.959 51.8723 113.691 51.4757 113.346 51.135C113.005 50.7943 112.611 50.5283 112.163 50.337C111.715 50.141 111.234 50.043 110.721 50.043H108.656V57.491ZM119.983 58.849C119.339 58.849 118.751 58.6833 118.219 58.352C117.692 58.0207 117.269 57.5773 116.952 57.022C116.639 56.462 116.483 55.8437 116.483 55.167C116.483 54.6537 116.574 54.1753 116.756 53.732C116.938 53.284 117.188 52.892 117.505 52.556C117.827 52.2153 118.2 51.9493 118.625 51.758C119.05 51.5667 119.502 51.471 119.983 51.471C120.627 51.471 121.213 51.6367 121.74 51.968C122.272 52.2993 122.694 52.745 123.007 53.305C123.324 53.865 123.483 54.4857 123.483 55.167C123.483 55.6757 123.392 56.1517 123.21 56.595C123.028 57.0383 122.776 57.4303 122.454 57.771C122.137 58.107 121.766 58.3707 121.341 58.562C120.921 58.7533 120.468 58.849 119.983 58.849ZM119.983 57.673C120.422 57.673 120.816 57.5587 121.166 57.33C121.521 57.0967 121.798 56.791 121.999 56.413C122.204 56.0303 122.307 55.615 122.307 55.167C122.307 54.7097 122.202 54.2897 121.992 53.907C121.787 53.5243 121.509 53.2187 121.159 52.99C120.809 52.7613 120.417 52.647 119.983 52.647C119.544 52.647 119.15 52.7637 118.8 52.997C118.45 53.2257 118.172 53.5313 117.967 53.914C117.762 54.2967 117.659 54.7143 117.659 55.167C117.659 55.6337 117.764 56.0583 117.974 56.441C118.184 56.819 118.466 57.12 118.821 57.344C119.176 57.5633 119.563 57.673 119.983 57.673ZM127.595 58.667H126.405L124.06 51.667H125.208L127.014 57.008L128.799 51.667H130.01L131.802 57.008L133.587 51.667H134.749L132.404 58.667H131.207L129.394 53.277L127.595 58.667ZM142.211 54.313V58.667H141.035V54.572C141.035 54.2173 140.948 53.8953 140.776 53.606C140.603 53.3167 140.372 53.088 140.083 52.92C139.793 52.7473 139.471 52.661 139.117 52.661C138.767 52.661 138.445 52.7473 138.151 52.92C137.861 53.088 137.63 53.3167 137.458 53.606C137.285 53.8953 137.199 54.2173 137.199 54.572V58.667H136.023V51.667H137.199V52.542C137.446 52.2153 137.759 51.9563 138.137 51.765C138.515 51.569 138.925 51.471 139.369 51.471C139.891 51.471 140.367 51.5993 140.797 51.856C141.231 52.108 141.574 52.4487 141.826 52.878C142.082 53.3073 142.211 53.7857 142.211 54.313Z"
//                 fill="#F2C438"
//             />
//             <defs>
//                 <filter
//                     id="filter0_d_246_17969"
//                     x="0"
//                     y="0.000326157"
//                     width="218.964"
//                     height="119"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                     <feColorMatrix
//                         in="SourceAlpha"
//                         type="matrix"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                         result="hardAlpha"
//                     />
//                     <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_246_17969" />
//                     <feOffset dy="13.3333" />
//                     <feGaussianBlur stdDeviation="10" />
//                     <feComposite in2="hardAlpha" operator="out" />
//                     <feColorMatrix
//                         type="matrix"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
//                     />
//                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_17969" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_17969" result="shape" />
//                 </filter>
//                 <clipPath id="bgblur_0_246_17969_clip_path" transform="translate(0 -0.000326157)">
//                     <path d="M33.3155 16.1472C36.0971 8.08053 43.6902 2.66699 52.223 2.66699H182.964C194.01 2.66699 202.964 11.6213 202.964 22.667V69.667C202.964 80.7127 194.01 89.667 182.964 89.667H36.0161C22.2781 89.667 12.6302 76.1347 17.1086 63.1472L33.3155 16.1472Z" />
//                 </clipPath>
//             </defs>
//         </svg>
//         <span className="sr-only">Scroll down</span>
//     </button>
// );

// // GlassCard Component
// const GlassCard = ({ icon, title }: { icon: React.ReactNode; title: React.ReactNode }) => {
//     return (
//         <div
//             className="
//         group
//         cursor-pointer
//         flex flex-col justify-between
//         w-[105px] p-2.5 rounded-xl
//         transition-all duration-300 ease-in-out
//         hover:-translate-y-1
//         /* GLASSMORPHISM STYLES START */
//         bg-white/45 
//         backdrop-blur-md 
//         shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]
//         hover:bg-white/65
//         /* GLASSMORPHISM STYLES END */
//       "
//         >
//             {/* Icon Box */}
//             <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-2.5 shadow-sm">
//                 {icon}
//             </div>

//             {/* Text */}
//             <h3 className="text-[#0f1c4d] text-[11px] font-semibold leading-tight">
//                 {title}
//             </h3>
//         </div>
//     );
// };

// // --- Statistics Card ---
// const StatisticsCard = () => (
//     <div className="bg-white rounded-[2rem] p-5 shadow-2xl w-full lg:max-w-[360px]">
//         <div className="flex justify-between items-start mb-6">
//             <div>
//                 <h3 className="text-[#162766] font-bold text-base leading-tight">Case Closure Statistics</h3>
//                 <p className="text-gray-400 text-xs mt-1">MDL Cases (2025)</p>
//                 <div className="h-1 w-12 bg-[#F5C844] mt-3 rounded-full"></div>
//             </div>
//             <div className="text-right">
//                 <span className="text-[#162766] text-2xl font-light">1,88,511</span>
//             </div>
//         </div>

//         <div className="flex items-end justify-between h-28 pt-4 border-t border-gray-100 relative px-3">
//             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 top-4 bottom-6">
//                 <div className="w-full h-px bg-[#162766]"></div>
//                 <div className="w-full h-px bg-[#162766]"></div>
//                 <div className="w-full h-px bg-[#162766]"></div>
//             </div>

//             <div className="flex flex-col items-center gap-2 z-10 w-1/4">
//                 <div className="w-full max-w-[40px] bg-gray-50 rounded-t-sm h-0"></div>
//                 <span className="text-xs text-[#162766] font-medium">Apr</span>
//             </div>
//             <div className="flex flex-col items-center gap-2 z-10 w-1/4">
//                 <div className="w-full max-w-[40px] bg-[#8B95B5] rounded-t-sm h-16 shadow-md"></div>
//                 <span className="text-xs text-[#162766] font-medium">Jul</span>
//             </div>
//             <div className="flex flex-col items-center gap-2 z-10 w-1/4">
//                 <div className="w-full max-w-[40px] bg-[#162766] rounded-t-sm h-24 shadow-md"></div>
//                 <span className="text-xs text-[#162766] font-medium">Sept</span>
//             </div>
//         </div>
//     </div>
// );

// // --- Mobile Landing ---
// const MobileLanding = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     type Slide =
//         | { id: number; type: "chart"; title: string; subtitle: string; value: string }
//         | { id: number; type: "stats"; title: string; subtitle?: string; items: { label: string; value: string }[] }
//         | { id: number; type: "info"; title: string; subtitle?: string; items: string[] };

//     const slides: Slide[] = [
//         { id: 1, type: "chart", title: "Case Closure Statistics", subtitle: "MDL Cases (2025)", value: "1,88,511" },
//         {
//             id: 2,
//             type: "stats",
//             title: "Average Settlement",
//             items: [
//                 { label: "Average Settlement", value: "$100K – $1M" },
//                 { label: "Time to Settlement", value: "18–30 Months" },
//                 { label: "Time in Court", value: "4–5 Weeks" },
//             ],
//         },
//         {
//             id: 3,
//             type: "info",
//             title: "Free case Review",
//             items: ["Serving Nationwide", "No Win, No Fee"],
//         },
//     ];

//     const nextSlide = () => setCurrentSlide((prev: number) => (prev === slides.length - 1 ? 0 : prev + 1));
//     const prevSlide = () => setCurrentSlide((prev: number) => (prev === 0 ? slides.length - 1 : prev - 1));

//     return (
//         <div className="block lg:hidden min-h-screen bg-white flex items-center justify-center p-4 font-sans">
//             <div className="relative w-full max-w-[375px] min-h-[780px] bg-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col">
//                 {/* Background top image */}
//                 <div className="absolute top-0 left-0 w-full h-[55%] z-0">
//                     <Image src="/HPL.png" alt="Hero top background" fill sizes="100vw" className="object-cover" priority />
//                 </div>
//                 {/* Background bottom image */}
//                 <div className="absolute bottom-0 left-0 w-full h-[50%] z-0">
//                     <Image src="/HPR.png" alt="Hero bottom background" fill sizes="100vw" priority />
//                 </div>

//                 <div className="relative z-10 flex flex-col h-full px-6 py-8">
//                     <div className="mt-4 mb-6">
//                         <h1 className="font-serif text-[#f2c94c] text-4xl leading-tight">Justice</h1>
//                         <h2 className="font-serif text-white text-4xl leading-tight mb-4">Starts Here</h2>
//                         <p className="text-[#d0d5e2] text-sm font-light leading-relaxed mb-6">
//                             Free, confidential case reviews.<br />
//                             Serving all 50 states. No fees unless you win.
//                         </p>
//                         <button className="bg-[#f2c94c] hover:bg-[#e0b840] transition-colors text-[#1a2b5e] font-semibold py-3 px-6 rounded-full flex items-center gap-3 shadow-lg">
//                             Check if you Qualify
//                             <span className="bg-[#1a2b5e] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs transform rotate-45">
//                                 <ArrowUpRightIcon />
//                             </span>
//                         </button>
//                     </div>

//                     <div className="transform translate-x-1 translate-y-25 sm:translate-x-0 sm:translate-y-0">
//                         <div className="flex justify-end">
//                             <div
//                                 className="self-end bg-[#eff2f6] border border-white py-2 px-3 sm:px-4 rounded-xl flex items-center gap-2.5 sm:gap-3 shadow-sm mt-10 mb-4 w-fit max-w-[260px] sm:max-w-none"
//                                 style={{ display: "flex" }}
//                             >
//                                 <span className="text-[#1a2b5e] text-[0.7rem] sm:text-xs font-bold">Talcum Powder Lawsuit</span>
//                                 <div className="bg-[#f2c94c] w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center">
//                                     <ChevronDownIcon />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="w-full overflow-hidden mb-auto">
//                             <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                 {slides.map((slide) => (
//                                     <div key={slide.id} className="min-w-full">
//                                         <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm mx-1 transform scale-[0.97] translate-y-2 sm:scale-100 sm:translate-y-0 origin-top overflow-hidden">
//                                             <div className="flex justify-between items-start mb-5 sm:mb-6">
//                                                 <div>
//                                                     <h3 className="text-[#1a2b5e] font-bold text-sm sm:text-base leading-tight">{slide.title}</h3>
//                                                     {slide.subtitle && <span className="text-[#8890a5] text-[0.7rem] sm:text-xs">{slide.subtitle}</span>}
//                                                 </div>
//                                                 {slide.type === "chart" && <div className="font-serif text-[#1a2b5e] text-xl sm:text-2xl">{slide.value}</div>}
//                                             </div>

//                                             {slide.type === "chart" && (
//                                                 <div className="h-28 sm:h-32 relative border-b border-gray-100 flex items-end justify-around pb-2 pl-10 pr-2">
//                                                     <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 pl-10">
//                                                         {[90, 60, 30, 10].map((val) => (
//                                                             <div key={val} className="w-full border-t border-dashed border-gray-100 relative">
//                                                                 <span className="absolute left-0 -top-2 text-[0.6rem] text-gray-400 bg-white pr-1">{val}K</span>
//                                                             </div>
//                                                         ))}
//                                                     </div>

//                                                     <div className="flex flex-col items-center z-10 w-1/5 group">
//                                                         <div className="w-full bg-[#dce1e8] h-12 rounded-t-md transition-all duration-500 group-hover:bg-[#1a2b5e]" />
//                                                         <span className="text-[0.65rem] text-[#1a2b5e] mt-2 font-medium">Apr</span>
//                                                     </div>
//                                                     <div className="flex flex-col items-center z-10 w-1/5 group">
//                                                         <div className="w-full bg-[#8792ab] h-16 rounded-t-md transition-all duration-500 group-hover:bg-[#1a2b5e]" />
//                                                         <span className="text-[0.65rem] text-[#1a2b5e] mt-2 font-medium">Jul</span>
//                                                     </div>
//                                                     <div className="flex flex-col items-center z-10 w-1/5 group">
//                                                         <div className="w-full bg-[#1a2b5e] h-24 rounded-t-md transition-all duration-500" />
//                                                         <span className="text-[0.65rem] text-[#1a2b5e] mt-2 font-medium">Sept</span>
//                                                     </div>
//                                                 </div>
//                                             )}

//                                             {slide.type === "stats" && (
//                                                 <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-white/30 backdrop-blur-sm p-2.5 sm:p-3 rounded-2xl border border-white/50 shadow-lg">
//                                                     {slide.items.map((item) => (
//                                                         <div
//                                                             key={item.label}
//                                                             className="bg-white/70 p-2.5 sm:p-3 rounded-xl border border-white/60 shadow-sm min-h-[88px] sm:min-h-[92px] flex flex-col justify-center"
//                                                         >
//                                                             <p className="text-[9px] sm:text-[10px] text-gray-500 mb-1 leading-tight">{item.label}</p>
//                                                             <p className="text-[#1a2b5e] font-bold text-xs sm:text-sm leading-tight">{item.value}</p>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}

//                                             {slide.type === "info" && (
//                                                 <div className="flex flex-col gap-3 sm:gap-4 text-[#1a2b5e]">
//                                                     <div className="text-base sm:text-lg font-semibold text-center leading-tight">{slide.title}</div>
//                                                     <div className="flex justify-between gap-1.5 sm:gap-2">
//                                                         <GlassCard icon={<HandshakeIcon />} title={<>Free case<br />Review</>} />
//                                                         <GlassCard icon={<ScaleIcon />} title={<>Serving<br />Nationwide</>} />
//                                                         <GlassCard icon={<GavelIcon />} title={<>No Win,<br />No Fee</>} />
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                         </div>

//                         <div className="flex justify-between items-end mt-4">
//                             <div className="flex items-center gap-3">
//                                 <button onClick={prevSlide} className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f2c94c] hover:bg-[#e0b840] rounded-xl flex items-center justify-center transition-colors" aria-label="Previous slide">
//                                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                         <line x1="19" y1="12" x2="5" y2="12"></line>
//                                         <polyline points="12 19 5 12 12 5"></polyline>
//                                     </svg>
//                                 </button>
//                                 <div className="flex gap-1.5">
//                                     {slides.map((_, idx) => (
//                                         <div
//                                             key={idx}
//                                             className={`w-5 h-1 sm:w-6 sm:h-1.5 rounded-full transition-colors ${currentSlide === idx ? "bg-[#1a2b5e]" : "bg-gray-300"
//                                                 }`}
//                                         />
//                                     ))}
//                                 </div>
//                                 <button onClick={nextSlide} className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f2c94c] hover:bg-[#e0b840] rounded-xl flex items-center justify-center transition-colors" aria-label="Next slide">
//                                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                         <line x1="5" y1="12" x2="19" y2="12"></line>
//                                         <polyline points="12 5 19 12 12 19"></polyline>
//                                     </svg>
//                                 </button>
//                             </div>
//                             <button className="bg-[#1a2b5e] text-white px-4 sm:px-5 py-3 rounded-[20px] flex items-center gap-2 shadow-lg">
//                                 <svg className="transform rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                     <line x1="7" y1="17" x2="17" y2="7"></line>
//                                     <polyline points="7 7 17 7 17 17"></polyline>
//                                 </svg>
//                                 <span className="text-left text-xs leading-tight font-medium">
//                                     Scroll<br />Down
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- Desktop Landing ---
// const DesktopLanding = () => {
//     return (
//         <div className="hidden lg:flex min-h-screen bg-white items-center justify-center p-4 overflow-visible font-sans">
//             <div className="w-full max-w-7xl mx-auto flex flex-row relative">
//                 <div className="w-full lg:w-[60%] relative z-20 min-h-[750px]">
//                     <div className="absolute inset-0 w-full h-full">
//                         <BlueShapeSVG />
//                     </div>
//                     <div className="relative z-30 px-8 md:px-16 lg:pr-32 flex flex-col justify-center h-full pt-10 md:pt-0 md:-translate-y-3 lg:-translate-y-6">
//                         <h1 className="text-6xl lg:text-7xl font-bold leading-none mb-4">
//                             <span className="font-serif text-[#F5C844] block mb-2">Justice</span>
//                             <span className="text-white block">Starts Here</span>
//                         </h1>
//                         <p className="text-blue-100 text-xl mt-6 max-w-md font-light leading-relaxed">
//                             Free, confidential case reviews. Serving all 50 states. No fees unless you win.
//                         </p>
//                         <div className="mt-12">
//                             <button aria-label="Check if you qualify" className="group flex items-center bg-[#F5C844] text-[#162766] px-1 pl-6 py-1 rounded-full font-bold text-lg shadow-lg hover:bg-[#e0b533] transition-all w-fit">
//                                 <span className="mr-6">Check if you Qualify</span>
//                                 <span className="bg-[#162766] text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
//                                     <ArrowUpRightIcon />
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full lg:w-[50%] relative z-10 -ml-28 overflow-visible">
//                     <div className="absolute inset-0 w-full h-full origin-top-left">
//                         <LightShapeSVG />
//                     </div>
//                     <div className="relative z-30 pt-28 pb-10 px-6 h-full flex flex-col gap-6 justify-start items-end lg:max-w-[360px] lg:ml-auto lg:mr-4 lg:-translate-y-6 lg:translate-x-6">
//                         <div className="mb-6 w-full">
//                         <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-3 pl-5 w-full">
//                                 <span className="text-[#162766] font-bold text-sm">Talcum Powder Lawsuit</span>
//                                 <button aria-expanded="false" aria-label="Open lawsuit dropdown" className="flex items-center justify-center rounded-lg bg-[#F5C844] w-8 h-8 transition hover:bg-[#e0b533] flex-shrink-0">
//                                     <ChevronDownIcon />
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="mb-8 w-full">
//                             <StatisticsCard />
//                         </div>

//                         <div className="absolute -bottom-10 -right-8">
//                             <div className="scale-100 origin-center">
//                                 <ScrollButton />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="absolute bottom-44 right-32 translate-x-20 z-30 w-full max-w-[440px]">
//                     <div className="grid grid-cols-3 gap-3 bg-white/30 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
//                         <div className="bg-white/70 p-4 rounded-xl shadow-sm min-h-[96px]">
//                             <p className="text-[11px] text-gray-500 mb-1">Average Settlement</p>
//                             <p className="text-[#162766] font-bold text-sm">$100K – $1M</p>
//                         </div>
//                         <div className="bg-white/70 p-4 rounded-xl shadow-sm min-h-[96px]">
//                             <p className="text-[11px] text-gray-500 mb-1">Time to Settlement</p>
//                             <p className="text-[#162766] font-bold text-sm">18–30 Months</p>
//                         </div>
//                         <div className="bg-white/70 p-4 rounded-xl shadow-sm min-h-[96px]">
//                             <p className="text-[11px] text-gray-500 mb-1">Time in Court</p>
//                             <p className="text-[#162766] font-bold text-sm">4–5 Weeks</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="absolute bottom-4 right-32 z-30 flex-row gap-3 flex -translate-x-[85%] xl:-translate-x-[40%]">
//                     <GlassCard icon={<HandshakeIcon />} title={<>Free case<br />Review</>} />
//                     <GlassCard icon={<ScaleIcon />} title={<>Serving<br />Nationwide</>} />
//                     <GlassCard icon={<GavelIcon />} title={<>No Win,<br />No Fee</>} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- Landing Page ---
// const LandingPage = () => {
//     const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

//     useEffect(() => {
//         const update = () => setIsDesktop(window.innerWidth >= 1024);
//         update();
//         window.addEventListener("resize", update);
//         return () => window.removeEventListener("resize", update);
//     }, []);

//     // Only render the desktop experience on screens >= 1024px
//     if (isDesktop === null) return null;
//     if (!isDesktop) return null;

//     return <DesktopLanding />;
// };

// export default LandingPage;


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// ==========================================
// 1. ICONS
// ==========================================

const HandshakeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0f1c4d]">
        <path d="M12 12l9 2.5a2.12 2.12 0 0 1 1.48 2.62c-.22.9-1.07 1.47-1.98 1.47H12v-6z" />
        <path d="M12 12L3 14.5a2.12 2.12 0 0 0-1.48 2.62c.22.9 1.07 1.47 1.98 1.47H12v-6z" />
        <path d="M15 9l-3-3-3 3" />
        <path d="M12 6V3" />
    </svg>
);

const ScaleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0f1c4d]">
        <path d="M12 3v19" />
        <path d="M5 10h14" />
        <path d="M5 10a4 4 0 0 0-4 4" />
        <path d="M19 10a4 4 0 0 1 4 4" />
    </svg>
);

const GavelIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0f1c4d]">
        <path d="M14 13l-7.5 7.5c-.8.8-2.3.6-3-0.1-.7-.7-.9-2.2-.1-3L11 10" />
        <path d="M7 8L16 17" />
        <path d="M16 13a4 4 0 0 0-4-4" />
        <path d="M14 4l6 6" />
        <path d="M20 16l-3 3" />
    </svg>
);

const ArrowUpRightIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
));

const ChevronDownIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
));

const ScrollArrowIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
));

// ==========================================
// 2. HELPER COMPONENTS (Cards, Buttons)
// ==========================================

const GlassCard = ({ icon, title }: { icon: React.ReactNode; title: React.ReactNode }) => {
    return (
        <div
            className="
        group
        cursor-pointer
        flex flex-col justify-between
        w-[90px] xl:w-[105px] p-2 xl:p-2.5 rounded-xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        bg-white/45 
        backdrop-blur-md 
        shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]
        hover:bg-white/65
      "
        >
            <div className="w-6 h-6 xl:w-8 xl:h-8 bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm">
                {icon}
            </div>
            <h3 className="text-[#0f1c4d] text-[9px] xl:text-[11px] font-semibold leading-tight">
                {title}
            </h3>
        </div>
    );
};

const StatisticsCard = () => (
    <div className="bg-white rounded-[1.5rem] p-4 xl:p-5 shadow-2xl w-full">
        <div className="flex justify-between items-start mb-4 xl:mb-6">
            <div>
                <h3 className="text-[#162766] font-bold text-sm xl:text-base leading-tight">Case Closure Statistics</h3>
                <p className="text-gray-400 text-[10px] xl:text-xs mt-1">MDL Cases (2025)</p>
                <div className="h-1 w-12 bg-[#F5C844] mt-2 rounded-full"></div>
            </div>
            <div className="text-right">
                <span className="text-[#162766] text-xl xl:text-2xl font-light">1,88,511</span>
            </div>
        </div>

        <div className="flex items-end justify-between h-20 xl:h-28 pt-2 border-t border-gray-100 relative px-2">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 top-4 bottom-6">
                <div className="w-full h-px bg-[#162766]"></div>
                <div className="w-full h-px bg-[#162766]"></div>
                <div className="w-full h-px bg-[#162766]"></div>
            </div>

            <div className="flex flex-col items-center gap-1 xl:gap-2 z-10 w-1/4">
                <div className="w-full max-w-[40px] bg-gray-50 rounded-t-sm h-0"></div>
                <span className="text-[10px] xl:text-xs text-[#162766] font-medium">Apr</span>
            </div>
            <div className="flex flex-col items-center gap-1 xl:gap-2 z-10 w-1/4">
                <div className="w-full max-w-[40px] bg-[#8B95B5] rounded-t-sm h-12 xl:h-16 shadow-md"></div>
                <span className="text-[10px] xl:text-xs text-[#162766] font-medium">Jul</span>
            </div>
            <div className="flex flex-col items-center gap-1 xl:gap-2 z-10 w-1/4">
                <div className="w-full max-w-[40px] bg-[#162766] rounded-t-sm h-16 xl:h-24 shadow-md"></div>
                <span className="text-[10px] xl:text-xs text-[#162766] font-medium">Sept</span>
            </div>
        </div>
    </div>
);

const ScrollButton = () => (
    <button
        type="button"
        aria-label="Scroll down"
        className="relative z-50 w-[240px] h-[260px] min-h-[260px] cursor-pointer translate-y-8 transition-transform hover:translate-y-9 active:translate-y-8 focus:outline-none"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 219 119"
            fill="none"
            className="w-full h-full drop-shadow-2xl"
            aria-hidden="true"
            focusable="false"
        >
            <foreignObject x="0" y="0.000326157" width="218.964" height="119">
                <div
                    style={{
                        backdropFilter: "blur(16px)",
                        clipPath: "url(#bgblur_0_246_17969_clip_path)",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </foreignObject>
            <g filter="url(#filter0_d_246_17969)" data-figma-bg-blur-radius="32">
                <path
                    d="M33.3155 16.1472C36.0971 8.08053 43.6902 2.66699 52.223 2.66699H182.964C194.01 2.66699 202.964 11.6213 202.964 22.667V69.667C202.964 80.7127 194.01 89.667 182.964 89.667H36.0161C22.2781 89.667 12.6302 76.1347 17.1086 63.1472L33.3155 16.1472Z"
                    fill="#162766"
                />
            </g>
            <path
                d="M76.292 46.1645L76.3601 39.2998C76.3601 39.2956 76.3601 39.2914 76.3601 39.2864C76.5089 36.2974 77.7099 33.6631 79.5126 31.7658C81.3628 29.8191 83.8479 28.6488 86.4834 28.6672C89.1189 28.6488 91.6032 29.8191 93.4541 31.7658C95.2569 33.6622 96.4579 36.2974 96.6067 39.2864C96.6075 39.2956 96.6075 39.3048 96.6067 39.314C96.6524 43.9275 96.6524 48.4207 96.6067 53.0342C96.6067 53.0384 96.6067 53.0426 96.6067 53.0476C96.4579 56.0366 95.2569 58.6709 93.4541 60.5682C91.604 62.5149 89.1189 63.6852 86.4834 63.6668C83.8479 63.6852 81.3636 62.5149 79.5126 60.5682C77.7099 58.6717 76.5089 56.0366 76.3601 53.0476C76.3593 53.0384 76.3593 53.0292 76.3601 53.02L76.292 46.1645ZM91.8584 45.1909C91.988 45.0604 92.1983 45.0604 92.3288 45.1909C92.4584 45.3214 92.4584 45.533 92.3288 45.6644L86.7236 51.306C86.5939 51.4366 86.3837 51.4366 86.2532 51.306L80.648 45.6644C80.5183 45.5339 80.5183 45.3222 80.648 45.1909C80.7776 45.0604 80.9879 45.0604 81.1184 45.1909L86.4884 50.5958L91.8584 45.1909ZM91.8584 49.0641C91.988 48.9336 92.1983 48.9336 92.3288 49.0641C92.4584 49.1946 92.4584 49.4062 92.3288 49.5376L86.7236 55.1793C86.5939 55.3098 86.3837 55.3098 86.2532 55.1793L80.648 49.5376C80.5183 49.4071 80.5183 49.1954 80.648 49.0641C80.7776 48.9336 80.9879 48.9336 81.1184 49.0641L86.4884 54.469L91.8584 49.0641ZM84.2593 38.2164L84.2726 36.8989C84.2726 36.8947 84.2726 36.8905 84.2726 36.8855C84.3042 36.2447 84.5635 35.6775 84.9524 35.2693C85.3572 34.8435 85.9024 34.5875 86.4834 34.5908C87.0644 34.5875 87.6096 34.8435 88.0144 35.2693C88.4033 35.6783 88.6618 36.2447 88.6942 36.8855C88.6951 36.8947 88.6951 36.9039 88.6942 36.9131C88.7034 37.7956 88.7025 38.6556 88.6942 39.539C88.6942 39.5432 88.6942 39.5474 88.6942 39.5524C88.6626 40.1932 88.4033 40.7604 88.0144 41.1686C87.6096 41.5944 87.0644 41.8504 86.4834 41.8471C85.9024 41.8504 85.3572 41.5944 84.9524 41.1686C84.5635 40.7595 84.305 40.1932 84.2726 39.5524C84.2717 39.5432 84.2717 39.534 84.2726 39.5248L84.2593 38.2164ZM84.9342 36.9173L84.9217 38.2189L84.9342 39.5181V39.5206C84.9574 39.9949 85.1461 40.4107 85.4295 40.7085C85.7113 41.0046 86.0861 41.1828 86.4809 41.1803H86.4834C86.8782 41.1828 87.2539 41.0046 87.5348 40.7085C87.8174 40.4107 88.006 39.9949 88.0301 39.5206L88.0426 38.2189L88.0301 36.9198V36.9173C88.0069 36.4429 87.8182 36.0272 87.5348 35.7294C87.253 35.4332 86.8782 35.255 86.4834 35.2575H86.4809C86.0861 35.255 85.7104 35.4332 85.4295 35.7294C85.1469 36.0272 84.9583 36.4429 84.9342 36.9173ZM77.0217 39.319L76.9544 46.1678L77.0217 53.0142V53.0167C77.1622 55.8383 78.2925 58.3229 79.9897 60.1081C81.7168 61.9251 84.0315 63.0176 86.4809 63H86.4834C88.9336 63.0176 91.2475 61.9251 92.9746 60.1081C94.6718 58.3229 95.8021 55.8383 95.9426 53.0167L96.0099 46.1678L95.9426 39.3215V39.319C95.8021 36.4973 94.6718 34.0128 92.9746 32.2276C91.2475 30.4106 88.9328 29.318 86.4834 29.3356H86.4809C84.0307 29.318 81.7168 30.4106 79.9897 32.2276C78.2925 34.0128 77.1622 36.4973 77.0217 39.319Z"
                fill="white"
            />
            <path
                d="M110.931 41.849C110.403 41.849 109.895 41.7673 109.405 41.604C108.915 41.436 108.485 41.198 108.117 40.89C107.753 40.582 107.494 40.2157 107.34 39.791L108.439 39.378C108.532 39.6393 108.705 39.868 108.957 40.064C109.213 40.2553 109.514 40.4047 109.86 40.512C110.205 40.6193 110.562 40.673 110.931 40.673C111.351 40.673 111.74 40.6053 112.1 40.47C112.464 40.33 112.758 40.1363 112.982 39.889C113.206 39.6417 113.318 39.3523 113.318 39.021C113.318 38.6803 113.201 38.4027 112.968 38.188C112.734 37.9687 112.436 37.796 112.072 37.67C111.708 37.5393 111.327 37.439 110.931 37.369C110.254 37.257 109.647 37.0983 109.111 36.893C108.579 36.683 108.156 36.3913 107.844 36.018C107.536 35.6447 107.382 35.1523 107.382 34.541C107.382 33.9717 107.545 33.4747 107.872 33.05C108.203 32.6253 108.639 32.2963 109.181 32.063C109.722 31.8297 110.305 31.713 110.931 31.713C111.449 31.713 111.95 31.7947 112.436 31.958C112.926 32.1167 113.357 32.35 113.731 32.658C114.104 32.966 114.372 33.3417 114.536 33.785L113.423 34.191C113.329 33.925 113.154 33.6963 112.898 33.505C112.646 33.309 112.347 33.1597 112.002 33.057C111.661 32.9497 111.304 32.896 110.931 32.896C110.515 32.8913 110.128 32.959 109.769 33.099C109.409 33.239 109.118 33.4327 108.894 33.68C108.67 33.9273 108.558 34.2143 108.558 34.541C108.558 34.933 108.66 35.234 108.866 35.444C109.076 35.6493 109.36 35.8033 109.72 35.906C110.079 36.0087 110.483 36.0997 110.931 36.179C111.565 36.2863 112.153 36.4567 112.695 36.69C113.236 36.9187 113.67 37.2243 113.997 37.607C114.328 37.9897 114.494 38.461 114.494 39.021C114.494 39.5903 114.328 40.0873 113.997 40.512C113.67 40.9367 113.236 41.2657 112.695 41.499C112.153 41.7323 111.565 41.849 110.931 41.849ZM120.919 39.819L121.969 40.386C121.652 40.8293 121.248 41.184 120.758 41.45C120.273 41.716 119.746 41.849 119.176 41.849C118.532 41.849 117.944 41.6833 117.412 41.352C116.885 41.0207 116.463 40.5773 116.145 40.022C115.833 39.462 115.676 38.8437 115.676 38.167C115.676 37.6537 115.767 37.1753 115.949 36.732C116.131 36.284 116.381 35.892 116.698 35.556C117.02 35.2153 117.394 34.9493 117.818 34.758C118.243 34.5667 118.696 34.471 119.176 34.471C119.746 34.471 120.273 34.604 120.758 34.87C121.248 35.136 121.652 35.493 121.969 35.941L120.919 36.508C120.695 36.2327 120.429 36.0203 120.121 35.871C119.813 35.7217 119.498 35.647 119.176 35.647C118.742 35.647 118.348 35.7637 117.993 35.997C117.643 36.2257 117.366 36.5313 117.16 36.914C116.955 37.2967 116.852 37.7143 116.852 38.167C116.852 38.6197 116.955 39.0373 117.16 39.42C117.37 39.798 117.65 40.1013 118 40.33C118.355 40.5587 118.747 40.673 119.176 40.673C119.522 40.673 119.846 40.5937 120.149 40.435C120.453 40.2763 120.709 40.071 120.919 39.819ZM123.373 41.667V34.667H124.549V35.542C124.796 35.2153 125.109 34.9563 125.487 34.765C125.865 34.569 126.276 34.471 126.719 34.471C126.99 34.471 127.251 34.506 127.503 34.576L127.027 35.752C126.836 35.6913 126.649 35.661 126.467 35.661C126.117 35.661 125.795 35.7473 125.501 35.92C125.212 36.088 124.981 36.3167 124.808 36.606C124.635 36.8953 124.549 37.2173 124.549 37.572V41.667H123.373ZM131.228 41.849C130.584 41.849 129.996 41.6833 129.464 41.352C128.936 41.0207 128.514 40.5773 128.197 40.022C127.884 39.462 127.728 38.8437 127.728 38.167C127.728 37.6537 127.819 37.1753 128.001 36.732C128.183 36.284 128.432 35.892 128.75 35.556C129.072 35.2153 129.445 34.9493 129.87 34.758C130.294 34.5667 130.747 34.471 131.228 34.471C131.872 34.471 132.457 34.6367 132.985 34.968C133.517 35.2993 133.939 35.745 134.252 36.305C134.569 36.865 134.728 37.4857 134.728 38.167C134.728 38.6757 134.637 39.1517 134.455 39.595C134.273 40.0383 134.021 40.4303 133.699 40.771C133.381 41.107 133.01 41.3707 132.586 41.562C132.166 41.7533 131.713 41.849 131.228 41.849ZM131.228 40.673C131.666 40.673 132.061 40.5587 132.411 40.33C132.765 40.0967 133.043 39.791 133.244 39.413C133.449 39.0303 133.552 38.615 133.552 38.167C133.552 37.7097 133.447 37.2897 133.237 36.907C133.031 36.5243 132.754 36.2187 132.404 35.99C132.054 35.7613 131.662 35.647 131.228 35.647C130.789 35.647 130.395 35.7637 130.045 35.997C129.695 36.2257 129.417 36.5313 129.212 36.914C129.006 37.2967 128.904 37.7143 128.904 38.167C128.904 38.6337 129.009 39.0583 129.219 39.441C129.429 39.819 129.711 40.12 130.066 40.344C130.42 40.5633 130.808 40.673 131.228 40.673ZM135.958 41.667V31.167H137.134V41.667H135.958ZM138.955 41.667V31.167H140.131V41.667H138.955ZM107.48 58.667V48.867H110.721C111.397 48.867 112.032 48.9953 112.625 49.252C113.217 49.504 113.738 49.8563 114.186 50.309C114.634 50.757 114.984 51.2773 115.236 51.87C115.492 52.458 115.621 53.0903 115.621 53.767C115.621 54.4437 115.492 55.0783 115.236 55.671C114.984 56.259 114.634 56.7793 114.186 57.232C113.738 57.68 113.217 58.0323 112.625 58.289C112.032 58.541 111.397 58.667 110.721 58.667H107.48ZM108.656 57.491H110.721C111.234 57.491 111.715 57.3953 112.163 57.204C112.615 57.008 113.012 56.7397 113.353 56.399C113.693 56.0583 113.959 55.664 114.151 55.216C114.347 54.7633 114.445 54.2803 114.445 53.767C114.445 53.2537 114.347 52.773 114.151 52.325C113.959 51.8723 113.691 51.4757 113.346 51.135C113.005 50.7943 112.611 50.5283 112.163 50.337C111.715 50.141 111.234 50.043 110.721 50.043H108.656V57.491ZM119.983 58.849C119.339 58.849 118.751 58.6833 118.219 58.352C117.692 58.0207 117.269 57.5773 116.952 57.022C116.639 56.462 116.483 55.8437 116.483 55.167C116.483 54.6537 116.574 54.1753 116.756 53.732C116.938 53.284 117.188 52.892 117.505 52.556C117.827 52.2153 118.2 51.9493 118.625 51.758C119.05 51.5667 119.502 51.471 119.983 51.471C120.627 51.471 121.213 51.6367 121.74 51.968C122.272 52.2993 122.694 52.745 123.007 53.305C123.324 53.865 123.483 54.4857 123.483 55.167C123.483 55.6757 123.392 56.1517 123.21 56.595C123.028 57.0383 122.776 57.4303 122.454 57.771C122.137 58.107 121.766 58.3707 121.341 58.562C120.921 58.7533 120.468 58.849 119.983 58.849ZM119.983 57.673C120.422 57.673 120.816 57.5587 121.166 57.33C121.521 57.0967 121.798 56.791 121.999 56.413C122.204 56.0303 122.307 55.615 122.307 55.167C122.307 54.7097 122.202 54.2897 121.992 53.907C121.787 53.5243 121.509 53.2187 121.159 52.99C120.809 52.7613 120.417 52.647 119.983 52.647C119.544 52.647 119.15 52.7637 118.8 52.997C118.45 53.2257 118.172 53.5313 117.967 53.914C117.762 54.2967 117.659 54.7143 117.659 55.167C117.659 55.6337 117.764 56.0583 117.974 56.441C118.184 56.819 118.466 57.12 118.821 57.344C119.176 57.5633 119.563 57.673 119.983 57.673ZM127.595 58.667H126.405L124.06 51.667H125.208L127.014 57.008L128.799 51.667H130.01L131.802 57.008L133.587 51.667H134.749L132.404 58.667H131.207L129.394 53.277L127.595 58.667ZM142.211 54.313V58.667H141.035V54.572C141.035 54.2173 140.948 53.8953 140.776 53.606C140.603 53.3167 140.372 53.088 140.083 52.92C139.793 52.7473 139.471 52.661 139.117 52.661C138.767 52.661 138.445 52.7473 138.151 52.92C137.861 53.088 137.63 53.3167 137.458 53.606C137.285 53.8953 137.199 54.2173 137.199 54.572V58.667H136.023V51.667H137.199V52.542C137.446 52.2153 137.759 51.9563 138.137 51.765C138.515 51.569 138.925 51.471 139.369 51.471C139.891 51.471 140.367 51.5993 140.797 51.856C141.231 52.108 141.574 52.4487 141.826 52.878C142.082 53.3073 142.211 53.7857 142.211 54.313Z"
                fill="#F2C438"
            />
            <defs>
                <filter
                    id="filter0_d_246_17969"
                    x="0"
                    y="0.000326157"
                    width="218.964"
                    height="119"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_246_17969" />
                    <feOffset dy="13.3333" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246_17969" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246_17969" result="shape" />
                </filter>
                <clipPath id="bgblur_0_246_17969_clip_path" transform="translate(0 -0.000326157)">
                    <path d="M33.3155 16.1472C36.0971 8.08053 43.6902 2.66699 52.223 2.66699H182.964C194.01 2.66699 202.964 11.6213 202.964 22.667V69.667C202.964 80.7127 194.01 89.667 182.964 89.667H36.0161C22.2781 89.667 12.6302 76.1347 17.1086 63.1472L33.3155 16.1472Z" />
                </clipPath>
            </defs>
        </svg>
        <span className="sr-only">Scroll down</span>
    </button>
);

// ==========================================
// 3. BACKGROUND SHAPES
// ==========================================

const BlueShapeSVG = React.memo(() => (
    <svg viewBox="0 0 876 643" className="w-full h-full object-cover" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
        <defs>
            <path
                id="blue-shape-path-hero"
                d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
            />
            <clipPath id="blue-shape-clip-hero">
                <use href="#blue-shape-path-hero" />
            </clipPath>
        </defs>
        <use href="#blue-shape-path-hero" fill="#162766" />
        <image
            href="/AUOTL.svg"
            width="876"
            height="643"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#blue-shape-clip-hero)"
        />
    </svg>
));

const LightShapeSVG = React.memo(({ children }: { children?: React.ReactNode }) => (
    <svg
        viewBox="0 0 665 643"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        focusable="false"
    >
        <defs>
            <path
                id="light-shape-path-hero"
                d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
            />
            <clipPath id="light-shape-clip-hero">
                <use href="#light-shape-path-hero" />
            </clipPath>
        </defs>
        <use href="#light-shape-path-hero" fill="#F0F2F4" />
        <image
            href="/AUOTR.svg"
            width="665"
            height="643"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#light-shape-clip-hero)"
        />

        {/* Removed 'xmlns' to fix TypeScript error in React */}
        <foreignObject
            x="0"
            y="0"
            width="665"
            height="643"
            clipPath="url(#light-shape-clip-hero)"
            style={{ overflow: 'visible' }}
        >
            <div className="w-full h-full relative pointer-events-auto flex flex-col justify-center items-end">
                {/* 
                    CONTENT ALIGNMENT:
                    - 'pr-8': Right padding from screen edge.
                    - 'items-end': Aligns content to the right.
                */}
                <div className="w-full pr-8 flex flex-col gap-4 items-end mt-12">
                    {children}
                </div>
            </div>
        </foreignObject>
    </svg>
));

// ==========================================
// 4. MAIN LAYOUTS (Mobile & Desktop)
// ==========================================

const MobileLanding = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    type Slide =
        | { id: number; type: "chart"; title: string; subtitle: string; value: string }
        | { id: number; type: "stats"; title: string; subtitle?: string; items: { label: string; value: string }[] }
        | { id: number; type: "info"; title: string; subtitle?: string; items: string[] };

    const slides: Slide[] = [
        { id: 1, type: "chart", title: "Case Closure Statistics", subtitle: "MDL Cases (2025)", value: "1,88,511" },
        {
            id: 2,
            type: "stats",
            title: "Average Settlement",
            items: [
                { label: "Average Settlement", value: "$100K – $1M" },
                { label: "Time to Settlement", value: "18–30 Months" },
                { label: "Time in Court", value: "4–5 Weeks" },
            ],
        },
        {
            id: 3,
            type: "info",
            title: "Free case Review",
            items: ["Serving Nationwide", "No Win, No Fee"],
        },
    ];

    const nextSlide = () => setCurrentSlide((prev: number) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev: number) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="block lg:hidden min-h-screen w-full bg-white flex items-stretch justify-center p-0 font-sans">
            <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-full h-[55%] z-0">
                    <Image src="/HPL.png" alt="Hero top background" fill sizes="100vw" className="object-cover" priority />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[50%] z-0">
                    <Image src="/HPR.png" alt="Hero bottom background" fill sizes="100vw" priority />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 py-8">
                    <div className="mt-4 mb-6">
                        <h1 className="font-serif text-[#f2c94c] text-4xl leading-tight">Justice</h1>
                        <h2 className="font-serif text-white text-4xl leading-tight mb-4">Starts Here</h2>
                        <p className="text-[#d0d5e2] text-sm font-light leading-relaxed mb-6">
                            Free, confidential case reviews.<br />
                            Serving all 50 states. No fees unless you win.
                        </p>
                        <button className="bg-[#f2c94c] hover:bg-[#e0b840] transition-colors text-[#1a2b5e] font-semibold py-3 px-6 rounded-full flex items-center gap-3 shadow-lg">
                            Check if you Qualify
                            <span className="bg-[#1a2b5e] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs transform rotate-45">
                                <ArrowUpRightIcon />
                            </span>
                        </button>
                    </div>

                    <div className="transform translate-x-1 translate-y-25 sm:translate-x-0 sm:translate-y-0">
                        <div className="flex justify-end">
                            <div
                                className="self-end bg-[#eff2f6] border border-white py-2 px-3 sm:px-4 rounded-xl flex items-center gap-2.5 sm:gap-3 shadow-sm mt-10 mb-4 w-fit max-w-[260px] sm:max-w-none"
                                style={{ display: "flex" }}
                            >
                                <span className="text-[#1a2b5e] text-[0.7rem] sm:text-xs font-bold">Talcum Powder Lawsuit</span>
                                <div className="bg-[#f2c94c] w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center">
                                    <ChevronDownIcon />
                                </div>
                            </div>
                        </div>

                        <div className="w-full overflow-hidden mb-auto">
                            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {slides.map((slide) => (
                                    <div key={slide.id} className="min-w-full">
                                        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm mx-1 transform scale-[0.97] translate-y-2 sm:scale-100 sm:translate-y-0 origin-top overflow-hidden">
                                            <div className="flex justify-between items-start mb-5 sm:mb-6">
                                                <div>
                                                    <h3 className="text-[#1a2b5e] font-bold text-sm sm:text-base leading-tight">{slide.title}</h3>
                                                    {slide.subtitle && <span className="text-[#8890a5] text-[0.7rem] sm:text-xs">{slide.subtitle}</span>}
                                                </div>
                                                {slide.type === "chart" && <div className="font-serif text-[#1a2b5e] text-xl sm:text-2xl">{slide.value}</div>}
                                            </div>

                                            {slide.type === "chart" && (
                                                <div className="h-28 sm:h-32 relative border-b border-gray-100 flex items-end justify-around pb-2 pl-10 pr-2">
                                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 pl-10">
                                                        {[90, 60, 30, 10].map((val) => (
                                                            <div key={val} className="w-full border-t border-dashed border-gray-100 relative">
                                                                <span className="absolute left-0 -top-2 text-[0.6rem] text-gray-400 bg-white pr-1">{val}K</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex flex-col items-center z-10 w-1/5 group">
                                                        <div className="w-full bg-[#dce1e8] h-12 rounded-t-md transition-all duration-500 group-hover:bg-[#1a2b5e]" />
                                                        <span className="text-[0.65rem] text-[#1a2b5e] mt-2 font-medium">Apr</span>
                                                    </div>
                                                    <div className="flex flex-col items-center z-10 w-1/5 group">
                                                        <div className="w-full bg-[#8792ab] h-16 rounded-t-md transition-all duration-500 group-hover:bg-[#1a2b5e]" />
                                                        <span className="text-[0.65rem] text-[#1a2b5e] mt-2 font-medium">Jul</span>
                                                    </div>
                                                    <div className="flex flex-col items-center z-10 w-1/5 group">
                                                        <div className="w-full bg-[#1a2b5e] h-24 rounded-t-md transition-all duration-500" />
                                                        <span className="text-[0.65rem] text-[#1a2b5e] mt-2 font-medium">Sept</span>
                                                    </div>
                                                </div>
                                            )}

                                            {slide.type === "stats" && (
                                                <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-white/30 backdrop-blur-sm p-2.5 sm:p-3 rounded-2xl border border-white/50 shadow-lg">
                                                    {slide.items.map((item) => (
                                                        <div
                                                            key={item.label}
                                                            className="bg-white/70 p-2.5 sm:p-3 rounded-xl border border-white/60 shadow-sm min-h-[88px] sm:min-h-[92px] flex flex-col justify-center"
                                                        >
                                                            <p className="text-[9px] sm:text-[10px] text-gray-500 mb-1 leading-tight">{item.label}</p>
                                                            <p className="text-[#1a2b5e] font-bold text-xs sm:text-sm leading-tight">{item.value}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {slide.type === "info" && (
                                                <div className="flex flex-col gap-3 sm:gap-4 text-[#1a2b5e]">
                                                    <div className="text-base sm:text-lg font-semibold text-center leading-tight">{slide.title}</div>
                                                    <div className="flex justify-between gap-1.5 sm:gap-2">
                                                        <GlassCard icon={<HandshakeIcon />} title={<>Free case<br />Review</>} />
                                                        <GlassCard icon={<ScaleIcon />} title={<>Serving<br />Nationwide</>} />
                                                        <GlassCard icon={<GavelIcon />} title={<>No Win,<br />No Fee</>} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="flex justify-between items-end mt-4">
                            <div className="flex items-center gap-3">
                                <button onClick={prevSlide} className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f2c94c] hover:bg-[#e0b840] rounded-xl flex items-center justify-center transition-colors" aria-label="Previous slide">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                </button>
                                <div className="flex gap-1.5">
                                    {slides.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-5 h-1 sm:w-6 sm:h-1.5 rounded-full transition-colors ${currentSlide === idx ? "bg-[#1a2b5e]" : "bg-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <button onClick={nextSlide} className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f2c94c] hover:bg-[#e0b840] rounded-xl flex items-center justify-center transition-colors" aria-label="Next slide">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <button className="bg-[#1a2b5e] text-white px-4 sm:px-5 py-3 rounded-[20px] flex items-center gap-2 shadow-lg">
                                <svg className="transform rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                                <span className="text-left text-xs leading-tight font-medium">
                                    Scroll<br />Down
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DesktopLanding = () => {
    return (
        <div className="hidden lg:flex min-h-screen bg-white items-center justify-center p-4 overflow-hidden font-sans">
            <div className="w-full max-w-[1440px] mx-auto flex flex-row relative h-[750px]">

                {/* --- LEFT SIDE (Blue) --- */}
                {/* Fixed width on lg screens to allow overlaps */}
                <div className="w-full lg:w-[50%] xl:w-[60%] h-full relative z-20">
                    <div className="absolute inset-0 w-full h-full">
                        <BlueShapeSVG />
                    </div>
                    <div className="relative z-30 px-12 xl:px-20 flex flex-col justify-center h-full -translate-y-6">
                        <h1 className="text-6xl xl:text-7xl font-bold leading-none mb-4">
                            <span className="font-serif text-[#F5C844] block mb-2">Justice</span>
                            <span className="text-white block">Starts Here</span>
                        </h1>
                        <p className="text-blue-100 text-lg xl:text-xl mt-6 max-w-md font-light leading-relaxed">
                            Free, confidential case reviews. Serving all 50 states. No fees unless you win.
                        </p>
                        <div className="mt-12">
                            <button aria-label="Check if you qualify" className="group flex items-center bg-[#F5C844] text-[#162766] px-1 pl-6 py-1 rounded-full font-bold text-lg shadow-lg hover:bg-[#e0b533] transition-all w-fit">
                                <span className="mr-6">Check if you Qualify</span>
                                <span className="bg-[#162766] text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                                    <ArrowUpRightIcon />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE (Light) - Fixed MIN WIDTH for Squeeze Prevention --- */}
                {/* 
                   KEY FIX: 'min-w-[600px]' forces the SVG to stay wide even on 1024px screens.
                   This ensures the diagonal slant moves leftwards, leaving space for content.
                   Since z-index is lower (z-10) than Left Side (z-20), it slides under harmlessly.
                */}
                <div className="absolute right-0 top-0 h-full z-10 mr-2 lg:mr-4 xl:mr-6 w-[60%] lg:min-w-[600px] xl:w-[50%] transition-all duration-500">
                    <LightShapeSVG>

                        {/* 1. Dropdown & Stats Card */}
                        <div className="w-full max-w-[370px] mb-2 xl:mb-4 flex flex-col items-end">
                            <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-2 pl-4 w-full mb-3 xl:mb-4">
                                <span className="text-[#162766] font-bold text-xs xl:text-sm">Talcum Powder Lawsuit</span>
                                <button aria-expanded="false" aria-label="Open lawsuit dropdown" className="flex items-center justify-center rounded-lg bg-[#F5C844] w-7 h-7 xl:w-8 xl:h-8 transition hover:bg-[#e0b533] flex-shrink-0">
                                    <ChevronDownIcon />
                                </button>
                            </div>
                            <StatisticsCard />
                        </div>

                        {/* 2. Data Grid */}
                        <div className="w-full max-w-[440px]">
                            <div className="grid grid-cols-3 gap-2 bg-white/30 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/50">
                                <div className="bg-white/70 p-2 xl:p-3 rounded-lg shadow-sm min-h-[70px] xl:min-h-[80px] flex flex-col justify-center">
                                    <p className="text-[9px] xl:text-[10px] text-gray-500 mb-1 leading-tight">Average Settlement</p>
                                    <p className="text-[#162766] font-bold text-[10px] xl:text-xs">$100K – $1M</p>
                                </div>
                                <div className="bg-white/70 p-2 xl:p-3 rounded-lg shadow-sm min-h-[70px] xl:min-h-[80px] flex flex-col justify-center">
                                    <p className="text-[9px] xl:text-[10px] text-gray-500 mb-1 leading-tight">Time to Settlement</p>
                                    <p className="text-[#162766] font-bold text-[10px] xl:text-xs">18–30 Months</p>
                                </div>
                                <div className="bg-white/70 p-2 xl:p-3 rounded-lg shadow-sm min-h-[70px] xl:min-h-[80px] flex flex-col justify-center">
                                    <p className="text-[9px] xl:text-[10px] text-gray-500 mb-1 leading-tight">Time in Court</p>
                                    <p className="text-[#162766] font-bold text-[10px] xl:text-xs">4–5 Weeks</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Glass Cards Row */}
                        {/* 
                           FIX: Added mr-28 to mr-36 (responsive) to push cards left.
                           This creates empty space on the right for the Scroll Button.
                        */}
                        <div className="flex flex-row gap-2 w-full max-w-[500px] justify-start ml-0 transform -translate-x-8 lg:-translate-x-10 xl:-translate-x-14">
                            <GlassCard icon={<HandshakeIcon />} title={<>Free case<br />Review</>} />
                            <GlassCard icon={<ScaleIcon />} title={<>Serving<br />Nationwide</>} />
                            <GlassCard icon={<GavelIcon />} title={<>No Win,<br />No Fee</>} />
                        </div>

                    </LightShapeSVG>

                    {/* 4. Scroll Button - MOVED OUTSIDE + SCALED UP */}
                    {/* 
                       - scale-90 / scale-100: Makes it bigger.
                       - bottom-6 right-6: Positions it in the corner gap created by the margin above.
                    */}
                    <div className="absolute -bottom-6 right-0 z-50 scale-90 xl:scale-100 origin-bottom-right translate-y-5 sm:translate-y-7 xl:translate-y-8">
                        <ScrollButton />
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Landing Page ---
const LandingPage = () => {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        const update = () => setIsDesktop(window.innerWidth >= 1024);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Prevent hydration errors by rendering nothing until mounted
    if (isDesktop === null) return null;

    return (
        <>
            {isDesktop ? <DesktopLanding /> : <MobileLanding />}
        </>
    );
};

export default LandingPage;
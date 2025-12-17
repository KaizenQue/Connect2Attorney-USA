import React from 'react';


const LegalCaseCard = () => {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      
      {/* 
        Card Wrapper 
        w-[75%] sets the width as requested.
        relative group is needed to position the button absolutely relative to this container.
      */}
      <div className="relative w-full md:w-[95%] max-w-6xl mb-12">
        
        {/* Main Blue Card */}
        <div className="rounded-[30px] relative overflow-hidden shadow-2xl bg-[#1a2b6b] md:min-h-[420px] lg:min-h-[360px]">
          
          {/* Background Image 
              Mobile: Absolute cover (bg). 
              Desktop: Static auto (defines height).
          */}
          <img 
            src="/DPCN.png" 
            alt="Lady Justice" 
            className="absolute inset-0 w-full h-full object-cover object-[65%] sm:object-[70%] md:object-right opacity-80"
          />
          {/* Content Container (Left Side) 
              Mobile: Relative (defines height) + padding for button.
              Desktop: Absolute overlay (fits in image).
          */}
          <div className="relative z-10 p-8 md:p-12 lg:p-14 flex flex-col justify-center text-white gap-6">
            
            <h1
              className="font-noto-serif font-normal capitalize leading-tight"
              style={{
                fontSize: 'clamp(28px, 5vw, 60px)',
                lineHeight: 'clamp(36px, 6vw, 70px)',
                letterSpacing: '0px',
              }}
            >
              Get Legal Support From Connect2Attorney
            </h1>
            
            <p
              className="text-gray-200 font-urbanist font-normal leading-relaxed max-w-2xl"
              style={{
                fontSize: '18px',
                lineHeight: '24px',
                letterSpacing: '0px',
              }}
            >
              You Don't Have To Fight This Battle Alone. If Roundup Has Caused You Cancer Or Any Other 
              Health Problem, Connect2Attorney Can Help You:
            </p>

            {/* Features List */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <FeatureItem 
                icon={<SearchIcon />} 
                text="Analyze Your Case" 
              />
              <FeatureItem 
                icon={<FileIcon />} 
                text="Help Secure Medical Records" 
              />
              <FeatureItem 
                icon={<MoneyIcon />} 
                text="Maximize Compensation" 
              />
            </div>

            <div className="w-full md:w-auto">
              <button
                className="bg-[#f0c435] hover:bg-[#ffcf3d] text-[#1a2b6b] font-urbanist font-semibold py-4 px-12 md:px-16 lg:px-20 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1 flex items-center gap-3 uppercase w-full md:w-auto justify-center"
                style={{
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  fontWeight: '600',
                }}
              >
                Start A Free Case Review
                <span className="bg-[#1a2b6b] text-[#f0c435] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for the Feature List Items
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="text-[#f0c435] w-6 h-6 flex-shrink-0">
      {icon}
    </div>
    <span
      className="font-urbanist font-normal text-white"
      style={{
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '0px',
      }}
    >
      {text}
    </span>
  </div>
);

// --- SVG Icons (Inline to avoid dependencies) ---

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const MoneyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default LegalCaseCard;
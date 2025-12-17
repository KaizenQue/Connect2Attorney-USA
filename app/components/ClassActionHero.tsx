import React from 'react';

const ClassActionHero = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] max-h-[800px] overflow-hidden font-sans bg-gray-100">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/MTH.png"
          alt="Class Action hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Side Enquiry Tab */}
      <div className="absolute right-0 top-[10%] md:top-[15%] z-30 cursor-pointer hover:opacity-90 transition-opacity">
        <div className="relative w-[66px] h-[167px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="167" viewBox="0 0 66 167" fill="none">
  <g filter="url(#filter0_dd_ca_hero)">
    <path d="M35.6579 127.592C29.5833 125.163 25.6001 119.279 25.6001 112.737L25.6001 32.0001C25.6001 27.5819 29.1818 24.0001 33.6001 24.0001H65.6001V139.569L35.6579 127.592Z" fill="#F2C438"/>
  </g>
  <path d="M48.9399 91.4912L38.4399 91.4912L38.4399 85.0487L39.6999 85.0487L39.6999 90.2312L42.6849 90.2312L42.6849 85.9862L43.9449 85.9862L43.9449 90.2312L47.6799 90.2312L47.6799 85.0487L48.9399 85.0487L48.9399 91.4912Z" fill="#162766"/>
  <path d="M44.2749 76.7753L48.9399 76.7753L48.9399 78.0353L44.5524 78.0353C44.1724 78.0353 43.8274 78.1278 43.5174 78.3128C43.2074 78.4978 42.9624 78.7453 42.7824 79.0553C42.5974 79.3653 42.5049 79.7103 42.5049 80.0903C42.5049 80.4653 42.5974 80.8103 42.7824 81.1253C42.9624 81.4353 43.2074 81.6828 43.5174 81.8678C43.8274 82.0528 44.1724 82.1453 44.5524 82.1453L48.9399 82.1453L48.9399 83.4053L41.4399 83.4053L41.4399 82.1453L42.3774 82.1453C42.0274 81.8803 41.7499 81.5453 41.5449 81.1403C41.3349 80.7353 41.2299 80.2953 41.2299 79.8203C41.2299 79.2603 41.3674 78.7503 41.6424 78.2903C41.9124 77.8253 42.2774 77.4578 42.7374 77.1878C43.1974 76.9128 43.7099 76.7753 44.2749 76.7753Z" fill="#162766"/>
  <path d="M49.1499 71.9269C49.1499 72.6519 48.9724 73.3144 48.6174 73.9144C48.2624 74.5094 47.7849 74.9844 47.1849 75.3394C46.5849 75.6944 45.9199 75.8719 45.1899 75.8719C44.6449 75.8719 44.1349 75.7694 43.6599 75.5644C43.1849 75.3594 42.7674 75.0769 42.4074 74.7169C42.0424 74.3519 41.7574 73.9319 41.5524 73.4569C41.3474 72.9819 41.2449 72.4719 41.2449 71.9269C41.2449 71.3469 41.3824 70.8444 41.6574 70.4194C41.9274 69.9894 42.2824 69.6469 42.7224 69.3919L41.4399 69.3919L41.4399 68.1319L52.6899 68.1319L52.6899 69.3919L47.6724 69.3919C48.1124 69.6469 48.4699 69.9894 48.7449 70.4194C49.0149 70.8444 49.1499 71.3469 49.1499 71.9269ZM42.4674 71.9119C42.4674 72.4069 42.5899 72.8569 42.8349 73.2619C43.0799 73.6669 43.4099 73.9894 43.8249 74.2294C44.2349 74.4644 44.6899 74.5819 45.1899 74.5819C45.6999 74.5819 46.1624 74.4619 46.5774 74.2219C46.9874 73.9769 47.3149 73.6519 47.5599 73.2469C47.7999 72.8419 47.9199 72.3969 47.9199 71.9119C47.9199 71.4169 47.7974 70.9894 47.5524 70.6294C47.3074 70.2694 46.9774 69.9919 46.5624 69.7969C46.1474 69.5969 45.6899 69.4969 45.1899 69.4969C44.6849 69.4969 44.2274 69.5969 43.8174 69.7969C43.4074 69.9919 43.0799 70.2719 42.8349 70.6369C42.5899 70.9969 42.4674 71.4219 42.4674 71.9119Z" fill="#162766"/>
  <path d="M46.0899 66.757L41.4399 66.757L41.4399 65.497L45.8124 65.497C46.1924 65.497 46.5374 65.4045 46.8474 65.2195C47.1574 65.0345 47.4049 64.787 47.5899 64.477C47.7699 64.162 47.8599 63.817 47.8599 63.442C47.8599 63.062 47.7699 62.7195 47.5899 62.4145C47.4049 62.1045 47.1574 61.857 46.8474 61.672C46.5374 61.487 46.1924 61.3945 45.8124 61.3945L41.4399 61.3945L41.4399 60.1345L48.9399 60.127L48.9399 61.387L47.9874 61.3945C48.3374 61.6595 48.6174 61.9945 48.8274 62.3995C49.0324 62.8045 49.1349 63.242 49.1349 63.712C49.1349 64.272 48.9999 64.7845 48.7299 65.2495C48.4549 65.7095 48.0874 66.077 47.6274 66.352C47.1674 66.622 46.6549 66.757 46.0899 66.757Z" fill="#162766"/>
  <path d="M41.4399 58.6201L41.4399 57.3601L48.9399 57.3601L48.9399 58.6201L41.4399 58.6201ZM40.2174 57.9751C40.2174 58.1751 40.1524 58.3426 40.0224 58.4776C39.8924 58.6126 39.7299 58.6801 39.5349 58.6801C39.3399 58.6801 39.1774 58.6126 39.0474 58.4776C38.9174 58.3426 38.8524 58.1776 38.8524 57.9826C38.8524 57.7876 38.9174 57.6226 39.0474 57.4876C39.1774 57.3526 39.3399 57.2851 39.5349 57.2851C39.7299 57.2851 39.8924 57.3526 40.0224 57.4876C40.1524 57.6176 40.2174 57.7801 40.2174 57.9751Z" fill="#162766"/>
  <path d="M48.9399 55.6025L41.4399 55.6025L41.4399 54.3425L42.3774 54.3425C42.0274 54.0775 41.7499 53.7425 41.5449 53.3375C41.3349 52.9325 41.2299 52.4925 41.2299 52.0175C41.2299 51.7275 41.2674 51.4475 41.3424 51.1775L42.6024 51.6875C42.5374 51.8925 42.5049 52.0925 42.5049 52.2875C42.5049 52.6625 42.5974 53.0075 42.7824 53.3225C42.9624 53.6325 43.2074 53.88 43.5174 54.065C43.8274 54.25 44.1724 54.3425 44.5524 54.3425L48.9399 54.3425L48.9399 55.6025Z" fill="#162766"/>
  <path d="M41.4399 45.1184L41.4399 43.7834L52.6899 47.8859L52.6899 49.2209L48.9399 47.8634L41.4399 50.5559L41.4399 49.1759L47.2074 47.2334L41.4399 45.1184Z" fill="#162766"/>
  <path d="M52.42 112.736C52.42 112.736 49.9544 111.938 47.9602 111.299L39.6255 111.451C38.6395 111.47 37.8255 110.741 37.8087 109.826L37.6305 100.107C37.6137 99.1929 38.4005 98.4355 39.3865 98.4174L50.3662 98.2161C51.3527 98.198 52.1662 98.9255 52.183 99.841L52.3365 108.211L52.337 108.211L52.42 112.736ZM50.1688 107.327C50.1291 107.284 50.0796 107.248 50.0233 107.223C49.9671 107.198 49.9055 107.183 49.8423 107.18C49.779 107.176 49.7157 107.184 49.6561 107.204C49.5966 107.223 49.5422 107.253 49.4964 107.291C49.4811 107.303 47.9517 108.539 45.0645 108.592C42.2132 108.644 40.6158 107.474 40.5874 107.453C40.5401 107.417 40.4847 107.389 40.4246 107.372C40.3645 107.355 40.3009 107.35 40.238 107.355C40.1751 107.361 40.1142 107.378 40.059 107.405C40.0039 107.433 39.9558 107.47 39.9178 107.514C39.8362 107.606 39.7977 107.722 39.8098 107.838C39.8207 107.954 39.8819 108.061 39.9807 108.137C40.0555 108.194 41.8453 109.536 45.0807 109.477C48.3167 109.417 50.0561 108.011 50.1288 107.951C50.2245 107.871 50.2815 107.762 50.288 107.646C50.296 107.53 50.2534 107.416 50.1688 107.327Z" fill="#162766"/>
  <defs>
    <filter id="filter0_dd_ca_hero" x="0.000104904" y="6.79493e-06" width="91.2" height="166.769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1.6"/>
      <feGaussianBlur stdDeviation="12.8"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_ca_hero"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="0.8"/>
      <feGaussianBlur stdDeviation="2.4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_ca_hero" result="effect2_dropShadow_ca_hero"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_656_2743" result="shape"/>
    </filter>
  </defs>
</svg>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full h-full flex items-center">

        {/* Left Text Content */}
        <div className="ml-[5%] md:ml-[10%] max-w-xl">
          <h1
            className="font-noto-serif font-normal capitalize mb-4"
            style={{
              color: '#F2C438',
              fontFamily: '"Noto Serif"',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '70px',
              textTransform: 'capitalize',
            }}
          >
            CLASS ACTION
          </h1>
          <p
            className="font-urbanist capitalize"
            style={{
              color: '#FFF',
              fontFamily: 'Urbanist',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '28px',
              textTransform: 'capitalize',
            }}
          >
            Championing Justice For The Victimized
          </p>
        </div>

        {/* Floating Circular Badge (Hidden on very small mobile to save space) */}
        <div className="hidden sm:block absolute top-[15%] right-[5%] md:top-[25%] md:right-[15%] w-32 h-32 md:w-40 md:h-40">
            {/* Spinning Text */}
            <div className="w-full h-full animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[13px] font-bold uppercase tracking-[2px] fill-white/40">
                  <textPath xlinkHref="#circle">
                    Get a Free Case Review • 
                  </textPath>
                </text>
              </svg>
            </div>
            
            {/* Center Gavel Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/>
                <path d="m16 16 6-6"/>
                <path d="m8 8 6-6"/>
                <path d="m9 7 8 8"/>
                <path d="m21 11-8-8"/>
              </svg>
            </div>
        </div>

        {/* Bottom Badge Image */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 w-[90%] md:w-auto flex justify-center">
          <img
            src="/MTHB.png"
            alt="Class Action Hero badge"
            className="h-28 md:h-36 w-auto drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default ClassActionHero;


import React from 'react';

const LegalServicesSection = () => {
  const cards = [
    {
      title: "Deep Expertise",
      text: "Brand name Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI1.png",
    },
    {
      title: "Personalized Service",
      text: "Brand name Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI2.png",
    },
    {
      title: "Integrity and Ethics",
      text: "Brand name Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI3.png",
    },
    {
      title: "No Win, No Fee",
      text: "Brand name Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6 lg:p-12 font-sans">

      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col">
          <h1
            className="font-noto-serif font-normal capitalize text-[#1B264F] mb-10"
            style={{
              fontSize: 'clamp(32px, 7vw, 60px)',
              lineHeight: 'clamp(40px, 8vw, 70px)',
              letterSpacing: '0px',
            }}
          >
            <span className="text-[#F2C037]">What Sets</span> Us Apart
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="bg-[#F2F4F8] p-6 rounded-2xl flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3
                    className="font-noto-serif font-semibold text-[#162766] mb-3"
                    style={{
                      fontSize: '24px',
                      lineHeight: '34px',
                      letterSpacing: '0px',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#162766] font-urbanist font-normal"
                    style={{
                      fontSize: '18px',
                      lineHeight: 'normal',
                      letterSpacing: '0px',
                    }}
                  >
                    {card.text}
                  </p>
                </div>
                
                {/* Icon Box / Image Box */}
                <div className="w-12 h-12 bg-[#1B264F] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1B264F]/20 overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex flex-col pt-2 lg:pl-4">
          <p
            className="text-gray-500 font-urbanist font-normal leading-relaxed mb-10 max-w-xl"
            style={{
              fontSize: '18px',
              lineHeight: '24px',
              letterSpacing: '0px',
            }}
          >
            We offer a wide range of legal services to address your unique needs. Whether you're seeking justice in a personal injury case or joining a class action lawsuit, we're here to guide you every step of the way.
          </p>

          {/* Image Container */}
          <div className="relative w-full h-[400px]">
            {/* Main Image */}
            <div className="w-full h-full rounded-tl-[40px] rounded-br-[40px] rounded-tr-[30px] rounded-bl-none overflow-hidden relative z-0">
              <img
                src="/AU2.png"
                alt="Office Meeting"
                className="w-full h-full object-contain"
              />
            </div>

    
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalServicesSection;


import React from 'react';
import CaseCard from './CaseCard';

const LawsuitSection = () => {
  const lawsuits = [
    {
      id: 1,
      title: "Tesla Autopilot Recall Lawsuit",
      image: "https://images.unsplash.com/photo-1584036561566-b45238f2e129?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "MacLaren Hall Sex Abuse Lawsuit",
      image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    // Outer Wrapper
    <div className="min-h-screen bg-white flex items-center font-sans overflow-x-hidden">
      
      {/* Main Blue Container: Extends to touch left edge with diagonal cut */}
      <div 
        className="
          w-full relative
          bg-[#152050]
          lg:bg-transparent
          lg:bg-[linear-gradient(135deg,transparent_80px,#152050_80px)]
          text-white p-8 md:p-12 lg:p-20 shadow-[-10px_10px_30px_rgba(0,0,0,0.1)]
        "
      >
        
        {/* Header Section */}
        <h1
          className="font-noto-serif font-normal capitalize mb-12 max-w-4xl text-white"
          style={{
            fontSize: 'clamp(32px, 7vw, 56px)',
            lineHeight: 'clamp(40px, 8vw, 68px)',
            letterSpacing: '0px',
          }}
        >
          Together In <span className="text-[#fecc38]">2 Class Action</span> Lawsuits To Demand Accountability
        </h1>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 w-full overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {lawsuits.map((item) => (
            <CaseCard key={item.id} id={item.id} title={item.title} image={item.image} />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {lawsuits.map((item) => (
            <div key={item.id} className="w-full">
              <CaseCard id={item.id} title={item.title} image={item.image} />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <div className="w-8 h-2 bg-[#fecc38] rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default LawsuitSection;

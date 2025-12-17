"use client";

import React from 'react';
import CaseCard from './CaseCard';

// Define the data interface
interface CaseItem {
  id: number;
  title: string;
  image: string;
}

// Full list of cases to match the "24 Mass Tort Battles" visualization
const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Ozempic\nLawsuit",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mesothelioma\nLawsuit",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Roundup Cancer\nLawsuit",
    image: "https://images.unsplash.com/photo-1625246333195-58197bd47d19?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Talcum Powder\nLawsuit",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Depo-Provera\nLawsuit",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Bard PowerPort\nLawsuit",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Tylenol Autism\nLawsuit",
    image: "https://images.unsplash.com/photo-1555633514-ab47b1963751?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Hernia Mesh\nLawsuit",
    image: "https://images.unsplash.com/photo-1516574187841-69301976e499?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "NEC Baby\nFormula Lawsuit",
    image: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Hair Relaxer\nCancer Lawsuit",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Philips CPAP\nSleep Lawsuit",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed456d32?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Camp Lejeune\nWater Lawsuit",
    image: "https://images.unsplash.com/photo-1628146957896-1a3b9343360c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Exactech Knee\nAnkle Lawsuit",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Elmiron Eye Damage\nLawsuit",
    image: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Paragard IUD\nBreakage Lawsuit",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Uber/Lyft Ride\nAssault Lawsuit",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Zantac Cancer\nLawsuit",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Paraquat\nParkinson's Lawsuit",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Sunscreen\nBenzene Lawsuit",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Similac Formula\nLawsuit",
    image: "https://images.unsplash.com/photo-1594824476961-48e6a41cd95a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 21,
    title: "Firefighting Foam\nLawsuit",
    image: "https://images.unsplash.com/photo-1555699897-adee86d06d48?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 22,
    title: "Opioid Crisis\nLawsuit",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 23,
    title: "Social Media\nAddiction Lawsuit",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 24,
    title: "Chemical Hair\nStraightener Lawsuit",
    image: "https://images.unsplash.com/photo-1632059336152-4740702d7e98?q=80&w=600&auto=format&fit=crop"
  }
];

const CasesSection2: React.FC = () => {
  return (
    <div className="bg-[#111e4d] min-h-screen py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left">
          <h1 
            className="font-noto-serif font-normal capitalize text-[#fcc030] mb-2"
            style={{
              fontSize: 'clamp(28px, 6vw, 60px)',
              lineHeight: 'clamp(36px, 7vw, 70px)',
              letterSpacing: '0px',
            }}
          >
            24 Mass Tort Battles,
          </h1>
          <h2 
            className="font-noto-serif font-normal capitalize text-white"
            style={{
              fontSize: 'clamp(28px, 6vw, 60px)',
              lineHeight: 'clamp(36px, 7vw, 70px)',
              letterSpacing: '0px',
            }}
          >
            One Trusted Ally.
          </h2>
        </div>

        {/* Mobile carousel */}
        <div className="
          md:hidden
          flex gap-4 sm:gap-5 w-full
          overflow-x-auto snap-x snap-mandatory
          pb-6 scrollbar-hide
        ">
          {casesData.map((item) => (
            <CaseCard key={item.id} id={item.id} title={item.title} image={item.image} />
          ))}
        </div>

        {/* Tablet/Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {casesData.map((item) => (
            <CaseCard key={item.id} id={item.id} title={item.title} image={item.image} />
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <div className="w-8 h-2 bg-[#fcc030] rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>

        {/* Footer / Call to Action */}
        <div className="mt-16 flex justify-center pb-8">
          <button 
            className="
              bg-[#fcc030] text-[#111e4d] 
              px-10 py-4 rounded-full 
              font-urbanist font-semibold
              hover:bg-white transition-colors duration-300
              shadow-lg hover:shadow-xl transform hover:-translate-y-1
            "
            style={{
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%',
              fontWeight: '600',
            }}
          >
            See All Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default CasesSection2;
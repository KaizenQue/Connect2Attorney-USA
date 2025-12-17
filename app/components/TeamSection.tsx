import React from 'react';

import { FaLinkedinIn } from 'react-icons/fa';



// --- Data ---

const leaders = [

  {

    name: "Mr. Manoj Gupta",

    role: "FOUNDER & PRESIDENT",

    img: "/AUC1.png",

    bg: "", // No background

    linkedIn: "#",

    imgClass: "object-contain" // Correct height

  },

  {

    name: "Mr. Neeraj Gupta",

    role: "VICE PRESIDENT",

    img: "/AUC2.png",

    bg: "", // No background

    linkedIn: "#",

    imgClass: "object-cover object-top" // Fill card height

  },

];



const deputy = {

  name: "Mrs. Sunshine Rigsby",

  role: "DEPUTY DIRECTOR SALES & MARKETING",

  img: "/AUC3.png",

  bg: "", // No background

  linkedIn: "#"

};



const teamMembers = [

  { name: "Dr. Winston Rodriguez", role: "CHIEF EXECUTIVE OFFICER", img: "/AUC4.png" },

  { name: "Ms. Carlisle Keshirin", role: "SALES MANAGER", img: "/AUC5.png" },

  { name: "Ms. Mina Trantow", role: "PROJECT MANAGER", img: "/AUC6.png" },

  { name: "Mrs. Aponi Curtis", role: "EDITOR IN CHIEF", img: "/AUC7.png" },

  { name: "Ms. Cielo Cama", role: "FINANCIAL DIRECTOR", img: "/AUC8.png" },

  { name: "Mr. Nicholas Runolfsdottir", role: "MARKETING DIRECTOR", img: "/AUC9.png" },

];



const TeamSection = () => {

  return (

    <div className="min-h-screen bg-[#162766] font-sans text-white py-10 px-4 flex justify-center overflow-x-hidden">

      <div className="relative w-full max-w-[900px]">



        {/* --- DECORATIVE DOTTED LINES --- */}

        {/* Desktop Line */}

        <div className="hidden md:block absolute top-[60px] left-[33px] pointer-events-none z-0">

          <div className="w-[8px] h-[8px] bg-[#eec044] rounded-full absolute -top-[4px] -left-[4px]"></div>

          {/* Down and Right */}

          <div className="h-[480px] w-[88%] border-l-[2px] border-b-[2px] border-dotted border-[#eec044] rounded-bl-[40px]"></div>

          {/* Connector to vertical end */}

          <div className="absolute top-[480px] right-0 w-[40px] h-[120px] border-r-[2px] border-t-[2px] border-dotted border-[#eec044] rounded-tr-[40px]"></div>

          <div className="absolute top-[600px] -right-[4px] w-[8px] h-[8px] bg-[#eec044] rounded-full"></div>

        </div>



        {/* Mobile Line */}

        <div className="md:hidden absolute top-[130px] left-[23px] pointer-events-none z-0">

          <div className="w-[8px] h-[8px] bg-[#eec044] rounded-full absolute -top-[4px] -left-[4px]"></div>

          {/* Straight Down */}

          <div className="h-[450px] border-l-[2px] border-dotted border-[#eec044]"></div>

          {/* Turn Right */}

          <div className="absolute top-[450px] w-[150px] h-[40px] border-l-[2px] border-b-[2px] border-dotted border-[#eec044] rounded-bl-[30px]"></div>

        </div>





        {/* --- SECTION 1: DRIVING FORCE --- */}

        <div className="relative z-10 text-center mb-8">

          <h1
            className="font-noto-serif font-normal capitalize mb-8"
            style={{
              fontSize: 'clamp(32px, 7vw, 60px)',
              lineHeight: 'clamp(40px, 8vw, 70px)',
              letterSpacing: '0px',
            }}
          >
            <span className="text-[#eec044]">Our</span> Driving Force
          </h1>



          {/* Top Row (Founders) */}

          <div className="flex flex-wrap justify-center gap-8 mb-8">

            {leaders.map((leader, index) => (

              <div key={index} className="flex flex-col items-center w-[220px]">

                <div className={`relative w-full h-[250px] rounded-[20px] overflow-hidden shadow-lg ${leader.bg}`}>

                  <img src={leader.img} alt={leader.name} className={`w-full h-full ${leader.imgClass || 'object-contain'} rounded-[20px]`} />

                  <a href={leader.linkedIn} className="absolute bottom-4 right-4 bg-[#0e1638] text-[#eec044] w-9 h-9 rounded-lg flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-md">

                    <FaLinkedinIn />

                  </a>

                </div>

                <div className="text-center mt-4">
                  <p
                    className="text-[#eec044] font-urbanist font-normal uppercase tracking-widest mb-1"
                    style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0px' }}
                  >
                    {leader.role}
                  </p>
                  <h3
                    className="font-noto-serif font-normal"
                    style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
                  >
                    {leader.name}
                  </h3>
                </div>

              </div>

            ))}

          </div>



          {/* Middle Row (Deputy) */}

          <div className="flex justify-center mb-16">

            <div className="flex flex-col items-center w-[220px]">

              <div className={`relative w-full h-[250px] rounded-[20px] flex items-center justify-center overflow-hidden shadow-lg ${deputy.bg}`}>

                <img src={deputy.img} alt={deputy.name} className="w-full h-full object-contain rounded-[20px]" />

                <a href={deputy.linkedIn} className="absolute bottom-4 right-4 bg-[#0e1638] text-[#eec044] w-9 h-9 rounded-lg flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-md">

                   <FaLinkedinIn />

                </a>

              </div>

              <div className="text-center mt-4">
                <p
                  className="text-[#eec044] font-urbanist font-normal uppercase tracking-widest mb-1"
                  style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0px' }}
                >
                  {deputy.role}
                </p>
                <h3
                  className="font-noto-serif font-normal"
                  style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
                >
                  {deputy.name}
                </h3>
              </div>

            </div>

          </div>

        </div>





        {/* --- SECTION 2: A TEAM --- */}

        <div className="relative z-10 text-center">

          <h2
            className="font-noto-serif font-normal capitalize mb-8"
            style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              lineHeight: 'clamp(36px, 7vw, 60px)',
              letterSpacing: '0px',
            }}
          >
            Our <span className="text-[#eec044]">A</span> Team
          </h2>



          {/* 

             MOBILE: Horizontal Scroll (Flex + Overflow)

             DESKTOP: Grid Layout 

          */}

          <div className="
            flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 -mx-4 scrollbar-hide
            md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 md:mx-0
          ">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-[200px] md:w-auto snap-center flex flex-col items-center"
              >
                {/* Image with blue overlay & white text on hover */}
                <div className="relative w-full aspect-square rounded-[20px] overflow-hidden mb-3">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                  />
                  {/* Blue overlay + white text */}
                  <div className="absolute inset-0 flex items-center justify-center px-3 text-center bg-transparent group-hover:bg-[#1d3a8a] transition-colors duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-urbanist text-[11px] md:text-xs uppercase tracking-[0.18em] text-white mb-1">
                        {member.role}
                      </p>
                      <h3 className="font-noto-serif text-sm md:text-base text-white">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Text below card (also turns white on hover) */}
                <p
                  className="text-[#eec044] group-hover:text-white transition-colors font-urbanist font-normal uppercase tracking-widest mb-1"
                  style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0px' }}
                >
                  {member.role}
                </p>
                <h3
                  className="font-noto-serif font-normal group-hover:text-white transition-colors"
                  style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
                >
                  {member.name}
                </h3>
              </div>
            ))}

          </div>

        </div>



      </div>

    </div>

  );

};



export default TeamSection;


import React from 'react';



const HowItWorks: React.FC = () => {

  return (

    <section className="bg-white text-[#1a237e] py-10 px-5 md:px-10 font-sans max-w-7xl mx-auto">



      {/* Header Section */}

      <header className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">

        <div className="max-w-2xl">

          <h1 className="font-noto-serif font-normal text-[60px] mb-4 leading-[70px] tracking-[0px] align-middle capitalize">

            How It <span className="text-[#fbc02d]">Works</span>

          </h1>

          <p className="font-urbanist font-normal text-[18px] leading-[25px] tracking-[0px] align-middle text-slate-500">

            Free, confidential case reviews. Serving all 50 states. No fees unless you win.

          </p>

        </div>



        <a

          href="#"

          className="group bg-[#fbc02d] text-[#1a237e] px-7 py-4 rounded-2xl font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0%] align-middle inline-flex items-center gap-4 shadow-lg shadow-yellow-500/20 hover:-translate-y-1 transition-transform duration-200 w-full md:w-auto justify-between md:justify-start"

        >

          Start My Free Case Review

          <div className="bg-[#1a237e] w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-opacity-90">

            <svg

              width="14"

              height="14"

              viewBox="0 0 24 24"

              fill="none"

              stroke="#fbc02d"

              strokeWidth="3"

              strokeLinecap="round"

              strokeLinejoin="round"

            >

              <line x1="7" y1="17" x2="17" y2="7"></line>

              <polyline points="7 7 17 7 17 17"></polyline>

            </svg>

          </div>

        </a>

      </header>



      {/* Grid Layout */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">



        {/* --- ROW 1 --- */}



        {/* 01: Share Your Case */}

        <div 
          className="flex items-center justify-center shrink-0 rounded-[20px] bg-[#162766] h-[200px] w-full"
          style={{
            padding: '27px 44px',
            boxShadow: '0 7.564px 11.346px -2.269px rgba(0, 0, 0, 0.10)'
          }}
        >
          {/* Glass effect inner layer */}
          <div 
            className="rounded-[20px] bg-transparent w-full h-full flex items-center justify-center"
            style={{
              border: '0.756px solid rgba(255, 255, 255, 0.10)',
              boxShadow: '0 7.564px 11.346px -2.269px rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className="flex items-center px-3 md:px-6 lg:px-8 w-full h-full">
              <div className="bg-[#fbc02d] text-[#1a237e] font-bold text-xl md:text-2xl w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0 mr-3 md:mr-5">

                01

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="font-urbanist font-semibold text-[18px] text-white leading-[100%] tracking-[0%] align-middle mb-2">Share Your Case</h3>

                <p className="text-white/70 text-sm md:text-base">Takes just 2 minutes.</p>

              </div>
            </div>
          </div>

        </div>



        {/* Image: Judge/Gavel */}

        <div className="rounded-xl overflow-hidden h-[200px]">

          <img

            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

            alt="Legal Case Review"

            className="w-full h-full object-cover"

          />

        </div>



        {/* Image: Handshake */}

        <div className="rounded-xl overflow-hidden h-[200px]">

          <img

            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

            alt="Agreement Handshake"

            className="w-full h-full object-cover"

          />

        </div>





        {/* --- ROW 2 --- */}



        {/* Image: Attorneys */}

        <div className="rounded-xl overflow-hidden h-[200px]">

          <img

            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

            alt="Attorneys"

            className="w-full h-full object-cover"

          />

        </div>



        {/* 02: Matched With Attorney */}

        <div 
          className="flex items-center justify-center shrink-0 rounded-[20px] bg-[#162766] h-[200px] w-full"
          style={{
            padding: '27px 44px',
            boxShadow: '0 7.564px 11.346px -2.269px rgba(0, 0, 0, 0.10)'
          }}
        >
          {/* Glass effect inner layer */}
          <div 
            className="rounded-[20px] bg-transparent w-full h-full flex items-center justify-center"
            style={{
              border: '0.756px solid rgba(255, 255, 255, 0.10)',
              boxShadow: '0 7.564px 11.346px -2.269px rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className="flex items-center px-3 md:px-6 lg:px-8 w-full h-full">
              <div className="bg-[#fbc02d] text-[#1a237e] font-bold text-xl md:text-2xl w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0 mr-3 md:mr-5">

                02

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="font-urbanist font-semibold text-[18px] text-white leading-[100%] tracking-[0%] align-middle mb-2">Matched With an Attorney</h3>

                <p className="text-white/70 text-sm md:text-base">Specialist in your lawsuit type</p>

              </div>
            </div>
          </div>

        </div>



        {/* Image: Contract */}

        <div className="rounded-xl overflow-hidden h-[200px]">

          <img

            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

            alt="Signing Contract"

            className="w-full h-full object-cover"

          />

        </div>





        {/* --- ROW 3 --- */}



        {/* Image: Scales */}

        <div className="rounded-xl overflow-hidden h-[200px]">

          <img

            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

            alt="Scales of Justice"

            className="w-full h-full object-cover grayscale contrast-125"

          />

        </div>



        {/* Image: Desk */}

        <div className="rounded-xl overflow-hidden h-[200px]">

          <img

            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

            alt="Office Desk"

            className="w-full h-full object-cover"

          />

        </div>



        {/* 03: Pursue Your Claim */}

        <div 
          className="flex items-center justify-center shrink-0 rounded-[20px] bg-[#162766] h-[200px] w-full"
          style={{
            padding: '27px 44px',
            boxShadow: '0 7.564px 11.346px -2.269px rgba(0, 0, 0, 0.10)'
          }}
        >
          {/* Glass effect inner layer */}
          <div 
            className="rounded-[20px] bg-transparent w-full h-full flex items-center justify-center"
            style={{
              border: '0.756px solid rgba(255, 255, 255, 0.10)',
              boxShadow: '0 7.564px 11.346px -2.269px rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className="flex items-center px-3 md:px-6 lg:px-8 w-full h-full">
              <div className="bg-[#fbc02d] text-[#1a237e] font-bold text-xl md:text-2xl w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0 mr-3 md:mr-5">

                03

              </div>

              <div className="flex flex-col justify-center">

                <h3 className="font-urbanist font-semibold text-[18px] text-white leading-[100%] tracking-[0%] align-middle mb-2">Pursue Your Claim</h3>

                <p className="text-white/70 text-sm md:text-base">No fees unless you win.</p>

              </div>
            </div>
          </div>

        </div>



      </div>

    </section>

  );

};



export default HowItWorks;



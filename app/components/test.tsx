const DesktopLandingHeroExpanded: React.FC<Props> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const selectedChartConfig = CHART_CONFIGS[selectedIndex];
  const selectedLawsuit = lawsuits[selectedIndex];

  return (
    <div className="hidden lg:flex justify-center font-sans px-4 xl:px-8 2xl:px-10 mt-4">
      <div
        className="
          relative overflow-hidden rounded-2xl
          w-full
          max-w-[1440px]
          
          /* Heights: LG small, XL+ bigger */
          h-[520px]           /* LG - smaller */
          xl:h-[620px]        /* XL - bigger */
          2xl:h-[720px]       /* 2XL - even bigger */
          
          /* For extra large screens */
          [@media(min-width:1600px)]:max-w-[1560px]
        "
      >
        {/* ================= VIDEO BACKGROUND ================= */}
        {/* LG only (1024-1279) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute inset-0 w-full h-full object-contain
            block lg:block xl:hidden
          "
        >
          <source src="/1280x503.mp4" type="video/mp4" />
        </video>

        {/* XL+ (1280px+) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute inset-0 w-full h-full object-cover
            hidden xl:block
          "
        >
          <source src="/1920x860.mp4" type="video/mp4" />
        </video>

        {/* ================= CONTENT GRID ================= */}
        <div
          className="
            relative z-10 grid h-full
            grid-cols-[1.25fr_0.75fr]
            
            /* Gap: LG small, XL+ bigger */
            lg:gap-4
            xl:gap-6
            2xl:gap-8
            
            /* Padding: LG small, XL+ bigger */
            lg:px-8 lg:py-8
            xl:px-12 xl:py-12
            2xl:px-16 2xl:py-14
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-start max-w-[720px]">
            <h1 className="leading-none mb-3 xl:mb-4">
              <span className="
                block font-[noto-serif] text-[#F2C438]
                /* LG: smaller, XL+: bigger */
                lg:text-[52px]
                xl:text-[60px]
                2xl:text-[68px]
                [@media(min-width:1600px)]:text-[76px]
              ">
                Justice
              </span>
              <span className="
                block font-[noto-serif] text-white
                /* LG: smaller, XL+: bigger */
                lg:text-[52px]
                xl:text-[60px]
                2xl:text-[72px]
                [@media(min-width:1600px)]:text-[80px]
              ">
                Starts Here
              </span>
            </h1>

            <p className="
              text-blue-100 font-light leading-relaxed
              /* LG: smaller, XL+: bigger */
              lg:text-[15px] lg:mt-4
              xl:text-[16px] xl:mt-6
              2xl:text-[17px]
              max-w-md
            ">
              Free, confidential case reviews. Serving all 50 states. No fees
              unless you win.
            </p>

            <div className="mt-5 xl:mt-8">
              <button
                aria-label="Check if you qualify"
                onClick={() => router.push("/contact-us")}
                className="
                  group flex items-center justify-center
                  /* LG: smaller button */
                  lg:h-[48px] lg:px-3 lg:pl-[22px] lg:gap-3 lg:w-56
                  /* XL+: bigger button */
                  xl:h-[55px] xl:px-4 xl:pl-[26px] xl:gap-3.5 xl:w-60
                  
                  rounded-4xl
                  bg-[#F2C438]
                  text-[#162766]
                  font-urbanist font-medium
                  lg:text-[15px]
                  xl:text-[16px]
                  shadow-lg hover:brightness-95 transition-all
                "
              >
                <span className="whitespace-nowrap">Check if you Qualify</span>

                <span
                  className="
                    flex items-center justify-center
                    rounded-full
                    bg-[#162766] text-white
                    shadow
                    group-hover:rotate-45 transition-transform
                    shrink-0
                    /* LG: smaller icon */
                    lg:w-[34px] lg:h-[34px]
                    /* XL+: bigger icon */
                    xl:w-[38px] xl:h-[38px]
                  "
                >
                  <ArrowUpRightIcon />
                </span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="relative h-full flex items-start justify-end">
            <div className="
              relative h-full flex flex-col
              w-full
              /* Width: LG smaller, XL+ bigger */
              lg:w-[220px]
              xl:w-[280px]
              2xl:w-[320px]
              [@media(min-width:1600px)]:w-[340px]
              
              /* Positioning adjustments: LG closer, XL+ further */
              lg:right-[-15px]
              xl:right-[-30px]
              2xl:right-[-40px]
            ">
              {/* ===== DROPDOWN ===== */}
              <div className="relative z-30">
                <div
                  className="
                    flex items-center justify-between
                    bg-[#F4F6F7]
                    border border-[#DDE6FF]
                    rounded-[10px]
                    shadow-[0_4px_11px_0_rgba(0,0,0,0.10)]
                    
                    /* LG: smaller dropdown */
                    lg:px-3 lg:h-[40px]
                    /* XL+: bigger dropdown */
                    xl:px-4 xl:h-[46px]
                    
                    w-full cursor-pointer
                  "
                  onClick={() => setOpen(!open)}
                >
                  <span className="
                    text-[#162766] font-bold truncate
                    /* LG: smaller text */
                    lg:text-[12px]
                    /* XL+: bigger text */
                    xl:text-[14px]
                  ">
                    {selectedLawsuit.title}
                  </span>

                  <div
                    className="
                      flex items-center justify-center
                      rounded
                      bg-[#F2C438]
                      /* LG: smaller chevron container */
                      lg:w-[18px] lg:h-[18px]
                      /* XL+: bigger chevron container */
                      xl:w-[22px] xl:h-[22px]
                    "
                  >
                    {open ? (
                      <ChevronUp
                        className="
                          text-[#162766] font-black
                          /* LG: smaller chevron */
                          lg:text-[8px]
                          /* XL+: bigger chevron */
                          xl:text-[10px]
                          2xl:text-[11px]
                        "
                        strokeWidth={3}
                      />
                    ) : (
                      <ChevronDown
                        className="
                          text-[#162766] font-black
                          /* LG: smaller chevron */
                          lg:text-[8px]
                          /* XL+: bigger chevron */
                          xl:text-[10px]
                          2xl:text-[11px]
                        "
                        strokeWidth={3}
                      />
                    )}
                  </div>
                </div>

                {open && (
                  <div className="
                    absolute
                    /* LG: positioned closer */
                    lg:top-[44px]
                    /* XL+: positioned further */
                    xl:top-[52px]
                    
                    left-0 bg-white rounded-xl shadow-lg border border-gray-200
                    w-full overflow-hidden z-40
                  ">
                    {lawsuits.map((lawsuit, idx) => (
                      <div
                        key={idx}
                        className={`
                          px-3 xl:px-4 py-2 cursor-pointer
                          text-[#162766]
                          /* LG: smaller text */
                          lg:text-[11px]
                          /* XL+: bigger text */
                          xl:text-[13px]
                          ${selectedIndex === idx ? "font-bold" : ""}
                        `}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setOpen(false);
                        }}
                      >
                        {lawsuit.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ===== CONTENT ===== */}
              <div className="
                mt-3 xl:mt-4 
                flex-1 flex flex-col 
                /* LG: smaller gap, XL+: bigger gap */
                lg:gap-3
                xl:gap-4
              ">
                <StatisticsCard
                  stats={selectedLawsuit.stats}
                  chartConfig={selectedChartConfig}
                />
                <DataGridCompactExtend grid={selectedLawsuit.dataGrid} />
              </div>
            </div>
          </div>
        </div>

        {/* ================= FLOATING CARDS ================= */}
        <div
          className="
            absolute flex z-20
            bottom-6 xl:bottom-8
            
            /* Positioning: LG closer to center, XL+ further out */
            lg:right-[240px]
            xl:right-[320px]
            2xl:right-[360px]
            [@media(min-width:1600px)]:right-[400px]
            
            /* Gap: LG smaller, XL+ bigger */
            lg:gap-1.5
            xl:gap-3
          "
        >
          < GlassCardExtend
            icon={<Image src="/handshakeicon.svg" alt="" width={40} height={40} 
              className="lg:w-9 lg:h-9 xl:w-10 xl:h-10" />}
            title={<>Free case<br />Review</>}
          />
          < GlassCardExtend
            icon={<Image src="/scaleicon.svg" alt="" width={40} height={40} 
              className="lg:w-9 lg:h-9 xl:w-10 xl:h-10" />}
            title={<>Serving<br />Nationwide</>}
          />
          < GlassCardExtend
            icon={<Image src="/gavelicon.svg" alt="" width={40} height={40} 
              className="lg:w-9 lg:h-9 xl:w-10 xl:h-10" />}
            title={<>No Win,<br />No Fee</>}
          />
        </div>

        {/* ================= SCROLL BUTTON ================= */}
        <div className="
          absolute bottom-6 right-6 z-30
          /* LG: smaller scale */
          lg:scale-[0.8]
          /* XL+: normal scale */
          xl:scale-100
          origin-bottom-right
          transition-all duration-300
        ">
          <button
            className="
              /* LG: smaller button */
              lg:w-[140px] lg:h-[62px]
              /* XL+: bigger button */
              xl:w-[180px] xl:h-20
              hover:scale-[1.05] transition-transform
            "
            onClick={scrollToNextSection}
          >
            <Image 
              src="/scrolldown.png" 
              alt="scroll" 
              width={180} 
              height={80}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};


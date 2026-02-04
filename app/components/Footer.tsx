import React from "react";
import Image from "next/image";
import Link from "next/link";

// SVG Icon Components
// const GavelIcon = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     width="24"
//     height="24"
//   >
//     <path d="M20 2h-2v2h-1v2h1v1h2V6h1V4h-1V2zm-2 3h-2v2h2V5zm2 6h-2v2h-1v2h1v1h2v-1h1v-2h-1v-2zm-2 3h-2v2h2v-2zM5 11h4v2H5v-2zm0-4h4v2H5V7zm0 8h4v2H5v-2zm-2-4h2v2H3v-2zm0-4h2v2H3V7zm0 8h2v2H3v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h2v2h-2v-2zm0-4h2v2h-2V7zm0 8h2v2h-2v-2z" />
//   </svg>
// );

// const LinkedInIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   </svg>
// );

// const YouTubeIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//   </svg>
// );

// const TikTokIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
//   </svg>
// );

// const XTwitterIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );

// const ButterflyIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.88-1.03 3.53-2.55 4.41L14 14h-4l-.45-.59C7.03 12.53 6 10.88 6 9c0-2.76 2.24-5 5-5zm-1 6c.83 0 1.5.67 1.5 1.5S11.83 13 11 13s-1.5-.67-1.5-1.5S10.17 10 11 10zm2 0c.83 0 1.5.67 1.5 1.5S13.83 13 13 13s-1.5-.67-1.5-1.5S12.17 10 13 10z" />
//   </svg>
// );

type BaseLink = {
  name: string;
  href: string;
  highlight?: boolean;
  active?: boolean;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
};

const Footer = () => {
  // Data for links to keep JSX clean
  const quickLinks: BaseLink[] = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Mass Tort", href: "/mass-tort" },
    { name: "Class Action", href: "/class-action" },
    { name: "Personal Injury", href: "/personal-injury" },
    { name: "Blog", href: "https://legalcaseinfo.com/" },
  ];

  const massTort: BaseLink[] = [
    { name: "Ozempic  ", href: "/mass-tort/ozempic-lawsuit" },
    { name: "Mesothelioma  ", href: "/mass-tort/mesothelioma-lawsuit" },
    { name: "Depo-Provera  ", href: "/mass-tort/depo-provera-lawsuit" },
    { name: "Roundup Cancer  ", href: "/mass-tort/roundup-lawsuit" },
    { name: "Talcum Powder  ", href: "/mass-tort/talcum-powder-lawsuit" },
    { name: "See All", href: "/mass-tort", highlight: true },
  ];

  const classAction: BaseLink[] = [
    {
      name: "Tesla Autopilot Recall  ",
      href: "/class-action/tesla-autopilot-recall-lawsuit",
    },
    {
      name: "MacLaren Sexual Abuse  ",
      href: "/class-action/maclaren-hall-sex-abuse-lawsuit",
    },
  ];

  const personalInjury: BaseLink[] = [
    {
      name: "Sexual Abuse  ",
      href: "/personal-injury/sexual-abuse-lawsuit",
    },
    {
      name: "Motor Vehicle Accident  ",
      href: "/personal-injury/motor-vehicle-accident",
    },
    {
      name: "Slip and Fall Injury  ",
      href: "/personal-injury/slip-and-fall",
    },
    {
      name: "18-Wheeler Accident  ",
      href: "/personal-injury/18-wheeler-accident",
    },
    { name: "See All", href: "/personal-injury", highlight: true },
  ];

  return (
    <footer className="bg-[#162766] pt-14 pb-6 font-sans">
      <div className="w-full mx-auto px-6 lg:px-[60px]">
        {/* Top Section: Flex Row on Tablet/Desktop, Col on Mobile */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 mb-10">
          {/* LEFT COLUMN: Brand & Description */}
          <div className="md:w-[35%] lg:w-[30%] border-b-1 border-[#F0F2F4] lg:border-0 md:border-0">
            {/* Logo Area */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start mb-5">
              <Image
                src="/Footerlogo.svg"
                alt="Connect2Attorney Logo"
                width={225}
                height={45}
              />
            </div>

            <p className="text-[#FFFFFF] font-urbanist font-normal mb-8 text-[14px] leading-normal md:text-base opacity-80 lg:text-[14px] lg:text-left md:text-left text-center">
              Connect2Attorney helps victims connect with trusted U.S. lawyers
              for mass torts, class actions, & personal injury cases to claim
              justice and compensation.
            </p>

            {/* Desktop/Tablet Social Icons (Hidden on Mobile) */}
            <div
              className="
    hidden
    lg:grid
    grid-cols-4
    gap-3
    w-full
    max-w-[270px]
  "
            >
              <SocialIcon
                href="https://www.linkedin.com/company/connect2attorney"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin"
                  width={44}
                  height={44}
                />
              </SocialIcon>
              <SocialIcon
                href="https://www.tiktok.com/@connect2attorney?_r=1&_t=ZP-91jqBQ39fbT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/tiktok.svg" alt="Tiktok" width={44} height={44} />
              </SocialIcon>
              <SocialIcon
                href="https://www.youtube.com/@connect2attorney-usa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/yt.svg" alt="Youtube" width={44} height={44} />
              </SocialIcon>
              <SocialIcon href="https://www.threads.com/@connect2attorney?hl=en">
                <Image
                  src="/threads.png"
                  alt="Threads"
                  width={44}
                  height={44}
                />
              </SocialIcon>

              <SocialIcon
                href="https://x.com/connect2attorn1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={44}
                  height={44}
                />
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com/connect2attorney"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/fb.svg" alt="Facebook" width={44} height={44} />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/connect2attorney/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/istg.svg" alt="Instagram" width={44} height={44} />
              </SocialIcon>
            </div>
          </div>

          {/* RIGHT COLUMN: Navigation Sections */}
          <div className="w-full md:w-[65%] lg:w-[70%] lg:flex lg:flex-col gap-8 md:gap-7 lg:gap-9 grid grid-cols-2 ">
            {/* Quick Links */}
            <NavSection title="QUICK LINKS">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`
    font-urbanist
    text-[14px]
    md:text-[16px]
    font-medium
    leading-[18px]
    transition-colors
    hover:text-[#ffc845]
    ${link.active ? "text-white opacity-100" : "text-white opacity-80"}
  `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </NavSection>

            {/* Mass Tort */}
            <NavSection title="MASS TORT">
              {massTort.map((link, idx) => (
                <li
                  key={idx}
                  className={`${link.mobileOnly ? "md:hidden" : ""}`}
                >
                  <a
                    href={link.href}
                    className={`font-urbanist transition-colors hover:text-[#ffc845] text-sm md:text-base ${
                      link.highlight
                        ? "text-[#ffc845] font-semibold"
                        : "text-white opacity-80"
                    } ${link.highlight ? "" : "font-normal"}`}
                    style={{
                      lineHeight: "24px",
                      letterSpacing: "0px",
                      fontWeight: link.highlight ? "600" : "400",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </NavSection>

            {/* Class Action */}
            <NavSection title="CLASS ACTION">
              {classAction.map((link, idx) => (
                <li
                  key={idx}
                  className={`${link.mobileOnly ? "md:hidden" : ""} ${
                    link.desktopOnly ? "hidden lg:block" : ""
                  }`}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 font-urbanist font-normal transition-colors hover:text-[#ffc845] text-sm md:text-base"
                    style={{
                      lineHeight: "24px",
                      letterSpacing: "0px",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </NavSection>

            {/* Personal Injury */}
            <NavSection title="PERSONAL INJURY">
              {personalInjury.map((link, idx) => (
                <li
                  key={idx}
                  className={`${link.mobileOnly ? "md:hidden" : ""}`}
                >
                  <a
                    href={link.href}
                    className={`font-urbanist transition-colors hover:text-[#ffc845] text-sm md:text-base ${
                      link.highlight
                        ? "text-[#ffc845] font-semibold"
                        : "text-white opacity-80"
                    } ${link.highlight ? "" : "font-normal"}`}
                    style={{
                      lineHeight: "24px",
                      letterSpacing: "0px",
                      fontWeight: link.highlight ? "600" : "400",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </NavSection>

            {/* Mobile Social Section (Hidden on Tablet/Desktop) */}
          </div>
        </div>

        <div className="md:block lg:hidden mt-2 max-w-[70%] md:max-w-[40%]">
          <h3
            className="font-noto-serif font-normal text-[#ffc845] mb-4 text-[20px] md:text-lg lg:text-lg"
            style={{
              letterSpacing: "0px",
            }}
          >
            SOCIAL
          </h3>
          <div
            className="
    grid
    grid-cols-4
    sm:grid-cols-5
    gap-5
    justify-items-start
    
  "
          >
            <SocialIcon
              href="https://www.linkedin.com/company/connect2attorney"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={44}
                height={44}
              />
            </SocialIcon>
            <SocialIcon
              href="https://www.tiktok.com/@connect2attorney?_r=1&_t=ZP-91jqBQ39fbT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tiktok.svg" alt="Tiktok" width={44} height={44} />
            </SocialIcon>
            <SocialIcon
              href="https://www.youtube.com/@connect2attorney-usa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/yt.svg" alt="Youtube" width={44} height={44} />
            </SocialIcon>
            <SocialIcon href="https://www.threads.com/@connect2attorney?hl=en">
              <Image src="/threads.png" alt="Threads" width={44} height={44} />
            </SocialIcon>

            <SocialIcon
              href="https://x.com/connect2attorn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twitter.svg" alt="twitter" width={44} height={44} />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/connect2attorney"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/fb.svg" alt="Facebook" width={44} height={44} />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/connect2attorney/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/istg.svg" alt="Instagram" width={44} height={44} />
            </SocialIcon>
          </div>
        </div>

        {/* MOBILE FOOTER BOTTOM */}
        <div className="md:hidden">
          <hr className="my-4 h-px bg-[#F0F2F4] opacity-50 border-0" />

          <div className="flex flex-col items-center gap-5">
            <div className="flex w-full justify-between px-2">
              <Link href="/privacy-policy" className="font-urbanist text-white text-[14px] font-normal leading-[18px] tracking-[0.7px]">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="font-urbanist text-white text-[14px] font-normal leading-[18px] tracking-[0.7px]">
                Disclaimer
              </Link>
              <Link href="/sitemap"
                 className="font-urbanist text-white text-[14px] font-normal leading-[18px] tracking-[0.7px]">
                  Sitemap
                
              </Link>
            </div>
          </div>

          <hr className="my-4 h-px bg-[#F0F2F4] opacity-50 border-0" />

          <div className="text-center font-urbanist text-white text-[12px] font-normal leading-[18px] tracking-[0.6px]">
            © 2025 Connect2Attorney.{" "}
            <span className="text-white/50">All Rights Reserved.</span>
          </div>
        </div>
        {/* DESKTOP FOOTER BOTTOM */}
        <div className="hidden md:block">
          <hr className="border-white/10 my-6" />

          <div className="flex justify-between items-center gap-5">
            <div className="text-left font-urbanist text-white text-[15px] font-normal leading-[18px] tracking-[0.75px]">
              © 2025 Connect2Attorney.{" "}
              <span className="text-white/50">All Rights Reserved.</span>
            </div>

            <div className="flex gap-8">
              <Link href="/sitemap"
                className="
    font-urbanist
    text-white
    text-[15px]
    font-normal
    leading-[18px]
    tracking-[0.75px]
    text-right
  "
              >
                Sitemap
              </Link>

              <Link href="/privacy-policy"
                className="
    font-urbanist
    text-white
    text-[15px]
    font-normal
    leading-[18px]
    tracking-[0.75px]
    text-right
  "
              >
                Privacy Policy
              </Link>

              <Link href="/disclaimer"
                className="
    font-urbanist
    text-white
    text-[15px]
    font-normal
    leading-[18px]
    tracking-[0.75px]
    text-right
  "
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-components for cleaner code

const NavSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3
      className="
    font-noto-serif
    text-[#F2C438]
    text-[20px]
    font-semibold
    leading-[30px]
    tracking-[1px]
    uppercase
    mb-4
  "
    >
      {title}
    </h3>

    <ul className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-x-6 lg:gap-x-8 md:gap-y-3 list-none">
      {children}
    </ul>
  </div>
);

const SocialIcon = ({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className="w-11 h-11 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-[#ffc845] hover:text-[#162252] transition-all duration-300 shadow-md hover:border-[#f1ede3] hover:backdrop-blur-[0px] hover:shadow-lg"
  >
    <span className="text-lg">{children}</span>
  </a>
);

export default Footer;

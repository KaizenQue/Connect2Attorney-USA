"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const MASS_TORT_LAWSUIT_TYPES = [
  { name: "Ozempic Lawsuit", href: "/mass-tort/ozempic-lawsuit" },
  { name: "Mesothelioma Lawsuit", href: "/mass-tort/mesothelioma-lawsuit" },
  { name: "Depo-Provera Lawsuit", href: "/mass-tort/depo-provera-lawsuit" },
  { name: "Roundup Cancer Lawsuit", href: "/mass-tort/roundup-lawsuit" },
  { name: "Talcum Powder Lawsuit", href: "/mass-tort/talcum-powder-lawsuit" },
];

const CLASS_ACTION_LAWSUIT_TYPES = [
  {
    name: "Tesla Autopilot Recall Lawsuit",
    href: "/class-action/tesla-autopilot-recall-lawsuit",
  },
  {
    name: "MacLaren Sexual Abuse Lawsuit",
    href: "/class-action/maclaren-hall-sex-abuse-lawsuit",
  },
];

const PERSONAL_INJURY_LAWSUIT_TYPES = [
  {
    name: "Sexual Abuse Lawsuit",
    href: "/personal-injury/sexual-abuse-lawsuit",
  },
  {
    name: "Motor Vehicle Accident Lawsuit",
    href: "/personal-injury/motor-vehicle-accident",
  },
  {
    name: "Slip and Fall Injury Lawsuit",
    href: "/personal-injury/slip-and-fall",
  },
  {
    name: "18-Wheeler Accident Lawsuit",
    href: "/personal-injury/18-wheeler-accident",
  },
    {name: "Rideshare Sexual Assault Lawsuit", href: "/personal-injury/rideshare-sexual-assault-lawsuit"},
];

interface DesktopNavbarProps {
  scrolled: boolean;
}

interface MobileNavbarProps {
  scrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}




const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ scrolled }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setIsHoveringDropdown(false);
  }, [pathname]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
  ];

  const dropdownLinks = [
    { href: "/mass-tort", label: "Mass Tort" },
    { href: "/class-action", label: "Class Action" },
    { href: "/personal-injury", label: "Personal Injury" },
  ];

  const getDropdownItems = (label: string) => {
    if (label === "Mass Tort") return MASS_TORT_LAWSUIT_TYPES;
    if (label === "Class Action") return CLASS_ACTION_LAWSUIT_TYPES;
    if (label === "Personal Injury") return PERSONAL_INJURY_LAWSUIT_TYPES;
    return [] as { name: string; href: string }[];
  };

  const handleMouseEnterMenu = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeaveMenu = () => {
    // Only close if not hovering over dropdown
    if (!isHoveringDropdown) {
      closeTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 200); // 200ms delay to reach dropdown
    }
  };

  const handleMouseEnterDropdown = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsHoveringDropdown(true);
    setOpenDropdown(label);
  };

  const handleMouseLeaveDropdown = () => {
    setIsHoveringDropdown(false);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay to return to menu
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsHoveringDropdown(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  return (
    <nav
      className={`
        hidden lg:flex
        fixed z-50 bg-white px-4 sm:px-6 py-4
        shadow-[0_0_24px_rgba(0,0,0,0.10)]
        items-center justify-between transition-colors
        w-full max-w-[calc(100%-2rem)] left-1/2 -translate-x-1/2
        rounded-2xl 
        ${scrolled ? "top-0 " : "top-2"}
      `}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/logotitle.svg"
            alt="Connect2Attorney Logo"
            className="
              w-[130px] h-[25px]
              xs:w-[156px] xs:h-[30px]
              xl:w-[236px] xl:h-[45px]
              object-contain cursor-pointer transition-all duration-300 ease-out
            "
            width={300}
            height={60}
            priority
          />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex items-center gap-3 lg:text-[11px] xl:gap-5 xl:text-[16px] 2xl:gap-[30px] 2xl:text-[18px] font-medium text-[#556075]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-[#182C5B] font-bold lg:text-[16px]"
                  : "hover:text-[#182C5B] text-[16px]"
              }`}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* Dropdown Items */}
        {dropdownLinks.map((link) => {
          const items = getDropdownItems(link.label);
          const isOpen = openDropdown === link.label;

          return (
            <li
              key={link.href}
              className="relative text-[16px] flex items-center gap-2 dropdown-parent"
              onMouseEnter={() => handleMouseEnterMenu(link.label)}
              onMouseLeave={handleMouseLeaveMenu}
            >
              <Link
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? "text-[#021032] font-bold"
                    : "hover:text-[#182C5B]"
                }`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>

              {/* Arrow (visual only) */}
              <span className="flex items-center justify-center pointer-events-none">
                <span
                  className={`w-5 h-5 flex items-center justify-center rounded shadow-md transition-all duration-200
                    ${isOpen ? "bg-[#142A66]" : "bg-[#F2C438]"}
                  `}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? "#F2C438" : "#ffffff"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </span>

              {/* Mega Dropdown */}
              {items.length > 0 && isOpen && (
                <div
                  ref={(el) => {
                    dropdownRefs.current[link.label] = el;
                  }}
                  className="
                    fixed left-0 right-0 top-[68px] 
                    bg-[#F5F6F8] text-[#162766]
                    p-4 sm:p-6 z-50 rounded-b-2xl
                  "
                  onMouseEnter={() => handleMouseEnterDropdown(link.label)}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <ul
                    className="
                      w-full max-w-[1440px] mx-auto
                      grid
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                      grid-flow-row-dense
                      divide-x divide-gray-300
                    "
                  >
                    {items.map((item) => (
                      <li key={item.href} className="px-4 sm:px-6 py-2">
                        <Link
                          href={item.href}
                          className="
                            block text-sm sm:text-[15px] font-medium
                            hover:text-[#182C5B]
                            hover:underline
                            transition
                            truncate
                          "
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}

        <li>
          <Link
            href="https://legalcaseinfo.com/" target="_blank"
            className="hover:text-[#182C5B] transition-colors lg:text-[16px]"
            onClick={handleLinkClick}
          >
            Blogs
          </Link>
        </li>

        <li>
          <Link
            href="/contact-us"
            className={`transition-colors ${
              isActive("/contact-us")
                ? "text-[#182C5B] font-bold lg:text-[16px]"
                : "hover:text-[#182C5B] text-[16px]"
            }`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right: CTA Button */}
      <div className="text-[11px] xl:text-[15px] 2xl:text-[18px]">
        <a
          href="tel:8882021350"
          className="bg-[#182C5B] text-white rounded-full px-3 lg:px-4 xl:px-6 py-1.5 lg:py-2 xl:py-2.5 flex items-center gap-1.5 lg:gap-2 xl:gap-3 font-medium transition hover:bg-[#122246] whitespace-nowrap"
        >
          <div className="w-5 h-5 xl:w-6 xl:h-6 bg-[#FBC02D] rounded-full flex items-center justify-center text-[#182C5B]">
            <svg
              viewBox="0 0 26 26"
              width="12"
              height="12"
              className="xl:w-[14px] xl:h-[14px]"
              fill="currentColor"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.65l1.97-1.63c.23-.19.33-.5.25-.79-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
          </div>
          (888) 202-1350
        </a>
      </div>
    </nav>
  );
};

// Keep the MobileNavbar component exactly the same as before
const MobileNavbar: React.FC<MobileNavbarProps> = ({
  scrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const pathname = usePathname();
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
  ];

  const dropdownLinks = [
    { href: "/mass-tort", label: "Mass Tort" },
    { href: "/class-action", label: "Class Action" },
    { href: "/personal-injury", label: "Personal Injury" },
  ];

  const getDropdownItems = (label: string) => {
    if (label === "Mass Tort") return MASS_TORT_LAWSUIT_TYPES;
    if (label === "Class Action") return CLASS_ACTION_LAWSUIT_TYPES;
    if (label === "Personal Injury") return PERSONAL_INJURY_LAWSUIT_TYPES;
    return [] as { name: string; href: string }[];
  };

  return (
    <>
      {/* Mobile Navbar Header */}
    <nav
  className={`
    lg:hidden
    fixed z-50 bg-white shadow-sm
    flex items-center
    transition-colors

    ${
      isMobileMenuOpen
        ? `
          w-full left-0 right-0 top-0
          rounded-none
          px-4 sm:px-6 py-4
          justify-between
        `
        : `
          w-full h-[60px]
          left-1/2 -translate-x-1/2
          ${scrolled ? "top-0" : "top-2"}
          px-[16px] py-[14px]
          justify-between
          
        `
    }
  `}
>

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
<Image
  src={isMobileMenuOpen ? "/biggerlogo.svg" : "/logotitle.svg"}
  alt="Connect2Attorney Logo"
  className={`
    object-contain cursor-pointer transition-all duration-300 ease-out
    ${
      isMobileMenuOpen
        ? `
          w-[180px] h-[36px]
          xs:w-[210px] xs:h-[42px]
          md:w-[240px] md:h-[48px]
        `
        : `
          w-[156.75px] h-[30px]
          aspect-[156.75/30]
          xl:w-[236px] xl:h-[45px]
        `
    }
  `}
  width={157}
  height={30}
  priority
/>

          </Link>
        </div>

       
        <button
          onClick={() => {
            const newState = !isMobileMenuOpen;
            setIsMobileMenuOpen(newState);
            if (!newState) setMobileOpenDropdown(null);
          }}
          className="
            w-11 h-11
            rounded-xl
            flex items-center justify-center
            transition-colors
            active:scale-95
          "
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            /* CLOSE ICON */
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#162766"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* HAMBURGER ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.3333 16H24M4 8H24M4 24H24"
                stroke="#162766"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-white"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setMobileOpenDropdown(null);
            }}
          />

          {/* Menu Panel */}
          <div
            className="
              lg:hidden
              fixed inset-x-0 bottom-0
              top-[70px] md:top-[88px]
              z-50
              w-full
              bg-white
              flex flex-col
            "
          >
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 py-6 pb-6">
              <ul className="flex flex-col gap-6 font-['Urbanist'] text-[20px] font-normal text-[#162766]">
                {/* Normal links */}
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileOpenDropdown(null);
                      }}
                      className={`block ${
                        isActive(link.href)
                          ? "text-[#162766] font-bold"
                          : "text-[#5A6782]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Dropdown sections */}
                {dropdownLinks.map((link) => {
                  const items = getDropdownItems(link.label);
                  const isOpenMobile = mobileOpenDropdown === link.label;
                  const isActiveMain = isActive(link.href);

                  return (
                    <li key={link.href} className="space-y-3">
                      {/* Header row */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-[22px] ${
                            isOpenMobile || isActiveMain
                              ? "text-[#162766] font-bold"
                              : "text-[#162766] font-normal"
                          }`}
                        >
                          {link.label}
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            setMobileOpenDropdown(
                              isOpenMobile ? null : link.label
                            )
                          }
                          className={`
                            w-[30px] h-[30px]
                            p-[5px]
                            flex flex-col
                            justify-center items-center
                            gap-[7.564px]
                            shrink-0
                            aspect-square
                            rounded-[5px]
                            border border-transparent
                            shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
                            transition-all duration-200
                            active:scale-95
                            ${isOpenMobile ? "bg-[#142A66]" : "bg-[#F2C438]"}
                          `}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isOpenMobile ? "#F2C438" : "#ffffff"}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-200 ${
                              isOpenMobile ? "rotate-180" : ""
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      </div>

                      {/* Dropdown card */}
                      {isOpenMobile && items.length > 0 && (
                        <div
                          className="
                            bg-[#F6F7F9]
                            rounded-3xl
                            p-5
                            flex flex-col
                            items-start
                            gap-6
                            self-stretch
                          "
                        >
                          <ul className="w-full flex flex-col gap-6">
                            {items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenDropdown(null);
                                  }}
                                  className="block font-['Urbanist'] text-[18px] font-normal text-[#162766]"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}

                {/* Blogs */}
                <li>
                  <Link
                    href="https://legalcaseinfo.com/" target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#5A6782]"
                  >
                    Blogs
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block ${
                      isActive("/contact-us")
                        ? "text-[#162766] font-bold"
                        : "text-[#5A6782]"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sticky bottom call bar */}
            <div className="sticky bottom-0 bg-white px-4 pt-4 pb-6 border-t border-gray-200">
              <a
                href="tel:8882021350"
                className="
                  relative
                  w-full
                  h-[50px]
                  bg-[#162766]
                  rounded-full
                  flex items-center
                  justify-center
                  shadow-lg
                "
              >
                {/* LEFT: Phone Icon */}
                <div className="absolute left-4 flex items-center">
                  <div
                    className="
                      w-[28px] h-[28px]
                      p-[7.15px]
                      flex items-center justify-center
                      aspect-square
                      rounded-full
                      bg-[#F2C438]
                      shadow-[0_4.917px_7.375px_-1.475px_rgba(0,0,0,0.10)]
                      shrink-0
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="11.7"
                      height="11.7"
                      fill="#162766"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.65l1.97-1.63c.23-.19.33-.5.25-.79-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  </div>
                </div>

                {/* CENTER: Phone Number (perfectly centered) */}
                <span
                  className="
                    text-white
                    font-urbanist
                    text-[18px]
                    font-medium
                    tracking-[-0.36px]
                    leading-none
                    whitespace-nowrap
                  "
                >
                  (888) 202-1350
                </span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close all dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full p-4 mb-12 flex flex-col items-center justify-start gap-3 font-['Urbanist'] ">
      <DesktopNavbar scrolled={scrolled} />
      <MobileNavbar 
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
};

export default Navbar;
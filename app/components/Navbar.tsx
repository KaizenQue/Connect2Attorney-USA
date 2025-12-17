'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Custom colors based on the images
  const colors = {
    darkBlue: '#182C5B',
    yellow: '#FBC02D',
    textGray: '#556075',
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About Us' },
  ];

  const dropdownLinks = [
    { href: '/mt', label: 'Mass Tort' },
    { href: '/ca', label: 'Class Action' },
    { href: '/pi', label: 'Personal Injury' },
  ];

  return (
    <div className="relative w-full bg-gray-50 p-4 min-h-[100px] flex flex-col items-center justify-start gap-3 font-['Poppins']">
      
      {/* Main Navbar Container */}
      <nav className="z-50 w-full max-w-[1400px] bg-white rounded-2xl shadow-sm px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            {/* Replace src with your actual logo file */}
            <img 
              src="/Logo.png" 
              alt="Connect2Attorney Logo" 
              className="h-10 sm:h-12 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Center: Navigation Links (Hidden on Mobile/Tablet, visible from small laptop and up) */}
        <ul className="hidden lg:flex items-center gap-3 lg:text-[11px] xl:gap-5 xl:text-[13px] 2xl:gap-6 2xl:text-[15px] font-medium text-[#556075]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`transition-colors ${
                  isActive(link.href) 
                    ? 'text-[#182C5B] font-bold' 
                    : 'hover:text-[#182C5B]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Dropdown Items */}
          {dropdownLinks.map((link) => (
            <li key={link.href} className="flex items-center gap-2 cursor-pointer group">
              <Link 
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href) 
                    ? 'text-[#182C5B] font-bold' 
                    : 'group-hover:text-[#182C5B]'
                }`}
              >
                {link.label}
              </Link>
              <span className="w-5 h-5 bg-[#FBC02D] rounded flex items-center justify-center text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </li>
          ))}

          <li>
            <Link href="#" className="hover:text-[#182C5B] transition-colors">Blogs</Link>
          </li>
          <li>
            <Link 
              href="/contactus" 
              className={`transition-colors ${
                isActive('/contactus') 
                  ? 'text-[#182C5B] font-bold' 
                  : 'hover:text-[#182C5B]'
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right: CTA Button (Hidden on Mobile/Tablet, visible from small laptop and up) */}
        <div className="hidden lg:block text-[11px] xl:text-[13px] 2xl:text-[15px]">
          <a 
            href="tel:8882021350" 
            className="bg-[#182C5B] text-white rounded-full px-3 lg:px-4 xl:px-6 py-1.5 lg:py-2 xl:py-2.5 flex items-center gap-1.5 lg:gap-2 xl:gap-3 font-medium transition hover:bg-[#122246]"
          >
            <div className="w-5 h-5 xl:w-6 xl:h-6 bg-[#FBC02D] rounded-full flex items-center justify-center text-[#182C5B]">
              <svg viewBox="0 0 24 24" width="12" height="12" className="xl:w-[14px] xl:h-[14px]" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.65l1.97-1.63c.23-.19.33-.5.25-.79-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
            (888) 202-1350
          </a>
        </div>

        {/* Right: Hamburger Menu (Visible on Mobile/Tablet only) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-[6px] cursor-pointer"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-8 h-1 bg-[#182C5B] rounded-full transition-all"></div>
          <div className="w-8 h-1 bg-[#182C5B] rounded-full transition-all"></div>
          <div className="w-8 h-1 bg-[#182C5B] rounded-full transition-all"></div>
        </button>

      </nav>

      {/* Mobile Menu (Visible when hamburger is clicked on Mobile/Tablet only) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full max-w-[1400px] mt-3">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-6 transition-all duration-200 ease-out">
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-[#556075]">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-gray-100 last:border-none pb-2">
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 transition-colors ${
                      isActive(link.href) 
                        ? 'text-[#182C5B] font-bold' 
                        : 'hover:text-[#182C5B]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {dropdownLinks.map((link) => (
                <li key={link.href} className="border-b border-gray-100 last:border-none pb-2">
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 transition-colors ${
                      isActive(link.href) 
                        ? 'text-[#182C5B] font-bold' 
                        : 'hover:text-[#182C5B]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="border-b border-gray-100 pb-2">
                <Link 
                  href="#" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#182C5B] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li className="pb-2">
                <Link 
                  href="/contactus"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-1 transition-colors ${
                    isActive('/contactus') 
                      ? 'text-[#182C5B] font-bold' 
                      : 'hover:text-[#182C5B]'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:8882021350" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#182C5B] text-white rounded-full px-6 py-2.5 flex items-center gap-3 font-medium transition hover:bg-[#122246] w-fit"
                >
                  <div className="w-6 h-6 bg-[#FBC02D] rounded-full flex items-center justify-center text-[#182C5B]">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.65l1.97-1.63c.23-.19.33-.5.25-.79-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  (888) 202-1350
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

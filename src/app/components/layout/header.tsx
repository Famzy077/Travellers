'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaPhoneAlt, FaFacebookF, FaTimes } from 'react-icons/fa';
import {SquareMenu} from 'lucide-react'
import { NavLink } from '@/app/types/navLinks';
import { SiLinkedin, SiYoutube } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Assuming you have your logo image in the public folder
import LogoImg from '../../../../public/Images/Logo.png';

const Header = () => {
  const pathname = usePathname();
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks: NavLink[] = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Service' },
    { href: '/faq', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`w-full z-40 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-lg' : 'absolute'}`}>
        
        <div 
          className={`hidden md:block bg-[rgb(0,58,102)] bg-opacity-50 px-14 transition-all duration-300 overflow-hidden ${
            isSticky ? 'h-0 py-0' : 'h-auto py-2'
          }`}
        >
          <div className="mx-auto flex justify-between items-center text-[17px] text-[#a9a9a9a9]">
            <div className="flex items-center space-x-4">
              <a href="mailto:Example@gmail.com" className="hover:text-[#E02454] flex items-center gap-2"> <IoMdMail className='text-[#E02454]' size={19}/> Example@gmail.com</a>
              <a href="tel:+01234567890" className="hover:text-[#E02454] flex gap-1 items-center"><FaPhoneAlt className='text-[#E02454]' size={16} /> +01234567890</a>
            </div>
            <div className="flex items-center space-x-4 text-[#E02454]">
              <a href="#" className=" hover:bg-[white] transition-all border border-white rounded-full p-1.5"><FaTwitter /></a>
              <a href="#" className=" hover:bg-[white] transition-all border border-white rounded-full p-1.5"><FaFacebookF /></a>
              <a href="#" className=" hover:bg-[white] transition-all border border-white rounded-full p-1.5"><SiLinkedin /></a>
              <a href="#" className=" hover:bg-[white] transition-all border border-white rounded-full p-1.5"><FaInstagram /></a>
              <a href="#" className=" hover:bg-[white] transition-all border border-white rounded-full p-1.5"><SiYoutube /></a>
            </div>
            <div className='flex gap-2'>
              <Link href='/'>Help <span>/</span></Link>
              <Link href='/'>Support  <span>/</span></Link>
              <Link href='/'>Contact</Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-[#F5F5F5] px-4 sm:px-14 py-3 lg:py-[9px]">
          <div className="mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-4xl text-[#E02454] font-bold flex items-start">
             <Image src={LogoImg} title='logo image' height={65} width={65} alt="LogoImage" />
             <h1 className='transform -translate-y-1'>Travisa</h1>
           </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-lg font-[Helvetica] text-[#003865] hover:text-[#E02454] transition-colors duration-300 ${
                      isActive ? 'text-[#E02454]' : 'text-[#003865] hover:text-[#E02454]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/services" className="mt-4 w-full text-center bg-[#E02454] text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-80 transition-opacity duration-300">
             Get A Quote
           </Link>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-[#003865] text-2xl">
                <SquareMenu size={36}/>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Panel and Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/85 bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex relative justify-between items-center p-6 border-b border-gray-300">
          <h2 className="text-xl font-bold text-[#003865]">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-[#003865] text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex relative flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg text-[#003865] hover:text-[#E02454]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/services" className="mt-4 w-full text-center bg-[#E02454] text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-80">
            Get A Quote
          </Link>
        </div>
        <p className='pl-6 bottom-4 text-[#003865] font-semibold absolute'>Version: 1.0</p>
      </div>
    </>
  );
};

export default Header;
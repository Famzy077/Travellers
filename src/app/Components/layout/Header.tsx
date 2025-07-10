'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {FaTwitter, FaInstagram, FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { NavLink } from '@/app/types/NavLinks';
import {SiLinkedin, SiYoutube } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { usePathname } from 'next/navigation';


import LogoImg from '../../../../public/Images/Logo.png'
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();

  const [isSticky, setSticky] = useState(false);

  // This effect adds a scroll listener to the page
  useEffect(() => {
    const handleScroll = () => {
      // Set sticky state if user scrolls past 50px
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component is removed
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
    // The main header's position is now dynamic
    <header className={`w-[100%] z-30 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-lg w-[60%] ' : 'absolute'}`}>
      {/* Top bar: This will disappear as the header becomes sticky */}
      <div className={`bg-[rgb(0,58,102)] bg-opacity-50 px-14 py-2 transition-all duration-300 ${isSticky ? 'hidden' : 'block'}`}>
        <div className="mx-auto flex justify-between items-center text- text-[#a9a9a9a9]">
          <div className="flex items-center space-x-4">
            <a href="mailto:Example@gmail.com" className="hover:text-[] flex items-center gap-2"> <IoMdMail className='text-[#E02454]' size={19}/> Example@gmail.com</a>
            <a href="tel:+01234567890" className="hover:text-[--primary] flex gap-1 items-center">< FaPhoneAlt className='text-[#E02454]' size={16} /> +01234567890</a>
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
      <nav className="bg-[#F5F5F5] px-14 w-[100%] transform transition-all top-0 py-4">
        <div className=" mx-auto flex justify-between items-center">
          <Link href="/" className="text-4xl text-[#E02454] font-bold flex items-start">
            <Image src={LogoImg} title='logo image' height={65} width={65} alt="LogoImage" />
            <h1 className='transform -translate-y-1'>Travisa</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-lg transition-colors duration-300 ${
                  isActive ? 'text-[#E02454]' : 'text-[#003865] hover:text-[#E02454]'
                }`}
              >
                {link.label}
              </Link>
              );
            })}

            <Link
              href="/services"
              className="bg-[#E02454] text-white font-semibold rounded-full px-4 py-2 rounded- hover:bg-opacity-80 transition-opacity duration-300"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
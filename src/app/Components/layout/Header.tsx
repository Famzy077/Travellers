import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from '@/app/types/NavLinks';

const Header = () => {
  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Service' },
    { href: '/pages', label: 'Pages' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-20 text-white">
      {/* Top Bar */}
      <div className="bg-dark bg-opacity-50 px-4 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="mailto:Example@gmail.com" className="hover:text-primary">Example@gmail.com</a>
            <span>|</span>
            <a href="tel:+01234567890" className="hover:text-primary">01234567890</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary"><FaFacebookF /></a>
            <a href="#" className="hover:text-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
            <a href="#" className="hover:text-primary"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-transparent px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            Travisa
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/get-a-quote" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition-opacity duration-300">
            Get A Quote
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
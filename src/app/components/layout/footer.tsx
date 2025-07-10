import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[rgb(0,58,102)] text-gray-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-[24px] font-bold text-[#E02454] mb-4">Contact Info</h3>
          <p>123 Street, New York, USA</p>
          <p className="mt-2">
            <a href="tel:+01234567890" className="hover:text-pink-500">+012 345 67890</a>
          </p>
          <p className="mt-2">
            <a href="mailto:info@example.com" className="hover:text-pink-500">info@example.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-pink-500"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-500"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Opening Time */}
        <div>
          <h3 className="text-[24px]  font-bold text-[#E02454] mb-4">Opening Time</h3>
          <p>Mon - Friday: 09.00 am to 07.00 pm</p>
          <p className="mt-2">Satday: 10.00 am to 05.00 pm</p>
          <p className="mt-2">All Sunday is our vacation</p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-[24px]  font-bold text-[#E02454] mb-4">Our Services</h3>
          <ul>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Business</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Evaluation</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500">  Migrate</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Study</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Counselling</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Work / Career</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[24px] font-bold text-[#E02454] mb-4">Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <form className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 bg-white text-gray-900 rounded-l-md focus:outline-none"
            />
            <button type="submit" className="bg-pink-600 cursor-pointer text-white px-4 py-2 rounded-r-md hover:bg-pink-700">
              Signup
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E02454] py-4">
        <div className="container mx-auto px-4 text-center text-white text-sm">
          <p>© {`${currentYear} Travisa, All right reserved`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const currentYear = new Date().getFullYear();
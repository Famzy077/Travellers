'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const currentYear = new Date().getFullYear();

  const newsletterSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await newsletterSchema.validate({ email });
      const response = await axios.post('https://smoothflight-travels.onrender.com/api/newsletter', { email });

      if (response.status === 201) {
        toast.success('Thank you for subscribing!');
        setEmail('');
      }
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        setError(err.message);
      } else if (axios.isAxiosError(err) && err.response) {
        // ✅ Check for the specific 'Conflict' error
        if (err.response.status === 409) {
          // Display the error message below the input field
          setError(err.response.data.message);
        } else {
          // For all other errors from the backend, show a toast
          toast.error(err.response.data.message || 'An error occurred.');
        }
      } else {
        toast.error('Something went wrong. Please try again.');
      }
      console.error("Newsletter Error:", err);
    } finally {
      setLoading(false);
    }
  };

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
          <h3 className="text-[24px] font-bold text-[#E02454] mb-4">Opening Time</h3>
          <p>Mon - Friday: 09.00 am to 07.00 pm</p>
          <p className="mt-2">Satday: 10.00 am to 05.00 pm</p>
          <p className="mt-2">All Sunday is our vacation</p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-[24px] font-bold text-[#E02454] mb-4">Our Services</h3>
          <ul>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Business</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Evaluation</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Migrate</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Study</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Counselling</Link></li>
            <li className="mt-2"><Link href="#" className="hover:text-pink-500"> Work / Career</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[24px] font-bold text-[#E02454] mb-4">Newsletter</h3>
          <p>Please enter your email to submit for our Newsletter</p>
          <form onSubmit={handleNewsletterSubmit} className="mt-4">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(''); // Clear error on change
                }}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-l-md focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="bg-pink-600 cursor-pointer text-white px-4 py-2 rounded-r-md hover:bg-pink-700 disabled:opacity-70"
              >
                {loading ? '...' : 'Signup'}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E02454] py-4">
        <div className="container mx-auto px-4 text-center text-white text-sm">
          <p>© {`${currentYear} Smoothflight Travels, All right reserved`}</p>
        </div>
      </div>
      {/* Add ToastContainer here to display notifications */}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </footer>
  );
};

export default Footer;

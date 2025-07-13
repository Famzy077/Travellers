'use client';
import { useState } from 'react';
import AnimatedSection from '../animationSection'; // Adjust path as needed
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

// Form data shape
interface IFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Error shape
interface IFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [loading, setLoading] = useState(false); // Loading state

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^[0-9+\s()-]*$/, 'Phone number is not valid').optional(),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true); // Start loading

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const response = await axios.post('https://smoothflight-travels.onrender.com/api/contact', formData);
      
      // ✅ FIX: Check for 201 status code from the backend
      if (response.status === 201) {
        toast.success('Thanks for contacting us! We will respond to you via email shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: IFormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) newErrors[err.path as keyof IFormErrors] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error('Something went wrong. Please try again.');
        console.error("Backend Error:", error);
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4">
        <AnimatedSection>
          <p className="font-semibold text-[#003865] uppercase tracking-wider">
            LET&apos;S CONNECT
          </p>
        </AnimatedSection>
        <div className="flex flex-col justify-center gap-[7px]">
          <div className="w-10 h-[2px] bg-[#003865]"></div>
          <div className="w-16 h-[2px] bg-[#E02454]"></div>
        </div>
      </div>

      <AnimatedSection>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#003865] mt-4">Send Your Message</h2>
        <p className="mt-4 text-[16px] text-[#7A8A9E]">
          We&apos;re here to help, please contact us via this below form. We will reply as soon as possible. Thanks for trusting us!
        </p>
      </AnimatedSection>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone (Optional)"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 cursor-pointer bg-[#E02454] text-white font-bold border border-[#003865] hover:bg-[#003865] hover:border-[#E02454] p-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-60"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};

export default ContactForm;
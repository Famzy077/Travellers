'use client';
import { useState } from 'react';
import AnimatedSection from '../animationSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later, we will send this data to our Node.js backend
    console.log('Form Data Submitted:', formData);
    // Add logic here to call your API endpoint
  };

  return (
    <div>
      {/* Title */}
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
          Our contact form is currently inactive. We’re working on setting up a fully functional system — feel free to reach out via email or phone in the meantime.
        </p>
      </AnimatedSection>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
          />
          <input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Your Project"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003865]"
        ></textarea>
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#E02454] text-white font-bold border border-[#003865] hover:bg-[#003865] hover:border-[#E02454] p-4 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
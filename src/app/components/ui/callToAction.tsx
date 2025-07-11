import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    // The main section with a background image
    <section 
      className="relative my-10 mb-0 border-b border-gray-300 py-16 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Images/office-4.jpg')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#003865]/75 bg-opacity-80"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mt-4 max-sm:text-[15px] max-w-2xl mx-auto">
          Don&apos;t let the complex visa process hold you back. Our expert team is here to guide you every step of the way. Let&apos;s make your travel dreams a reality.
        </p>
        <div className="mt-8">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#E02454] text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
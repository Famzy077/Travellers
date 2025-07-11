import Link from 'next/link';
import Abouts from '@/app/components/ui/about';
import { Stats } from '@/app/components/ui/stats';
import Testimonials from '@/app/components/ui/testimonials';
import CallToAction from '@/app/components/ui/callToAction';

// A new component for the "About Us" page banner
const AboutPageHero = () => {
  return (
    <div 
      className="relative bg-cover h-[60vh] lg:h-[80vh] bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/Images/breadcrumb.png')" }}
    >
      <div className="absolute inset-0 bg-[#003865] opacity-80 h-[60vh] lg:h-[80vh]" />
      <div className="relative z-10 mt-20">
        <h1 className="lg:text-5xl text-3xl font-bold">About Us</h1>
        <div className="mt-4 text-[18px]">
          <Link href="/home" className="hover:text-gray-300">Home</Link>
          <span className="mx-2">/</span>
          <span>Pages</span>
          <span className="mx-2">/</span>
          <span className="text-[#E02454]">About</span>
        </div>
      </div>
    </div>
  );
};


// The main function for the About Page
const AboutPage = () => {
  return (
    <main className="bg-white">
      <AboutPageHero />
      <Abouts />
      <Stats />
      <Testimonials/>
      <CallToAction/>
    </main>
  );
};

export default AboutPage;
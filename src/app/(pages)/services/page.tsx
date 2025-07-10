import React from 'react'
import Link from 'next/link';
import VisaSection from '@/app/components/ui/VisaCard';
import { Stats } from '@/app/components/ui/Stats';
import WhyChooseUs from '@/app/components/ui/WhyChooseUs';
import Testimonials from '@/app/components/ui/Testimonials';
import CallToAction from '@/app/components/ui/CallToAction';

const ServicesPageHero = () => {
  return (
    <div 
      className="relative bg-cover h-[80vh] bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/Images/breadcrumb.png')" }} // Add a suitable background image here
    >
      <div className="absolute inset-0 bg-[#003865] opacity-80 h-[80vh]" />
      <div className="relative z-10 mt-26">
        <h1 className="lg:text-5xl text-3xl font-bold">Our Services</h1>
        <div className="mt-4 text-[18px]">
          <Link href="/home" className="hover:text-gray-300">Home</Link>
          <span className="mx-2">/</span>
          <span>Pages</span>
          <span className="mx-2">/</span>
          <span className="text-[#E02454]">Services</span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <ServicesPageHero/>
      <VisaSection/>
      <Stats/>
      <WhyChooseUs/>
      <Testimonials/>
      <CallToAction/>
    </div>
  )
}

export default Services

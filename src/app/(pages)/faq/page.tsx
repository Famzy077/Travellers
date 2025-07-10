import React from 'react'
import Link from 'next/link';
import FaqAccordion from '@/app/components/ui/FaqAccordion';
import Testimonials from '@/app/components/ui/Testimonials';
import CallToAction from '@/app/components/ui/CallToAction';

const FAQsPageHero = () => {
  return (
    <div 
      className="relative bg-cover h-[80vh] bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/Images/breadcrumb.png')" }} // Add a suitable background image here
    >
      <div className="absolute inset-0 bg-[#003865] opacity-80 h-[80vh]" />
        <div className="relative z-10 mt-26">
          <h1 className="lg:text-5xl text-3xl font-bold">FAQs</h1>
          <div className="mt-4 text-[18px]">
            <Link href="/home" className="hover:text-gray-300">Home</Link>
            <span className="mx-2">/</span>
            <span>Pages</span>
            <span className="mx-2">/</span>
            <span className="text-[#E02454]">FAQs</span>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <FAQsPageHero/>
      <section className="py-16 pb-8 px-4">
        <FaqAccordion />
      </section>
      <div className='container px-8'>
        <Testimonials/>
      </div>
      <CallToAction/>
    </div>
  )
}

export default page

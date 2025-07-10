import React from 'react'
import Link from 'next/link'
import ContactInfo from '@/app/components/UI/ContactInfo';
import ContactForm from '@/app/components/UI/ContactFormData';

const ContactPageHero = () => {
  return (
    <div 
      className="relative bg-cover h-[80vh] bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/Images/breadcrumb.png')" }} // Add a suitable background image here
    >
      <div className="absolute inset-0 bg-[#003865] opacity-80 h-[80vh]" />
      <div className="relative z-10 mt-26">
        <h1 className="lg:text-5xl text-3xl font-bold">Contact Us</h1>
        <div className="mt-4 text-[18px]">
          <Link href="/home" className="hover:text-gray-300">Home</Link>
          <span className="mx-2">/</span>
          <span>Pages</span>
          <span className="mx-2">/</span>
          <span className="text-[#E02454]">Contact</span>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <ContactPageHero/>
      <section className="py-20 lg:px-24 px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default page

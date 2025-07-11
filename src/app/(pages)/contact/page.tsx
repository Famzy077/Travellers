import React from 'react'
import Link from 'next/link'
import ContactInfo from '@/app/components/ui/contactInfo';
import ContactForm from '@/app/components/ui/contactFormData';
import CallToAction from '@/app/components/ui/callToAction';

const ContactPageHero = () => {
  return (
    <div 
      className="relative bg-cover h-[60vh] lg:h-[80vh] bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/Images/breadcrumb.png')" }}
    >
      <div className="absolute inset-0 bg-[#003865] opacity-80 h-[60vh] lg:h-[80vh]" />
      <div className="relative z-10 mt-20">
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
      <section className="py-10 lg:px-24 px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <div className='w-[100%] py-5 px-5 lg:px-24'>
        <iframe className='rounded-[14px] w-[100%] max-sm:h-[390px] lg:h-[550px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36553983.44087083!2d-96!3d56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sng!4v1752235973884!5m2!1sen!2sng"   allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <CallToAction/>
    </div>
  )
}

export default page

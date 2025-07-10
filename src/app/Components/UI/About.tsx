'use client';
import Image from 'next/image';
import { FaPhoneAlt, FaTicketAlt } from 'react-icons/fa';
import { FaMapLocationDot, FaPassport } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import aboutUsImage from '../../../../public/Images/Passport.png';
import aboutUsImageOne from '../../../../public/Images/Passport2.png';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="lg:container mx-auto px-2 lg:px-10">
        <div className="lg:flex flex-cols-1 px-4 lg:px-10 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image */}
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:w-[65%] w-[100%]  bg-blue-50 rounded-2xl rounded-b-none"
            >
                {/* <div className="lg:w-[65%] w-[100%]  bg-blue-50 rounded-2xl rounded-b-none"> */}
                    <div className=''>
                        <Image 
                            src={aboutUsImageOne} 
                            alt="About the Company"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className='bg-transparent'>
                        <Image 
                            src={aboutUsImage} 
                            alt="About the Company"
                            width={500}
                            height={500}
                            className="rounded-t-full object-cover w-full h-auto"
                        />
                    </div>
                {/* </div> */}
            </motion.div>
            

          {/* Right Column: Text Content */}
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-[100%] max-sm:mt-16 md:mt-16'
            >
                <div className="flex items-center gap-2">
                    <h2 className="text-[#003865] font-bold text-lg whitespace-nowrap">ABOUT THE COMPANY</h2>
                    <div className="flex flex-col justify-center gap-[7px]">
                        <div className="w-10 h-[2px] bg-[#003865]"></div>
                        <div className="w-16 h-[2px] bg-[#E02454]"></div>
                    </div>
                </div>
                <h2 className="text-2xl md:text-5xl font-bold text-[#003865] mt-2 leading-tight">
                We&apos;re Trusted <br /> Immigration Consultant <br /> Agency.
                </h2>
                <p className="mt-4 text-lg text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consectetur iusto perferendis blanditiis assumenda dignissimos, commodi fuga culpa earum explicabo libero sint est mollitia saepe!
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3">
                    <FaMapLocationDot className="text-6xl text-[#E02454]" /> 
                    <p className="font-semibold text-xl text-[#003865]">Best Immigration Resources</p>
                </div>
                <div className="flex items-center space-x-3">
                    <FaPassport className="text-6xl text-[#E02454]" />
                    <p className="font-semibold text-[#003865] text-xl">Return Visas Available</p>
                </div>
                </div>

                <div className="mt-8 space-y-3 flex gap-5">
                    <div className='bg-blue-50 w-[150px] text-center flex flex-col justify-center rounded-xl text-[#003865] p-5 text-5xl'>
                        <FaTicketAlt className='text-7xl  mx-5'/>
                        <h1 className='text-4xl font-bold'>34</h1> 
                        <p className='text-lg text-gray-500 '>Years of Experience</p>
                    </div>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className="flex items-center space-x-3">
                            <IoMdCheckmarkCircle className="text-[#E02454] text-xl"  />
                            <span className="text-[#003865] font-semibold">Offer 100% Genuine Assistance</span>
                        </div> 
                        <div className="flex items-center space-x-3">
                            <IoMdCheckmarkCircle className="text-[#E02454] text-xl" />
                            <span className="text-[#003865] font-semibold">It&apos;s Faster & Reliable Execution</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <IoMdCheckmarkCircle className="text-[#E02454] text-xl" />
                            <span className="text-[#003865] font-semibold"> Accurate & Expert Advice</span>
                        </div>

                        <div className='flex flex-wrap gap-2.5 mt-10'>
                            <div className='flex relative'>
                                <FaPhoneAlt className='text-5xl text-[#003865]'/>
                                <LuMessageCircleMore  className='text-2xl text-[#E02454] absolute left-6'/>
                            </div>
                            <div>
                                <p className='text-[#003865]'>Have any questions?</p>
                                <h2 className='text-[#E02454] font-bold text-xl'>Free: +0123 456 7890</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
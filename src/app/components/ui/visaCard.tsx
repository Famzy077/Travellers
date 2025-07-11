'use client'
import React, { useState } from "react";
import Image from "next/image";
import AnimatedSection from "../animationSection";
import Link from "next/link";

interface Visa {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  longDescription: string;
}

const visaData: Visa[] = [
  {
    id: 1,
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description: "For professionals seeking to work and build a career in a new country.",
    longDescription: 'A Job Visa, often called a Work Permit, is required for individuals seeking employment abroad...',
  },
  {
    id: 2,
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description: "For entrepreneurs and professionals attending meetings, negotiations, or conferences.",
    longDescription: 'Business Visas are designed for individuals traveling for commercial activities...',
  },
  {
    id: 3,
    title: "Student Visa",
    imageUrl: "/Images/service-3.jpg",
    description: "For aspiring students who wish to pursue higher education abroad.",
    longDescription: 'A Student Visa allows you to study at a qualified educational institution...',
  },
  {
    id: 4,
    title: "Diplomatic Visa",
    imageUrl: "/Images/service-4.jpg",
    description: "For government officials and diplomats on official state business.",
    longDescription: 'Diplomatic Visas are issued to foreign diplomats and government officials...',
  },
  {
    id: 5,
    title: "Residence Visa",
    imageUrl: "/Images/service-1.jpg",
    description: "For individuals and families looking to establish long-term residency.",
    longDescription: 'A Residence Visa or Permit is for those who intend to live in a foreign country...',
  },
  {
    id: 6,
    title: "Tourist Visa",
    imageUrl: "/Images/service-2.jpg",
    description: "For travelers looking to explore new destinations for leisure and vacation.",
    longDescription: 'A Tourist Visa is for individuals traveling for leisure or to visit friends and family...',
  },
];

const VisaSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:px-0 px-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedSection>
            <div className="flex gap-5 justify-center">
              <div className="flex flex-col justify-center gap-[7px]">
                <div className="w-10 translate-x-6 h-[2px] bg-[#003865]"></div>
                <div className="w-16 h-[2px] bg-[#E02454]"></div>
              </div>
              <p className="text-[#003865] font-bold text-lg whitespace-nowrap">
                VISA CATEGORIES
              </p>
              <div className="flex flex-col justify-center gap-[7px]">
                <div className="w-10 h-[2px] bg-[#003865]"></div>
                <div className="w-16 h-[2px] bg-[#E02454]"></div>
              </div>
            </div>
          </AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003865] mt-2">
            <AnimatedSection>Enabling Your Immigration Successfully</AnimatedSection>
          </h2>
          <AnimatedSection>
            <p className="mt-4 max-w-3xl mx-auto text-[16px] text-[#7A8A9E]">
              From consultation to visa approval, we guide you every step of the way — ensuring a smooth, stress-free immigration experience.
            </p>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {visaData.map((visa, index) => (
            <div key={index}>
              <AnimatedSection>
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-lg"
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                >
                  {/* Card Image */}
                  <div className="relative h-[400px] w-full overflow-hidden">
                    <Image
                      src={visa.imageUrl}
                      alt={visa.title}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 px-6 w-full text-center py-3 bg-[#003B64] text-white text-lg font-semibold">
                      <h2 className="mb-2 text-2xl">{visa.title}</h2>
                      <Link href={`/visa/${visa.id}`}>
                        <button className="bg-gray-100 rounded-[7px] px-3 p-2 text-[#003B64] text-sm">Explore More</button>
                      </Link>
                    </div>
                  </div>

                  {/* Hidden Card Body */}
                  <div
                    className={`
                      absolute inset-x-0 -bottom-6 px-4 pb-5 transition-transform duration-500 ease-in-out
                      ${activeCard === index ? "translate-y-0" : "translate-y-full"} 
                      group-hover:translate-y-0
                    `}
                  >
                    <div className="bg-[#003B64]/99 text-white rounded-xl rounded-b-none px-2 mx-10 py-4 text-center">
                      <h2 className="text-2xl mb-2 border-b border-gray-500 font-semibold">{visa.title}</h2>
                      <p className="mb-3">{visa.description}</p>
                      <Link href={`/visa/${visa.id}`}>
                        <button className="bg-[#DF1C50] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#c21443] transition">
                          Explore More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaSection;

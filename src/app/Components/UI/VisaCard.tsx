import React from "react";
import Image from "next/image";
import AnimatedSection from "../AnimationSection";

const visaData = [
  {
    id: 1,
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 2,
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 3,
    title: "Diplomatic Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 4,
    title: "Students Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 5,
    title: "Residence Visa",
    imageUrl: "/Images/service-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 6,
    title: "Tourist Visa",
    imageUrl: "/Images/service-4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
];

const VisaSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedSection>
          <div className="flex gap-5 justify-center">
            <div className="flex flex-col  justify-center gap-[7px]">
              <div className="w-10 transform translate-x-6 h-[2px] bg-[#003865]"></div>
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
         <h2 className="text-4xl font-bold text-[#003865] mt-2">
          <AnimatedSection>
           Enabling Your Immigration Successfully
           </AnimatedSection>
         </h2>
         <AnimatedSection>
         <p className="mt-4 max-w-3xl mx-auto text-gray-600">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime.
         </p>
         </AnimatedSection>
        </div>

        <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {visaData.map((visa, index) => (
            <div
              className="group relative rounded-2xl overflow-hidden shadow-lg"
              key={index}
            >
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
                  <button className="bg-gray-100 rounded-[7px] px-3 p-2 text-[#003B64] text-sm">Explore More</button>
                </div>
              </div>

              <div className="absolute inset-x-0 -bottom-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-4 pb-5">
                <div className="bg-[#003B64]/99 text-white rounded-xl rounded-b-none px-2 mx-10 py-4 text-center">
                  <h2 className="text-2xl mb-2 border-b border-gray-500 font-semibold">{visa.title}</h2>
                  <p className="text- mb-3">{visa.description}</p>
                  <button className="bg-[#DF1C50] cursor-pointer text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#c21443] transition">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisaSection;

import React from "react";
import Image from "next/image";

const visaData = [
  {
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    title: "Diplomatic Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    title: "Students Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    title: "Residence Visa",
    imageUrl: "/Images/service-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
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
          <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-4">
            <h5 className="text-primary text-lg font-semibold">Visa Categories</h5>
          </div>
          <h2 className="text-4xl font-bold mb-4">Enabling Your Immigration Successfully</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus.
          </p>
        </div>

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
                <div className="absolute -bottom-3 w-[200px] h- text-center py-3 bg-[#003B64] text-white text-lg font-semibold">
                  {visa.title}
                </div>
              </div>

              <div className="absolute inset-x-0 -bottom-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-4 pb-5">
                <div className="bg-[#003B64]/99 text-white rounded-xl rounded-b-none px-4 mx-10 py-4 flex flex-col items-center text-center">
                  <p className="text- mb-3">{visa.description.slice(0,170)}...</p>
                  <button className="bg-[#DF1C50] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#c21443] transition">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaSection;

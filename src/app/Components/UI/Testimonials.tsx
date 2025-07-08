import React from "react";
import Image from "next/image";

const visaData = [
  {
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Diplomatic Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Students Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Residence Visa",
    imageUrl: "/Images/service-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Tourist Visa",
    imageUrl: "/Images/service-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center ml-10">
          {visaData.map((visa, index) => (
            <div className="flex readMore justify-center flex-col group relative" key={index}>
              <Image
                src={visa.imageUrl}
                alt={visa.title}
                width={320}
                height={300}
                className="rounded-2xl h-[300px] w-[20rem] object-cover"
              />
              <div className="relative">
                <button className="bg-blue-500 text-xl rounded-[6px] relative text-white p-2 py-3 transform -translate-y-5 translate-x-24">
                  Explore More
                </button>

                <div className="w-[260px] description -bottom-10 text-white left-8 rounded-xl bg-blue-600 py-12 pb-2 absolute px-3 text-center opacity-0 translate-y-40 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 ease-in-out">
                  <h2 className="text-center border-b font-semibold border-gray-200">
                    {visa.title}
                  </h2>
                  <p className="mt-2 text-sm">{visa.description}</p>
                  <button className="bg-pink-500 rounded-full my-3 text-white p-2 py-2">
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

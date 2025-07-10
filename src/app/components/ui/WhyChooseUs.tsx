'use client'
import { FaDollarSign, FaCcVisa, FaPassport, FaUsers } from 'react-icons/fa';
import AnimatedSection from '../AnimationSection';



const WhyChooseUs = () => {


  const features = [
    {
      icon: FaDollarSign,
      title: 'Cost-Effective',
      description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.',
    },
    {
      icon: FaCcVisa,
      title: 'Visa Assistance',
      description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.',
    },
    {
      icon: FaPassport,
      title: 'Faster Processing',
      description: 'Dolor, sit amet, consectetur adipisicing elit. Soluta inventore cum accusamus.',
    },
    {
      icon: FaUsers,
      title: 'Direct Interviews',
      description: 'Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.',
    },
  ];

  return (
    <section className="py-10 bg-gray-50 relative">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col  justify-center gap-[7px]">
            <div className="w-10 transform translate-x-6 h-[2px] bg-[#003865]"></div>
            <div className="w-16 h-[2px] bg-[#E02454]"></div>
          </div>
          <AnimatedSection>
            <p className="text-[#003865] font-bold text-lg whitespace-nowrap">
              WHY CHOOSE US
            </p>
          </AnimatedSection>
          <div className="flex flex-col  justify-center gap-[7px]">
            <div className="w-10 h-[2px] bg-[#003865]"></div>
            <div className="w-16 h-[2px] bg-[#E02454]"></div>
          </div>
        </div>

        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003865] mt-4">
            Offer Tailor Made Services That Our <br /> Client Requires
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-1 mx-4 lg:mx-8 md:grid-cols-2 py-10 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="icon-box">
                  <feature.icon className="icon" />
                </div>
                <h3 className="title">{feature.title}</h3>
                <p className="descriptions">{feature.description}</p>
                <div className="backdrop" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;


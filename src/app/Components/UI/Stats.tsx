'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaPassport, FaUsers, FaRegCheckCircle, FaHandshake } from 'react-icons/fa';
import { IconType } from 'react-icons';
import AnimatedSection from '../AnimationSection';

// A reusable StatCard component
const StatCard = ({ icon: Icon, end, suffix, label }: { icon: IconType, end: number, suffix: string, label: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Top part with icon */}
      <div className="relative w-40 h-24">
        <div className="absolute bottom-0 w-full h-20 bg-[#003865] rounded-lg shadow-lg" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-[#003865] rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-8 bg-[#E02454] rounded-md flex items-center justify-center">
            <Icon className="text-white text-2xl" />
          </div>
        </div>
      </div>
      {/* Bottom part with text and numbers */}
      <div className="bg-white p-6 rounded-b-3xl shadow-lg w-48 -mt-2">
        <p className="text-gray-500 font-medium text-sm">{label}</p>
        <p className="text-4xl font-bold text-[#003865] mt-2">
          <CountUp end={end} duration={3} separator="," />{suffix}
        </p>
      </div>
    </div>
  );
};


const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: FaPassport, end: 31, suffix: '+', label: 'VISA CATEGORIES' },
    { icon: FaUsers, end: 377, suffix: '+', label: 'TEAM MEMBERS' },
    { icon: FaRegCheckCircle, end: 4.9, suffix: 'K', label: 'VISA PROCESS' },
    { icon: FaHandshake, end: 98, suffix: '%', label: 'SUCCESS RATES' },
  ];

  return (
    // Add your world map background image here
    <section ref={ref} className="bg-center w-[100%] bg-gray-100 opacity-90" style={{ backgroundImage: "url('/Images/breadcrumb.png')"}}>
      <div className="w-full p-10 bg-white opacity-99">
        <AnimatedSection>
          {inView && (
            <div className="grid bg-white opacity-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Stats;

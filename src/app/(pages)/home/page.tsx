import HeroAnimation from '@/app/components/ui/HeroAnimation';
import About from '../../components/ui/About';
import {Stats} from '../../components/ui/Stats';
import VisaCard from '../../components/ui/VisaCard';
import WhyChooseUs from '../../components/ui/WhyChooseUs';
import Testimonials from '@/app/components/ui/Testimonials';
import ScrollButton from '@/app/components/ui/Scroll';
import FaqAccordion from '@/app/components/ui/FaqAccordion';
import CallToAction from '@/app/components/ui/CallToAction';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <HeroAnimation />
      <About />
      <Stats />
      <VisaCard />
      <WhyChooseUs />
      <Testimonials />
      <div className='p-7'>
        <FaqAccordion/>
      </div>
      <ScrollButton/>
      <CallToAction/>
    </main>
  );
}
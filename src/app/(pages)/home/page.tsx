import HeroAnimation from '@/app/components/ui/HeroAnimation';
import Abouts from '../../components/ui/about';
import {Stats} from '../../components/ui/stats';
import VisaCard from '../../components/ui/VisaCard';
import WhyChooseUs from '../../components/ui/WhyChooseUs';
import Testimonials from '@/app/components/ui/testimonials';
import ScrollButton from '@/app/components/ui/Scroll';
import FaqAccordion from '@/app/components/ui/FaqAccordion';
import CallToAction from '@/app/components/ui/callToAction';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <HeroAnimation />
      <Abouts />
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
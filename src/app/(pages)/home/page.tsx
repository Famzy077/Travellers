import HeroAnimation from '@/app/components/ui/heroAnimation';
import Abouts from '../../components/ui/about';
import {Stats} from '../../components/ui/stats';
import VisaCard from '../../components/ui/visaCard';
import WhyChooseUs from '../../components/ui/whyChooseUs';
import Testimonials from '@/app/components/ui/testimonials';
import ScrollButton from '@/app/components/ui/scroll';
import FaqAccordion from '@/app/components/ui/faqAccordion';
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
import HeroSlider from '@/app/components/ui/HeroAnimation';
import Abouts from '../../components/ui/about';
import {Stats} from '../../components/ui/stats';
import VisaSection from '@/app/components/ui/visaCard';
import WhyChooseUs from '@/app/components/ui/whyChooseUs';
import Testimonials from '@/app/components/ui/testimonials';
import ScrollButton from '@/app/components/ui/scroll';
import FaqAccordion from '@/app/components/ui/faqAccordion';
import CallToAction from '@/app/components/ui/callToAction';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <HeroSlider />
      <Abouts />
      <Stats />
      <VisaSection />
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
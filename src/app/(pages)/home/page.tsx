import HeroAnimation from '@/app/components/UI/HeroAnimation';
import About from '../../components/UI/About';
import {Stats} from '../../components/UI/Stats';
import VisaCard from '../../components/UI/VisaCard';
import WhyChooseUs from '../../components/UI/WhyChooseUs';
// import Testimonials from '@/app/components/UI/Testimonials';
// import '../../globals.css'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroAnimation />
      <About />
      <Stats />
      <VisaCard />
      <WhyChooseUs />
      {/* <Testimonials /> */}
    </main>
  );
}
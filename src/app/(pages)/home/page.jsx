import Header from '@/app/Components/layout/Header';
import Footer from '@/app/Components/layout/Footer';
import HeroAnimation from '@/app/Components/UI/HeroAnimation';
import About from '../about/page';
import Stats from '@/app/Components/UI/Stats';
import VisaTypes from '@/app/Components/UI/VisaTypes';
import WhyChooseUs from '@/app/Components/UI/WhyChooseUs';
import Testimonials from '@/app/Components/UI/Testimonials';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroAnimation />
      <About />
      <Stats />
      <VisaTypes />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
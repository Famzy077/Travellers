'use client';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    
  };

  const slides = [
    {
      image: '/Images/HeroImage.png',
      title: 'Immigration Process Starts Here!',
    },
    {
      image: '/Images/HeroImage2.png',
      title: 'Best Visa Immigrations Services',
    },
  ];

  return (
    <div className="relative h-screen w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70" />
              <div className="relative z-10 px-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm font-semibold uppercase tracking-wider text-gray-200"
                >
                  SOLUTION FOR ALL TYPE OF VISAS
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-2 text-4xl font-extrabold text-white px-20 md:text-6xl"
                  dangerouslySetInnerHTML={{ __html: slide.title.replace(/ /, ' <br /> ') }}
                />
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-4 max-w-2xl mx-auto text-gray-300"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s.
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
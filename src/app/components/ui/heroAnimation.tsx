'use client';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft,  FaChevronRight} from 'react-icons/fa';

type ArrowProps = React.ComponentProps<'button'> & { onClick?: React.MouseEventHandler<HTMLButtonElement> };

const NextArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-12 z-10 lg:top-0 right-0 -mt-12 text-3xl font-light text-[#003865] cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-12 z-10 lg:top-0  right-12 -mt-12 text-3xl cursor-pointer text-[#003865]"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
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
            className="relative h-screen max-sm:h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70" />
            <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:mt-24 lg:px-32 w-full max-w-5xl text-white flex flex-col items-center">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl sm:text-lg font-semibold uppercase tracking-wider text-gray-200"
              >
                SOLUTION FOR ALL TYPE OF VISAS
              </motion.p>

              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-2 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight max-w-[700px]"
                dangerouslySetInnerHTML={{ __html: slide.title.replace(/ /, ' <br /> ') }}
              />

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl"
              >
                We provide expert visa guidance and smooth travel planning to help you explore new opportunities abroad with ease and confidence.
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
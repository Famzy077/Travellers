'use client';

import Slider from 'react-slick';
import TestimonialCard from './TestiminialCard';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import AnimatedSection from '../AnimationSection';

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-12 z-10 lg:top-0 right-0 -mt-12 text-3xl font-light text-[#003865] cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRightLong />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-12 z-10 lg:top-0  right-12 -mt-12 text-3xl cursor-pointer text-[#003865]"
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </button>
  );
};


const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialData = [
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.',
      name: 'Person Name',
      profession: 'Profession',
      imageUrl: '/Images/testimonial-1.jpg', // Replace with your image paths
      rating: 5,
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.',
      name: 'Person Name',
      profession: 'Profession',
      imageUrl: '/Images/testimonial-2.jpg',
      rating: 5,
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.',
      name: 'Another Person',
      profession: 'Developer',
      imageUrl: '/Images/testimonial-3.jpg',
      rating: 5,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col  justify-center gap-[7px]">
          <div className="w-10 transform translate-x-6 h-[2px] bg-[#003865]"></div>
          <div className="w-16 h-[2px] bg-[#E02454]"></div>
        </div>
        <AnimatedSection>
          <p className="text-[#003865] font-bold text-lg whitespace-nowrap">
            OUR CLIENTS RIVIEWS
          </p>
        </AnimatedSection>
        <div className="flex flex-col  justify-center gap-[7px]">
          <div className="w-10 h-[2px] bg-[#003865]"></div>
          <div className="w-16 h-[2px] bg-[#E02454]"></div>
        </div>
      </div>

      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-[#003865] mt-4">
          What Our Clients Say
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="mt-4 max-w-3xl text-center mx-auto text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
        </p>
      </AnimatedSection>
      
      <AnimatedSection>
      <div className="container mx-auto px-4 relative">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default Testimonials;
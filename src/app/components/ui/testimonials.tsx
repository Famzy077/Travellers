'use client';

import Slider from 'react-slick';
import TestimonialCard from './testiminialCard';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import AnimatedSection from '../animationSection';

// Custom Arrow Components
type ArrowProps = React.ComponentProps<'button'> & { onClick?: React.MouseEventHandler<HTMLButtonElement> };

const NextArrow = (props: ArrowProps) => {
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

const PrevArrow = (props: ArrowProps) => {
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
      quote: 'The team made the entire visa process smooth and stress-free. I had constant support and clear communication from day one until approval.',
      name: 'Person Name',
      profession: 'Profession',
      imageUrl: '/Images/testimonial-1.jpg', // Replace with your image paths
      rating: 5,
    },
    {
      quote: 'I was worried about getting my student visa, but they guided me step by step and made it feel so easy. I’m now studying in Canada!',
      name: 'Person Name',
      profession: 'Profession',
      imageUrl: '/Images/testimonial-2.jpg',
      rating: 5,
    },
    {
      quote: 'Fast, reliable, and professional service. They answered all my questions and got my work visa processed quicker than expected',
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
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#003865] mt-4">
          What Our Clients Say
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="mt-4 max-w-3xl text-center px-5 lg:px-0 pb-7 mx-auto text-[16px] text-[#7A8A9E]">
          Hear from the people we&apos;ve helped — real stories from satisfied clients who trusted us with their immigration journey.
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
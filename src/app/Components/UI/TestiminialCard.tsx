import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  name: string;
  profession: string;
  imageUrl: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, profession, imageUrl, rating }: TestimonialCardProps) => {
  return (
    <div className='my-10'>
      <div className="px-4">
        <div className="relative bg-slate-100 p-6 rounded-lg">
          <p className="text-gray-600">{quote}</p>
          <div className="flex mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
            ))}
          </div>
          {/* This creates the speech bubble tail */}
          <div className="absolute left-8 -bottom-5 w-5 h-5 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-slate-100"></div>
        </div>
        <div className="flex items-center mt-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-[#003865]">{name}</p>
            <p className="text-gray-500 text-sm">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard
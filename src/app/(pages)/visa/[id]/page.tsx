import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

// Data for the visa cards, now includes a link for each
const visaData = [
  {
    id: 1,
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg", // Make sure image paths are correct
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati.",
    href: "/services/job-visa",
  },
  {
    id: 2,
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati.",
    href: "/services/business-visa",
  },
  {
    id: 3,
    title: "Diplomatic Visa",
    imageUrl: "/Images/service-3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati.",
    href: "/services/diplomatic-visa",
  },
  {
    id: 4,
    title: "Students Visa",
    imageUrl: "/Images/service-4.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati.",
    href: "/services/student-visa",
  },
  {
    id: 5,
    title: "Residence Visa",
    imageUrl: "/Images/service-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati.",
    href: "/services/residence-visa",
  },
  {
    id: 6,
    title: "Tourist Visa",
    imageUrl: "/Images/service-2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati.",
    href: "/services/tourist-visa",
  },
];

const VisaCategoriesPage = () => {
  return (
    <div className='bg-gray-50 py-20 pt-32 px-4 sm:px-8'>
      <div className='container mx-auto'>
        {/* The grid now has a gap for spacing between cards */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {visaData.map((visaCard) => (
            // Card container with styling and hover effects
            <div 
              key={visaCard.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative w-full h-48">
                <Image 
                  src={visaCard.imageUrl} 
                  alt={visaCard.title} 
                  fill
                  className='object-cover'
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#003865]">{visaCard.title}</h2>
                <p className="text-gray-600 mt-2 text-sm">{visaCard.description}</p>
                
                <Link href={visaCard.href} className="inline-flex items-center mt-4 font-semibold text-[#E02454] hover:text-opacity-80">
                  Read More
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisaCategoriesPage;
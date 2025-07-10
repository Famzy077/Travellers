
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Modal from '@/app/components/UI/Modal';
import CallToAction from '@/app/components/UI/CallToAction';

// Define a type for our visa data for better type safety
interface Visa {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  longDescription: string;
}

// Updated data with a longer description for the modal popup
const visaData: Visa[] = [
  {
    id: 1,
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description: "Brief text about getting a visa for employment purposes.",
    longDescription: 'A Job Visa is required for individuals seeking employment in a foreign country. The process typically involves a job offer from a registered company, verification of your qualifications, and meeting the specific labor market requirements of the destination country. Our team will assist you with every step, from document preparation to submission.'
  },
  {
    id: 2,
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description: "For entrepreneurs and professionals attending meetings or conferences.",
    longDescription: 'Business Visas are for individuals traveling for business-related purposes such as meetings, negotiations, or conferences. This visa does not typically permit direct employment. We help you prepare the necessary invitation letters, proof of business activities, and financial statements to ensure a smooth application.'
  },
  {
    id: 3,
    title: "Job Visa",
    imageUrl: "/Images/service-3.jpg",
    description: "Brief text about getting a visa for employment purposes.",
    longDescription: 'A Job Visa is required for individuals seeking employment in a foreign country. The process typically involves a job offer from a registered company, verification of your qualifications, and meeting the specific labor market requirements of the destination country. Our team will assist you with every step, from document preparation to submission.'
  },
  {
    id: 4,
    title: "Business Visa",
    imageUrl: "/Images/service-4.jpg",
    description: "For entrepreneurs and professionals attending meetings or conferences.",
    longDescription: 'Business Visas are for individuals traveling for business-related purposes such as meetings, negotiations, or conferences. This visa does not typically permit direct employment. We help you prepare the necessary invitation letters, proof of business activities, and financial statements to ensure a smooth application.'
  },
  {
    id: 5,
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description: "Brief text about getting a visa for employment purposes.",
    longDescription: 'A Job Visa is required for individuals seeking employment in a foreign country. The process typically involves a job offer from a registered company, verification of your qualifications, and meeting the specific labor market requirements of the destination country. Our team will assist you with every step, from document preparation to submission.'
  },
  {
    id: 6,
    title: "Business Visa",
    imageUrl: "/Images/service-3.jpg",
    description: "For entrepreneurs and professionals attending meetings or conferences.",
    longDescription: 'Business Visas are for individuals traveling for business-related purposes such as meetings, negotiations, or conferences. This visa does not typically permit direct employment. We help you prepare the necessary invitation letters, proof of business activities, and financial statements to ensure a smooth application.'
  }
];

const VisaCategoriesPage = () => {
  // State to manage whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to hold the data for the visa that was clicked
  const [selectedVisa, setSelectedVisa] = useState<Visa | null>(null);

  // Function to open the modal with the data of the clicked card
  const handleReadMore = (visa: Visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVisa(null);
  };

  return (
    <>
      <div className='bg-gray-50 pb-2 pt-[11rem] px-4 sm:px-8'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {visaData.map((visaCard) => (
              <div 
                key={visaCard.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative w-full h-48">
                  <Image 
                    src={visaCard.imageUrl} 
                    alt={visaCard.title}
                    fill
                    className='object-fit h-[165px]'
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#003865]">{visaCard.title}</h2>
                  <p className="text-gray-600 mt-2 text-sm">{visaCard.description}</p>
                  
                  {/* This is now a button that triggers the modal */}
                  <button 
                    onClick={() => handleReadMore(visaCard)}
                    className="inline-flex cursor-pointer items-center mt-4 font-semibold text-[#E02454] hover:text-opacity-80"
                  >
                    Read More
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Modal Component gets rendered here */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedVisa && (
          <div>
            <h2 className="text-3xl font-bold text-[#003865] mb-4">{selectedVisa.title}</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700">{selectedVisa.longDescription}</p>
            </div>
            <button
                onClick={handleCloseModal}
                className="mt-6 cursor-pointer px-6 py-2 rounded-lg font-semibold bg-[#E02454] text-white hover:bg-opacity-90"
            >
                Close
            </button>
          </div>
        )}
      </Modal>
      <CallToAction/>
    </>
  )
}

export default VisaCategoriesPage;
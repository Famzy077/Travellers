import React from 'react';
import Image from 'next/image';
const visaData = [
  {
    id: 1,
    title: "Job Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 2,
    title: "Business Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 3,
    title: "Diplomatic Visa",
    imageUrl: "/Images/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 4,
    title: "Students Visa",
    imageUrl: "/Images/service-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 5,
    title: "Residence Visa",
    imageUrl: "/Images/service-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
  {
    id: 6,
    title: "Tourist Visa",
    imageUrl: "/Images/service-4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
  },
];

const page = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {
        visaData.map((visaCard, visakey) => (
            <div key={visakey}>
                <Image src={visaCard.imageUrl} className='h-300px rounded-xl' alt={visaCard.title} fill />
                <h2>{visaCard.title}</h2>
                <p>{visaCard.description}</p>
            </div>
        ))
      }
    </div>
  )
}

export default page

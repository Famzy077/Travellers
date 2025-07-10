import AccordionItem from "../../types/AccordionItem";

const FaqAccordion = () => {
  const faqData = [
    {
      question: 'How do I apply for a visa?',
      answer: 'The application process varies by country and visa type. Generally, you will need to fill out an application form, provide supporting documents like your passport and photos, and pay a fee. Our team can guide you through the exact steps for your specific situation.'
    },
    {
      question: 'What documents are required?',
      answer: 'Commonly required documents include a valid passport, recent photographs, proof of financial means, flight itineraries, and invitation letters if applicable. The exact list depends on the visa you are applying for.'
    },
    {
      question: 'How long does the visa process take?',
      answer: 'Processing times can range from a few days to several months. It depends on the embassy\'s workload, the type of visa, and the completeness of your application. We always aim for the fastest and most reliable execution.'
    },
    {
      question: 'Can you guarantee my visa will be approved?',
      answer: 'While we offer 100% genuine assistance and have a high success rate due to our expertise, no one can guarantee visa approval. The final decision rests with the embassy or consulate of the respective country. We ensure your application is perfectly prepared to maximize your chances.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
        <h1 className='capitalize text-3xl lg:text-4xl font-bold text-center text-[#003865] pb-2 '>frequently asked question</h1>
      {faqData.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqAccordion;
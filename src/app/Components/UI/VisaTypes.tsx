// // frontend/src/app/components/ui/VisaTypes.tsx

// import VisaCard from './VisaCard';

// const VisaTypes = () => {
//   const visaData = [
//     {
//       title: 'Job Visa',
//       imageUrl: '/Images/service-1.jpg', // Replace with your image paths
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
//     },
//     {
//       title: 'Business Visa',
//       imageUrl: '/Images/service-2.jpg',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
//     },
//     {
//       title: 'Diplomatic Visa',
//       imageUrl: '/Images/service-1.jpg',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
//     },
//     {
//       title: 'Students Visa',
//       imageUrl: '/Images/service-2.jpg',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
//     },
//     {
//       title: 'Residence Visa',
//       imageUrl: '/Images/service-3.jpg',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
//     },
//     {
//       title: 'Tourist Visa',
//       imageUrl: '/Images/service-4.jpg',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
//     },
//   ];

//   return (
//     <section className="py-20 px-18 bg-white">
//       <div className="container mx-auto px-4 text-center">
//         <p className="font-semibold text-[#E02454] uppercase tracking-wider">
//           VISA CATEGORIES
//         </p>
//         <h2 className="text-4xl font-bold text-[#003865] mt-2">
//           Enabling Your Immigration Successfully
//         </h2>
//         <p className="mt-4 max-w-3xl mx-auto text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {visaData.map((visa) => (
//             <VisaCard
//               key={visa.title}
//               title={visa.title}
//               imageUrl={visa.imageUrl}
//               description={visa.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisaTypes;
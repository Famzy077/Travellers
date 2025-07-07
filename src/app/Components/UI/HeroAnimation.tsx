'use client';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
  return (
    <section className="relative flex items-center justify-center h-screen text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/Images/HeroImage.png')" }}>
      {/* You can also use a video here instead of a static image */}
      <div className="absolute inset-0 bg-black bg-opaity-98 opacity-95" />
      <div className="relative z-10 px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold uppercase tracking-wider text-gray-200"
        >
          SOLUTION FOR ALL TYPE OF VISAS [cite: 7]
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 text-4xl font-extrabold text-white md:text-6xl"
        >
          Immigration Process <br /> Starts Here! 
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-gray-300"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. [cite: 10, 11]
        </motion.p>
      </div>
    </section>
  );
};

export default HeroAnimation;
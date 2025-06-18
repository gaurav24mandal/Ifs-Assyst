import React from 'react'
 import { motion } from 'framer-motion';

function Hero() {
   return (
    <section className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
  {/* Left side text */}
  <div className="md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
      The Future of Enterprise Service Management
    </h1>
    <p  >
      Streamline IT and business services with a modern, unified platform – IFS Assyst.
    </p>
    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
      Request a Demo
    </button>
  </div>

  {/* Right side image (placeholder for now) */}
  <div className="md:w-1/2 mt-10 md:mt-0">
    <img src="/assets/dashboard.svg" alt="IFS Illustration" className="w-full" />
  </div>
</section>
   )
}

export default Hero


// return (
//     <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//   >
 



//   </motion.div>
  //)

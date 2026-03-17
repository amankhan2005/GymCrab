 import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FeaturesGrid from "../../components/features/FeaturesGrid";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Header Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100 mb-6 uppercase tracking-wider shadow-sm"
            >
              All-In-One Platform
            </motion.span>

            {/* Big Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Modern Fitness
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              GymCrab provides powerful tools for gym owners and members to manage fitness operations, workouts, and attendance effortlessly.
            </p>
          </motion.div>

          {/* Features Grid Component */}
          <FeaturesGrid />

        </div>
      </section>

      <Footer />
    </>
  );
}
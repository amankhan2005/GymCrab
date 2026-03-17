 import { motion } from "framer-motion";
import FeaturesGrid from "../../components/features/FeaturesGrid";

export default function FeaturesSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      
      {/* Background Pattern (Matches Hero/Stats) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px]   rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]  rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          {/* Small Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className=" text-sm font-semibold text-green-600 uppercase tracking-widest mb-3"
          >
            All-In-One Platform
          </motion.span>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Everything You Need to Run a{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Modern Gym
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 mt-5 text-lg leading-relaxed">
            GymCrab provides powerful tools for gym owners and members to manage 
            workouts, attendance, payments, and fitness progress in one platform.
          </p>
        </motion.div>

        {/* Features Grid Component */}
        <FeaturesGrid />

      </div>
    </section>
  );
}
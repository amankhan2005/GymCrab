 import { motion } from "framer-motion";
import PricingTable from "../../components/pricing/PricingTable";

export default function PricingSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      
      {/* Background Pattern (Consistent with Hero/Stats/Features) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
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
            className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3"
          >
            Flexible Plans
          </motion.span>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Simple Pricing for{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Every Gym
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 mt-5 text-lg leading-relaxed">
            Whether you are a gym owner or a fitness enthusiast,
            GymCrab offers flexible plans to help you manage
            workouts, members, and fitness progress.
          </p>
        </motion.div>

        {/* Pricing Plans Component */}
        <PricingTable />

      </div>
    </section>
  );
}
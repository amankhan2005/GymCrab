 import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      
      {/* Background Pattern (Matches Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">
            Trusted Globally
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Powering the Fitness Revolution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Stat Card 1 */}
          <StatsCard 
            value={500} 
            suffix="+" 
            label="Gyms Registered" 
            icon={<BuildingIcon />}
            delay={0.1}
          />

          {/* Stat Card 2 */}
          <StatsCard 
            value={10000} 
            suffix="+" 
            label="Active Users" 
            icon={<UsersIcon />}
            delay={0.2}
          />

          {/* Stat Card 3 */}
          <StatsCard 
            value={25} 
            suffix="+" 
            label="Cities" 
            icon={<MapIcon />}
            delay={0.3}
          />

        </div>
      </div>
    </section>
  );
}

function StatsCard({ value, suffix, label, icon, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Animated Border Gradient */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/0 via-green-500/50 to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-8 text-center hover:border-green-500/30 transition-colors duration-300 shadow-lg shadow-gray-100/50 h-full flex flex-col justify-center items-center">
        
        {/* Icon Container */}
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-900/20"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>

        {/* Animated Counter */}
        <div className="text-5xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-emerald-400 transition-all duration-300">
          {isInView && <AnimatedCounter value={value} />}
          <span>{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedCounter({ value }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Simple JS animation for counter (performant and simple)
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const incrementTime = 30;
    
    // Calculate step increment
    // For small numbers (like 25), increment by 1. For large (10k), increment by chunks.
    const steps = duration / incrementTime;
    const incrementAmount = end / steps;

    const timer = setInterval(() => {
      start += incrementAmount;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
}

// --- Icons ---
function BuildingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
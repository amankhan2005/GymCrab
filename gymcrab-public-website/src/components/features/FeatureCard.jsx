 import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function FeatureCard({ title, description, icon, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D Tilt Configuration
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative h-full"
    >
      {/* 1. Gradient Border Wrapper */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-gray-200 via-green-400 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* 2. Card Container */}
      <div className="relative h-full bg-white rounded-2xl p-8 overflow-hidden shadow-lg border border-gray-100 group-hover:border-transparent transition-all duration-300">
        
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50 group-hover:to-emerald-50/50 transition-all duration-500" />

        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div 
            className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6 border border-gray-100 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-700 shadow-sm transition-all duration-300"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
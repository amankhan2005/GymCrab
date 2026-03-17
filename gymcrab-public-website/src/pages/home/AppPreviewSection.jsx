 import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import app1 from "../../assets/images/app/app1.png";
import app2 from "../../assets/images/app/app2.png";

export default function AppPreviewSection() {
  return (
       <section className="relative py-24 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: Content --- */}
        <div className="relative z-10">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 mb-4 uppercase tracking-wider shadow-sm"
          >
            Mobile Experience
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            Track Your Fitness with{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              GymCrab App
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 mt-5 text-lg leading-relaxed"
          >
            Track workouts, scan QR attendance, follow diet plans, and monitor progress—all from your pocket.
          </motion.p>

          {/* Animated List */}
          <ul className="mt-8 space-y-4">
            <FeatureItem delay={0.1}>Scan QR to mark attendance</FeatureItem>
            <FeatureItem delay={0.2}>Track workouts and exercises</FeatureItem>
            <FeatureItem delay={0.3}>AI generated diet plans</FeatureItem>
            <FeatureItem delay={0.4}>Monitor body progress</FeatureItem>
          </ul>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-full font-semibold text-white bg-gray-900 flex items-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 2.047a.5.5 0 0 0-.476-.047l-12 5.5a.5.5 0 0 0 0 .9l12 5.5a.5.5 0 0 0 .476-.047.5.5 0 0 0 .277-.453v-11a.5.5 0 0 0-.277-.453z"/>
              </svg>
              Download Android
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-full font-medium text-gray-700 border border-gray-300 bg-white shadow-sm"
            >
              Download iOS App
            </motion.button>
          </motion.div>
        </div>

        {/* --- RIGHT: Phone Mockups --- */}
        <PhoneMockupContainer />

      </div>
    </section>
  );
}

// ================= PHONE SECTION =================

function PhoneMockupContainer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { damping: 20, stiffness: 100 };

  const x1 = useSpring(useTransform(mouseX, v => v * 20), spring);
  const y1 = useSpring(useTransform(mouseY, v => v * 20), spring);

  const x2 = useSpring(useTransform(mouseX, v => v * -10), spring);
  const y2 = useSpring(useTransform(mouseY, v => v * -10), spring);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.width / 2) / rect.width);
    mouseY.set((e.clientY - rect.height / 2) / rect.height);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative h-[550px] hidden lg:flex items-center justify-center"
    >

      {/* BACK PHONE */}
      <motion.div
        className="absolute left-10 top-16"
        style={{ x: x2, y: y2, rotate: 8 }}
      >
        <img
          src={app2}
          alt="app"
          className="w-110 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      {/* FRONT PHONE */}
      <motion.div
        className="absolute right-0 top-5"
        style={{ x: x1, y: y1, rotate: -5 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <img
          src={app1}
          alt="app"
          className="w-110 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

    </motion.div>
  );
}

// ================= FEATURE =================

function FeatureItem({ children }) {
  return (
    <li className="flex items-center gap-3 text-gray-700">
      <div className="w-5 h-5 bg-green-500 rounded-full" />
      {children}
    </li>
  );
}
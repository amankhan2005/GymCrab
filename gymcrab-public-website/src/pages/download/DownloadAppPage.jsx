import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import app1 from "../../assets/images/app/app1.png";
import app2 from "../../assets/images/app/app2.png";

export default function DownloadAppPage() {
  return (
    <>
      <Navbar />

      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Animated Ambient Glows */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: Content --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200 mb-6 uppercase tracking-wider shadow-sm"
            >
              Mobile Experience
            </motion.span>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tighter mb-6">
              Download the{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                GymCrab App
              </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
              Take your gym everywhere. Track workouts, scan attendance, and crush your fitness goals right from your pocket.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              <FeatureItem delay={0.1}>Scan QR for instant attendance</FeatureItem>
              <FeatureItem delay={0.2}>Track workouts & progress</FeatureItem>
              <FeatureItem delay={0.3}>AI-powered diet plans</FeatureItem>
              <FeatureItem delay={0.4}>Manage memberships</FeatureItem>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-full font-semibold shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 2.047a.5.5 0 0 0-.476-.047l-12 5.5a.5.5 0 0 0 0 .9l12 5.5a.5.5 0 0 0 .476-.047.5.5 0 0 0 .277-.453v-11a.5.5 0 0 0-.277-.453z"/></svg>
                Download Android
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3.5 border border-gray-300 text-gray-700 rounded-full font-semibold bg-white shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download iOS
              </motion.button>
            </div>
          </motion.div>

          {/* --- RIGHT: Phone Mockups --- */}
          <PhoneMockupSection />

        </div>
      </section>

      <Footer />
    </>
  );
}

// ================= PHONE SECTION =================

 function PhoneMockupSection() {
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

      {/* Back Phone */}
      <motion.img
        src={app2}
        alt="app"
        className="absolute w-110 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
        style={{ x: x2, y: y2, rotate: 8 }}
      />

      {/* Front Phone */}
      <motion.img
        src={app1}
        alt="app"
        className="relative w-120 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
        style={{ x: x1, y: y1, rotate: -5 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Icons */}
      <FloatingIcon icon="💪" x="10%" y="20%" delay={0} />
      <FloatingIcon icon="🔥" x="80%" y="15%" delay={1} />
      <FloatingIcon icon="🥗" x="70%" y="70%" delay={2} />

    </motion.div>
  );
}

// ================= HELPER COMPONENTS =================

function FeatureItem({ children, delay }) {
  return (
    <motion.li 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 text-gray-700"
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="font-medium">{children}</span>
    </motion.li>
  );
}

function FloatingIcon({ icon, x, y, delay }) {
  return (
    <motion.div 
      className="absolute text-3xl"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay: delay }}
    >
      <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
        {icon}
      </div>
    </motion.div>
  );
}
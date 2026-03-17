 import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import LoginForm from "../../components/forms/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-white py-24 md:py-32 overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Glows */}
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* --- LEFT COLUMN: BRANDING & GUIDE --- */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:block"
            >
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100 mb-6 uppercase tracking-wider shadow-sm"
              >
                Secure Access
              </motion.span>

              {/* Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.05] mb-6">
                Your Dashboard{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                  Awaits
                </span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                 Access member data, track attendance, and manage your fitness business operations seamlessly.
              </p>

              {/* Visual Decorations */}
              <div className="relative h-64">
                <motion.div 
                  className="absolute w-64 h-64 border-2 border-green-100 rounded-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute top-5 left-10 w-48 h-48 bg-green-50 rounded-2xl shadow-xl flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                   <div className="text-center">
                     <div className="text-4xl mb-2">🏋️</div>
                     <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Gym Stats</span>
                   </div>
                </motion.div>
                 <motion.div 
                  className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-50 rounded-2xl shadow-xl flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                   <div className="text-center">
                     <div className="text-2xl mb-1">📈</div>
                     <span className="text-[10px] font-bold text-emerald-700 uppercase">Growth</span>
                   </div>
                </motion.div>
              </div>
            </motion.div>

            {/* --- RIGHT COLUMN: LOGIN FORM --- */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl shadow-gray-100/50 p-8 md:p-10 overflow-hidden">
                
                {/* Top Decorative Line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />
                
                {/* Form Header */}
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Login to GymCrab</h3>
                  <p className="text-gray-500 text-sm">Welcome back! Please enter your details.</p>
                </div>

                <LoginForm />

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
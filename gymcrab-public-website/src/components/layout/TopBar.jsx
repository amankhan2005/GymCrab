 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 text-center text-white text-sm py-2.5 backdrop-blur-md border-b border-white/10"
    >
      {/* Shimmer Effect Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" 
        />
      </div>

      <div className="relative flex items-center justify-center gap-2">
        <span className="hidden sm:inline">Want to manage your gym & fitness smarter?</span>
        <span className="sm:hidden">Manage smarter?</span>
        
        <Link
          to="/download"
          className="group inline-flex items-center gap-1 font-semibold bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
        >
          Download App
          <svg 
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Add keyframes for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>
    </motion.div>
  );
}
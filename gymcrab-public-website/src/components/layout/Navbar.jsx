  import { Link } from "react-router-dom";

// CSS Keyframes defined as a string
const animations = `
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes bounceSubtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
`;

export default function Navbar() {
  return (
    <>
      {/* Inject animations */}
      <style>{animations}</style>

      <nav 
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050805]/80 backdrop-blur-xl"
        style={{ animation: "slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* 🟢 Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div 
              className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition"
              style={{ transition: 'transform 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-10deg) scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 10 10c0 1.2-.4 2.3-1 3.2L19 12l-2 2 2.8 2.8c-.8.7-1.8 1.2-2.8 1.2a10 10 0 0 1-10-10c0-1.2.4-2.3 1-3.2L7 12l2-2L6.2 7.2c.8-.7 1.8-1.2 2.8-1.2z"/>
              </svg>
            </div>

            <span className="text-xl font-extrabold tracking-tight text-white">
              GYM<span className="text-green-400 group-hover:text-green-300 transition-colors">CRAB</span>
            </span>
          </Link>

          {/* 🧭 Nav Links */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 px-2 py-1 rounded-full border border-white/10">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/download">Download</NavLink>
            <NavLink to="/contact">Support</NavLink>
          </div>

          {/* 🚀 Actions */}
          <div className="flex items-center gap-4">

            <Link
              to="/login"
              className="text-sm font-semibold text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Sign in
            </Link>

            <Link
              to="/register-gym"
              className="relative hidden sm:block px-6 py-2.5 rounded-full text-sm font-bold text-black bg-green-400 overflow-hidden group transform hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <span className="relative z-10">Start Free Trial</span>

              {/* Shine effect on hover */}
              <span 
                className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                           group-hover:left-full transition-all duration-700 ease-in-out"
              ></span>
            </Link>

          </div>

        </div>
      </nav>
    </>
  );
}

function NavLink({ children, to }) {
  return (
    <Link 
      to={to} 
      className="relative px-4 py-1.5 text-[13px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10 overflow-hidden group"
    >
      {children}
      {/* Animated Underline */}
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300"></span>
    </Link>
  );
}
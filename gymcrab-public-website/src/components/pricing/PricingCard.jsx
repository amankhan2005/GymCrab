 import { motion } from "framer-motion";

export default function PricingCard({ plan, index }) {
  const { title, price, description, features, buttonText, highlight } = plan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group h-full ${highlight ? 'md:-mt-4 md:mb-4 z-20' : 'z-10'}`}
    >
      {/* Animated Gradient Border */}
      {highlight && (
        <motion.div 
          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500 z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {!highlight && (
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-green-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 group-hover:via-green-500/40" />
      )}

      {/* Card Content */}
      <div className={`
        relative h-full flex flex-col rounded-2xl p-8 transition-all duration-300 z-10
        ${highlight 
          ? 'bg-gray-900 text-white border border-transparent shadow-2xl shadow-green-500/10' 
          : 'bg-white text-gray-900 border border-gray-200 hover:border-transparent shadow-lg hover:shadow-xl'
        }
      `}>
        
        {/* Badge */}
        {highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-lg uppercase tracking-wide">
            Most Popular
          </div>
        )}

        {/* Header */}
        <div className="mb-5">
          <h3 className={`text-xl font-bold ${highlight ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          <p className={`text-sm mt-1 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>
            {description}
          </p>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${highlight ? 'text-gray-300' : 'text-gray-500'}`}>₹</span>
            <span className="text-6xl font-extrabold tracking-tighter">
              {price}
            </span>
            <span className={`text-lg font-medium ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>/mo</span>
          </div>

          {/* Trial Offer - Highlighted Pill */}
          <div className="mt-3 flex items-center gap-2">
            <span className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
              ${highlight 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-green-50 text-green-700 border border-green-100'
              }
            `}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              7-day free trial
            </span>
            {/* <span className={`text-xs font-medium ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>
              then ₹{price}/mo
            </span> */}
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05), duration: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${highlight ? 'bg-green-500/20' : 'bg-green-100'}`}>
                <CheckIcon className={`w-3 h-3 ${highlight ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <span className={`text-sm leading-snug ${highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden shadow-lg
            ${highlight 
              ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-white/20' 
              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20'
            }
          `}
        >
          {buttonText}
        </motion.button>

        {/* Trust Footer */}
        <div className={`mt-4 pt-4 border-t ${highlight ? 'border-white/10' : 'border-gray-100'} text-center`}>
          <p className={`text-xs flex items-center justify-center gap-1 ${highlight ? 'text-gray-500' : 'text-gray-400'}`}>
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            Cancel anytime • No hidden fees
          </p>
        </div>

      </div>
    </motion.div>
  );
}

// Icons
function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
 import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          
          {/* --- LEFT: Content --- */}
            <div className="text-center md:text-left">
  
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tighter text-gray-900 mb-6"
  >
    Run Your Gym{" "}
    <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
      Smarter
    </span>
    .
    <br />
    Grow Faster.
  </motion.h1>

  {/* Subtext */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-lg text-gray-500 max-w-md mx-auto md:mx-0 mb-10"
  >
    The all-in-one platform for membership management, payments, scheduling, and growth analytics.
  </motion.p>

  {/* CTA Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="flex flex-wrap justify-center md:justify-start gap-4 mb-16"
  >
    <button className="group px-8 py-3.5 rounded-full font-semibold text-white bg-black hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/10">
      Start Free Trial
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
    
    <button className="px-8 py-3.5 rounded-full font-medium text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
      Watch Demo
    </button>
  </motion.div>

</div>

          {/* --- RIGHT: Dashboard UI (Modern Grey 800) --- */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            {/* Animated Border Wrapper */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-green-500/50 via-emerald-400/30 to-green-500/50 animate-pulse-slow">
              <div className="relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Browser Chrome */}
                <div className="bg-gray-700/80 backdrop-blur-sm border-b border-white/5 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-400" 
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-400" 
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-400" 
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-400 font-mono bg-gray-600/30 rounded-full py-1 px-3">
                    app.gymcrab.io/dashboard
                  </div>
                </div>

                {/* Dashboard Inner Content */}
                <div className="p-5 grid grid-cols-12 gap-4">
                  
                  {/* Sidebar */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="col-span-3 border-r border-white/5 pr-4 space-y-4 hidden md:block"
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      G
                    </motion.div>
                    <div className="space-y-2 mt-8">
                      <NavSkeleton active={false} />
                      <NavSkeleton active={false} />
                      <NavSkeleton active={true} />
                      <NavSkeleton active={false} />
                      <NavSkeleton active={false} />
                    </div>
                  </motion.div>

                  {/* Main Content Area */}
                  <div className="col-span-12 md:col-span-9 space-y-4">
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <StatCard label="Revenue" value="$28.4k" trend="+12%" icon={<DollarIcon />} delay={0.7} />
                      <StatCard label="Members" value="1,240" trend="+5%" icon={<UsersIcon />} delay={0.8} />
                      <StatCard label="Attendance" value="92%" trend="+3%" icon={<ChartIcon />} delay={0.9} />
                      <StatCard label="Subs" value="340" trend="Active" icon={<CalendarIcon />} delay={1.0} />
                    </div>

                    {/* Main Graph & Activity Split */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      
                      {/* Graph */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="col-span-3 bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-colors duration-300"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xs font-semibold text-white">Revenue Growth</h3>
                          <span className="text-[10px] text-gray-400 bg-gray-600/50 px-2 py-0.5 rounded-full">Last 7 Days</span>
                        </div>
                        <div className="h-32 flex items-end gap-2">
                          <AnimatedBar height="40%" delay={0.1} />
                          <AnimatedBar height="65%" delay={0.2} />
                          <AnimatedBar height="50%" delay={0.3} />
                          <AnimatedBar height="85%" active delay={0.4} />
                          <AnimatedBar height="60%" delay={0.5} />
                          <AnimatedBar height="70%" delay={0.6} />
                          <AnimatedBar height="55%" delay={0.7} />
                        </div>
                        <div className="flex justify-between mt-2 text-[9px] text-gray-500">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </motion.div>

                      {/* Live Activity */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="col-span-2 bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 relative h-44 overflow-hidden"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                          <h3 className="text-xs font-semibold text-white">Live Activity</h3>
                        </div>
                        <div className="h-28 overflow-hidden relative">
                          <ActivitySlider />
                        </div>
                      </motion.div>

                    </div>
                    
                    {/* Bottom Check-in List */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                      className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-green-500/20 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xs font-semibold text-white">Recent Check-ins</h3>
                        <motion.span 
                          className="text-[10px] text-green-400 font-medium cursor-pointer hover:underline"
                          whileHover={{ x: 3 }}
                        >
                          View All →
                        </motion.span>
                      </div>
                      <div className="space-y-2">
                        <CheckInRow name="Sarah Connor" time="2m ago" img="S" status="active" />
                        <CheckInRow name="Mike Ross" time="5m ago" img="M" status="done" />
                        <CheckInRow name="Jessica Park" time="12m ago" img="J" status="done" />
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Glow */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-green-500/20 blur-3xl rounded-3xl -z-10"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- Helper Components ---

function NavSkeleton({ active }) {
  return (
    <motion.div 
      className={`h-2.5 rounded-full transition-colors duration-300 ${
        active 
          ? 'w-5/6 bg-gradient-to-r from-green-500/20 to-green-400/10 border-l-2 border-green-400' 
          : 'w-full bg-gray-600/50 hover:bg-gray-600/70'
      }`}
      whileHover={{ x: 3 }}
    />
  );
}

function StatCard({ label, value, trend, icon, delay }) {
  const isPositive = trend.startsWith('+');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-gradient-to-br from-gray-700/80 to-gray-600/40 p-3.5 rounded-xl border border-white/5 hover:border-green-500/30 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-2">
        <motion.div 
          className="text-gray-400 group-hover:text-green-400 transition-colors"
          whileHover={{ rotate: 10 }}
        >
          {icon}
        </motion.div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
          isPositive 
            ? 'text-green-400 bg-green-500/20' 
            : 'text-emerald-400 bg-emerald-500/20'
        }`}>
          {trend}
        </span>
      </div>
      <div className="text-xl font-bold text-white mb-0.5">{value}</div>
      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{label}</div>
    </motion.div>
  );
}

function AnimatedBar({ height, active, delay }) {
  return (
    <motion.div 
      className="flex-1 relative"
      initial={{ height: 0 }}
      animate={{ height }}
      transition={{ 
        delay: 1.3 + delay, 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1] 
      }}
    >
      <motion.div 
        className={`absolute inset-0 rounded-t-md ${
          active 
            ? 'bg-gradient-to-t from-green-600 to-green-400 shadow-lg shadow-green-500/40' 
            : 'bg-gradient-to-t from-gray-500 to-gray-400'
        }`}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: active ? undefined : 'rgba(74, 222, 128, 0.6)'
        }}
      />
      {active && (
        <motion.div 
          className="absolute inset-0 bg-green-400/50 rounded-t-md blur-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}

function CheckInRow({ name, time, img, status }) {
  return (
    <motion.div 
      className="flex items-center justify-between text-xs group hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer"
      whileHover={{ x: 4 }}
    >
      <div className="flex items-center gap-3">
        <motion.div 
          className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs text-white font-bold shadow-lg shadow-green-500/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {img}
        </motion.div>
        <div>
          <span className="text-white font-medium block">{name}</span>
          <span className="text-gray-500 text-[10px]">{time}</span>
        </div>
      </div>
      <motion.div 
        className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}
        animate={status === 'active' ? { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

// --- Icons ---
function DollarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2h6m-6-4h6m-3-6a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

// --- Slider Logic ---
function ActivitySlider() {
  const items = [
    { type: "checkin", name: "Alex", time: "now" },
    { type: "payment", amount: "$50", time: "1m" },
    { type: "new", name: "Liam", time: "2m" },
    { type: "checkin", name: "Emma", time: "3m" },
    { type: "class", name: "Yoga", time: "5m" },
    { type: "checkin", name: "Chris", time: "7m" },
  ];

  return (
    <motion.div
      className="space-y-2"
      animate={{ y: [0, -140] }}
      transition={{
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        },
      }}
    >
      {items.map((item, i) => (
        <motion.div 
          key={i} 
          className="flex items-center gap-2 text-[11px] text-gray-300 bg-gray-600/40 p-2.5 rounded-lg border border-white/5 hover:bg-gray-600/60 transition-colors"
          whileHover={{ x: 3 }}
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
          <span className="flex-1 truncate">
            {item.type === "checkin" && <>{item.name} checked in</>}
            {item.type === "payment" && <>Payment received <span className="text-green-400 font-semibold">{item.amount}</span></>}
            {item.type === "new" && <span className="text-emerald-400">{item.name} joined!</span>}
            {item.type === "class" && <>{item.name} class started</>}
          </span>
          <span className="text-gray-500 text-[9px]">{item.time}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
 import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ContactForm from "../../components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Glows */}
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Floating Decorative Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-20 h-20 border-2 border-green-500/10 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 border-2 border-emerald-500/10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* --- LEFT COLUMN: GUIDE & INFO --- */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100 mb-6 uppercase tracking-wider shadow-sm"
              >
                Contact Us
              </motion.span>

              {/* Big Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.05] mb-6">
                Let's Start a{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Have a question or want to work together? Fill out the form and our team will get back to you within 24 hours.
              </p>

              {/* Info Guide Cards */}
              <div className="space-y-4">
                <InfoCard 
                  icon={<MailIcon />}
                  title="Email Us"
                  value="support@gymcrab.com"
                  action="mailto:support@gymcrab.com"
                />
                <InfoCard 
                  icon={<LocationIcon />}
                  title="Visit Us"
                  value="New Delhi, India"
                />
                <InfoCard 
                  icon={<ClockIcon />}
                  title="Working Hours"
                  value="Mon - Fri: 9AM - 6PM IST"
                />
              </div>
            </motion.div>

            {/* --- RIGHT COLUMN: FORM --- */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl shadow-gray-100/50 p-8 md:p-10 overflow-hidden">
                
                {/* Top Decorative Line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />
                
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Send a Message</h3>
                  <p className="text-gray-500 text-sm">We'd love to hear from you.</p>
                </div>

                <ContactForm />

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// --- Helper Components ---

function InfoCard({ icon, title, value, action }) {
  const Wrapper = action ? 'a' : 'div';
  return (
    <motion.div 
      whileHover={{ x: 10, scale: 1.02 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 group hover:bg-green-50 hover:border-green-100 transition-all duration-300 cursor-pointer"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 group-hover:text-green-600 group-hover:border-green-200 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</h4>
        <Wrapper href={action} className="text-base font-medium text-gray-800 group-hover:text-green-700 transition-colors">
          {value}
        </Wrapper>
      </div>
    </motion.div>
  );
}

// --- Icons ---

function MailIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
}

function LocationIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
}

function ClockIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
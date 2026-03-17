 import Navbar from "../../components/layout/Navbar"
  import Topbar from "../../components/layout/TopBar"

import Footer from "../../components/layout/Footer"

import HeroSection from "./HeroSection"
import StatsSection from "./StatsSection"
import ProblemSection from "./ProblemSection"
import FeaturesSection from "./FeaturesSection"
import AppPreviewSection from "./AppPreviewSection"
import PricingSection from "./PricingSection"
import CTASection from "./CTASection"
 
export default function Home() {
  return (
    <>
    <Topbar/>
      <Navbar />

      <HeroSection />

      <StatsSection />

      <ProblemSection />

      <FeaturesSection />

      <AppPreviewSection />

      <PricingSection />

      <CTASection />

      <Footer />
    </>
  )
}
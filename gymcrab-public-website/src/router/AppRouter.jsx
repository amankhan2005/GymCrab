import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "../pages/home/Home"
import FeaturesPage from "../pages/features/FeaturesPage"
import PricingPage from "../pages/pricing/PricingPage"
import RegisterGymPage from "../pages/registerGym/RegisterGymPage"
import LoginPage from "../pages/login/LoginPage"
import DownloadAppPage from "../pages/download/DownloadAppPage"
import ContactPage from "../pages/contact/ContactPage"
import CheckoutPage from "../pages/checkout/CheckoutPage"
import PaymentSuccess from "../pages/payment/PaymentSuccess"
import PaymentFailed from "../pages/payment/PaymentFailed"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/features" element={<FeaturesPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/register-gym" element={<RegisterGymPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/download" element={<DownloadAppPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/payment-failed" element={<PaymentFailed />} />

      </Routes>
    </BrowserRouter>
  )
}
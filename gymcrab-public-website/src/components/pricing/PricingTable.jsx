 import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

export default function PricingTable() {
  const plans = [
    {
      title: "Gym Management System",
      price: "319",
      description: "Best for gym owners",
      features: [
        "Unlimited Member Management",
        "QR Attendance & Check-ins",
        "Trainer Scheduling",
        "Custom Membership Plans",
        "Payment & Expense Tracking"
      ],
      buttonText: "Start Free Trial",
      highlight: true
    },
    {
      title: "Premium Fitness",
      price: "29",
      description: "Best for gym members",
      features: [
        "Workout & Exercise Tracker",
        "Body Progress Analytics",
        "AI Personalized Diet Plans",
        "Fitness Performance Stats"
      ],
      buttonText: "Start Free Trial",
      highlight: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} index={index} />
      ))}
    </div>
  );
}
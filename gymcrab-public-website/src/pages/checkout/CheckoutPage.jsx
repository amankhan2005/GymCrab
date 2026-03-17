import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"

export default function CheckoutPage() {

  const handlePayment = () => {

    alert("Payment gateway will open here (Razorpay integration)")

  }

  return (

    <>
      <Navbar />

      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center mb-10">
            Checkout
          </h1>

          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Gym SaaS Subscription
            </h2>

            <p className="text-gray-600 mb-6">
              Manage your gym members, attendance and payments easily with GymCrab.
            </p>

            <div className="text-3xl font-bold mb-6">
              ₹199 / month
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-3 rounded-lg text-white font-medium"
              style={{ background: "var(--primary)" }}
            >
              Pay Now
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>

  )

}
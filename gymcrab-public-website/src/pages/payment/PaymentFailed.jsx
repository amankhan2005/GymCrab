import { Link } from "react-router-dom"

export default function PaymentFailed() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-red-50">

      <div className="bg-white shadow-lg rounded-xl p-10 text-center">

        <h1 className="text-3xl font-bold text-red-600">
          Payment Failed
        </h1>

        <p className="mt-4 text-gray-600">
          Something went wrong during the payment.
        </p>

        <Link
          to="/pricing"
          className="inline-block mt-6 px-6 py-3 rounded-lg text-white"
          style={{ background: "var(--primary)" }}
        >
          Try Again
        </Link>

      </div>

    </div>

  )

}
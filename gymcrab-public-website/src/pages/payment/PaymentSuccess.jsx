import { Link } from "react-router-dom"

export default function PaymentSuccess() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white shadow-lg rounded-xl p-10 text-center">

        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Your subscription is now active.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg text-white"
          style={{ background: "var(--primary)" }}
        >
          Go to Homepage
        </Link>

      </div>

    </div>

  )

}
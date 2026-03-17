import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"
import RegisterGymForm from "../../components/forms/RegisterGymForm"

export default function RegisterGymPage() {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">
              Register Your Gym on GymCrab
            </h1>

            <p className="text-gray-600 mt-3">
              Start managing members, attendance and payments easily.
            </p>
          </div>

          <RegisterGymForm />

        </div>

      </section>

      <Footer />
    </>
  )
}
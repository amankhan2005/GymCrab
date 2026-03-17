 import { useState } from "react"
import Modal from "../ui/Modal"

export default function RegisterGymForm() {

  const [formData, setFormData] = useState({
    gymName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    description: "",
    latitude: "",
    longitude: "",
    outsidePhoto: null,
    gymVideo: null
  })

  const [photoPreview, setPhotoPreview] = useState(null)
  const [videoName, setVideoName] = useState("")
  const [showModal, setShowModal] = useState(false)


  const handleChange = (e) => {

    const { name, value, files } = e.target

    if (files) {

      const file = files[0]

      if (name === "outsidePhoto") {
        setPhotoPreview(URL.createObjectURL(file))
      }

      if (name === "gymVideo") {
        setVideoName(file.name)
      }

      setFormData({
        ...formData,
        [name]: file
      })

    } else {

      setFormData({
        ...formData,
        [name]: value
      })

    }

  }


  const getLiveLocation = () => {

    if (!navigator.geolocation) {
      alert("Geolocation not supported")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {

        setFormData({
          ...formData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })

        alert("Location captured successfully!")

      },
      () => {
        alert("Please allow location access")
      }
    )

  }


  const handleSubmit = (e) => {

    e.preventDefault()

    if (!formData.latitude) {
      alert("Please capture gym location")
      return
    }

    if (!formData.outsidePhoto) {
      alert("Upload outside gym photo")
      return
    }

    if (!formData.gymVideo) {
      alert("Upload gym tour video")
      return
    }

    console.log("Gym Registration Data:", formData)

    setShowModal(true)

  }


  return (

    <>

    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto"
    >

      <h2 className="text-2xl font-bold mb-6 text-center">
        Register Your Gym
      </h2>


      <div className="space-y-4">

        <input
          type="text"
          name="gymName"
          placeholder="Gym Name"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Gym Description"
          rows="4"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />


        {/* Live Location */}

        <div className="space-y-2">

          <button
            type="button"
            onClick={getLiveLocation}
            className="px-4 py-2 rounded-lg text-white"
            style={{ background: "var(--primary)" }}
          >
            Capture Live Gym Location
          </button>

          {formData.latitude && (
            <p className="text-sm text-gray-600">
              Location: {formData.latitude}, {formData.longitude}
            </p>
          )}

        </div>


        {/* Outside Photo */}

        <div>

          <label className="text-sm font-medium text-gray-700">
            Upload Gym Outside Photo
          </label>

          <input
            type="file"
            name="outsidePhoto"
            accept="image/*"
            onChange={handleChange}
            className="w-full mt-1"
          />

          {photoPreview && (
            <img
              src={photoPreview}
              alt="Preview"
              className="mt-3 h-32 rounded-lg"
            />
          )}

        </div>


        {/* Gym Tour Video */}

        <div>

          <label className="text-sm font-medium text-gray-700">
            Upload Gym Tour Video
          </label>

          <p className="text-xs text-gray-500 mb-2">
            Record a 20–30 second video showing entrance and equipment.
          </p>

          <input
            type="file"
            name="gymVideo"
            accept="video/*"
            onChange={handleChange}
            className="w-full"
          />

          {videoName && (
            <p className="text-sm text-gray-600 mt-2">
              Uploaded: {videoName}
            </p>
          )}

        </div>


        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white font-medium"
          style={{ background: "var(--primary)" }}
        >
          Submit Gym Registration
        </button>

      </div>

    </form>



    {/* Success Modal */}

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>

      <h2 className="text-2xl font-bold mb-4">
        Registration Submitted
      </h2>

      <p className="text-gray-600">
        Your gym registration has been received successfully.
      </p>

      <p className="text-gray-600 mt-2">
        Our team will verify your gym within <b>24 hours</b>.
      </p>

      <p className="text-gray-600 mt-2">
        Status: <b>Pending Verification</b>
      </p>

    </Modal>

    </>

  )

}
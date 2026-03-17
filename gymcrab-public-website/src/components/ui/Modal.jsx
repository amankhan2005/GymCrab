export default function Modal({ isOpen, onClose, children }) {

  if (!isOpen) return null

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">

        {children}

        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 rounded-lg text-white"
          style={{ background: "var(--primary)" }}
        >
          Close
        </button>

      </div>

    </div>

  )

}
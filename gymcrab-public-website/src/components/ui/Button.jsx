export default function Button({ children, onClick, type = "button", variant = "primary" }) {

  const baseStyle = "px-6 py-3 rounded-lg font-medium transition"

  const variants = {
    primary: "text-white",
    outline: "border border-gray-300 hover:bg-gray-100",
  }

  return (

    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
      style={variant === "primary" ? { background: "var(--primary)" } : {}}
    >
      {children}
    </button>

  )

}
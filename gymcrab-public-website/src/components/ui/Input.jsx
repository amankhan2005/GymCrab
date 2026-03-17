export default function Input({
  type = "text",
  name,
  placeholder,
  value,
  onChange
}) {

  return (

    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
    />

  )

}
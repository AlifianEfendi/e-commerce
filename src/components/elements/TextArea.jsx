export default function TextArea({ name, title, rows, placeholder }) {
    return (
    <label className="md:col-span-2">
        <span
            className="block text-gray-700 text-sm font-medium mb-2"
        >
            {title}
        </span>
    
        <textarea
            name={name}
            rows={rows}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            placeholder={placeholder}
        ></textarea>
    </label>
    )
}
export default function Select({ name, title="", value, handleChange = () => {}, data=[] }) {
    return (
        <label>
            {title && (
                <span className="block text-gray-700 text-sm font-medium mb-2">
                    {title}
                </span>
            )}
        
            <div className="relative w-full">
                <select
                    name={name}
                    className=" w-full peer appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                >
                    {data.map((item, index) => (
                        <option key={index}>
                            {item}
                        </option>
                    ))}
                </select>
            
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 peer-focus:text-green-500">
                    <i className="fas fa-chevron-down text-xs"></i>
                </div>
            </div>
        </label>
    )
}
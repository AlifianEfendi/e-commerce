export default function SelectMethod({ children, name, value, selected, setSelected, data={ title: "", subtitle: "" } }) {
    return (
        <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-green-200 hover:bg-green-50">
        <input
            type="radio"
            name={name}
            value={value}
            checked={selected === value}
            onChange={() => setSelected(value)}
            className="text-green-500 focus:ring-green-500 h-4 w-4"
        />
    
        <div className="ml-3 flex-1">
            <div className="flex justify-between">
                <div className="flex items-center">
                    {children}
                    <span className="font-medium">{data.title}</span>
                </div>
            
                {data.price && (
                    <span className="font-medium">Rp {(data.price).toLocaleString('id-ID')}</span>
                )}
            </div>
        
            <p className="text-sm text-gray-500">
            {data.subtitle}
            </p>
        </div>
        </label>
    )
}
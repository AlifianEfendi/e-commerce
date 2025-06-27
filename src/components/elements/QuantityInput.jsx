export default function QuantityInput({ quantity, handleQuantityChange }) {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg">
            <button
                onClick={() => handleQuantityChange(-1)}
                className="px-2 py-0.5 md:px-3 md:py-1 text-gray-600 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
            >
                <i className="fas fa-minus"></i>
            </button>
        
            <span className="px-3 py-0.5 md:px-4 md:py-1 border-l border-r border-gray-300">
                {quantity}
            </span>
        
            <button
                onClick={() => handleQuantityChange(1)}
                className="px-2 py-0.5 md:px-3 md:py-1 text-gray-600 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
            >
                <i className="fas fa-plus"></i>
            </button>
        </div>
    )
}
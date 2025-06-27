import { Link } from "react-router-dom";
import Rating from "../elements/Rating";

export default function ProductCard({ product, handleAddToCart, minWidth= "" }) {
    return (
        <Link to={`/product/${product.id}`} className={"bg-white rounded-lg w-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col " + minWidth}>
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center" />
                    <div className="absolute top-2 left-2 space-x-1.5">
                        {product.discount && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.discount}
                        </span>
                        )}
                    
                        {/* Best Sellet Badge */}
                        {/* <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Best Seller
                        </span> */}
                    </div>
            
                {/* <button className="absolute top-2 right-2 bg-white rounded-sm px-2.5 py-1 text-gray-600 hover:text-red-500 transition-colors duration-300" aria-label="Add to favorites">
                    <i className="fas fa-heart"></i>
                </button> */}
            </div>
        
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="md:text-lg font-medium text-gray-800 mb-1 flex-grow">{product.name}</h3>
            
                <div className="flex items-center mb-2">
                    <Rating rating={product.rating} />
                
                    <span className="text-gray-600 text-sm ml-1">({product.rating})</span>
                </div>
            
                <div className="flex justify-between items-center mt-auto">
                    <span className="md:text-lg font-bold text-gray-800">{product.price}</span>
                
                    <button onClick={handleAddToCart} className="bg-green-600 hover:bg-green-700 text-white rounded-sm px-2.5 py-1 transition duration-300">
                        <i className="fas fa-shopping-cart"></  i>
                    </button>
                </div>
            </div>
        </Link>
    )
}
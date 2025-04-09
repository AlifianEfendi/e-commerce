// * Components
import Button from "@common/Button";
import CustomerReviews from "./CustomerReviews";
import RatingStars from "./RatingStars";

// * Utility functions
import { getDiscount } from "@utils/getDiscount";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartSlice";

export default function ProductDetails({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = id => {
        dispatch(addToCart({ id, qty: 1 }));
        alert("Product added to cart!");
    }

    return (
        <div className="w-1/2 max-h-[calc(100vh-150px)] overflow-y-auto no-scrollbar flex flex-col pr-10 self-start mt-6">
            <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500">{product.id && product.category}</span>
                <span className="text-sm text-gray-500">|</span>
                <span className="text-sm text-gray-500">{product.id && product.brand}</span>
            </div>
        
            <h1 className="text-3xl text-gray-800 font-bold">{product.id && product.title}</h1>
        
            <div className="flex items-center gap-2 mt-2">
                <RatingStars rating={product.rating ? product.rating / 5 * 100 : 0} />
            
                <span>{product.id ? product.rating : 0}</span>
            </div>
        
            <div className="flex items-center mt-5">
                <b className="text-xl">$ {product.id && getDiscount(product.price, product.discountPercentage).toLocaleString("id-ID")}</b>
                <span className="text-gray-500 text-sm line-through ml-2">$ {product.id && product.price.toLocaleString("id-ID")}</span>
                <p className="ml-2 px-3 py-0.5 bg-blue-500 text-white rounded-full">Disc {product.id && product.discountPercentage}%</p>
            </div>
        
            <p className="mt-2 text-sm font-semibold text-blue-500">{product.id && product.stock} left</p>
        
            <div className="flex gap-5 w-full mt-30">
                <Button styles="bg-blue-600 text-white">Buy now!</Button>
                <Button onClick={() => handleAddToCart(product.id)} styles="bg-white border-2 border-blue-600 text-blue-600">Add to Cart</Button>
            </div>
        
            <div className="flex flex-col gap-1 mt-20">
                <h1 className="text-2xl text-gray-600 font-bold">Description</h1>
            
                <p className="text-lg text-gray-500">{product.id && product.description}</p>
            
                <ul className="list-disc pl-5 mt-2 space-y-2 text-lg text-gray-500">
                    <li><p>{product.id && product.warrantyInformation}</p></li>
                    <li><p>{product.id && product.shippingInformation}</p></li>
                    <li><p>{product.id && product.returnPolicy}</p></li>
                </ul>
            </div>
            
            <CustomerReviews reviews={product.reviews} />
        </div>
    )
}
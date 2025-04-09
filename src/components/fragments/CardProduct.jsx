import Button from "@common/Button";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartSlice";

export default function CardProduct({ id, children }) {
    const navigate = useNavigate();

    const handleShowProduct = (e, id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div onClick={e => handleShowProduct(e, id)} className="w-full md:w-[calc(100%/2-1rem)] xl:w-[calc(100%/3-1rem)] bg-gray-800 border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between cursor-pointer">
            {children}
        </div>
    )
}

const Image = ({ image }) => {
    return (
        <div>
            <img src={image} alt="product" className="p-6 rounded-t-lg" />
        </div>
    )
}

const Description = ({ title, desc }) => {
    return(
        <div className="px-3 pb-3 h-full">
            <div>
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <p className="text-sm text-white">{desc}</p>
            </div>
        </div>
    )
}

const Footer = ({ price, id }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e, id) => {
        e.stopPropagation();
        dispatch(addToCart({ id, qty: 1 }));
    }

    return(
        <div className="flex items-center justify-between px-3 pb-3">
            <span className="text-lg font-bold text-white">$ {price.toLocaleString("id-ID")}</span>
            <Button onClick={(e) => handleAddToCart(e, id)} styles="bg-blue-600 w-max text-sm">Add to Cart</Button>
        </div>
    )
}

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Footer = Footer;
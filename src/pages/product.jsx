// Dependencies
import axios from "axios";

// Hooks
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { getDiscount } from "@utils/getDiscount";

// Components
import Button from "@common/Button";
import StoreNavbar from "@fragments/StoreNavbar";

// Utility functions
// import { getDate } from "../utils/getDate";
import ProductImages from "../components/fragments/ProductImages";
import ProductDetails from "../components/fragments/ProductDetails";

export default function ProductPage() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [ product, setProduct ] = useState({});
    const [ imageSelected, setImageSelected ] = useState(0);
    const [ errorMessage, setErrorMessage ] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
                if(error.status === 404 && error.response?.data?.message.includes("Product")) {
                    setErrorMessage(error.response?.data?.message);
                }
            }
        }
        fetchProduct();
    }, [])

    const handleBackTo = () => {
        navigate(-1);
    }

    // const handleAddToCart = (e, id) => {
    //     e.stopPropagation();
    //     if(cart.find(item => item.id === id)) {
    //         setCart(
    //             cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
    //         )
    //     } else {
    //         setCart([...cart, {id, qty: 1}]);
    //     }
    // }

    const handleImageChecked = (e) => {
        setImageSelected(e.target.value);
    }

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if(!confirmLogout) return;
        localStorage.removeItem("token");
        navigate("/login");
    }


    return (
        <>
        {errorMessage ? (
            <div className="w-full h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-500">{errorMessage}</h1>
            </div>
        ) : (
            <div className="w-full min-h-screen flex flex-col">
                <StoreNavbar backTo={handleBackTo} handleLogout={handleLogout} />

                <div className="flex justify-center gap-3 w-full py-5 px-10">
                    <ProductImages imageSelected={imageSelected} handleChecked={handleImageChecked} product={product} />
                
                    <ProductDetails product={product} />
                </div>
            </div>
        )
    }
        
        </>
    )
}
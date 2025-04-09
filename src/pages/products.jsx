// Dependencies
import axios from "axios";

// Components
import CardProduct from "@fragments/CardProduct";


// Hooks
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StoreNavbar from "../components/fragments/StoreNavbar";

// util functions
import { getDiscount } from "../utils/getDiscount";
import Cart from "../components/fragments/Cart";


export default function ProductsPage() {
    const navigate = useNavigate(); 

    const [ products, setProducts ] = useState([]);

    // * Fetch products from API 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setProducts(response.data.products);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <StoreNavbar />
        
            <div className="flex">
                <div className="flex flex-wrap py-5 px-2 w-3/4">
                    {
                        products.map(product => (
                        <CardProduct id={product.id} key={product.id}>
                            <CardProduct.Image image={product.thumbnail} />
                            <CardProduct.Description title={product.title} desc={product.description}/>
                            <CardProduct.Footer price={getDiscount(product.price, product.discountPercentage)} id={product.id} />
                        </CardProduct>
                        ))
                    }
                </div>
            
                <Cart products={products} />
            </div>
        </div>
    )
}
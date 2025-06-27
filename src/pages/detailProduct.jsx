import { useNavigate, useParams } from "react-router-dom";
import AppShell from "../components/layouts/AppShell";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import ProductGallery from "../components/fragments/ProductGallery";
import TabDetails from "../components/fragments/TabDetails";
import RelatedProducts from "../components/fragments/RelatedProducts";
import ProductInformation from "../components/fragments/ProductInfomation";

export default function DetailProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ product, setProduct ] = useState({});
    const [ quantity, setQuantity ] = useState(1);

    useEffect(() => {
        const product = products.find(product => product.id === parseInt(id));
        setProduct(product);
    }, [id]);

    const handleBuyNow = () => {
        navigate('/checkout', { state: [ { id: product.id, quantity: quantity } ] });
    }

    return (
        <AppShell>
            <div className="container mx-auto min-h-screen bg-white">
                {/* Product Detail */}
                <div className="px-4 py-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="md:flex">
                            <ProductGallery />
                        
                            <ProductInformation quantity={quantity} setQuantity={setQuantity} handleBuyNow={handleBuyNow} />
                        </div>
                    </div>
                </div>
            
                <TabDetails />
            
                {/* Produk Terkait */}
                <RelatedProducts />
            </div>
        </AppShell>
    )
}
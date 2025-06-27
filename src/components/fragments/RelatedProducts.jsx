import ProductCard from "./ProductCard";
import { products } from "../../data/products";

export default function RelatedProducts() {
    return (
        <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Produk Terkait</h2>
            
                <a
                    href="#"
                    className="text-green-500 hover:text-green-600 font-medium text-sm cursor-pointer"
                >
                    Lihat Semua <i className="fas fa-arrow-right ml-1"></i>
                </a>
            </div>

            <div className="flex flex-nowrap gap-6 py-2 overflow-x-auto no-scrollbar">
                {products.map(product => <ProductCard key={product.id} product={product} minWidth="min-w-64" />)}
            </div>
        </div>
    )
}
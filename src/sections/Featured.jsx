import ProductCard from "../components/fragments/ProductCard"
import { products } from "../data/products"

export default function FeaturedSection({ handleAddToCart }) {
    return(
        <section className=" py-12 bg-gray-50">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Produk Unggulan</h2>
            
                <a href="#" className="text-sm md:text-base text-green-600 hover:text-green-700 font-medium flex items-center">
                    Lihat Semua <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        
            <div className="flex flex-nowrap gap-6 py-2 overflow-x-auto no-scrollbar">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} minWidth="min-w-54" />
                ))}
            </div>
        </section>
    )
}
import FeaturedCard from "../components/fragments/FeaturedCard"
import { categories } from "../data/products"

export default function CategorySection() {
    return (
        <section className=" py-12 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">Kategori Produk</h2>
                
                    <p className="text-gray-600">Temukan berbagai pilihan produk frozen food berkualitas</p>
                </div>
            
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <FeaturedCard key={category.id} item={category} addStyle="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer" />
                    ))}
                </div>
            </div>
        </section>
    )
}
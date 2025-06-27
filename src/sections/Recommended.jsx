import { categories, recommendedProducts } from "../data/products"

export default function RecommendedSection(handleCategoryChange, activeCategory, handleAddToCart) {

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Rekomendasi Untuk Anda</h2>
                
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap ${activeCategory === 'semua' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => handleCategoryChange('semua')}>
                            Semua
                        </button>
                    
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap ${activeCategory === category.id ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                onClick={() => handleCategoryChange(category.id)}>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                    {recommendedProducts
                        .filter(product => activeCategory === 'semua' || product.category === activeCategory)
                        .map((product) => (
                            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center" />
                                    <button className="absolute top-2 right-2 bg-white rounded-sm p-2 text-gray-600 hover:text-red-500 transition-colors duration-300" aria-label="Add to favorites">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="text-xs font-medium text-green-600 mb-1">
                                        {categories.find(cat => cat.id === product.category)?.name || 'Umum'}
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-2 flex-grow">{product.name}</h3>
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? '' : 'text-gray-300'} text-sm`}></i>
                                            ))}
                                        </div>
                                        <span className="text-gray-600 text-sm ml-1">({product.rating})</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-lg font-bold text-gray-800">{product.price}</span>
                                        <button onClick={handleAddToCart} className="bg-green-600 hover:bg-green-700 text-white rounded-sm p-2 transition duration-300">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="mt-10 text-center">
                    <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition duration-300">
                        Muat Lebih Banyak
                    </button>
                </div>
            </div>
        </section>
    )
}
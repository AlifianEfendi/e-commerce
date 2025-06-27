import React, { useState } from 'react';
import AppShell from '../components/layouts/AppShell';
import ProductCard from '../components/fragments/ProductCard';
import { products } from '../data/products';

export default function ProductPage() {
    const [wishlist, setWishlist] = useState({});
    const [cart, setCart] = useState({});
    const [ selectedCategory, setSelectedCategory ] = useState("semua");

    const toggleWishlist = (productId) => {
        setWishlist(prev => ({
        ...prev,
        [productId]: !prev[productId]
        }));
    };

    const addToCart = (productId) => {
        setCart(prev => ({
        ...prev,
        [productId]: (prev[productId] || 0) + 1
        }));
    };

    const categoryList = [
        { id: 1, title: "Semua", value: "semua" },
        { id: 2, title: "Ayam", value: "ayam" },
        { id: 3, title: "Seafood", value: "seafood" },
        { id: 4, title: "Daging", value: "daging" },
        { id: 5, title: "Sayuran", value: "sayuran" },
        { id: 6, title: "Cemilan", value: "cemilan" },
        { id: 7, title: "Siap Saji", value: "siap-saji" },
        { id: 8, title: "Kentang", value: "kentang" },
        { id: 9, title: "Pangsit", value: "pangsit" },
        { id: 10, title: "Bakwan", value: "bakwan" },
        { id: 11, title: "Nugget", value: "nugget" },
        { id: 12, title: "Risoles", value: "risoles" },
        { id: 13, title: "Pizza", value: "pizza" },
        { id: 14, title: "Udang", value: "udang" },
        { id: 15, title: "Sosis", value: "sosis" },
        { id: 16, title: "Siomay", value: "siomay" },
        { id: 17, title: "Dimsum", value: "dimsum" },
        { id: 18, title: "Bakso", value: "bakso" },
        { id: 19, title: "Nasi", value: "nasi" },
        { id: 20, title: "Sate", value: "sate" },
    ]

    return (
        <AppShell title={"Produk | Dapur Mpo' Rita"}>
                {/* Produk Terlaris */}
                <div className="container mx-auto flex flex-col bg-white min-h-screen py-6 px-2">
                    <div className='flex flex-nowrap gap-2 w-full min-w-0 overflow-x-auto no-scrollbar pb-6'>
                        {categoryList.map(category => (
                            <button key={category.id} type="button" onClick={() => setSelectedCategory(category.value)} className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition duration-300 cursor-pointer whitespace-nowrap shadow-sm border ${selectedCategory === category.value ? 'bg-green-100 border-green-500 text-green-500' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>{category.title}</button>
                        ))}
                    </div>
                
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            handleAddToCart={addToCart}
                            handleToggleWishlist={toggleWishlist}
                        />
                        ))}
                    </div>
                </div>
        </AppShell>
    );
};
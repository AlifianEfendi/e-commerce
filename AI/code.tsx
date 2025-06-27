// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import * as echarts from "echarts";

const App: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("semua");
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Data kategori produk
    const categories = [
        { id: "ayam", name: "Ayam", icon: "drumstick-bite" },
        { id: "seafood", name: "Seafood", icon: "fish" },
        { id: "daging", name: "Daging", icon: "bacon" },
        { id: "sayuran", name: "Sayuran", icon: "carrot" },
        { id: "camilan", name: "Camilan", icon: "cookie-bite" },
        { id: "siap-saji", name: "Siap Saji", icon: "utensils" },
    ];

    // Data produk unggulan
    const featuredProducts = [
        {
        id: 1,
        name: "Nugget Ayam Premium",
        price: "Rp 45.000",
        rating: 4.8,
        discount: "15%",
        image:
            "https://readdy.ai/api/search-image?query=Premium%20chicken%20nuggets%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20brown%20texture%2C%20appetizing%20frozen%20food%20product&width=400&height=300&seq=1&orientation=landscape",
        },
        {
        id: 2,
        name: "Bakso Sapi Jumbo",
        price: "Rp 55.000",
        rating: 4.7,
        discount: "",
        image:
            "https://readdy.ai/api/search-image?query=Jumbo%20beef%20meatballs%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20juicy%20and%20tender%20texture%2C%20appetizing%20frozen%20food%20product&width=400&height=300&seq=2&orientation=landscape",
        },
        {
        id: 3,
        name: "Dimsum Udang Spesial",
        price: "Rp 38.000",
        rating: 4.5,
        discount: "10%",
        image:
            "https://readdy.ai/api/search-image?query=Special%20shrimp%20dimsum%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20delicate%20and%20translucent%20skin%2C%20appetizing%20frozen%20food%20product&width=400&height=300&seq=3&orientation=landscape",
        },
        {
        id: 4,
        name: "Kentang Goreng Premium",
        price: "Rp 32.000",
        rating: 4.6,
        discount: "",
        image:
            "https://readdy.ai/api/search-image?query=Premium%20french%20fries%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20texture%2C%20appetizing%20frozen%20food%20product&width=400&height=300&seq=4&orientation=landscape",
        },
    ];

    // Data produk rekomendasi
    const recommendedProducts = [
        {
        id: 5,
        name: "Sosis Sapi Jumbo",
        price: "Rp 48.000",
        rating: 4.5,
        category: "daging",
        image:
            "https://readdy.ai/api/search-image?query=Jumbo%20beef%20sausages%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20juicy%20and%20firm%20texture%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=5&orientation=squarish",
        },
        {
        id: 6,
        name: "Siomay Ikan Premium",
        price: "Rp 42.000",
        rating: 4.6,
        category: "seafood",
        image:
            "https://readdy.ai/api/search-image?query=Premium%20fish%20dumplings%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20soft%20and%20tender%20texture%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=6&orientation=squarish",
        },
        {
        id: 7,
        name: "Pangsit Ayam Spesial",
        price: "Rp 36.000",
        rating: 4.4,
        category: "ayam",
        image:
            "https://readdy.ai/api/search-image?query=Special%20chicken%20wontons%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20edges%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=7&orientation=squarish",
        },
        {
        id: 8,
        name: "Udang Tempura",
        price: "Rp 65.000",
        rating: 4.8,
        category: "seafood",
        image:
            "https://readdy.ai/api/search-image?query=Tempura%20shrimp%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20batter%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=8&orientation=squarish",
        },
        {
        id: 9,
        name: "Sayur Beku Campuran",
        price: "Rp 28.000",
        rating: 4.3,
        category: "sayuran",
        image:
            "https://readdy.ai/api/search-image?query=Mixed%20frozen%20vegetables%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20vibrant%20colors%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=9&orientation=squarish",
        },
        {
        id: 10,
        name: "Risoles Ragout Ayam",
        price: "Rp 35.000",
        rating: 4.5,
        category: "camilan",
        image:
            "https://readdy.ai/api/search-image?query=Chicken%20ragout%20risoles%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20crust%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=10&orientation=squarish",
        },
        {
        id: 11,
        name: "Pizza Mini",
        price: "Rp 52.000",
        rating: 4.7,
        category: "siap-saji",
        image:
            "https://readdy.ai/api/search-image?query=Mini%20pizzas%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20melted%20cheese%20and%20colorful%20toppings%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=11&orientation=squarish",
        },
        {
        id: 12,
        name: "Bakwan Jagung",
        price: "Rp 25.000",
        rating: 4.4,
        category: "camilan",
        image:
            "https://readdy.ai/api/search-image?query=Corn%20fritters%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20texture%20with%20visible%20corn%20kernels%2C%20appetizing%20frozen%20food%20product&width=300&height=300&seq=12&orientation=squarish",
        },
    ];

    // Inisialisasi chart penjualan
    React.useEffect(() => {
        const chartDom = document.getElementById("sales-chart");
        if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
            animation: false,
            tooltip: {
            trigger: "axis",
            },
            legend: {
            data: ["Penjualan", "Pengunjung"],
            },
            grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            },
            xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
            },
            yAxis: {
            type: "value",
            },
            series: [
            {
                name: "Penjualan",
                type: "line",
                data: [120, 132, 101, 134, 90, 230, 210],
                smooth: true,
                lineStyle: {
                width: 3,
                color: "#4F46E5",
                },
                itemStyle: {
                color: "#4F46E5",
                },
            },
            {
                name: "Pengunjung",
                type: "line",
                data: [220, 182, 191, 234, 290, 330, 310],
                smooth: true,
                lineStyle: {
                width: 3,
                color: "#10B981",
                },
                itemStyle: {
                color: "#10B981",
                },
            },
            ],
        };
        myChart.setOption(option);

        window.addEventListener("resize", () => {
            myChart.resize();
        });

        return () => {
            window.removeEventListener("resize", () => {
            myChart.resize();
            });
            myChart.dispose();
        };
        }
    }, []);

    // Handler untuk menambahkan produk ke keranjang
    const handleAddToCart = () => {
        setCartCount((prevCount) => prevCount + 1);
    };

    // Handler untuk filter kategori
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
    };

    // Handler untuk search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Handler untuk toggle mobile menu
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <i className="fas fa-snowflake text-blue-600 text-3xl mr-2"></i>
                    <span className="text-2xl font-bold text-blue-600">
                    FrozenFood
                    </span>
                </a>
                </div>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-xl mx-6">
                <div className="relative w-full">
                    <input
                    type="text"
                    placeholder="Cari produk frozen food..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
                    <div className="absolute left-3 top-2.5 text-gray-400">
                    <i className="fas fa-search"></i>
                    </div>
                </div>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-6">
                <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                >
                    Beranda
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                >
                    Produk
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                >
                    Tentang Kami
                </a>
                <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                >
                    Kontak
                </a>
                <div className="relative">
                    <button className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer !rounded-button whitespace-nowrap">
                    <i className="fas fa-shopping-cart text-xl"></i>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartCount}
                        </span>
                    )}
                    </button>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Masuk / Daftar
                </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center space-x-4">
                <button className="relative text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
                    <i className="fas fa-shopping-cart text-xl"></i>
                    {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartCount}
                    </span>
                    )}
                </button>
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
                >
                    <i
                    className={`fas ${showMobileMenu ? "fa-times" : "fa-bars"} text-xl`}
                    ></i>
                </button>
                </div>
            </div>

            {/* Search Bar - Mobile */}
            <div className="mt-4 md:hidden">
                <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Cari produk frozen food..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                    <i className="fas fa-search"></i>
                </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {showMobileMenu && (
                <nav className="mt-4 md:hidden">
                <div className="flex flex-col space-y-3 py-3 border-t border-gray-200">
                    <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                    Beranda
                    </a>
                    <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                    Produk
                    </a>
                    <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                    Tentang Kami
                    </a>
                    <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                    Kontak
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 w-full cursor-pointer !rounded-button whitespace-nowrap">
                    Masuk / Daftar
                    </button>
                </div>
                </nav>
            )}
            </div>
        </header>

        <main>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <img
                src="https://readdy.ai/api/search-image?query=Frozen%20food%20ingredients%20scattered%20on%20a%20blue%20background%20with%20ice%20crystals%2C%20professional%20food%20photography%20with%20modern%20minimalist%20style%2C%20clean%20and%20appetizing%20presentation%20of%20various%20frozen%20food%20products&width=1440&height=600&seq=13&orientation=landscape"
                alt="Background"
                className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    Makanan Beku Berkualitas Untuk Keluarga Anda
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8">
                    Nikmati kemudahan memasak dengan produk frozen food premium
                    kami. Praktis, lezat, dan bergizi.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                    <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-medium text-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                        Belanja Sekarang
                    </button>
                    <button className="bg-transparent hover:bg-blue-700 text-white border border-white px-6 py-3 rounded-full font-medium text-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                        Lihat Katalog
                    </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                    src="https://readdy.ai/api/search-image?query=Assortment%20of%20premium%20frozen%20food%20products%20arranged%20in%20an%20appealing%20display%2C%20high%20quality%20food%20photography%20with%20clean%20white%20background%2C%20showing%20nuggets%2C%20dumplings%2C%20and%20other%20frozen%20delicacies%20with%20professional%20lighting&width=600&height=500&seq=14&orientation=landscape"
                    alt="Frozen Food Collection"
                    className="rounded-lg shadow-2xl max-w-full h-auto"
                    />
                </div>
                </div>
            </div>
            </section>

            {/* Category Section */}
            <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Kategori Produk
                </h2>
                <p className="text-gray-600">
                    Temukan berbagai pilihan produk frozen food berkualitas
                </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <div
                    key={category.id}
                    className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer ${
                        activeCategory === category.id ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                    >
                    <div className="flex flex-col items-center p-6">
                        <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                            activeCategory === category.id
                            ? "bg-blue-500 text-white"
                            : "bg-blue-100 text-blue-500"
                        }`}
                        >
                        <i className={`fas fa-${category.icon} text-2xl`}></i>
                        </div>
                        <h3 className="text-gray-800 font-medium text-center">
                        {category.name}
                        </h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Produk Unggulan
                </h2>
                <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                    Lihat Semua <i className="fas fa-arrow-right ml-2"></i>
                </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                    <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                    <div className="relative">
                        <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover object-center"
                        />
                        {product.discount && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.discount}
                        </span>
                        )}
                        <button
                        className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-600 hover:text-red-500 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                        aria-label="Add to favorites"
                        >
                        <i className="fas fa-heart"></i>
                        </button>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                        {product.name}
                        </h3>
                        <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className={`fas fa-star ${i < Math.floor(product.rating) ? "" : "text-gray-300"} text-sm`}
                            ></i>
                            ))}
                        </div>
                        <span className="text-gray-600 text-sm ml-1">
                            ({product.rating})
                        </span>
                        </div>
                        <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">
                            {product.price}
                        </span>
                        <button
                            onClick={handleAddToCart}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* Promo Banner */}
            <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 z-10"></div>
                <img
                    src="https://readdy.ai/api/search-image?query=Various%20frozen%20food%20products%20arranged%20in%20a%20beautiful%20display%20with%20ice%20effect%2C%20professional%20food%20photography%20with%20blue%20background%2C%20appetizing%20presentation%20of%20frozen%20meals%2C%20dumplings%2C%20and%20snacks%20with%20modern%20minimalist%20style&width=1200&height=400&seq=15&orientation=landscape"
                    alt="Promo Banner"
                    className="w-full h-full object-cover object-center"
                />
                <div className="relative z-20 py-12 px-6 md:px-12 text-center md:text-left">
                    <div className="md:max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Diskon 25% Untuk Pembelian Pertama
                    </h2>
                    <p className="text-blue-100 mb-8">
                        Gunakan kode promo{" "}
                        <span className="font-bold">FROZENFIRST</span> untuk
                        mendapatkan diskon spesial untuk pembelian pertama Anda.
                    </p>
                    <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-medium transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                        Gunakan Sekarang
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Recommended Products Section */}
            <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Rekomendasi Untuk Anda
                </h2>
                <div className="flex space-x-2">
                    <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                        activeCategory === "semua"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleCategoryChange("semua")}
                    >
                    Semua
                    </button>
                    {categories.slice(0, 3).map((category) => (
                    <button
                        key={category.id}
                        className={`hidden md:block px-4 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                        activeCategory === category.id
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => handleCategoryChange(category.id)}
                    >
                        {category.name}
                    </button>
                    ))}
                    <div className="relative md:hidden">
                    <button className="bg-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                        Lainnya <i className="fas fa-chevron-down ml-1"></i>
                    </button>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recommendedProducts
                    .filter(
                    (product) =>
                        activeCategory === "semua" ||
                        product.category === activeCategory,
                    )
                    .map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover object-center"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-600 hover:text-red-500 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                            aria-label="Add to favorites"
                        >
                            <i className="fas fa-heart"></i>
                        </button>
                        </div>
                        <div className="p-4">
                        <div className="text-xs font-medium text-blue-600 mb-1">
                            {categories.find((cat) => cat.id === product.category)
                            ?.name || "Umum"}
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {product.name}
                        </h3>
                        <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <i
                                key={i}
                                className={`fas fa-star ${i < Math.floor(product.rating) ? "" : "text-gray-300"} text-sm`}
                                ></i>
                            ))}
                            </div>
                            <span className="text-gray-600 text-sm ml-1">
                            ({product.rating})
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-800">
                            {product.price}
                            </span>
                            <button
                            onClick={handleAddToCart}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                            >
                            <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Muat Lebih Banyak
                </button>
                </div>
            </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Mengapa Memilih Kami?
                </h2>
                <p className="text-gray-600">
                    Keunggulan produk frozen food kami
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-medal text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Kualitas Premium
                    </h3>
                    <p className="text-gray-600">
                    Bahan baku pilihan dan proses produksi yang higienis
                    menghasilkan produk berkualitas tinggi.
                    </p>
                </div>

                <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-shipping-fast text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Pengiriman Cepat
                    </h3>
                    <p className="text-gray-600">
                    Sistem pengiriman yang cepat dengan kemasan khusus untuk
                    menjaga kualitas produk tetap optimal.
                    </p>
                </div>

                <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-leaf text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Tanpa Pengawet
                    </h3>
                    <p className="text-gray-600">
                    Produk kami bebas dari bahan pengawet berbahaya, aman
                    dikonsumsi untuk seluruh keluarga.
                    </p>
                </div>
                </div>
            </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Apa Kata Pelanggan Kami
                </h2>
                <p className="text-gray-600">
                    Testimoni dari pelanggan setia kami
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-blue-600"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Budi Santoso</h4>
                        <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">
                    "Nugget ayamnya sangat enak dan praktis. Anak-anak saya sangat
                    suka. Pengiriman juga cepat dan produk tetap beku saat
                    sampai."
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-blue-600"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Siti Rahayu</h4>
                        <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">
                    "Saya sudah berlangganan selama 6 bulan dan belum pernah
                    kecewa. Kualitas produknya konsisten dan rasanya enak. Sangat
                    membantu untuk stok makanan di rumah."
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-blue-600"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800">Ahmad Hidayat</h4>
                        <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">
                    "Dimsum udangnya juara! Rasanya tidak kalah dengan restoran.
                    Harga juga terjangkau untuk kualitas sebagus ini. Pasti akan
                    pesan lagi."
                    </p>
                </div>
                </div>
            </div>
            </section>

            {/* Admin Dashboard Preview */}
            <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Dashboard Admin
                </h2>
                <p className="text-gray-600">
                    Kelola produk dan pantau penjualan dengan mudah
                </p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="text-gray-500 text-sm">Total Penjualan</p>
                        <h3 className="text-2xl font-bold text-gray-800">
                            Rp 12.580.000
                        </h3>
                        <p className="text-green-500 text-sm flex items-center mt-1">
                            <i className="fas fa-arrow-up mr-1"></i> 12.5% dari
                            bulan lalu
                        </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-shopping-cart text-blue-600 text-xl"></i>
                        </div>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="text-gray-500 text-sm">Total Pesanan</p>
                        <h3 className="text-2xl font-bold text-gray-800">248</h3>
                        <p className="text-green-500 text-sm flex items-center mt-1">
                            <i className="fas fa-arrow-up mr-1"></i> 8.2% dari bulan
                            lalu
                        </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-box text-blue-600 text-xl"></i>
                        </div>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="text-gray-500 text-sm">Pelanggan Baru</p>
                        <h3 className="text-2xl font-bold text-gray-800">64</h3>
                        <p className="text-green-500 text-sm flex items-center mt-1">
                            <i className="fas fa-arrow-up mr-1"></i> 5.8% dari bulan
                            lalu
                        </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-users text-blue-600 text-xl"></i>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                            Grafik Penjualan Mingguan
                        </h3>
                    
                        <div id="sales-chart" className="w-full h-64"></div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Produk Terlaris
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden mr-3">
                            <img
                            src="https://readdy.ai/api/search-image?query=Chicken%20nuggets%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20brown%20texture%2C%20appetizing%20frozen%20food%20product&width=100&height=100&seq=16&orientation=squarish"
                            alt="Nugget Ayam"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800">
                            Nugget Ayam Premium
                            </h4>
                            <div className="flex justify-between">
                            <span className="text-xs text-gray-500">
                                124 terjual
                            </span>
                            <span className="text-xs font-medium text-blue-600">
                                Rp 45.000
                            </span>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden mr-3">
                            <img
                            src="https://readdy.ai/api/search-image?query=Beef%20meatballs%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20juicy%20and%20tender%20texture%2C%20appetizing%20frozen%20food%20product&width=100&height=100&seq=17&orientation=squarish"
                            alt="Bakso Sapi"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800">
                            Bakso Sapi Jumbo
                            </h4>
                            <div className="flex justify-between">
                            <span className="text-xs text-gray-500">
                                98 terjual
                            </span>
                            <span className="text-xs font-medium text-blue-600">
                                Rp 55.000
                            </span>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden mr-3">
                            <img
                            src="https://readdy.ai/api/search-image?query=Shrimp%20dimsum%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20delicate%20and%20translucent%20skin%2C%20appetizing%20frozen%20food%20product&width=100&height=100&seq=18&orientation=squarish"
                            alt="Dimsum Udang"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800">
                            Dimsum Udang Spesial
                            </h4>
                            <div className="flex justify-between">
                            <span className="text-xs text-gray-500">
                                87 terjual
                            </span>
                            <span className="text-xs font-medium text-blue-600">
                                Rp 38.000
                            </span>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden mr-3">
                            <img
                            src="https://readdy.ai/api/search-image?query=Tempura%20shrimp%20on%20a%20white%20plate%20with%20a%20simple%20light%20background%2C%20high%20quality%20food%20photography%2C%20crispy%20golden%20batter%2C%20appetizing%20frozen%20food%20product&width=100&height=100&seq=19&orientation=squarish"
                            alt="Udang Tempura"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800">
                            Udang Tempura
                            </h4>
                            <div className="flex justify-between">
                            <span className="text-xs text-gray-500">
                                76 terjual
                            </span>
                            <span className="text-xs font-medium text-blue-600">
                                Rp 65.000
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-12 bg-blue-600">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Berlangganan Newsletter
                </h2>
                <p className="text-blue-100 mb-6">
                    Dapatkan informasi terbaru dan penawaran spesial dari kami
                    langsung ke email Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                    type="email"
                    placeholder="Masukkan alamat email Anda"
                    className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 border-none text-sm"
                    />
                    <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-medium transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Berlangganan
                    </button>
                </div>
                </div>
            </div>
            </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                <div className="flex items-center mb-4">
                    <i className="fas fa-snowflake text-blue-400 text-2xl mr-2"></i>
                    <span className="text-xl font-bold text-white">FrozenFood</span>
                </div>
                <p className="text-gray-400 mb-4">
                    Menyediakan berbagai produk frozen food berkualitas untuk
                    kebutuhan kuliner Anda.
                </p>
                <div className="flex space-x-4">
                    <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                    <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                    <i className="fab fa-youtube"></i>
                    </a>
                </div>
                </div>

                <div>
                <h3 className="text-lg font-bold mb-4">Kategori</h3>
                <ul className="space-y-2">
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Ayam
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Seafood
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Daging
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Sayuran
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Camilan
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Siap Saji
                    </a>
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-bold mb-4">Informasi</h3>
                <ul className="space-y-2">
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Tentang Kami
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Cara Pemesanan
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Pengiriman
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Kebijakan Privasi
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        Syarat & Ketentuan
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        FAQ
                    </a>
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 text-blue-400"></i>
                    <span className="text-gray-400">
                        Jl. Frozen Food No. 123, Jakarta Selatan, Indonesia
                    </span>
                    </li>
                    <li className="flex items-center">
                    <i className="fas fa-phone-alt mr-2 text-blue-400"></i>
                    <span className="text-gray-400">+62 21 1234 5678</span>
                    </li>
                    <li className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-blue-400"></i>
                    <span className="text-gray-400">info@frozenfood.com</span>
                    </li>
                    <li className="flex items-center">
                    <i className="fas fa-clock mr-2 text-blue-400"></i>
                    <span className="text-gray-400">
                        Senin - Sabtu: 08.00 - 17.00
                    </span>
                    </li>
                </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    &copy; 2025 FrozenFood. Hak Cipta Dilindungi.
                </p>
                <div className="flex space-x-4">
                    <i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
                    <i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
                    <i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
                    <i className="fab fa-cc-apple-pay text-gray-400 text-2xl"></i>
                </div>
                </div>
            </div>
            </div>
        </footer>
        </div>
    );
};

export default App;

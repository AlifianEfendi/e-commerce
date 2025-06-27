// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { useState } from "react";
import DashboardShell from "../../components/layouts/DashboardShell";
import Select from "../../components/elements/Select";

export default function ManageProductsPage() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("semua");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    // Kategori produk
    const categories = [
        { id: "semua", label: "Semua" },
        { id: "ayam", label: "Ayam" },
        { id: "seafood", label: "Seafood" },
        { id: "daging", label: "Daging" },
        { id: "sayuran", label: "Sayuran" },
        { id: "camilan", label: "Camilan" },
        { id: "siap-saji", label: "Siap Saji" },
    ];

    // Data produk
    const products = [
        {
        id: "PRD-001",
        name: "Sosis Sapi Jumbo",
        category: "Daging",
        price: "Rp 45.000",
        stock: 120,
        status: "Tersedia",
        image: "fa-hotdog",
        },
        {
        id: "PRD-002",
        name: "Siomay Ikan Premium",
        category: "Seafood",
        price: "Rp 38.500",
        stock: 85,
        status: "Tersedia",
        image: "fa-fish",
        },
        {
        id: "PRD-003",
        name: "Pangsit Ayam Spesial",
        category: "Ayam",
        price: "Rp 32.000",
        stock: 74,
        status: "Tersedia",
        image: "fa-drumstick-bite",
        },
        {
        id: "PRD-004",
        name: "Udang Tempura",
        category: "Seafood",
        price: "Rp 52.000",
        stock: 62,
        status: "Tersedia",
        image: "fa-fish",
        },
        {
        id: "PRD-005",
        name: "Risoles Ragout Ayam",
        category: "Siap Saji",
        price: "Rp 28.000",
        stock: 0,
        status: "Habis",
        image: "fa-utensils",
        },
        {
        id: "PRD-006",
        name: "Bakso Sapi Premium",
        category: "Daging",
        price: "Rp 42.000",
        stock: 95,
        status: "Tersedia",
        image: "fa-meatball",
        },
        {
        id: "PRD-007",
        name: "Nugget Ayam Original",
        category: "Ayam",
        price: "Rp 35.000",
        stock: 110,
        status: "Tersedia",
        image: "fa-drumstick-bite",
        },
        {
        id: "PRD-008",
        name: "Cumi Crispy",
        category: "Seafood",
        price: "Rp 48.000",
        stock: 0,
        status: "Habis",
        image: "fa-fish",
        },
        {
        id: "PRD-009",
        name: "Kentang Goreng Premium",
        category: "Camilan",
        price: "Rp 30.000",
        stock: 78,
        status: "Tersedia",
        image: "fa-french-fries",
        },
        {
        id: "PRD-010",
        name: "Sayur Beku Campuran",
        category: "Sayuran",
        price: "Rp 25.000",
        stock: 65,
        status: "Tersedia",
        image: "fa-carrot",
        },
        {
        id: "PRD-011",
        name: "Dimsum Ayam",
        category: "Ayam",
        price: "Rp 36.000",
        stock: 92,
        status: "Tersedia",
        image: "fa-drumstick-bite",
        },
        {
        id: "PRD-012",
        name: "Kebab Mini Frozen",
        category: "Siap Saji",
        price: "Rp 40.000",
        stock: 0,
        status: "Habis",
        image: "fa-utensils",
        },
    ];

    // Filter produk berdasarkan kategori dan pencarian
    const filteredProducts = products.filter(product => {
        const matchesCategory =
        selectedCategory === "semua" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Fungsi untuk menangani penghapusan produk
    const handleDeleteClick = productId => {
        setProductToDelete(productId);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        // Di sini akan ada logika untuk menghapus produk
        console.log(`Menghapus produk dengan ID: ${productToDelete}`);
        setShowDeleteModal(false);
        setProductToDelete(null);
    };

    // Fungsi untuk mendapatkan warna status
    const getStatusColor = status => {
        switch (status) {
        case "Tersedia":
            return "bg-green-100 text-green-800";
        case "Habis":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <DashboardShell title="Kelola Produk" metaTitle="Kelola Produk - Dashboard" isOpen={isOpen} setIsOpen={setIsOpen}>
                <main className="p-6">
                    {/* Action Bar */}
                    <div className="flex justify-between items-center mb-6">
                        <Select name="category" value={selectedCategory} handleChange={setSelectedCategory} data={categories.map(category => category.label)} />
                    
                        <button
                        className="px-4 py-2 bg-green-500 text-sm text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer !rounded-button whitespace-nowrap"
                        onClick={() => {}}
                        >
                        <i className="fas fa-plus mr-2"></i>
                        Tambah Produk
                        </button>
                    </div>
                
                    {/* Products Table */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="overflow-x-auto no-scrollbar">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        ID Produk
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        Produk
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        Kategori
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        Harga
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        Stok
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                        Aksi
                                        </th>
                                    </tr>
                                </thead>
                            
                                <tbody className="bg-white divide-y divide-gray-200">
                                {currentItems.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {product.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-3">
                                            <i className={`fas ${product.image}`}></i>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">
                                            {product.name}
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {product.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {product.price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {product.stock}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}
                                        >
                                        {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2">
                                        <button
                                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                            title="Lihat Detail"
                                        >
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button
                                            className="text-green-500 hover:text-green-700 cursor-pointer"
                                            title="Edit"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                            title="Hapus"
                                            onClick={() => handleDeleteClick(product.id)}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                        </div>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    
                        {/* Pagination */}
                        <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-y-2 items-center justify-between md:flex-row">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-700">
                                    Menampilkan{" "}
                                
                                    <span className="font-medium">{indexOfFirstItem + 1}</span> -{" "}
                                
                                    <span className="font-medium">
                                        {Math.min(indexOfLastItem, filteredProducts.length)}
                                    </span>{" "}
                                
                                    dari{" "}
                                
                                    <span className="font-medium">{filteredProducts.length}</span>{" "}
                                
                                    produk
                                </span>
                            </div>
                        
                            <div className="flex items-center space-x-2">
                                <select
                                className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                >
                                {[5, 10, 20, 50].map((value) => (
                                    <option key={value} value={value}>
                                    {value} per halaman
                                    </option>
                                ))}
                                </select>
                            
                                <div className="flex space-x-1">
                                    <button
                                        className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap ${currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"}`}
                                        onClick={() =>
                                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                                        }
                                        disabled={currentPage === 1}
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                
                                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                        const pageNumber = i + 1;
                                        return (
                                        <button
                                            key={pageNumber}
                                            className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap ${
                                            currentPage === pageNumber
                                                ? "bg-green-500 text-white"
                                                : "bg-white text-gray-700 hover:bg-gray-50"
                                            } cursor-pointer`}
                                            onClick={() => setCurrentPage(pageNumber)}
                                        >
                                            {pageNumber}
                                        </button>
                                        );
                                    })}
                                <button
                                    className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap ${currentPage === totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"}`}
                                    onClick={() =>
                                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                    }
                                    disabled={currentPage === totalPages}
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </DashboardShell>
        
            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-96">
                        <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                            <i className="fas fa-exclamation-triangle text-2xl text-red-600"></i>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Konfirmasi Penghapusan
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Apakah Anda yakin ingin menghapus produk ini? Tindakan ini tidak
                            dapat dibatalkan.
                        </p>
                        </div>
                        <div className="flex justify-center space-x-4">
                        <button
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer !rounded-button whitespace-nowrap"
                            onClick={() => setShowDeleteModal(false)}
                        >
                            Batal
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer !rounded-button whitespace-nowrap"
                            onClick={confirmDelete}
                        >
                            Hapus
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

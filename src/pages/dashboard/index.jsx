import { useEffect, useRef, useState } from "react";
import StatsCard from "../../components/fragments/StatsCard";
import DashboardShell from "../../components/layouts/DashboardShell";
import * as echarts from "echarts";
import BoxLayout from "../../components/layouts/BoxLayout";
import { chartOption } from "../../data/utils";

const statistics = [
    { id: 1, title: "Total Pendapatan", value: "Rp 1.000.000", desc: "12% dari bulan lalu" },
    { id: 2, title: "Total Pesanan", value: 124, desc: "8% dari bulan lalu" },
    { id: 3, title: "Total Produk", value: 86, desc: "5% dari bulan lalu" },
    { id: 4, title: "Pelanggan Baru", value: 32, desc: "18% dari bulan lalu" },
]

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("semua");
    const [isOpen, setIsOpen] = useState(false);
    const chartRef = useRef(null);

    const orderStatuses = [
        { id: "semua", label: "Semua" },
        { id: "pending", label: "Pending" },
        { id: "diproses", label: "Diproses" },
        { id: "dikirim", label: "Dikirim" },
        { id: "selesai", label: "Selesai" },
        { id: "dibatalkan", label: "Dibatalkan" },
    ];

    const recentOrders = [
        {
        id: "ORD-7829",
        customer: "Budi Santoso",
        date: "24 Jun 2025",
        total: "Rp 156.000",
        status: "Pending",
        },
        {
        id: "ORD-7828",
        customer: "Dewi Lestari",
        date: "24 Jun 2025",
        total: "Rp 87.000",
        status: "Diproses",
        },
        {
        id: "ORD-7827",
        customer: "Ahmad Fauzi",
        date: "23 Jun 2025",
        total: "Rp 243.500",
        status: "Dikirim",
        },
        {
        id: "ORD-7826",
        customer: "Siti Aminah",
        date: "23 Jun 2025",
        total: "Rp 124.000",
        status: "Selesai",
        },
        {
        id: "ORD-7825",
        customer: "Rudi Hartono",
        date: "22 Jun 2025",
        total: "Rp 76.000",
        status: "Selesai",
        },
    ];

    const getStatusColor = status => {
        switch (status) {
        case "Pending":
            return "bg-yellow-100 text-yellow-800";
        case "Diproses":
            return "bg-blue-100 text-blue-800";
        case "Dikirim":
            return "bg-purple-100 text-purple-800";
        case "Selesai":
            return "bg-green-100 text-green-800";
        case "Dibatalkan":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
        }
    };

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);
            chartInstance.setOption(chartOption);
            
            const resizeObserver = new ResizeObserver(() => {
                chartInstance.resize();
            })
        
            resizeObserver.observe(chartRef.current);
        
            return () => {
                resizeObserver.disconnect();
                chartInstance.dispose();
            };
        }
    }, []);

    return (
        <DashboardShell title="Dashboard" metaTitle="Dashboard | Dapur Mpo' Rita" isOpen={isOpen} setIsOpen={setIsOpen}>
                <main className="p-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mb-6">
                        {statistics.map(stats => (
                            <StatsCard key={stats.id} data={stats} />
                        ))}
                    </div>
                
                    {/* Sales Chart */}
                    <BoxLayout title="Grafik Penjualan" addStyle="text-gray-800 mb-6" titleMargin="mb-0">
                        <div ref={chartRef} className="w-full h-56 md:h-64"></div>
                    </BoxLayout>
                
                    {/* Recent Orders */}
                    <div className="bg-white rounded-lg shadow mb-6">
                        <div className="flex flex-col md:flex-row justify-between md:items-center p-5 border-b border-gray-200 gap-x-5 gap-y-2">
                            <h3 className="text-lg font-semibold text-gray-800 text-nowrap">Pesanan Terbaru</h3>
                        
                            <div className="flex space-x-2 w-full md:w-max overflow-x-auto no-scrollbar">
                                {orderStatuses.map((status) => (
                                <button
                                    key={status.id}
                                    onClick={() => setActiveTab(status.id)}
                                    className={`px-3 py-1 text-sm rounded-lg !rounded-button whitespace-nowrap ${
                                    activeTab === status.id
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {status.label}
                                </button>
                                ))}
                            </div>
                        </div>
                    
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">ID Pesanan</th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                            
                                <tbody className="bg-white divide-y divide-gray-200">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.total}</td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex space-x-2">
                                            <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        
                                            <button className="text-green-500 hover:text-green-700 cursor-pointer">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    
                        <div className="p-4 border-t border-gray-200 flex justify-center">
                            <button className="text-green-500 hover:text-green-700 font-medium cursor-pointer !rounded-button whitespace-nowrap">
                                Lihat Semua Pesanan 
                                <i className="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                
                    {/* Product Categories & Top Products */}
                    <div className={`grid grid-cols-1 ${!isOpen && "md:grid-cols-2"} lg:grid-cols-2 gap-3 lg:gap-6`}>
                        {/* Top Products */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="flex justify-between items-center p-5 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800">Produk Terlaris</h3>
                            
                                <button className="text-green-500 hover:text-green-700 cursor-pointer !rounded-button whitespace-nowrap">Lihat Semua</button>
                            </div>
                        
                            <div className="p-5">
                                <ul className="divide-y divide-gray-200">
                                    {[
                                        {
                                        name: "Sosis Sapi Jumbo",
                                        category: "Daging",
                                        sold: 124,
                                        image: "fa-hotdog",
                                        },
                                        {
                                        name: "Siomay Ikan Premium",
                                        category: "Seafood",
                                        sold: 98,
                                        image: "fa-fish",
                                        },
                                        {
                                        name: "Pangsit Ayam Spesial",
                                        category: "Ayam",
                                        sold: 87,
                                        image: "fa-drumstick-bite",
                                        },
                                        {
                                        name: "Udang Tempura",
                                        category: "Seafood",
                                        sold: 76,
                                        image: "fa-shrimp",
                                        },
                                        {
                                        name: "Risoles Ragout Ayam",
                                        category: "Siap Saji",
                                        sold: 65,
                                        image: "fa-utensils",
                                        },
                                    ].map((product, index) => (
                                        <li key={index} className="py-3 flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-3">
                                                <i className={`fas ${product.image}`}></i>
                                            </div>
                                        
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
                                            
                                                <p className="text-xs text-gray-500">{product.category}</p>
                                            </div>
                                        
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-gray-800">{product.sold} terjual</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    
                        {/* Product Categories */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="flex justify-between items-center p-5 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800">Kategori Produk</h3>
                            
                                <button className="text-green-500 hover:text-green-700 cursor-pointer !rounded-button whitespace-nowrap">
                                    Lihat Semua
                                </button>
                            </div>
                        
                            <div className="p-5">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        {
                                        name: "Ayam",
                                        icon: "fa-drumstick-bite",
                                        count: 18,
                                        color: "bg-green-100 text-green-600",
                                        },
                                        {
                                        name: "Seafood",
                                        icon: "fa-fish",
                                        count: 24,
                                        color: "bg-blue-100 text-blue-600",
                                        },
                                        {
                                        name: "Daging",
                                        icon: "fa-bacon",
                                        count: 12,
                                        color: "bg-red-100 text-red-600",
                                        },
                                        {
                                        name: "Sayuran",
                                        icon: "fa-carrot",
                                        count: 15,
                                        color: "bg-orange-100 text-orange-600",
                                        },
                                        {
                                        name: "Camilan",
                                        icon: "fa-cookie",
                                        count: 10,
                                        color: "bg-purple-100 text-purple-600",
                                        },
                                        {
                                        name: "Siap Saji",
                                        icon: "fa-utensils",
                                        count: 7,
                                        color: "bg-yellow-100 text-yellow-600",
                                        },
                                    ].map((category) => (
                                        <div key={category.name} className="flex flex-col items-center p-3 border border-gray-200 rounded-lg text-center hover:shadow-md cursor-pointer">
                                            <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                                                <i className={`fas ${category.icon} text-xl`}></i>
                                            </div>
                                        
                                            <h4 className="text-sm font-medium text-gray-800">{category.name}</h4>
                                        
                                            <p className="text-xs text-gray-500">{category.count} produk</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        </DashboardShell>
    );
};
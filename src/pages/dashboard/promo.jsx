import { useState } from "react";
import DashboardShell from "../../components/layouts/DashboardShell";
import Pagination from "../../components/elements/Pagination";
export default function ManagePromoPage() {
    const [activeTab, setActiveTab] = useState("Semua");
    const [ isOpen, setIsOpen ] = useState(false);

    const promoData = [
        {
        id: "PROMO-001",
        nama: "Diskon Akhir Bulan",
        diskon: "15%",
        tanggalMulai: "20 Jun 2025",
        tanggalBerakhir: "30 Jun 2025",
        status: "Aktif",
        },
        {
        id: "PROMO-002",
        nama: "Flash Sale Mingguan",
        diskon: "25%",
        tanggalMulai: "25 Jun 2025",
        tanggalBerakhir: "26 Jun 2025",
        status: "Aktif",
        },
        {
        id: "PROMO-003",
        nama: "Promo Hari Raya",
        diskon: "20%",
        tanggalMulai: "10 Jul 2025",
        tanggalBerakhir: "20 Jul 2025",
        status: "Akan Datang",
        },
        {
        id: "PROMO-004",
        nama: "Diskon Produk Beku",
        diskon: "10%",
        tanggalMulai: "01 Jun 2025",
        tanggalBerakhir: "20 Jun 2025",
        status: "Kadaluarsa",
        },
        {
        id: "PROMO-005",
        nama: "Buy 1 Get 1 Free",
        diskon: "Special",
        tanggalMulai: "22 Jun 2025",
        tanggalBerakhir: "29 Jun 2025",
        status: "Aktif",
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
        case "Aktif":
            return "bg-green-100 text-green-800";
        case "Kadaluarsa":
            return "bg-gray-100 text-gray-800";
        case "Akan Datang":
            return "bg-blue-100 text-blue-800";
        default:
            return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <DashboardShell title="Kelola Promo" metaTitle="Kelola Promo - Dashboard" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <main className="flex-1 overflow-y-auto p-4 min-h-screen">
                        {/* Button Action */}
                        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-x-4 gap-y-4 mt-2 w-full">
                            <button className="bg-green-500 hover:bg-green-600 text-sm text-white py-2 px-4 rounded-lg flex items-center self-end md:self-auto !rounded-button whitespace-nowrap cursor-pointer">
                                <i className="fas fa-plus mr-2"></i>
                            
                                Tambah Promo
                            </button>
                        
                            <div className="flex gap-x-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                                <button
                                    className={`px-4 py-2 rounded-lg !rounded-button text-sm whitespace-nowrap cursor-pointer ${activeTab === "Semua" ? "bg-green-500 text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                                    onClick={() => setActiveTab("Semua")}
                                >
                                    Semua
                                </button>
                            
                                <button
                                    className={`px-4 py-2 rounded-lg !rounded-button text-sm whitespace-nowrap cursor-pointer ${activeTab === "Aktif" ? "bg-green-500 text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                                    onClick={() => setActiveTab("Aktif")}
                                >
                                    Aktif
                                </button>
                            
                                <button
                                    className={`px-4 py-2 rounded-lg !rounded-button text-sm whitespace-nowrap cursor-pointer ${activeTab === "Akan Datang" ? "bg-green-500 text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                                    onClick={() => setActiveTab("Akan Datang")}
                                >
                                    Akan Datang
                                </button>
                            
                                <button
                                    className={`px-4 py-2 rounded-lg !rounded-button text-sm whitespace-nowrap cursor-pointer ${activeTab === "Kadaluarsa" ? "bg-green-500 text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                                    onClick={() => setActiveTab("Kadaluarsa")}
                                >
                                    Kadaluarsa
                                </button>
                            </div>
                        </div>
                    
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full">
                            {/* Table */}
                            <div className="overflow-x-auto no-scrollbar w-full">
                                <table className="divide-y divide-gray-200 w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Kode Promo
                                            </th>
                                        
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Nama Promo
                                            </th>
                                        
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Diskon
                                            </th>
                                        
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tanggal Mulai
                                            </th>
                                        
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tanggal Berakhir
                                            </th>
                                        
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                        
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {promoData
                                        .filter(
                                            (promo) =>
                                            activeTab === "Semua" || promo.status === activeTab,
                                        )
                                        .map((promo) => (
                                            <tr key={promo.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {promo.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {promo.nama}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {promo.diskon}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {promo.tanggalMulai}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {promo.tanggalBerakhir}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(promo.status)}`}
                                                >
                                                {promo.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer">
                                                <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="text-red-600 hover:text-red-900 cursor-pointer">
                                                <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        
                            {/* Pagination */}
                            <Pagination />
                            {/* <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                                <div className="flex-1 flex justify-between sm:hidden">
                                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                                        Previous
                                    </button>
                                
                                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                                        Next
                                    </button>
                                </div>
                            
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Menampilkan <span className="font-medium">1</span> -{" "}
                                        
                                            <span className="font-medium">5</span> dari{" "}
                                        
                                            <span className="font-medium">12</span>
                                        </p>
                                    </div>
                                
                                    <div>
                                        <nav
                                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                            aria-label="Pagination">
                                            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                                            <span className="sr-only">Previous</span>
                                            <i className="fas fa-chevron-left"></i>
                                            </button>
                                        
                                            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                                            1
                                            </button>
                                        
                                            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-50 text-sm font-medium text-green-600 hover:bg-gray-50 cursor-pointer">
                                            2
                                            </button>
                                        
                                            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                                            3
                                            </button>
                                        
                                            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                            ...
                                            </span>
                                        
                                            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                                            8
                                            </button>
                                        
                                            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                                            <span className="sr-only">Next</span>
                                            <i className="fas fa-chevron-right"></i>
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </main>
            </DashboardShell>
        </div>
    );
};
import { useState, useEffect } from "react";
import DashboardShell from "../../components/layouts/DashboardShell";

export default function ManageOrdersPage() {
    const [ isOpen, setIsOpen ] = useState(true);
    const [activeTab, setActiveTab] = useState("true");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const orderStatuses = [
        { id: "semua", label: "Semua" },
        { id: "pending", label: "Pending" },
        { id: "diproses", label: "Diproses" },
        { id: "dikirim", label: "Dikirim" },
        { id: "selesai", label: "Selesai" },
        { id: "dibatalkan", label: "Dibatalkan" },
    ];

    const orders = [
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
        {
        id: "ORD-7824",
        customer: "Nina Wati",
        date: "22 Jun 2025",
        total: "Rp 198.500",
        status: "Dibatalkan",
        },
        {
        id: "ORD-7823",
        customer: "Eko Prasetyo",
        date: "21 Jun 2025",
        total: "Rp 145.000",
        status: "Selesai",
        },
        {
        id: "ORD-7822",
        customer: "Putri Indah",
        date: "21 Jun 2025",
        total: "Rp 67.500",
        status: "Dikirim",
        },
        {
        id: "ORD-7821",
        customer: "Joko Widodo",
        date: "20 Jun 2025",
        total: "Rp 215.000",
        status: "Diproses",
        },
        {
        id: "ORD-7820",
        customer: "Maya Sari",
        date: "20 Jun 2025",
        total: "Rp 92.000",
        status: "Pending",
        },
        {
        id: "ORD-7819",
        customer: "Agus Salim",
        date: "19 Jun 2025",
        total: "Rp 178.000",
        status: "Selesai",
        },
        {
        id: "ORD-7818",
        customer: "Lina Marlina",
        date: "19 Jun 2025",
        total: "Rp 134.500",
        status: "Dikirim",
        },
        {
        id: "ORD-7817",
        customer: "Hadi Sutrisno",
        date: "18 Jun 2025",
        total: "Rp 89.000",
        status: "Dibatalkan",
        },
        {
        id: "ORD-7816",
        customer: "Rina Wijaya",
        date: "18 Jun 2025",
        total: "Rp 167.000",
        status: "Selesai",
        },
        {
        id: "ORD-7815",
        customer: "Dedi Kurniawan",
        date: "17 Jun 2025",
        total: "Rp 112.500",
        status: "Diproses",
        },
        {
        id: "ORD-7814",
        customer: "Yanti Susanti",
        date: "17 Jun 2025",
        total: "Rp 78.000",
        status: "Pending",
        },
        {
        id: "ORD-7813",
        customer: "Bambang Sutejo",
        date: "16 Jun 2025",
        total: "Rp 225.000",
        status: "Selesai",
        },
        {
        id: "ORD-7812",
        customer: "Sri Wahyuni",
        date: "16 Jun 2025",
        total: "Rp 145.500",
        status: "Dikirim",
        },
        {
        id: "ORD-7811",
        customer: "Hendra Gunawan",
        date: "15 Jun 2025",
        total: "Rp 98.000",
        status: "Dibatalkan",
        },
        {
        id: "ORD-7810",
        customer: "Tuti Setiawati",
        date: "15 Jun 2025",
        total: "Rp 187.000",
        status: "Diproses",
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

    const handleSort = column => {
        if (sortColumn === column) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
        setSortColumn(column);
        setSortDirection("asc");
        }
    };

    const getSortIcon = column => {
        if (sortColumn !== column)
        return <i className="fas fa-sort text-gray-300 ml-1"></i>;
        return sortDirection === "asc" ? (
        <i className="fas fa-sort-up text-green-500 ml-1"></i>
        ) : (
        <i className="fas fa-sort-down text-green-500 ml-1"></i>
        );
    };

    // Filter orders based on active tab and search term
    const filteredOrders = orders.filter(order => {
        const matchesStatus =
        activeTab === "semua" || order.status.toLowerCase() === activeTab;
        const matchesSearch =
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    // Sort orders based on selected column and direction
    const sortedOrders = [...filteredOrders].sort((a, b) => {
        if (!sortColumn) return 0;

        let valueA, valueB;

        switch (sortColumn) {
        case "id":
            valueA = a.id;
            valueB = b.id;
            break;
        case "customer":
            valueA = a.customer;
            valueB = b.customer;
            break;
        case "date":
            valueA = a.date;
            valueB = b.date;
            break;
        case "total":
            valueA = parseInt(a.total.replace(/\D/g, ""));
            valueB = parseInt(b.total.replace(/\D/g, ""));
            break;
        default:
            return 0;
        }

        if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm]);

    return (
        <div className="flex h-screen bg-gray-50">
            <DashboardShell metaTitle="Kelola Pesanan - Dashboard" title="Kelola Pesanan" isOpen={isOpen} setIsOpen={setIsOpen}>
                <main className="p-6">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
                        <div className="bg-white rounded-lg shadow p-5">
                        <div className="flex justify-between">
                            <div>
                            <p className="text-gray-500 text-sm">Total Pesanan</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                {orders.length}
                            </h3>
                            <p className="text-green-500 text-sm mt-1">
                                <i className="fas fa-arrow-up mr-1"></i>
                                8% dari bulan lalu
                            </p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                            <i className="fas fa-shopping-cart text-xl"></i>
                            </div>
                        </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-5">
                        <div className="flex justify-between">
                            <div>
                            <p className="text-gray-500 text-sm">Pesanan Pending</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                {
                                orders.filter((order) => order.status === "Pending")
                                    .length
                                }
                            </h3>
                            <p className="text-yellow-500 text-sm mt-1">
                                <i className="fas fa-clock mr-1"></i>
                                Perlu diproses
                            </p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
                            <i className="fas fa-hourglass-half text-xl"></i>
                            </div>
                        </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-5">
                        <div className="flex justify-between">
                            <div>
                            <p className="text-gray-500 text-sm">Pesanan Selesai</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                {
                                orders.filter((order) => order.status === "Selesai")
                                    .length
                                }
                            </h3>
                            <p className="text-green-500 text-sm mt-1">
                                <i className="fas fa-check-circle mr-1"></i>
                                Berhasil diselesaikan
                            </p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                            <i className="fas fa-check-double text-xl"></i>
                            </div>
                        </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-5">
                        <div className="flex justify-between">
                            <div>
                            <p className="text-gray-500 text-sm">Pesanan Dibatalkan</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                {
                                orders.filter((order) => order.status === "Dibatalkan")
                                    .length
                                }
                            </h3>
                            <p className="text-red-500 text-sm mt-1">
                                <i className="fas fa-times-circle mr-1"></i>
                                Perlu ditindaklanjuti
                            </p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                            <i className="fas fa-ban text-xl"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    {/* Status Filters */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                                {orderStatuses.map((status) => (
                                <button
                                    key={status.id}
                                    onClick={() => setActiveTab(status.id)}
                                    className={`px-4 py-2 text-sm rounded-lg !rounded-button whitespace-nowrap ${
                                    activeTab === status.id
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {status.label}
                                    {status.id === "semua" && (
                                    <span className="ml-2 bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">
                                        {orders.length}
                                    </span>
                                    )}
                                    {status.id === "pending" && (
                                    <span className="ml-2 bg-yellow-200 text-yellow-700 text-xs rounded-full px-2 py-0.5">
                                        {
                                        orders.filter((order) => order.status === "Pending")
                                            .length
                                        }
                                    </span>
                                    )}
                                    {status.id === "diproses" && (
                                    <span className="ml-2 bg-blue-200 text-blue-700 text-xs rounded-full px-2 py-0.5">
                                        {
                                        orders.filter((order) => order.status === "Diproses")
                                            .length
                                        }
                                    </span>
                                    )}
                                    {status.id === "dikirim" && (
                                    <span className="ml-2 bg-purple-200 text-purple-700 text-xs rounded-full px-2 py-0.5">
                                        {
                                        orders.filter((order) => order.status === "Dikirim")
                                            .length
                                        }
                                    </span>
                                    )}
                                    {status.id === "selesai" && (
                                    <span className="ml-2 bg-green-200 text-green-700 text-xs rounded-full px-2 py-0.5">
                                        {
                                        orders.filter((order) => order.status === "Selesai")
                                            .length
                                        }
                                    </span>
                                    )}
                                    {status.id === "dibatalkan" && (
                                    <span className="ml-2 bg-red-200 text-red-700 text-xs rounded-full px-2 py-0.5">
                                        {
                                        orders.filter(
                                            (order) => order.status === "Dibatalkan",
                                        ).length
                                        }
                                    </span>
                                    )}
                                </button>
                                ))}
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                        className="px-6 py-3 text-left whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                        onClick={() => handleSort("id")}
                                        >
                                        <div className="flex items-center">
                                            ID Pesanan
                                            {getSortIcon("id")}
                                        </div>
                                        </th>
                                    
                                        <th
                                        className="px-6 py-3 text-left whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                        onClick={() => handleSort("customer")}
                                        >
                                        <div className="flex items-center">
                                            Pelanggan
                                            {getSortIcon("customer")}
                                        </div>
                                        </th>
                                    
                                        <th
                                        className="px-6 py-3 text-left whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                        onClick={() => handleSort("date")}
                                        >
                                        <div className="flex items-center">
                                            Tanggal
                                            {getSortIcon("date")}
                                        </div>
                                        </th>
                                    
                                        <th
                                        className="px-6 py-3 text-left whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                        onClick={() => handleSort("total")}
                                        >
                                        <div className="flex items-center">
                                            Total
                                            {getSortIcon("total")}
                                        </div>
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                        </th>
                                    
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Aksi
                                        </th>
                                    </tr>
                                </thead>
                            
                                <tbody className="bg-white divide-y divide-gray-200">
                                {currentItems.length > 0 ? (
                                    currentItems.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {order.id}
                                        </td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {order.customer}
                                        </td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {order.date}
                                        </td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {order.total}
                                        </td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}
                                        >
                                            {order.status}
                                        </span>
                                        </td>
                                    
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-3">
                                            <button
                                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                            title="Lihat Detail"
                                            >
                                            <i className="fas fa-eye"></i>
                                            </button>
                                            <button
                                            className="text-green-500 hover:text-green-700 cursor-pointer"
                                            title="Edit Pesanan"
                                            >
                                            <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                            title="Hapus Pesanan"
                                            >
                                            <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                        </td>
                                    </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="px-6 py-10 text-center text-gray-500"
                                        >
                                            <i className="fas fa-search text-gray-300 text-4xl mb-3"></i>
                                            <p>Tidak ada pesanan yang ditemukan</p>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    
                        {/* Pagination */}
                        {sortedOrders.length > 0 && (
                            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
                                <div className="flex space-x-1">
                                    <button
                                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap ${
                                        currentPage === 1
                                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                        }`}
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        // Show pages around current page
                                        let pageNum;
                                        if (totalPages <= 5) {
                                        pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                        } else {
                                        pageNum = currentPage - 2 + i;
                                        }

                                        return (
                                        <button
                                            key={pageNum}
                                            onClick={() => paginate(pageNum)}
                                            className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap ${
                                            currentPage === pageNum
                                                ? "bg-green-500 text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                            }`}
                                        >
                                            {pageNum}
                                        </button>
                                        );
                                    })}
                                    <button
                                        onClick={() =>
                                        paginate(Math.min(totalPages, currentPage + 1))
                                        }
                                        disabled={currentPage === totalPages}
                                        className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap ${
                                        currentPage === totalPages
                                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                        }`}
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </DashboardShell>
        </div>
    );
};
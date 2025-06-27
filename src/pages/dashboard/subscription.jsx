// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { useState } from "react";
import DashboardShell from "../../components/layouts/DashboardShell";

export default function ManageSubscriptionPage() {
    // Subscription data
    const subscriptionData = [
        {
        id: "SUB-001",
        customer: "Budi Santoso",
        package: "Premium Bulanan",
        status: "Aktif",
        startDate: "01 Jun 2025",
        endDate: "01 Jul 2025",
        totalPayment: "Rp 299.000",
        paymentHistory: [
            {
            id: "PAY-001",
            date: "01 Jun 2025",
            amount: "Rp 299.000",
            method: "Kartu Kredit",
            status: "Berhasil",
            },
        ],
        },
        {
        id: "SUB-002",
        customer: "Siti Rahayu",
        package: "Standar Tahunan",
        status: "Aktif",
        startDate: "15 Mei 2025",
        endDate: "15 Mei 2026",
        totalPayment: "Rp 2.400.000",
        paymentHistory: [
            {
            id: "PAY-002",
            date: "15 Mei 2025",
            amount: "Rp 2.400.000",
            method: "Transfer Bank",
            status: "Berhasil",
            },
        ],
        },
        {
        id: "SUB-003",
        customer: "Agus Wijaya",
        package: "Premium Tahunan",
        status: "Tidak Aktif",
        startDate: "10 Apr 2025",
        endDate: "10 Apr 2026",
        totalPayment: "Rp 3.200.000",
        paymentHistory: [
            {
            id: "PAY-003",
            date: "10 Apr 2025",
            amount: "Rp 3.200.000",
            method: "Kartu Kredit",
            status: "Gagal",
            },
        ],
        },
        {
        id: "SUB-004",
        customer: "Dewi Lestari",
        package: "Premium Bulanan",
        status: "Aktif",
        startDate: "05 Jun 2025",
        endDate: "05 Jul 2025",
        totalPayment: "Rp 299.000",
        paymentHistory: [
            {
            id: "PAY-004",
            date: "05 Jun 2025",
            amount: "Rp 299.000",
            method: "E-Wallet",
            status: "Berhasil",
            },
            {
            id: "PAY-005",
            date: "05 Mei 2025",
            amount: "Rp 299.000",
            method: "E-Wallet",
            status: "Berhasil",
            },
        ],
        },
        {
        id: "SUB-005",
        customer: "Joko Susilo",
        package: "Standar Bulanan",
        status: "Aktif",
        startDate: "20 Jun 2025",
        endDate: "20 Jul 2025",
        totalPayment: "Rp 199.000",
        paymentHistory: [
            {
            id: "PAY-006",
            date: "20 Jun 2025",
            amount: "Rp 199.000",
            method: "Transfer Bank",
            status: "Berhasil",
            },
        ],
        },
    ];

    // Statistics data
    const statisticsData = {
        totalCustomers: 5,
        monthlyRevenue: "Rp 6.496.000",
        renewalRate: "80%",
        popularPackage: "Premium Bulanan",
    };

    // States
    const [ isOpen, setIsOpen ] = useState(false);
    const [statusFilter, setStatusFilter] = useState("Semua Status");
    const [packageFilter, setPackageFilter] = useState("Semua Paket");
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newCustomer, setNewCustomer] = useState({
        name: "",
        package: "Premium Bulanan",
        status: "Aktif",
        startDate: "",
        endDate: "",
        paymentMethod: "Kartu Kredit",
    });

    // Get status class for badges
    const getStatusClass = status => {
        switch (status) {
        case "Aktif":
            return "bg-green-100 text-green-800";
        case "Tidak Aktif":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
        }
    };

    // Filter subscriptions based on selected filters
    const filteredSubscriptions = subscriptionData.filter(subscription => {
        // Status filter
        if (
        statusFilter !== "Semua Status" &&
        statusFilter !== subscription.status
        ) {
        return false;
        }
        // Package filter
        if (
        packageFilter !== "Semua Paket" &&
        packageFilter !== subscription.package
        ) {
        return false;
        }
        return true;
    });

    // Reset all filters
    const resetFilters = () => {
        setStatusFilter("Semua Status");
        setPackageFilter("Semua Paket");
    };

    // Handle form input change
    const handleInputChange = e => {
        const { name, value } = e.target;
        setNewCustomer((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Handle add new customer
    const handleAddCustomer = e => {
        e.preventDefault();
        // In a real app, this would send the data to an API
        console.log("Adding new customer:", newCustomer);
        // Reset form and close modal
        setNewCustomer({
        name: "",
        package: "Premium Bulanan",
        status: "Aktif",
        startDate: "",
        endDate: "",
        paymentMethod: "Kartu Kredit",
        });
        setShowAddModal(false);
    };

    return (
        <DashboardShell title="Kelola Langganan" metaTitle="Kelola Langganan - Dashboard" isOpen={isOpen} setIsOpen={setIsOpen}>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
                                <i className="fas fa-users text-xl"></i>
                            </div>
                        
                            <div>
                                <p className="text-sm text-gray-500">Total Pelanggan</p>
                                <p className="text-xl font-semibold">
                                    {statisticsData.totalCustomers}
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
                                <i className="fas fa-money-bill-wave text-xl"></i>
                            </div>
                        
                            <div>
                                <p className="text-sm text-gray-500">Pendapatan Bulanan</p>
                                <p className="text-xl font-semibold">
                                    {statisticsData.monthlyRevenue}
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
                                <i className="fas fa-sync-alt text-xl"></i>
                            </div>
                        
                            <div>
                                <p className="text-sm text-gray-500">Tingkat Perpanjangan</p>
                                <p className="text-xl font-semibold">
                                    {statisticsData.renewalRate}
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 mr-4">
                                <i className="fas fa-crown text-xl"></i>
                            </div>
                        
                            <div>
                                <p className="text-sm text-gray-500">Paket Terpopuler</p>
                                <p className="text-xl font-semibold">
                                    {statisticsData.popularPackage}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex space-x-4">
                            <div className="relative">
                                <div className="flex items-center">
                                    <span className="mr-2 text-sm text-gray-600">Status:</span>
                                
                                    <div className="relative">
                                    <select
                                        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                    >
                                        <option>Semua Status</option>
                                        <option>Aktif</option>
                                        <option>Tidak Aktif</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <i className="fas fa-chevron-down text-xs"></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="relative">
                                <div className="flex items-center">
                                    <span className="mr-2 text-sm text-gray-600">Paket:</span>
                                
                                    <div className="relative">
                                        <select
                                            className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                            value={packageFilter}
                                            onChange={(e) => setPackageFilter(e.target.value)}
                                        >
                                            <option>Semua Paket</option>
                                            <option>Premium Bulanan</option>
                                            <option>Premium Tahunan</option>
                                            <option>Standar Bulanan</option>
                                            <option>Standar Tahunan</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="flex space-x-2 mt-3 sm:mt-0">
                            <button
                            onClick={resetFilters}
                            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                            <i className="fas fa-redo-alt mr-2"></i>
                            Reset Filter
                            </button>
                            <button
                            onClick={() => setShowAddModal(true)}
                            className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                            <i className="fas fa-plus mr-2"></i>
                            Tambah Pelanggan Baru
                            </button>
                        </div>
                    </div>
                </div>

                {/* Subscription Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Pelanggan
                                </th>
                            
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Paket Langganan
                                </th>
                            
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                            
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Tanggal Mulai
                                </th>
                            
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Tanggal Berakhir
                                </th>
                            
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Total Pembayaran
                                </th>
                            
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                    
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredSubscriptions.map((subscription) => (
                            <tr
                                key={subscription.id}
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => setSelectedCustomer(subscription.id)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {subscription.customer}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {subscription.package}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(subscription.status)}`}
                                >
                                    {subscription.status}
                                </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {subscription.startDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {subscription.endDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {subscription.totalPayment}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer"
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCustomer(subscription.id);
                                    }}
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button
                                    className="text-green-600 hover:text-green-900 mr-3 cursor-pointer"
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    console.log(`Edit subscription ${subscription.id}`);
                                    }}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                    className="text-red-600 hover:text-red-900 cursor-pointer"
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    console.log(`Delete subscription ${subscription.id}`);
                                    }}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                                </td>
                            </tr>
                            ))}
                            {filteredSubscriptions.length === 0 && (
                            <tr>
                                <td
                                colSpan={7}
                                className="px-6 py-4 text-center text-sm text-gray-500"
                                >
                                Tidak ada pelanggan berlangganan yang sesuai dengan filter
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                
                    {/* Pagination */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
                                    Menampilkan <span className="font-medium">1</span> sampai{" "}
                                    <span className="font-medium">
                                    {filteredSubscriptions.length}
                                    </span>{" "}
                                    dari{" "}
                                    <span className="font-medium">
                                    {subscriptionData.length}
                                    </span>{" "}
                                    pelanggan
                                </p>
                            </div>
                        
                            <div>
                                <nav
                                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                    aria-label="Pagination"
                                >
                                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                                    <span className="sr-only">Previous</span>
                                    <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-50 text-sm font-medium text-green-600 hover:bg-gray-50 cursor-pointer">
                                    1
                                    </button>
                                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                                    2
                                    </button>
                                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                                    <span className="sr-only">Next</span>
                                    <i className="fas fa-chevron-right"></i>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
            {/* Customer Detail Modal */}
            {selectedCustomer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Detail Pelanggan Berlangganan
                                </h2>
                            
                                <button
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                onClick={() => setSelectedCustomer(null)}
                                >
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>
                        
                            {/* Customer Details */}
                            {(() => {
                                const customer = subscriptionData.find(
                                (c) => c.id === selectedCustomer,
                                );
                                if (!customer) return null;
                                return (
                                <>
                                    <div className="flex mb-6">
                                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                        src={`https://readdy.ai/api/search-image?query=Professional%2520business%2520person%2520portrait%2520with%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520headshot%252C%2520clean%2520simple%2520background%252C%2520well-lit%2520face%252C%2520modern%2520corporate%2520style&width=200&height=200&seq=2&orientation=squarish`}
                                        alt={customer.customer}
                                        className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <h3 className="font-semibold text-lg">
                                        {customer.customer}
                                        </h3>
                                        <div className="mt-1 text-sm text-gray-500">
                                        ID:{" "}
                                        <span className="font-medium text-gray-700">
                                            {customer.id}
                                        </span>
                                        </div>
                                        <div className="mt-1">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(customer.status)}`}
                                        >
                                            {customer.status}
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                
                                    {/* Subscription Details */}
                                    <div className="mb-6">
                                    <h4 className="font-medium text-gray-700 mb-3">
                                        Informasi Langganan:
                                    </h4>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Paket</p>
                                            <p className="font-medium">{customer.package}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Status</p>
                                            <p className="font-medium">{customer.status}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                            Tanggal Mulai
                                            </p>
                                            <p className="font-medium">{customer.startDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                            Tanggal Berakhir
                                            </p>
                                            <p className="font-medium">{customer.endDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                            Total Pembayaran
                                            </p>
                                            <p className="font-medium">
                                            {customer.totalPayment}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                    {/* Payment History */}
                                    <div className="mb-6">
                                    <h4 className="font-medium text-gray-700 mb-3">
                                        Riwayat Pembayaran:
                                    </h4>
                                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                                        <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Tanggal
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Jumlah
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Metode
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Status
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {customer.paymentHistory.map((payment) => (
                                            <tr key={payment.id}>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                                {payment.id}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                {payment.date}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                {payment.amount}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                {payment.method}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.status === "Berhasil" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                                                >
                                                    {payment.status}
                                                </span>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                
                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-2">
                                    <button
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                        onClick={() => setSelectedCustomer(null)}
                                    >
                                        Tutup
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                        onClick={() => {
                                        console.log(`Edit subscription ${customer.id}`);
                                        setSelectedCustomer(null);
                                        }}
                                    >
                                        Edit Langganan
                                    </button>
                                    {customer.status === "Aktif" ? (
                                        <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                        onClick={() => {
                                            console.log(
                                            `Deactivate subscription ${customer.id}`,
                                            );
                                            setSelectedCustomer(null);
                                        }}
                                        >
                                        Nonaktifkan
                                        </button>
                                    ) : (
                                        <button
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                        onClick={() => {
                                            console.log(`Activate subscription ${customer.id}`);
                                            setSelectedCustomer(null);
                                        }}
                                        >
                                        Aktifkan
                                        </button>
                                    )}
                                    </div>
                                </>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            )}
        
            {/* Add New Customer Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Tambah Pelanggan Baru
                                </h2>
                            
                                <button
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                onClick={() => setShowAddModal(false)}
                                >
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>
                        
                            <form onSubmit={handleAddCustomer}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nama Pelanggan
                                        </label>
                                        <input
                                        type="text"
                                        name="name"
                                        value={newCustomer.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                        placeholder="Masukkan nama pelanggan"
                                        required
                                        />
                                    </div>
                                
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Paket Langganan
                                        </label>
                                        <div className="relative">
                                        <select
                                            name="package"
                                            value={newCustomer.package}
                                            onChange={handleInputChange}
                                            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                            required
                                        >
                                            <option value="Premium Bulanan">Premium Bulanan</option>
                                            <option value="Premium Tahunan">Premium Tahunan</option>
                                            <option value="Standar Bulanan">Standar Bulanan</option>
                                            <option value="Standar Tahunan">Standar Tahunan</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                        </div>
                                    </div>
                                
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Status
                                        </label>
                                        <div className="relative">
                                        <select
                                            name="status"
                                            value={newCustomer.status}
                                            onChange={handleInputChange}
                                            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                            required
                                        >
                                            <option value="Aktif">Aktif</option>
                                            <option value="Tidak Aktif">Tidak Aktif</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                        </div>
                                    </div>
                                
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Metode Pembayaran
                                        </label>
                                        <div className="relative">
                                        <select
                                            name="paymentMethod"
                                            value={newCustomer.paymentMethod}
                                            onChange={handleInputChange}
                                            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                            required
                                        >
                                            <option value="Kartu Kredit">Kartu Kredit</option>
                                            <option value="Transfer Bank">Transfer Bank</option>
                                            <option value="E-Wallet">E-Wallet</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                        </div>
                                    </div>
                                
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Tanggal Mulai
                                        </label>
                                        <input
                                        type="date"
                                        name="startDate"
                                        value={newCustomer.startDate}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                        required
                                        />
                                    </div>
                                
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Tanggal Berakhir
                                        </label>
                                        <input
                                        type="date"
                                        name="endDate"
                                        value={newCustomer.endDate}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                        required
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-2 mt-6">
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                    onClick={() => setShowAddModal(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    Simpan
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </DashboardShell>
    );
};
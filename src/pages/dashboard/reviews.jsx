import { useState } from "react";
import DashboardShell from "../../components/layouts/DashboardShell";
import Select from "../../components/elements/Select";
import Pagination from "../../components/elements/Pagination";
export default function ManageReviewsPage() {
    // Review data
    const reviewData = [
        {
        id: "REV-001",
        customer: "Budi Santoso",
        product: "Nugget Ayam Premium",
        rating: 5,
        review:
            "Nugget ayamnya sangat enak dan gurih. Anak-anak sangat suka. Akan beli lagi.",
        date: "24 Jun 2025",
        status: "Ditampilkan",
        replies: [
            {
            admin: "Admin",
            date: "24 Jun 2025",
            content:
                "Terima kasih atas ulasannya, Budi! Kami senang Anda menyukai produk kami.",
            },
        ],
        },
        {
        id: "REV-002",
        customer: "Siti Rahayu",
        product: "Bakso Sapi Jumbo",
        rating: 4,
        review:
            "Baksonya enak, tapi ukurannya kurang besar dari yang saya harapkan. Rasanya tetap mantap.",
        date: "23 Jun 2025",
        status: "Ditampilkan",
        replies: [],
        },
        {
        id: "REV-003",
        customer: "Agus Wijaya",
        product: "Dimsum Udang",
        rating: 2,
        review:
            "Rasanya kurang enak dan teksturnya tidak seperti yang diharapkan. Kecewa dengan produk ini.",
        date: "22 Jun 2025",
        status: "Disembunyikan",
        replies: [
            {
            admin: "Admin",
            date: "22 Jun 2025",
            content:
                "Mohon maaf atas pengalaman yang kurang menyenangkan. Boleh kami tahu lebih detail apa yang kurang sesuai?",
            },
        ],
        },
        {
        id: "REV-004",
        customer: "Dewi Lestari",
        product: "Siomay Ikan",
        rating: 5,
        review:
            "Siomay ikannya lezat sekali! Rasanya autentik dan segar. Sangat memuaskan.",
        date: "21 Jun 2025",
        status: "Ditampilkan",
        replies: [],
        },
        {
        id: "REV-005",
        customer: "Joko Susilo",
        product: "Sosis Sapi Bakar",
        rating: 3,
        review:
            "Rasanya standar, tidak ada yang istimewa. Tapi cukup mengenyangkan untuk camilan.",
        date: "20 Jun 2025",
        status: "Ditampilkan",
        replies: [],
        },
    ];

    // States
    const [ isOpen, setIsOpen ] = useState(false);
    const [ratingFilter, setRatingFilter] = useState("Semua Rating");
    const [statusFilter, setStatusFilter] = useState("Semua Status");
    const [selectedReview, setSelectedReview] = useState(null);
    const [replyText, setReplyText] = useState("");

    // Get status class for badges
    const getStatusClass = (status) => {
        switch (status) {
        case "Ditampilkan":
            return "bg-green-100 text-green-800";
        case "Disembunyikan":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
        }
    };

    // Get star rating display
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
        stars.push(
            <i
            key={i}
            className={`fas fa-star ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
            ></i>,
        );
        }
        return stars;
    };

    // Filter reviews based on selected filters
    const filteredReviews = reviewData.filter((review) => {
        // Rating filter
        if (
        ratingFilter !== "Semua Rating" &&
        parseInt(ratingFilter.charAt(0)) !== review.rating
        ) {
        return false;
        }
        // Status filter
        if (statusFilter !== "Semua Status" && statusFilter !== review.status) {
        return false;
        }
        return true;
    });

    // Handle reply submission
    const handleReplySubmit = (reviewId) => {
        if (replyText.trim() === "") return;
        // In a real app, this would send the reply to an API
        console.log(`Replying to review ${reviewId}: ${replyText}`);
        setReplyText("");
        // Close detail view after reply
        setSelectedReview(null);
    };

    // Reset all filters
    const resetFilters = () => {
        setRatingFilter("Semua Rating");
        setStatusFilter("Semua Status");
    };

    // Toggle review visibility
    const toggleReviewStatus = (reviewId) => {
        // In a real app, this would update the status via an API
        console.log(`Toggling status for review ${reviewId}`);
    };
    return (
        <DashboardShell title="Kelola Ulasan" metaTitle="Kelola Ulasan - Dashboard" isOpen={isOpen} setIsOpen={setIsOpen}>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4">
                {/* Filter Section */}
                <div className="mb-6 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4">
                        <div className="flex gap-x-4 gap-y-3">
                            {/* <div className="relative">
                                <select
                                    className="peer appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                    value={ratingFilter}
                                    onChange={(e) => setRatingFilter(e.target.value)}
                                >
                                    <option>Semua Rating</option>
                                    <option>5 Bintang</option>
                                    <option>4 Bintang</option>
                                    <option>3 Bintang</option>
                                    <option>2 Bintang</option>
                                    <option>1 Bintang</option>
                                </select>
                            
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 peer-focus:text-green-500">
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div> */}
                            <Select name="rating" value={ratingFilter} handleChange={setRatingFilter} data={["Semua Rating", "5 Bintang", "4 Bintang", "3 Bintang", "2 Bintang", "1 Bintang"]} />
                        
                            {/* <div className="relative">
                                <select
                                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option>Semua Status</option>
                                    <option>Ditampilkan</option>
                                    <option>Disembunyikan</option>
                                </select>
                            
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div> */}
                            <Select name="status" value={statusFilter} handleChange={setStatusFilter} data={["Semua Status", "Ditampilkan", "Disembunyikan"]} />
                        </div>
                    
                        <button
                            onClick={resetFilters}
                            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                            <i className="fas fa-redo-alt mr-2"></i>
                        
                            Reset Filter
                        </button>
                    </div>
                </div>
            
                {/* Review Table */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="w-full overflow-x-auto no-scrollbar">
                        <table className="divide-y divide-gray-200 w-full">
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
                                        Produk
                                    </th>
                                
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Rating
                                    </th>
                                
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Ulasan
                                    </th>
                                
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tanggal
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
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                        
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredReviews.map((review) => (
                                <tr
                                    key={review.id}
                                    className="hover:bg-gray-50 cursor-pointer"
                                    onClick={() => setSelectedReview(review.id)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {review.customer}
                                    </td>
                                
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {review.product}
                                    </td>
                                
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex space-x-1">
                                        {renderStars(review.rating)}
                                    </div>
                                    </td>
                                
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                    {review.review}
                                    </td>
                                
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {review.date}
                                    </td>
                                
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(review.status)}`}
                                    >
                                        {review.status}
                                    </span>
                                    </td>
                                
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer"
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedReview(review.id);
                                        }}
                                    >
                                        <i className="fas fa-reply"></i>
                                    </button>
                                    <button
                                        className={`${review.status === "Ditampilkan" ? "text-red-600 hover:text-red-900" : "text-green-600 hover:text-green-900"} mr-3 cursor-pointer`}
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        toggleReviewStatus(review.id);
                                        }}
                                    >
                                        <i
                                        className={`fas ${review.status === "Ditampilkan" ? "fa-eye-slash" : "fa-eye"}`}
                                        ></i>
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-900 cursor-pointer"
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        console.log(`Delete review ${review.id}`);
                                        }}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                    </td>
                                </tr>
                                ))}
                                {filteredReviews.length === 0 && (
                                <tr>
                                    <td
                                    colSpan={7}
                                    className="px-6 py-4 text-center text-sm text-gray-500"
                                    >
                                    Tidak ada ulasan yang sesuai dengan filter
                                    </td>
                                </tr>
                                )}
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
                                    Menampilkan <span className="font-medium">1</span> sampai{" "}
                                    <span className="font-medium">
                                    {filteredReviews.length}
                                    </span>{" "}
                                    dari{" "}
                                    <span className="font-medium">{reviewData.length}</span>{" "}
                                    ulasan
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
                    </div> */}
                </div>
            </main>
        
            {/* Review Detail Modal */}
            {selectedReview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto">
                    <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                        Detail Ulasan
                        </h2>
                        <button
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        onClick={() => setSelectedReview(null)}
                        >
                        <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    {/* Review Details */}
                    {(() => {
                        const review = reviewData.find((r) => r.id === selectedReview);
                        if (!review) return null;
                        return (
                        <>
                            <div className="flex mb-6">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                src={`https://readdy.ai/api/search-image?query=Delicious%20frozen%20food%20product%20$%7Breview.product%7D%20on%20a%20plate%20with%20garnish%2C%20professional%20food%20photography%2C%20clean%20background%2C%20appetizing&width=200&height=200&seq=1&orientation=squarish`}
                                alt={review.product}
                                className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold text-lg">
                                {review.product}
                                </h3>
                                <div className="flex items-center mt-1">
                                <div className="flex space-x-1 mr-2">
                                    {renderStars(review.rating)}
                                </div>
                                <span className="text-sm text-gray-500">
                                    {review.rating}/5
                                </span>
                                </div>
                                <div className="mt-1 text-sm text-gray-500">
                                Oleh:{" "}
                                <span className="font-medium text-gray-700">
                                    {review.customer}
                                </span>{" "}
                                • {review.date}
                                </div>
                                <div className="mt-1">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(review.status)}`}
                                >
                                    {review.status}
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="mb-6">
                            <h4 className="font-medium text-gray-700 mb-2">
                                Isi Ulasan:
                            </h4>
                            <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                                {review.review}
                            </p>
                            </div>
                            {/* Previous Replies */}
                            {review.replies.length > 0 && (
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-700 mb-2">
                                Balasan Admin:
                                </h4>
                                {review.replies.map((reply, index) => (
                                <div
                                    key={index}
                                    className="bg-green-50 p-3 rounded-lg mb-2"
                                >
                                    <div className="flex items-center mb-1">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        A
                                    </div>
                                    <span className="ml-2 font-medium text-sm">
                                        {reply.admin}
                                    </span>
                                    <span className="ml-2 text-xs text-gray-500">
                                        {reply.date}
                                    </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                    {reply.content}
                                    </p>
                                </div>
                                ))}
                            </div>
                            )}
                            {/* Reply Form */}
                            <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                                Tambahkan Balasan:
                            </h4>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                rows={4}
                                placeholder="Tulis balasan Anda di sini..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                            ></textarea>
                            <div className="flex justify-end mt-3 space-x-2">
                                <button
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                onClick={() => setSelectedReview(null)}
                                >
                                Batal
                                </button>
                                <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm !rounded-button whitespace-nowrap cursor-pointer"
                                onClick={() => handleReplySubmit(review.id)}
                                >
                                Kirim Balasan
                                </button>
                            </div>
                            </div>
                        </>
                        );
                    })()}
                    </div>
                </div>
                </div>
            )}
        </DashboardShell>
    );
};
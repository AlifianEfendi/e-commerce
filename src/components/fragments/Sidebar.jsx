import { useState } from 'react'
import { Link } from 'react-router-dom';

const navLinks = [
    { id: "dashboard", icon: "fa-chart-line", label: "Dashboard", link: "/" },
    {id: "pesanan", icon: "fa-shopping-cart", label: "Pesanan", link: "/orders",},
    { id: "produk", icon: "fa-box ml-0.5", label: "Produk", link: "/products" },
    { id: "promo", icon: "fa-tag ml-0.5", label: "Promo", link: "/promo" },
    { id: "review", icon: "fa-star", label: "Review", link: "/reviews" },
    { id: "admin", icon: "fa-address-book", label: "Admin", link: "/admin" },
    { id: "profil", icon: "fa-user ml-0.5", label: "Profil", link: "/profile" },
]

export default function Sidebar({ isOpen, setIsOpen }) {
    const [ activeMenu, setActiveMenu ] = useState("dashboard");

    return (
        <div className={`fixed md:static ${isOpen ? "w-60" : "w-0 md:w-12"} z-50 inset-y-0 bg-white shadow-md duration-300 overflow-x-hidden`}>
            <div className="p-4 border-b border-gray-200">
                <div className={`flex justify-between items-center ${isOpen ? "py-0" : "py-2.5"}`}>
                    <div className={`${!isOpen && "hidden" } flex items-center duration-300`}>
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        FF
                        </div>
                    
                        <div className="ml-3">
                            <h1 className="text-lg font-bold text-gray-800">John Doe</h1>
                        
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                    </div>
                    
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <i className={`fas fa-indent ${isOpen && "rotate-180"} duration-500`}></i>
                    </button>
                </div>
            </div>
        
            <nav className="mt-4">
                <ul>
                    {navLinks.map((item) => (
                    <li key={item.id} className="mb-1">
                        <Link to={`/dashboard${item.link}`}
                        onClick={() => setActiveMenu(item.id)}
                        className={`flex items-center w-full px-4 py-3 text-left ${
                            activeMenu === item.id
                            ? "bg-green-50 text-green-600 border-l-2 border-green-500"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                        >
                            <div className="w-6 flex justify-center">
                                <i className={`fas ${item.icon} w-5`}></i>
                            </div>
                        
                            <span className={`${!open && "translate-x-10"} ml-3 `}>{item.label}</span>
                        
                            {isOpen && item.id === "pesanan" && (
                                <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                            )}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        
            <div className={`absolute bottom-0 ${isOpen ? "w-60" : "w-12"} p-4 border-t border-gray-200 overflow-x-hidden`}>
                <button className="flex items-center text-red-500 hover:text-red-700">
                    <i className="fas fa-sign-out-alt"></i>
                
                    <span className={`ml-3 ${!isOpen && "translate-x-10"} duration-300`}>Logout</span>
                </button>
            </div>
        </div>
    )
}
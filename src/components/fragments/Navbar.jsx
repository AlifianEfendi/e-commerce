import { useState } from "react";
import NavLink from "../elements/NavLink";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function Navbar({ cartCount }) {
    const { id } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const handleBack = () => {
        navigate('/products');
    }

    return (
        <header className="container mx-auto bg-light-primary shadow-sm sticky top-0 z-50">
            <div className="mx-auto py-2.5 px-5">
                <div className="flex items-center justify-between gap-x-4">
                    {pathname === `/product/${id}` && (
                        <button onClick={handleBack} className="flex items-center gap-x-2 py-3 text-gray-600 transition hover:text-green-500">
                            <i className="fas fa-arrow-left text-2xl"></i>
                        </button>
                    )}
                
                    {pathname !== `/product/${id}` && (
                        <Link to="/" className={`${pathname === '/products' ? 'hidden md:flex' : 'flex'}  items-center`}>
                            <img className='w-full max-w-17' src="/brand-logo.png" alt="Dapur Mpo' Rita" />
                        </Link>
                    )}
                
                    <div className={`flex justify-end ${pathname === '/products' ? 'w-full' : ''}`}>
                        <div className="flex md:justify-between items-center space-x-6 w-full">
                            <nav className="hidden md:flex items-center space-x-6">
                                <NavLink title="Beranda" href="/" />
                            
                                <NavLink title="Produk" href="/products" />
                            
                                <NavLink title="Tentang Kami" href="/about" />
                            
                                <NavLink title="Kontak" href="/contact" />
                            </nav>
                        
                            <div className="flex items-center h-max gap-x-4 mt-0.5 w-full md:w-max">
                                {pathname === '/products' && (
                                    <div className="relative w-full">
                                        <input
                                        type="search"
                                        placeholder="Cari produk..."
                                        className="border border-gray-300 rounded-full py-1.5 px-4 pl-10 w-full md:max-w-74 focus:outline-none focus:border-green-500"
                                        />
                                    
                                        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                                    </div>
                                )}
                            
                                {/* <button className="relative text-gray-700 translate-x-0.5 mb-[3px]">
                                    <i className="fas fa-heart text-2xl"></i>
                                </button> */}
                            
                                <button className="relative text-gray-700">
                                    <i className="fas fa-shopping-cart text-2xl"></i>
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            
                                <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
                                    <i className={`fas ${showMobileMenu ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Mobile Menu */}
                {showMobileMenu && (
                    <nav className="mt-2 md:hidden">
                        <div className="flex flex-col space-y-3 py-6 border-t border-gray-300">
                            <NavLink title="Beranda" href="/" />
                            <NavLink title="Produk" href="/products" />
                            <NavLink title="Tentang Kami" href="/about" />
                            <NavLink title="Kontak" href="/contact" />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
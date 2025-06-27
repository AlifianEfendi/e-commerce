import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../components/elements/NavLink';

export default function NotFound() {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
        setIsAnimating(false);
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full flex flex-col items-center">
                {/* 404 Animation Container */}
                <div className="relative w-full max-w-lg mb-12">
                {/* Digital Device Animation */}
                <div className={`relative ${isAnimating ? 'animate-pulse' : ''} transition-all duration-500 ease-in-out`}>
                    <div className="w-72 h-64 mx-auto relative">
                    {/* Laptop/Device */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg shadow-xl overflow-hidden">
                        <div className="absolute inset-1 bg-slate-900 rounded-md flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl font-bold text-emerald-400 mb-2">404</div>
                            <div className="text-sm text-emerald-200">Page Not Found</div>
                            <div className="mt-3 flex justify-center space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        </div>
                        
                        {/* Device Stand */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-700 rounded-b-lg"></div>
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-gray-800 rounded-lg"></div>
                    </div>
                    </div>
                </div>

                {/* Flying Code Elements */}
                <div className={`absolute top-0 left-0 w-full h-full ${isAnimating ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                    <div className="absolute top-1/4 left-1/6 transform -rotate-12 animate-float-slow">
                        <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-mono">&lt;div&gt;</div>
                    </div>
                
                    <div className="absolute top-1/3 right-1/4 transform rotate-45 animate-float-medium">
                        <div className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-mono">function()</div>
                    </div>
                
                    <div className="absolute bottom-1/3 left-1/3 transform -rotate-12 animate-float-fast">
                        <div className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-mono">.css{}</div>
                    </div>
                
                    <div className="absolute top-1/2 right-1/5 transform rotate-12 animate-float-slow">
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-mono">return()</div>
                    </div>
                
                    <div className="absolute bottom-1/4 right-1/3 transform -rotate-45 animate-float-medium">
                        <div className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-mono">&lt;/html&gt;</div>
                    </div>
                </div>
                </div>

                {/* 404 Text */}
                <div className="text-center mb-10">
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6">404</h1>
                
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Halaman Tidak Ditemukan</h2>
                
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl">Maaf, halaman yang Anda cari tidak tersedia. Mungkin telah dipindahkan, dihapus, atau tidak pernah ada.</p>
                </div>

                {/* Action Button */}
                <Link to="/" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                    <i className="fas fa-home mr-2"></i> Kembali ke Beranda
                </Link>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <div className="flex justify-center space-x-8 mb-6">
                        <NavLink title="Beranda" href="/" colors='text-slate-700 hover:text-emerald-600' />
                        <NavLink title="Produk" href="/products" colors='text-slate-700 hover:text-emerald-600' />
                        <NavLink title="Tentang Kami" href="/about" colors='text-slate-700 hover:text-emerald-600' />
                        <NavLink title="Kontak" href="/contact" colors='text-slate-700 hover:text-emerald-600' />
                    </div>
                
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        <i className="fab fa-whatsapp text-xl"></i>
                        </a>
                    </div>
                
                    <p className="mt-6 text-gray-500">© 2025 <strong className='text-gray-600'>Dapur Mpo' Rita</strong>. Hak Cipta Dilindungi.</p>
                </div>
            </div>
        </div>
    );
};
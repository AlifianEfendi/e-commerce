export default function Footer() {
    return (
        <footer className="container mx-auto text-gray-800 border-t border-gray-300 pt-12 pb-6 bg-white">
            <div className="mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 md:gap-x-8 mb-8">
                    <div className=" flex flex-col items-center text-center md:text-start md:items-start">
                        <img className='max-w-22' src="./utility/brand-logo.png" />
                    
                        <p className="text-gray-500 mb-4">Menyediakan berbagai produk frozen food berkualitas untuk kebutuhan kuliner Anda.</p>
                    
                        <div className="flex space-x-4 text-lg">
                            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                
                    <div className="grid sm:grid-cols-2 gap-8 col-span-2">
                        <div className="text-center md:text-start">
                            <h3 className="text-lg font-bold mb-4">Kategori</h3>
                        
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Ayam</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Seafood</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Daging</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Sayuran</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Camilan</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Siap Saji</a></li>
                            </ul>
                        </div>
                    
                        <div className="text-center md:text-start">
                            <h3 className="text-lg font-bold mb-4">Informasi</h3>
                        
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Tentang Kami</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Cara Pemesanan</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Pengiriman</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Kebijakan Privasi</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Syarat & Ketentuan</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="text-center md:text-start">
                        <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
                    
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:flex flex-col space-y-2">
                            <li className="flex flex-col items-center md:flex-row md:items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-green-400"></i>
                            
                                <span className="text-gray-500">Jl. Frozen Food No. 123, Jakarta Selatan, Indonesia</span>
                            </li>
                        
                            <li className="flex flex-col items-center md:flex-row md:items-start">
                                <i className="fas fa-phone-alt mr-2 text-green-400"></i>
                            
                                <span className="text-gray-500">+62 21 1234 5678</span>
                            </li>
                        
                            <li className="flex flex-col items-center md:flex-row md:items-start">
                                <i className="fas fa-envelope mr-2 text-green-400"></i>
                            
                                <span className="text-gray-500">info@frozenfood.com</span>
                            </li>
                        
                            <li className="flex flex-col items-center md:flex-row md:items-start">
                                <i className="fas fa-clock mr-2 text-green-400"></i>
                            
                                <span className="text-gray-500">Senin - Sabtu: 08.00 - 17.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 <strong className="text-gray-600">Dapur Mpo' Rita</strong>. Hak Cipta Dilindungi.</p>
                    
                        <div className="flex space-x-4">
                            <i className="fab fa-cc-visa text-gray-500 text-2xl"></i>
                            <i className="fab fa-cc-mastercard text-gray-500 text-2xl"></i>
                            <i className="fab fa-cc-paypal text-gray-500 text-2xl"></i>
                            <i className="fab fa-cc-apple-pay text-gray-500 text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
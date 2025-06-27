import Sidebar from "../../components/fragments/Sidebar";

export default function DashboardShell({ children, title, metaTitle, isOpen, setIsOpen }) {

    return (
        <>
            <title>{metaTitle}</title>
        
            <div className="flex h-screen bg-gray-50 w-screen">
                {/* Sidebar */}
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            
                {/* Main Content */}
                <div className="flex-1 overflow-auto w-full">
                    {/* Header */}
                    <header className="bg-white shadow-sm overflow-x-hidden">
                        <div className="flex justify-between items-center px-6 py-4">
                            <div className="flex items-center gap-x-3">
                                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden`}>
                                    <i className="fas fa-indent"></i>
                                </button>
                            
                                <h2 className="text-xl font-semibold text-gray-800">{ title }</h2>
                            </div>
                        
                            <div className="flex items-center space-x-4">
                                <div className={`relative hidden ${!isOpen && "md:block"} lg:block`}>
                                    <input
                                    type="text"
                                    placeholder="Cari..."
                                    className="pl-10 pr-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                
                                    <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                                </div>
                            
                                <button className="relative p-2 text-gray-500 translate-y-0.5 hover:text-gray-700">
                                    <i className="fas fa-bell text-xl"></i>
                                
                                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">5</span>
                                </button>
                            
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                        <i className="fas fa-user"></i>
                                    </div>
                                
                                    <span className="ml-2 text-gray-700">Admin</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <div className="min-h-screen">
                        {children}
                    </div>

                    {/* Footer */}
                    <footer className="bg-white border-t border-gray-200 mt-12 pb-6">
                        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
                        <p>© 2025 Dapur Mpo' Rita. Hak Cipta Dilindungi.</p>
                        <div className="flex justify-center mt-2 space-x-4">
                            <a
                            href="#"
                            className="text-gray-500 hover:text-green-500 cursor-pointer"
                            >
                            Syarat & Ketentuan
                            </a>
                            <a
                            href="#"
                            className="text-gray-500 hover:text-green-500 cursor-pointer"
                            >
                            Kebijakan Privasi
                            </a>
                            <a
                            href="#"
                            className="text-gray-500 hover:text-green-500 cursor-pointer"
                            >
                            Bantuan
                            </a>
                        </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};
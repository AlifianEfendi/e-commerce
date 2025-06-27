import { useNavigate } from "react-router-dom";

export default function PaymentShell({ children, title, metaTitle }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <>
            <title>{metaTitle}</title>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="container relative mx-auto px-4 py-4 flex items-center">
                        <button onClick={handleBack} className="flex items-center gap-x-2 py-3 text-gray-600 transition hover:text-green-500">
                            <i className="fas fa-arrow-left text-xl"></i>
                        </button>
                    
                        <div className="flex justify-center w-full">
                            <h1 className="text-xl font-bold text-gray-700 mr-3">{title}</h1>
                        </div>
                    </div>
                </header>
            
                {children}
            
                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 mt-12">
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
        </>
    )
}
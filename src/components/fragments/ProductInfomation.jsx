import QuantityInput from "../elements/QuantityInput";
import Rating from "../elements/Rating";

export default function ProductInformation({ quantity, setQuantity, handleBuyNow }) {
    const handleQuantityChange = value => {
        if(quantity + value > 0 && quantity + value <= 20) {
            setQuantity(quantity + value);
        }
    }

    return (
        <div className="md:w-3/5 p-6 border-l border-gray-200">
            <div className="flex justify-between items-start">
                <div className="w-full">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Siomay Ikan Premium
                        </h1>
                    
                        <div className="bg-green-100 text-green-600 h-max px-3 py-1 rounded-full text-sm font-medium">
                        Tersedia
                        </div>
                    </div>
                
                    <div className="flex items-center mt-2">
                        <Rating rating={4.6} />
                        <span className="ml-2 text-gray-600">
                        (4.6) • 120 ulasan
                        </span>
                    </div>
                </div>
            </div>
        
            <div className="mt-3 sm:mt-6">
                <div className="flex flex-wrap gap-y-2 items-baseline">
                    <span className="text-3xl font-bold text-gray-800">
                        Rp 42.000
                    </span>
                
                    <span className="ml-2 text-sm line-through text-gray-500">
                        Rp 48.000
                    </span>
                
                    <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                        12% OFF
                    </span>
                </div>
            </div>
        
            <div className="mt-6">
                <p className="text-gray-600">
                Siomay ikan premium dengan daging ikan tenggiri pilihan,
                dibuat dengan resep tradisional dan bahan berkualitas tinggi.
                Cocok untuk hidangan keluarga atau acara spesial.
                </p>
            </div>
        
            <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">Jumlah</span>
                
                    {/* <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
                        >
                        <i className="fas fa-minus"></i>
                        </button>
                    
                        <span className="px-4 py-1 border-l border-r border-gray-300">
                        {quantity}
                        </span>
                    
                        <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
                        >
                        <i className="fas fa-plus"></i>
                        </button>
                    </div> */}
                    <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange} />
                </div>
            
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
                        <i className="fas fa-shopping-cart mr-2"></i>
                        Tambah ke Keranjang
                    </button>
                
                    <button onClick={handleBuyNow} className="flex-1 border border-green-500 text-green-500 hover:bg-green-50 py-3 px-6 rounded-lg font-medium cursor-pointer !rounded-button whitespace-nowrap">
                        Beli Sekarang
                    </button>
                </div>
            </div>
        
            <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="text-gray-500 text-sm">Berat Bersih</span>
                        <p className="font-medium">250 gram (10 pcs)</p>
                    </div>
                
                    <div>
                        <span className="text-gray-500 text-sm">Kategori</span>
                        <p className="font-medium">Seafood</p>
                    </div>
                
                    <div>
                        <span className="text-gray-500 text-sm">Penyimpanan</span>
                        <p className="font-medium">-18°C (freezer)</p>
                    </div>
                
                    <div>
                        <span className="text-gray-500 text-sm">Kadaluarsa</span>
                        <p className="font-medium">12 bulan dari produksi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Select from "./Select";

export default function Pagination() {
    return (
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-y-2 items-center justify-between md:flex-row">
            <div className="flex items-center">
                <span className="text-sm text-gray-700">
                    Menampilkan{" "}
                
                    <span className="font-medium">1</span> -{" "}
                
                    <span className="font-medium">
                        5
                    </span>{" "}
                
                    dari{" "}
                
                    <span className="font-medium">10</span>{" "}
                
                    {/* produk */}
                </span>
            </div>
        
            <div className="flex items-center space-x-2">
                <Select data={["5 per halaman", "10 per halaman", "20 per halaman", "50 per halaman"]} />
            
                <div className="flex space-x-1">
                    <button className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap bg-white text-gray-700 hover:bg-gray-50 cursor-pointer`}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                
                    <button className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap bg-green-500 text-white`}>
                        1
                    </button>
                
                    <button className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap bg-white text-gray-700 hover:bg-gray-50 cursor-pointer`}>
                        2
                    </button>
                
                    <button className={`px-3 py-1 rounded-md !rounded-button whitespace-nowrap bg-white text-gray-700 hover:bg-gray-50 cursor-pointer`}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default function PromoSection() {
    return (
        <section className=" py-12 bg-white">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 relative rounded-2xl overflow-hidden text-white p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:max-w-lg text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Diskon 25% Untuk Pembelian Pertama</h2>
                    <p className="md:text-lg mb-8">Gunakan kode promo <span className="font-bold bg-yellow-300 text-gray-800 px-2 py-1 rounded">FROZENFIRST</span> untuk mendapatkan diskon spesial.</p>
                    <button className="text-sm md:text-base bg-white hover:bg-gray-100 text-green-600 px-6 py-3 rounded-full font-bold transition duration-300 shadow-lg">
                        Gunakan Sekarang
                    </button>
                </div>
            
                <div className="relative w-52 aspect-square md:w-68 mb-6 md:mb-0">
                <img src="https://placehold.co/300x300/ffffff/333?text=Promo!" className="w-full h-full object-contain"/>
                </div>
            </div>
        </section>
    )
}
export default function HeroSection() {
    return (
        <>
        <section className="relative bg-gradient-to-r from-green-600 to-red-600 overflow-hidden text-white bg-white">
            <div className="absolute inset-0 opacity-20">
                <img src="./utility/hero-background.jpg" className='w-full h-full object-cover object-center'/>
            </div>
        
            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-x-2">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Makanan Beku Berkualitas Untuk Keluarga Anda
                        </h1>
                    
                        <p className="md:text-lg lg:text-xl text-green-100 mb-8">
                            Nikmati kemudahan memasak dengan produk frozen food premium kami. Praktis, lezat, dan bergizi.
                        </p>
                    
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            <button className="bg-white hover:bg-gray-100 text-green-600 px-6 py-3 rounded-sm font-bold lg:text-lg transition duration-300 shadow-lg">
                                Belanja Sekarang
                            </button>
                            <button className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-6 py-3 rounded-sm font-bold lg:text-lg transition duration-300">
                                Lihat Katalog
                            </button>
                        </div>
                    </div>
                
                    <div className="hidden w-full md:w-1/2 md:flex justify-center md:justify-end">
                        <img
                            src="./utility/hero-image.jpg"
                            className="rounded-lg shadow-2xl max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
import { useState } from "react";

export default function TabDetails() {
    const [ activeTab, setActiveTab ] = useState("deskripsi");

    return (
        <div className="px-4 py-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
                <div className="flex">
                <button
                    className={`px-6 py-4 font-medium text-sm cursor-pointer ${activeTab === "deskripsi" ? "text-green-500 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab("deskripsi")}
                >
                    Deskripsi
                </button>
                <button
                    className={`px-6 py-4 font-medium text-sm cursor-pointer ${activeTab === "spesifikasi" ? "text-green-500 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab("spesifikasi")}
                >
                    Spesifikasi
                </button>
                <button
                    className={`px-6 py-4 font-medium text-sm cursor-pointer ${activeTab === "ulasan" ? "text-green-500 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab("ulasan")}
                >
                    Ulasan (120)
                </button>
                </div>
            </div>

            <div className="p-6">
                {activeTab === "deskripsi" && (
                <div>
                    <h3 className="text-lg font-medium mb-4">Tentang Produk</h3>
                    <p className="text-gray-600 mb-4">
                    Siomay Ikan Premium kami terbuat dari daging ikan tenggiri
                    segar berkualitas tinggi yang dipadukan dengan bumbu pilihan
                    untuk menghasilkan cita rasa yang lezat dan autentik. Dibuat
                    dengan standar kebersihan yang ketat dan tanpa bahan pengawet
                    berbahaya.
                    </p>
                    <p className="text-gray-600 mb-4">
                    Siomay kami memiliki tekstur yang kenyal dan rasa yang gurih,
                    cocok disajikan dengan saus kacang atau saus sambal sesuai
                    selera. Sangat praktis untuk disajikan sebagai hidangan
                    pembuka, camilan, atau lauk pendamping.
                    </p>

                    <h3 className="text-lg font-medium mt-6 mb-4">
                    Cara Penyajian
                    </h3>
                    <div className="space-y-3">
                    <div className="flex items-start">
                        <div className="bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-medium">1</span>
                        </div>
                        <p className="ml-3 text-gray-600">
                        Kukus siomay beku selama 10-15 menit hingga matang dan
                        panas merata.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-medium">2</span>
                        </div>
                        <p className="ml-3 text-gray-600">
                        Siapkan saus kacang atau saus sambal sesuai selera.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-medium">3</span>
                        </div>
                        <p className="ml-3 text-gray-600">
                        Sajikan siomay selagi hangat dengan saus pendamping.
                        </p>
                    </div>
                    </div>
                </div>
                )}

                {activeTab === "spesifikasi" && (
                <div>
                    <h3 className="text-lg font-medium mb-4">Informasi Produk</h3>
                    <div className="border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <table className="w-full">
                            <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Berat Bersih</td>
                                <td className="py-3 font-medium text-right">
                                250 gram (10 pcs)
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">
                                Ukuran per pcs
                                </td>
                                <td className="py-3 font-medium text-right">
                                25 gram
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Kemasan</td>
                                <td className="py-3 font-medium text-right">
                                Vacuum Sealed
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Penyimpanan</td>
                                <td className="py-3 font-medium text-right">
                                -18°C (freezer)
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Masa Simpan</td>
                                <td className="py-3 font-medium text-right">
                                12 bulan dari produksi
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                        <div>
                        <table className="w-full">
                            <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Bahan Utama</td>
                                <td className="py-3 font-medium text-right">
                                Ikan tenggiri, tepung tapioka
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Bumbu</td>
                                <td className="py-3 font-medium text-right">
                                Bawang putih, garam, gula, merica
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Pengawet</td>
                                <td className="py-3 font-medium text-right">
                                Tidak mengandung pengawet berbahaya
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Sertifikasi</td>
                                <td className="py-3 font-medium text-right">
                                BPOM, Halal MUI
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Produsen</td>
                                <td className="py-3 font-medium text-right">
                                PT Frozen Berkah Indonesia
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <h3 className="text-lg font-medium mt-8 mb-4">
                    Informasi Nilai Gizi
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">Per 100 gram</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Energi</span>
                            <span className="font-medium">220 kkal</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Protein</span>
                            <span className="font-medium">12 g</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Lemak Total</span>
                            <span className="font-medium">8 g</span>
                        </div>
                        </div>
                        <div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Karbohidrat</span>
                            <span className="font-medium">25 g</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Gula</span>
                            <span className="font-medium">2 g</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Natrium</span>
                            <span className="font-medium">450 mg</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                {activeTab === "ulasan" && (
                <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="mr-4">
                        <div className="text-3xl font-bold text-gray-800">
                            4.6
                        </div>
                        <div className="flex text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                            120 ulasan
                        </div>
                        </div>
                        <div className="flex-1">
                        <div className="flex items-center mb-1">
                            <div className="text-sm text-gray-500 w-8">5</div>
                            <div className="w-32 bg-gray-200 rounded-full h-2 mx-2">
                            <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "75%" }}
                            ></div>
                            </div>
                            <div className="text-sm text-gray-500">75%</div>
                        </div>
                        <div className="flex items-center mb-1">
                            <div className="text-sm text-gray-500 w-8">4</div>
                            <div className="w-32 bg-gray-200 rounded-full h-2 mx-2">
                            <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "15%" }}
                            ></div>
                            </div>
                            <div className="text-sm text-gray-500">15%</div>
                        </div>
                        <div className="flex items-center mb-1">
                            <div className="text-sm text-gray-500 w-8">3</div>
                            <div className="w-32 bg-gray-200 rounded-full h-2 mx-2">
                            <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "7%" }}
                            ></div>
                            </div>
                            <div className="text-sm text-gray-500">7%</div>
                        </div>
                        <div className="flex items-center mb-1">
                            <div className="text-sm text-gray-500 w-8">2</div>
                            <div className="w-32 bg-gray-200 rounded-full h-2 mx-2">
                            <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "2%" }}
                            ></div>
                            </div>
                            <div className="text-sm text-gray-500">2%</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm text-gray-500 w-8">1</div>
                            <div className="w-32 bg-gray-200 rounded-full h-2 mx-2">
                            <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "1%" }}
                            ></div>
                            </div>
                            <div className="text-sm text-gray-500">1%</div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                        <option>Semua Ulasan</option>
                        <option>5 Bintang</option>
                        <option>4 Bintang</option>
                        <option>3 Bintang</option>
                        <option>2 Bintang</option>
                        <option>1 Bintang</option>
                        </select>
                    </div>
                    </div>

                    <div className="space-y-6">
                    {/* Review 1 */}
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                            BS
                            </div>
                            <div className="ml-3">
                            <div className="font-medium">Budi Santoso</div>
                            <div className="flex text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">22 Juni 2025</div>
                        </div>
                        <p className="text-gray-600">
                        Siomay ikan ini rasanya enak sekali! Teksturnya kenyal dan
                        ikannya terasa segar. Saya suka karena mudah dimasak,
                        tinggal dikukus sebentar langsung bisa disantap. Porsinya
                        juga pas untuk keluarga kecil. Pasti beli lagi!
                        </p>
                    </div>

                    {/* Review 2 */}
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                            RW
                            </div>
                            <div className="ml-3">
                            <div className="font-medium">Ratna Wijaya</div>
                            <div className="flex text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">18 Juni 2025</div>
                        </div>
                        <p className="text-gray-600">
                        Siomay ini cukup enak, tapi menurut saya masih kurang
                        berasa ikannya. Mungkin karena saya biasa makan siomay
                        yang lebih strong rasa ikannya. Tapi untuk ukuran frozen
                        food, ini termasuk bagus. Packaging-nya juga rapi dan
                        aman.
                        </p>
                    </div>

                    {/* Review 3 */}
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                            DP
                            </div>
                            <div className="ml-3">
                            <div className="font-medium">Dian Pratiwi</div>
                            <div className="flex text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">15 Juni 2025</div>
                        </div>
                        <div className="mb-3">
                        <p className="text-gray-600">
                            Anak-anak suka sekali dengan siomay ini! Praktis untuk
                            bekal sekolah, tinggal dikukus pagi-pagi. Rasanya juga
                            enak dan tidak terlalu berbumbu jadi cocok untuk
                            anak-anak. Sudah langganan beli produk ini tiap bulan.
                        </p>
                        </div>
                        <div className="flex space-x-2">
                        <img
                            src="https://readdy.ai/api/search-image?query=Steamed%20fish%20dumplings%20on%20a%20kids%20lunch%20plate%20with%20colorful%20vegetables%2C%20home%20setting%2C%20natural%20lighting%2C%20showing%20the%20quality%20of%20the%20food&width=100&height=100&seq=5&orientation=squarish"
                            alt="User review photo"
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        </div>
                    </div>

                    <button className="w-full py-3 border border-green-500 text-green-500 rounded-lg font-medium hover:bg-green-50 cursor-pointer !rounded-button whitespace-nowrap">
                        Lihat Semua Ulasan
                    </button>
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>
    )
}
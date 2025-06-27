// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { useState, useEffect } from "react";
import PaymentShell from "../components/layouts/PaymentShell";
import BoxLayout from "../components/layouts/BoxLayout";

export default function OrderConfirmPage() {
    const [remainingTime, setRemainingTime] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime.seconds > 0) {
                return { ...prevTime, seconds: prevTime.seconds - 1 };
                } else if (prevTime.minutes > 0) {
                return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
                } else if (prevTime.hours > 0) {
                return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                }
                return prevTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
        <PaymentShell title="Konfirmasi Pesanan" metaTitle="Konfirmasi Pesanan | Dapur Mpo' Rita">
            <div className="container mx-auto px-4 py-6">
                {/* Status Pesanan */}
                <BoxLayout addStyle="mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <h2 className="text-lg font-bold mb-2">Status Pesanan</h2>
                        
                            <p className="text-gray-600 mb-1">
                                Nomor Pesanan:{" "}
                                <span className="font-medium">INV/20250622/MPL/12345678</span>
                            </p>
                        
                            <p className="flex items-center text-yellow-500 font-medium">
                                <i className="fas fa-clock mr-2"></i>
                                Menunggu Pembayaran
                            </p>
                        </div>
                    
                        <div className="mt-4 md:mt-0 bg-yellow-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">
                                Batas Waktu Pembayaran:
                            </p>
                        
                            <div className="flex items-center justify-center space-x-2">
                                <div className="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <span className="font-bold text-xl">
                                    {remainingTime.hours.toString().padStart(2, "0")}
                                </span>
                                </div>
                            
                                <span className="text-yellow-500 font-bold">:</span>
                            
                                <div className="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <span className="font-bold text-xl">
                                    {remainingTime.minutes.toString().padStart(2, "0")}
                                </span>
                                </div>
                            
                                <span className="text-yellow-500 font-bold">:</span>
                            
                                <div className="bg-yellow-500 text-white px-3 py-2 rounded-md">
                                <span className="font-bold text-xl">
                                    {remainingTime.seconds.toString().padStart(2, "0")}
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxLayout>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Order Summary */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Ringkasan Pesanan */}
                        <BoxLayout title="Ringkasan Pesanan">
                            <div className="border-b border-gray-200 pb-4 mb-4">
                                <div className="flex items-center">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=Premium%2520fish%2520dumplings%2520or%2520siomay%2520on%2520a%2520white%2520plate%252C%2520beautifully%2520arranged%2520with%2520a%2520light%2520dipping%2520sauce%252C%2520professional%2520food%2520photography%2520with%2520soft%2520lighting%2520and%2520clean%2520minimal%2520background%252C%2520high%2520resolution&width=100&height=100&seq=10&orientation=squarish"
                                        alt="Siomay Ikan Premium"
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                
                                    <div className="ml-4 flex-1">
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">Siomay Ikan Premium</h3>
                                        
                                            <span className="font-medium">Rp 42.000</span>
                                        </div>
                                    
                                        <p className="text-gray-500 text-sm">250 gram (10 pcs)</p>
                                    
                                        <p className="text-gray-500 text-sm mt-1">Jumlah: 1</p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal Produk</span>
                                <span>Rp 42.000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                <span className="text-gray-600">
                                    Biaya Pengiriman (Regular)
                                </span>
                                <span>Rp 12.000</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold">
                                <span>Total Pembayaran</span>
                                <span className="text-green-600">Rp 54.000</span>
                                </div>
                            </div>
                        </BoxLayout>
                    
                        {/* Informasi Pengiriman */}
                        <BoxLayout title="Informasi Pengiriman">
                            <div className="space-y-4">
                                <div>
                                <h3 className="text-sm font-medium text-gray-600">
                                    Alamat Pengiriman
                                </h3>
                                <p className="font-medium mt-1">Ahmad Fauzi</p>
                                <p className="text-gray-700">0812-3456-7890</p>
                                <p className="text-gray-700">
                                    Jl. Tebet Raya No. 45, RT 05/RW 08
                                </p>
                                <p className="text-gray-700">Tebet, Jakarta Selatan, 12870</p>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                <h3 className="text-sm font-medium text-gray-600">
                                    Metode Pengiriman
                                </h3>
                                <p className="font-medium mt-1">Regular (2-3 hari)</p>
                                <p className="text-gray-700">
                                    Estimasi tiba: 24-25 Juni 2025
                                </p>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                <h3 className="text-sm font-medium text-gray-600">Catatan</h3>
                                <p className="text-gray-700">Rumah cat putih, pagar hitam</p>
                                </div>
                            </div>
                        </BoxLayout>
                    </div>
                
                    {/* Right Column - Payment Instructions */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Instruksi Pembayaran */}
                        <BoxLayout title="Instruksi Pembayaran">
                            <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                <p className="text-center text-blue-800 font-medium">
                                Transfer Bank
                                </p>
                            </div>
                        
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-university text-blue-600 mr-2"></i>
                                    <span className="font-medium">Bank BCA</span>
                                </div>
                                <p className="text-gray-700 mb-1">Nomor Rekening:</p>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                    <span className="font-bold">8720145678</span>
                                    <button className="text-blue-600 text-sm cursor-pointer !rounded-button whitespace-nowrap">
                                    <i className="far fa-copy mr-1"></i> Salin
                                    </button>
                                </div>
                                <p className="text-gray-700 mt-2 mb-1">Atas Nama:</p>
                                <p className="font-medium">PT Frozen Food Indonesia</p>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-university text-blue-600 mr-2"></i>
                                    <span className="font-medium">Bank Mandiri</span>
                                </div>
                                <p className="text-gray-700 mb-1">Nomor Rekening:</p>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                    <span className="font-bold">1450078923456</span>
                                    <button className="text-blue-600 text-sm cursor-pointer !rounded-button whitespace-nowrap">
                                    <i className="far fa-copy mr-1"></i> Salin
                                    </button>
                                </div>
                                <p className="text-gray-700 mt-2 mb-1">Atas Nama:</p>
                                <p className="font-medium">PT Frozen Food Indonesia</p>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg">
                                <p className="font-medium text-center mb-2">
                                    Total Pembayaran
                                </p>
                                <p className="text-xl font-bold text-center text-green-600 mb-2">
                                    Rp 54.000
                                </p>
                                <p className="text-xs text-gray-600 text-center">
                                    Mohon transfer sesuai dengan jumlah yang tertera
                                </p>
                                </div>
                            </div>
                        
                            <div className="mt-6">
                                <h3 className="font-medium mb-3">
                                Langkah-langkah Pembayaran:
                                </h3>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li>Transfer sesuai nominal ke rekening yang tersedia</li>
                                <li>Simpan bukti transfer Anda</li>
                                <li>Unggah bukti pembayaran melalui tombol di bawah</li>
                                </ol>
                            </div>
                        
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center mt-6 cursor-pointer !rounded-button whitespace-nowrap">
                                <i className="fas fa-upload mr-2"></i>
                                Unggah Bukti Pembayaran
                            </button>
                        </BoxLayout>
                    
                        {/* Bantuan */}
                        <BoxLayout title="Butuh Bantuan?">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <i className="fas fa-headset text-green-600"></i>
                                </div>
                                <div>
                                <p className="text-sm text-gray-600">Customer Service</p>
                                <p className="font-medium">0800-1234-5678</p>
                                </div>
                            </div>
                        
                            <button className="w-full border border-green-500 text-green-500 hover:bg-green-50 py-3 px-6 rounded-lg font-medium flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
                                <i className="fas fa-comments mr-2"></i>
                                Hubungi Bantuan
                            </button>
                        </BoxLayout>
                    
                        {/* FAQ */}
                        <BoxLayout title="FAQ">
                            <div className="space-y-3">
                                <div>
                                <p className="font-medium text-gray-800 mb-1">
                                    Berapa lama batas waktu pembayaran?
                                </p>
                                <p className="text-sm text-gray-600">
                                    Batas waktu pembayaran adalah 24 jam sejak pesanan dibuat.
                                </p>
                                </div>
                                <div>
                                <p className="font-medium text-gray-800 mb-1">
                                    Bagaimana cara melacak pesanan?
                                </p>
                                <p className="text-sm text-gray-600">
                                    Anda dapat melacak pesanan melalui tombol "Lacak Pesanan"
                                    yang akan aktif setelah pembayaran dikonfirmasi.
                                </p>
                                </div>
                                <div>
                                <p className="font-medium text-gray-800 mb-1">
                                    Apakah saya bisa mengubah alamat pengiriman?
                                </p>
                                <p className="text-sm text-gray-600">
                                    Perubahan alamat hanya dapat dilakukan sebelum pesanan
                                    dikonfirmasi oleh sistem.
                                </p>
                                </div>
                            </div>
                        </BoxLayout>
                    </div>
                </div>
            
                {/* Tombol Lacak Pesanan - Disabled */}
                <div className="mt-8 text-center">
                <button className="bg-gray-300 text-gray-600 py-3 px-8 rounded-lg font-medium inline-flex items-center justify-center cursor-not-allowed !rounded-button whitespace-nowrap">
                    <i className="fas fa-truck mr-2"></i>
                    Lacak Pesanan
                </button>
                <p className="text-sm text-gray-500 mt-2">
                    Tombol akan aktif setelah pembayaran dikonfirmasi
                </p>
                </div>
            </div>
        </PaymentShell>
        </div>
    );
};
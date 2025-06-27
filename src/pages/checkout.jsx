import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentShell from "../components/layouts/PaymentShell";
import BoxLayout from "../components/layouts/BoxLayout";
import ProductSummary from "../components/fragments/ProductSummary";
import ShippingInformation from "../components/fragments/ShippingInformation";
import SelectMethod from "../components/elements/SelectMethod";
import OrderSummary from "../components/fragments/OrderSummary";

export default function CheckoutPage() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [quantity, setQuantity] = useState(state ? state[0].quantity : 1);
    const [selectedShipping, setSelectedShipping] = useState("regular");
    const [selectedPayment, setSelectedPayment] = useState("transfer");

    const productPrice = 42000;
    const shippingOptions = {
        regular: { name: "Regular (2-3 hari)", price: 12000 },
        express: { name: "Express (1 hari)", price: 22000 },
        sameDay: { name: "Same Day (hari ini)", price: 35000 },
    };

    const handleQuantityChange = value => {
        if (quantity + value > 0 && quantity + value <= 20) {
        setQuantity(quantity + value);
        }
    };

    const subtotal = productPrice * quantity;
    const shippingCost = shippingOptions[selectedShipping].price;
    const total = subtotal + shippingCost;

    const handleConfirm = () => {
        navigate('/payment-confirmation');
    }

    return (
        <PaymentShell title="Checkout" metaTitle="Checkout | Dapur Mpo' Rita" >
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Forms */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Product Summary */}
                        <BoxLayout title="Ringkasan Produk">
                            <ProductSummary productPrice={productPrice} quantity={quantity} handleQuantityChange={handleQuantityChange} />
                        </BoxLayout>
                    
                        {/* Shipping Information */}
                        <BoxLayout title="Data Pengiriman">
                            <ShippingInformation />
                        </BoxLayout>
                    
                        {/* Shipping Method */}
                        <BoxLayout title="Methode Pengiriman">
                            <div className="space-y-3">
                                <SelectMethod name="shipping" value="regular" selected={selectedShipping} setSelected={setSelectedShipping} data={{ title: "Regular (2-3 hari)", subtitle: "Estimasi tiba 24-25 Juni 2025", price: 12000 }} />
                            
                                {/* <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-green-200 hover:bg-green-50">
                                <input
                                    type="radio"
                                    name="shipping"
                                    value="express"
                                    checked={selectedShipping === "express"}
                                    onChange={() => setSelectedShipping("express")}
                                    className="text-green-500 focus:ring-green-500 h-4 w-4"
                                />
                                <div className="ml-3 flex-1">
                                    <div className="flex justify-between">
                                    <span className="font-medium">Express (1 hari)</span>
                                    <span className="font-medium">Rp 22.000</span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                    Estimasi tiba 23 Juni 2025
                                    </p>
                                </div>
                                </label> */}
                                <SelectMethod name="shipping" value="express" selected={selectedShipping} setSelected={setSelectedShipping} data={{ title: "Express (1 hari)", subtitle: "Estimasi tiba 23 Juni 2025", price: 22000 }} />
                            
                                <SelectMethod name="shipping" value="sameDay" selected={selectedShipping} setSelected={setSelectedShipping} data={{ title: "Same Day (hari ini)", subtitle: "Estimasi tiba 22 Juni 2025 (hari ini)", price: 35000 }} />
                            </div>
                        </BoxLayout>
                    
                        {/* Payment Method */}
                        <BoxLayout title="Metode Pembayaran">
                            <div className="space-y-3">
                                <SelectMethod name="payment" value="transfer" selected={selectedPayment} setSelected={setSelectedPayment} data={{ title: "Transfer Bank", subtitle: "Transfer manual ke rekening bank kami" }}>
                                    <i className="fas fa-university text-gray-600 mr-2"></i>
                                </SelectMethod>
                            
                                <SelectMethod name="payment" value="ewallet" selected={selectedPayment} setSelected={setSelectedPayment} data={{ title: "E-Wallet", subtitle: "GoPay, OVO, DANA, LinkAja, ShopeePay" }}>
                                    <i className="fas fa-wallet text-gray-600 mr-2"></i>
                                </SelectMethod>
                            
                                <SelectMethod name="payment" value="virtual" selected={selectedPayment} setSelected={setSelectedPayment} data={{ title: "Virtual Account", subtitle: "BCA, Mandiri, BNI, BRI, Permata" }}>
                                    <i className="fas fa-credit-card text-gray-600 mr-2"></i>
                                </SelectMethod>
                            
                                <SelectMethod name="payment" value="cod" selected={selectedPayment} setSelected={setSelectedPayment} data={{ title: "COD (Cash On Delivery)", subtitle: "Bayar tunai saat pesanan tiba" }}>
                                    <i className="fas fa-hand-holding-usd text-gray-600 mr-2"></i>
                                </SelectMethod>
                            </div>
                        </BoxLayout>
                    </div>
                
                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <BoxLayout title="Ringkasan Pembayaran" addStyle="sticky top-6">
                            <OrderSummary data={{ subtotal, shippingCost, total }} />
                        
                            <button onClick={handleConfirm} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
                                Konfirmasi Pesanan
                            </button>
                        
                            <div className="mt-6 text-center text-sm text-gray-500">
                                <p>Dengan melakukan pemesanan, Anda menyetujui</p>
                                <p>
                                <a
                                    href="#"
                                    className="text-green-500 hover:text-green-600 cursor-pointer"
                                >
                                    Syarat & Ketentuan
                                </a>{" "}
                                dan{" "}
                                <a
                                    href="#"
                                    className="text-green-500 hover:text-green-600 cursor-pointer"
                                >
                                    Kebijakan Privasi
                                </a>
                                </p>
                            </div>
                        
                            <div className="mt-6 flex justify-center space-x-4">
                                <i className="fab fa-cc-visa text-2xl text-gray-500"></i>
                                <i className="fab fa-cc-mastercard text-2xl text-gray-500"></i>
                                <i className="fab fa-paypal text-2xl text-gray-500"></i>
                                <i className="fas fa-money-bill-wave text-2xl text-gray-500"></i>
                            </div>
                        </BoxLayout>
                    </div>
                </div>
            </div>
        </PaymentShell>
    );
};


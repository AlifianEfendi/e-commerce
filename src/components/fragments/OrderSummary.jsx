export default function OrderSummary({ data }) {
    return (
        <div className="space-y-3 mb-6">
            <div className="flex justify-between">
            <span className="text-gray-600">Subtotal Produk</span>
            <span className="font-medium">
                Rp {data.subtotal.toLocaleString("id-ID")}
            </span>
            </div>
            <div className="flex justify-between">
            <span className="text-gray-600">Biaya Pengiriman</span>
            <span className="font-medium">
                Rp {data.shippingCost.toLocaleString("id-ID")}
            </span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between">
                <span className="font-bold">Total Pembayaran</span>
                <span className="font-bold text-green-600">
                Rp {data.total.toLocaleString("id-ID")}
                </span>
            </div>
            </div>
        </div>
    )
}
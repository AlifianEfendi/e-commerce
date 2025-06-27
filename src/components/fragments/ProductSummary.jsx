import QuantityInput from "../elements/QuantityInput";

export default function ProductSummary({ productPrice, quantity, handleQuantityChange }) {
    return (
        <div className="flex items-center">
            <img
            src="https://readdy.ai/api/search-image?query=Premium%2520fish%2520dumplings%2520or%2520siomay%2520on%2520a%2520white%2520plate%252C%2520beautifully%2520arranged%2520with%2520a%2520light%2520dipping%2520sauce%252C%2520professional%2520food%2520photography%2520with%2520soft%2520lighting%2520and%2520clean%2520minimal%2520background%252C%2520high%2520resolution&width=100&height=100&seq=10&orientation=squarish"
            alt="Siomay Ikan Premium"
            className="w-20 h-20 object-cover rounded-md"
            />
        
            <div className="ml-4 flex-1">
                <h3 className="font-medium">Siomay Ikan Premium</h3>
            
                <p className="text-gray-500 text-sm">250 gram (10 pcs)</p>
            
                <div className="flex justify-between items-center mt-2">
                    <span className="font-medium">
                    Rp {productPrice.toLocaleString("id-ID")}
                    </span>
                
                    <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange} />
                </div>
            </div>
        </div>
    )
}
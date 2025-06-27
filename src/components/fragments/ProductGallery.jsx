export default function ProductGallery() {
    return (
        <div className="md:w-2/5 p-6">
            <div className="relative mb-4 rounded-lg overflow-hidden">
                <img
                src="https://readdy.ai/api/search-image?query=Premium%20fish%20dumplings%20or%20siomay%20on%20a%20white%20plate%2C%20beautifully%20arranged%20with%20a%20light%20dipping%20sauce%2C%20professional%20food%20photography%20with%20soft%20lighting%20and%20clean%20minimal%20background%2C%20high%20resolution&width=600&height=600&seq=1&orientation=squarish"
                alt="Siomay Ikan Premium"
                className="w-full h-auto object-cover"
                />
            </div>
        
            <div className="grid grid-cols-4 gap-2">
                <div className="border-2 border-green-500 rounded-lg overflow-hidden cursor-pointer">
                <img
                    src="https://readdy.ai/api/search-image?query=Premium%20fish%20dumplings%20or%20siomay%20on%20a%20white%20plate%2C%20beautifully%20arranged%20with%20a%20light%20dipping%20sauce%2C%20professional%20food%20photography%20with%20soft%20lighting%20and%20clean%20minimal%20background%2C%20high%20resolution&width=150&height=150&seq=1&orientation=squarish"
                    alt="Siomay Ikan Premium"
                    className="w-full h-auto object-cover"
                />
                </div>
            
                <div className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <img
                    src="https://readdy.ai/api/search-image?query=Close%20up%20of%20steamed%20fish%20dumplings%20with%20visible%20texture%20and%20ingredients%2C%20appetizing%20presentation%20on%20ceramic%20plate%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20high%20resolution&width=150&height=150&seq=2&orientation=squarish"
                    alt="Siomay Ikan Premium"
                    className="w-full h-auto object-cover"
                />
                </div>
            
                <div className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <img
                    src="https://readdy.ai/api/search-image?query=Multiple%20fish%20dumplings%20arranged%20in%20a%20steamer%20basket%2C%20showing%20the%20cooking%20process%2C%20steam%20rising%2C%20professional%20food%20photography%20with%20dramatic%20lighting%2C%20high%20resolution&width=150&height=150&seq=3&orientation=squarish"
                    alt="Siomay Ikan Premium"
                    className="w-full h-auto object-cover"
                />
                </div>
            
                <div className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <img
                    src="https://readdy.ai/api/search-image?query=Packaging%20of%20premium%20frozen%20fish%20dumplings%2C%20showing%20the%20sealed%20package%20with%20branding%20and%20nutritional%20information%2C%20professional%20product%20photography%20on%20clean%20background%2C%20high%20resolution&width=150&height=150&seq=4&orientation=squarish"
                    alt="Siomay Ikan Premium"
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>
        </div>
    )
}
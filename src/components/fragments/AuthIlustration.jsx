export default function AuthIlustration() {
    return (
        <div className="hidden md:block md:w-1/2 bg-green-50 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <img 
                    src="./utility/auth-ilustration.jpg" 
                    className="object-cover rounded-lg shadow-md max-w-full max-h-full"
                />
            </div>
            
            {/* Decorative Food Icons */}
            <div className="absolute top-10 left-10">
            <i className="fas fa-carrot text-3xl text-orange-500"></i>
            </div>
        
            <div className="absolute bottom-10 right-10">
            <i className="fas fa-fish text-3xl text-blue-500"></i>
            </div>
        
            <div className="absolute top-10 right-10">
            <i className="fas fa-pepper-hot text-3xl text-red-500"></i>
            </div>
        
            <div className="absolute bottom-10 left-10">
            <i className="fas fa-leaf text-3xl text-green-500"></i>
            </div>
        </div>
    )
}
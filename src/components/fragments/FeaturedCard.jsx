export default function FeaturedCard({ children, item, addStyle="rounded-lg shadow-sm", titleStyle="" }) {
    return (
        <div className={"bg-white " + addStyle}>
            <div className="flex flex-col items-center text-center p-4 sm:p-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-green-100 text-green-500">
                    <i className={`fas fa-${item.icon} text-2xl`}></i>
                </div>
            
                <h3 className={"text-gray-800 font-medium text-center " + titleStyle}>{item.title}</h3>
            
                {children}
            </div>
        </div>
    )
}
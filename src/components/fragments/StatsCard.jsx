export default function StatsCard({ data }) {
    return (
        <div className="bg-white rounded-lg shadow p-3 md:p-5">
            <p className="text-gray-500 text-xs md:text-base">{data.title}</p>
        
            <h3 className="text-lg md:text-2xl font-bold text-gray-700 mt-2">{data.value}</h3>
        
            <p className="text-green-500 text-xs md:text-sm mt-1">
                <i className="fas fa-arrow-up mr-1"></i>
            
                {data.desc}
            </p>
        </div>
    )
}
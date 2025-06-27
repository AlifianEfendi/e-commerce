export default function Rating({ rating = 0 }) {
    return (
        <div className="relative">
            <div style={{ width: `${(rating / 5) * 100}%` }} className="flex absolute max-w-max inset-0 bg-yellow-400 bg-clip-text text-transparent">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                ))}
            </div>
        
            <div className="relative flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className="far fa-star"></i>
                ))}
            </div>
        </div>
    )
}
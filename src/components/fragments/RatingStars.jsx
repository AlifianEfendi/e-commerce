export default function RatingStars({ rating, starWidth = "text-base" }) {
    return (
        <div className="w-max relative">
        <div className="absolute flex gap-1 bg-yellow-400 bg-clip-text text-transparent" style={{ width: `${ rating }%` }}>
            {/* {for (let i = 0; i < Math.floor(rating / 20); i++) ()
                    <i className={`fa-solid fa-star ${starWidth}`}></i>;
                )} */}
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
        </div>
    
        <div className="flex gap-1 text-gray-300">
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
            <i className={`fa-solid fa-star ${starWidth}`}></i>
        </div>
    </div>
    )
}
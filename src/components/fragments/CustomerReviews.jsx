import RatingStars from "./RatingStars";
import { getDate } from "../../utils/getDate";
// import { getAdapter } from "axios";

export default function CustomerReviews({ reviews }) {
    if(!reviews) return <></>;
    return (
        <div className="flex flex-col gap-1 mt-20">
            <h1 className="text-2xl text-gray-600 font-bold mb-5">Reviews</h1>
            
            {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2">
                    <div className="w-10 aspect-square bg-gray-400 rounded-full"></div>
                
                    <div className="flex flex-col">
                        <h3 className="text-gray-900 font-semibold" >{review.reviewerName}</h3>
                    
                        <span className="text-xs text-gray-500">{getDate(review.date)}</span>
                    </div>
                </div>
            
                <div className="flex flex-col gap-1 mt-2 ml-12">
                    <RatingStars rating={review.rating / 5 * 100} starWidth="text-sm" />
                
                    <p className="text-gray-600 italic">"{review.comment}"</p>
                </div>
            
                <hr className="opacity-25 my-2" />
            </div>
            ))
            }
        </div>
        // <></>
    )
}
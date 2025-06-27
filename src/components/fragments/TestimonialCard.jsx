import Rating from "../elements/Rating";

export default function TestimonialCard({ reviewer }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-blue-600 text-lg"></i>
                </div>
            
                <div>
                    <h4 className="font-bold text-gray-800">{reviewer.reviewer_name}</h4>
                
                    <Rating rating={reviewer.rating} />
                </div>
            </div>
        
            <p className="md:text-sm lg:text-base text-gray-800 italic">"{reviewer.comment}"</p>
        </div>
    )
}
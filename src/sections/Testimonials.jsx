import TestimonialCard from "../components/fragments/TestimonialCard";
import { reviews } from "../data/reviewers";

export default function TestimonialsSection() {
    return (
        <section className=" py-12 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Apa Kata Pelanggan Kami</h2>
            
                <p className="text-gray-600">Testimoni dari pelanggan setia kami</p>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                {reviews.map((reviewer) => (
                    <TestimonialCard key={reviewer.id} reviewer={reviewer} />
                ))}
            </div>
        </section>
    )
}
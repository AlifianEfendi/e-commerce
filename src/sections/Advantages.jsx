import FeaturedCard from "../components/fragments/FeaturedCard";
import { advantages } from "../data/products";

export default function AdvantagesSection() {
    return (
        <section className=" py-16 bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Mengapa Memilih Kami</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                {advantages.map((advantage) => (
                    <FeaturedCard key={advantage.id} item={advantage} titleStyle="md:text-lg lg:text-xl" >
                        <p className="text-sm lg:text-base text-gray-600">{ advantage.description }</p>
                    </FeaturedCard>
                ))}
            </div>
        </section>
    )
}
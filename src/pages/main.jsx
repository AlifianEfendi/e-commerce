import { useState } from 'react';
import AppShell from '../components/layouts/AppShell';
import HeroSection from '../sections/Hero';
import CategorySection from '../sections/Category';
import FeaturedSection from '../sections/Featured';
import PromoSection from '../sections/Promo';
import TestimonialsSection from '../sections/Testimonials';
import AdvantagesSection from '../sections/Advantages';


export default function MainPage() {
    const [cartCount, setCartCount] = useState(0);

    // Handler untuk menambahkan produk ke keranjang
    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <>
        <AppShell title="Beranda | Dapur Mpo' Rita" cartCount={cartCount} >
            <HeroSection />
        
            <AdvantagesSection />
        
            <CategorySection />
        
            <FeaturedSection  handleAddToCart={handleAddToCart} />
        
            <PromoSection />
        
            <TestimonialsSection />
        </AppShell>
        </>
    );
};
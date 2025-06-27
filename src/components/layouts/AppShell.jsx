import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";

export default function AppShell({ children, title={}, cartCount }) {
    return (
    <div className="bg-gray-200 min-h-screen">
        <Navbar cartCount={cartCount} />
    
        <title>{title}</title>
    
        <main className="min-h-screen">
            {children}
        </main>
    
        <Footer />
    </div>
    )
}
import AuthHeader from "../fragments/AuthHeader";
import AuthIlustration from "../fragments/AuthIlustration";

export default function AuthShell({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <AuthHeader />
        
            <main className="flex-grow flex items-center justify-center px-4 py-8">
                <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Form Section */}
                    {children}
                
                    {/* Image Ilustration Section - Hidden on mobile */}
                    <AuthIlustration />
                </div>
            </main>
        </div>
    )
}
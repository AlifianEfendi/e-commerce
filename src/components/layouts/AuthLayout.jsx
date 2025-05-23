import FormLogin from "@fragments/FormLogin"
import { Link } from "react-router-dom"

export default function AuthLayout({ children, title, type }) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
            
                <p className="font-medium text-slate-500 mb-8">
                Welcome, please enter your detail!
                </p>
            
                {children}
            
                {type === "login" ? (
                    <p className="text-center mt-2">Don't have an account? <Link to="/register" className="text-blue-600 font-semibold underline">Sign up</Link></p>
                ) : 
                    <p className="text-center mt-2">Already have an account? <Link to="/login" className="text-blue-600 font-semibold underline">Sign in</Link></p>
                }
            </div>
        </div>
    )
}
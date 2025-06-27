import { Link, useNavigate } from "react-router-dom";
import Input from "../elements/Input";

export default function FormLogin() {
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const values = {
            email: e.target.email.value,
            password: e.target.password.value,
            rememberMe: e.target.rememberMe.checked
        }
        navigate("/dashboard");
    }

    return (
        <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Masuk ke Akun Anda</h2>
            
                <p className="text-gray-600">Masukkan detail login Anda untuk mengakses akun</p>
            </div>
        
            <form onSubmit={handleSubmit}>
                <Input name="email" title="Email" type="email" placeholder="Masukkan email Anda">
                    <i className="fas fa-envelope text-gray-400"></i>
                </Input>
            
                <Input name="password" title="Kata Sandi" type="password" placeholder="Masukkan kata sandi Anda">
                    <i className="fas fa-lock text-gray-400"></i>
                </Input>
            
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <input
                        id="rememberMe"
                        type="checkbox"
                        name="remember-me"
                        className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Ingat Saya
                        </label>
                    </div>
                
                    <div className="text-sm">
                        <Link to="/auth/forgot-password" className="font-medium text-green-600 hover:text-green-500">
                        Lupa Kata Sandi?
                        </Link>
                    </div>
                </div>
            
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 !rounded-button whitespace-nowrap cursor-pointer">Masuk</button>
            
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Belum memiliki akun?
                    
                        <Link to="/auth/register" className="ml-1 font-medium text-green-600 hover:text-green-500 cursor-pointer">Daftar</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
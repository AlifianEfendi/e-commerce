import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../elements/Input";

export default function FormRegister() {
    const [ showPassword, setShowPassword ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const values = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        }
    }

    return (
        <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Daftar Akun Baru</h2>
            
                <p className="text-gray-600">Isi data diri Anda untuk membuat akun baru</p>
            </div>
        
            <form onSubmit={handleSubmit}>
                <Input name="fullName" title="Nama Lengkap" type="text" placeholder="Masukkan nama lengkap" >
                    <i className="fas fa-user text-gray-400"></i>
                </Input>
            
                <Input name="email" title="Email" type="email" placeholder="Masukkan email Anda">
                    <i className="fas fa-envelope text-gray-400"></i>
                </Input>
            
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
                
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-lock text-gray-400"></i>
                        </div>
                    
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline focus:outline-green-500 focus:border-green-500"
                            placeholder="Masukkan kata sandi"
                            required
                            minLength={8}
                        />
                    
                        <div 
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400`}></i>
                        </div>
                    </div>
                
                    <p className="mt-1 text-xs text-gray-500">
                        <i className="fas fa-info-circle mr-1"></i>
                        Gunakan minimal 8 karakter dengan kombinasi huruf dan angka
                    </p>
                </div>
            
                <Input name="confirmPassword" title="Konfirmasi Kata Sandi" type="password" placeholder="Konfirmasi kata sandi" >
                    <i className="fas fa-lock text-gray-400"></i>
                </Input>
            
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 !rounded-button whitespace-nowrap cursor-pointer" >Daftar</button>
            
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Sudah memiliki akun? 
                    
                        <Link to="/auth/login" className="font-medium text-green-600 hover:text-green-500 cursor-pointer"> Masuk </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
import { Link } from "react-router-dom";
import Input from "../elements/Input";

export default function FormForgotPassword() {
    const handleSubmit = e => {
        e.preventDefault();
        const values = {
            email: e.target.email.value,
        }
    }

    return (
        <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Temukan email akun anda</h2>
            
                <p className="text-gray-600">Masukkan email Anda untuk mendapatkan link verifikasi.</p>
            </div>
        
            <form onSubmit={handleSubmit}>
                <Input name="email" title="Email" type="email" placeholder="Masukkan email Anda">
                    <i className="fas fa-envelope text-gray-400"></i>
                </Input>
            
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 !rounded-button whitespace-nowrap cursor-pointer">Dapatkan Link Verifikasi</button>
            
                <div className="mt-6 text-center">
                    <Link to="/auth/login" className="text-sm font-medium underline text-green-600 hover:text-green-500 cursor-pointer">Kembali ke login</Link>
                </div>
            </form>
        </div>
    )
}
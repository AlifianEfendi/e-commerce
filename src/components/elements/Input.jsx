import { useState } from "react";

export default function Input({ children, name, title, type, placeholder, required=false, addStyle="px-4 py-3" }) {
    const [ showPassword, setShowPassword ] = useState(false);

    return (
            <div className="mb-4">
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{title}</label>
            
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {children}
                    </div>
                
                    <input
                        {...type === "password" && { type: showPassword ? "text" : "password" }}
                        id={name}
                        name={name}
                        className={`${children ? "pl-10" : ""} w-full ${addStyle} border border-gray-300 rounded-lg focus:outline focus:outline-green-500 focus:border-green-500`}
                        autoComplete="off"
                        placeholder={placeholder}
                        required={required}
                        minLength={type === "password" ? 8 : undefined}
                    />
                
                    {type === "password" && (
                        <div 
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400`}></i>
                        </div>
                    )}
                </div>
            </div>
    )
}
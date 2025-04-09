import InputForm from "@common/Input";
import Button from "@common/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FormLogin() {
    const navigate = useNavigate();
    const [ isError, setIsError ] = useState({
        status: false,
        message: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            navigate("/store");
        }
    }, [navigate]);

    const handleLogin = async e => {
        e.preventDefault();
        try {
            const userData = JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
                expiresInMins: 60 * 24,
            })
        
            const response = await axios.post("https://dummyjson.com/auth/login", userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
            setIsError({
                status: false,
                message: ""
            });
            localStorage.setItem("token", response.data.accessToken);
            alert("Login successfully");
            navigate("/store");
        } catch(err) {
            if(err.response.status === 400) {
                const errorMessage = "*" + err.response?.data?.message || "*An error occurred";
                setIsError({
                    status: true,
                    message: errorMessage
                });
                setTimeout(() => {
                    setIsError({
                        status: false,
                        message: ""
                    });
                }, 5000);
            } else {
                console.error(err);
            }
        }
    }

    return(
        <form onSubmit={handleLogin}>
            {isError.status && <p className="text-red-500">{isError.message}</p>}
            <InputForm error={isError} type="text" placeholder="johnd54" name="username" title="Username" />
        
            <InputForm error={isError} type="password" placeholder="********" name="password" title="Password" />
        
            <Button styles="bg-blue-600" type="submit">Login</Button>
        </form>
    )
}
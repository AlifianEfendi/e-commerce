import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [ userData, setUserData ] = useState({});
    const [ mins, setMins ] = useState(0);
    const navigate = useNavigate();

    // * Check if token is expired, if so, remove token from local storage and redirect to login page
    // * Set interval to check token expiration every second
    useEffect(() => {
        setInterval(() => {
            const token = localStorage.getItem("token");
            if(token) {
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                setMins(decodedToken.exp - Math.floor(Date.now() / 1000));
                if(mins <= 0) {
                    setMins(0);
                }
            }
        }, 1000)
    }, []);

    // * Check if user is logged in, if not redirect to login page
    // * Fetch user data from API
    useEffect(() => {
        const token = localStorage.getItem("token");
    
        const getCurrentAuth = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error(error);
                if(error.response.status === 401) {
                    const message = error.response?.data?.message;
                    const errorMessage = message.includes("Invalid") ? "Token is invalid to login access!" : "Session expired, please login again";
                    alert(errorMessage);
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            }
        }
        getCurrentAuth();
        if(!token) {
            navigate("/login");
        }
    }, [mins, navigate]);

    return userData;
}
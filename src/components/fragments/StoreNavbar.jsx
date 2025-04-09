import Button from "@common/Button";

import { useLogin } from "@hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function StoreNavbar({ backTo=null }) {
    const [ totalCart, setTotalCart ] = useState(0);
    const cart = useSelector(state => state.cart.data);
    const navigate = useNavigate();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => acc + item.qty, 0);
        setTotalCart(sum);
    }, [cart]);

    const userData = useLogin();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if(!confirmLogout) return;
        alert("Logout success, see you next time👋");
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div className="flex justify-between items-center h-20 bg-blue-600 text-white px-10">
            {backTo ? <Button onClick={backTo} styles="w-max text-black bg-white">&#60; Back</Button> : <div></div>}
            <div className="flex items-center">
                <div className="flex items-center gap-2 p-1.5 pl-3 rounded-full bg-black">
                    <p>{`${userData.firstName} ${userData.lastName}`}</p>
                    <img className="w-8 aspect-square rounded-full bg-white p-1" src={userData.image} alt={userData.username} />
                </div>
            
                <Button onClick={handleLogout} styles="w-max bg-black ml-2">Logout</Button>
            
                <div className="relative">
                    <i className="fa-solid fa-cart-shopping ml-3 text-lg"></i>
                    <span className={`${ totalCart === 0 ? "hidden" : "" } absolute text-[7px] -top-1 -right-2 bg-red-500 text-white h-3.5 w-3.5 rounded-full flex items-center justify-center`}>{totalCart}</span>
                </div>
            </div>
        </div>
    )
}
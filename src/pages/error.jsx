import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/login");
    }, 3000);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-3 text-xl">Sorry, an unexpected error has occured</p>
            <p className="text-lg">Not Found</p>
        </div>
    )
}
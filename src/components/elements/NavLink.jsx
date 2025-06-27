import { Link } from "react-router-dom";

export default function NavLink({ title, href="", colors="text-gray-700 hover:text-green-600" }) {
    return (
        <Link to={href} className={'flex items-center space-x-0.5 lg:text-lg font-medium transition-colors ' + colors}>
            <p className=" font-medium">{title}</p>
        </Link>
    )
}
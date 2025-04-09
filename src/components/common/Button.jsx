export default function Button ({ styles, onClick=() => {} , type="button", children }) {
    return (
        <button 
        onClick={onClick} 
        className={`h-10 px-6 font-semibold rounded-md w-full cursor-pointer ${styles}`} 
        type={type}>{children}</button>
    )
}
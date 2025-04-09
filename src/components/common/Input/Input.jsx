export default function Input({ error, type, placeholder, name }) {
    // console.log(error);
    return (
        <input type={type} id={name} name={name} className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 ${error.status ? "3border-red-600" : "border"}`}  placeholder={placeholder}  minLength={type === "password" ? 8 : 1} required/>
    )
}
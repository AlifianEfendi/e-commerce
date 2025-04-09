export default function Label({ error, name, children }) {
    return (
        <label htmlFor={name} className={`block ${error.status ? "text-red-600" : "text-slate-700"} text-sm font-bold mb-2`}>{children}</label>
    )
}
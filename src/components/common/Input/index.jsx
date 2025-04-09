import Input from "./Input"
import Label from "./Label"
export default function InputForm({ error, type, placeholder, name, title }) {
    return (
        <div className="mb-6">
            <Label error={error} name={name}>{title}</Label>
            <Input error={error} type={type} name={name} placeholder={placeholder} />
        </div>
    )
}
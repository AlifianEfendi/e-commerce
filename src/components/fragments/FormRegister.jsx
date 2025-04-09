import InputForm from "@common/Input";
import Button from "@common/Button";

export default function FormRegister() {
    return(
        <form action="">
            <InputForm type="text" placeholder="John Doe" name="name" title="Full Name" />
        
            <InputForm type="email" placeholder="examples@gmail.com" name="email" title="Email" />
        
            <InputForm type="password" placeholder="********" name="password" title="Password" />
        
            <InputForm type="password" placeholder="********" name="confirmPassword" title="Confirm Password" />
        
            <Button styles="bg-blue-600">Register</Button>
        </form>
    )
}
import AuthLayout from "@layouts/AuthLayout"
import FormRegister from "@fragments/FormRegister"

export default function RegisterPage() {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    )
}
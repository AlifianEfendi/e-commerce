import AuthLayout from "@layouts/AuthLayout";
import FormLogin from "@fragments/FormLogin";

export default function LoginPage() {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}
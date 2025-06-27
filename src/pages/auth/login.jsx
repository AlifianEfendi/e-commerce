import FormLogin from "../../components/fragments/FormLogin";
import AuthShell from "../../components/layouts/AuthShell";

export default function LoginPage() {
    return (
        <AuthShell type="login">
            <FormLogin />
        </AuthShell>
    )
}
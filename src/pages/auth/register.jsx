import FormRegister from "../../components/fragments/FormRegister";
import AuthShell from "../../components/layouts/AuthShell";

export default function RegisterPage() {
    return (
        <AuthShell type="register">
            <FormRegister />
        </AuthShell>
    )
}
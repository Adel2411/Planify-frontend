import AuthContainer from "@/features/auth/components/AuthContainer";
import RegisterForm from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main
      className={
        "w-screen min-h-screen overflow-auto flex items-center justify-center p-4"
      }
    >
      <AuthContainer Title={"Register"}>
        <RegisterForm />
      </AuthContainer>
    </main>
  );
}

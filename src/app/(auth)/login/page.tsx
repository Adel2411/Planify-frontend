import AuthContainer from "@/features/auth/components/AuthContainer";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <main
      className={
        "w-screen min-h-screen overflow-auto flex items-center justify-center p-4"
      }
    >
      <AuthContainer Title={"Login"}>
        <LoginForm />
      </AuthContainer>
    </main>
  );
}

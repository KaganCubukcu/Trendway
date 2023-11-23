import LoginClient from "@/components/auth/LoginClient";
import { getCurrentUser } from "@/actions/getCurrentUser";

const LoginPage = async () => {
  const currentUser = await getCurrentUser();
  return <LoginClient currentUser={currentUser} />;
};

export default LoginPage;

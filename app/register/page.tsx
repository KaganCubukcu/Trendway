import RegisterClient from "@/components/auth/RegisterClient";
import { getCurrentUser } from "@/actions/getCurrentUser";

const RegisterPage = async () => {
  const currentUser = await getCurrentUser();

  return <RegisterClient currentUser={currentUser} />;
};

export default RegisterPage;

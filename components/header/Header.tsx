import CartCount from "@/components/header/CartCount";
import Logo from "@/components/header/Logo";
import Search from "@/components/header/Search";
import User from "@/components/header/User";
import HamburgerMenu from "@/components/header/HamburgerMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Header = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 fluid bg-early-dawn-600 w-screen px-3 md:px-10">
      <Logo />
      <Search />
      <CartCount />
      <User currentUser={currentUser} />
      <HamburgerMenu />
    </div>
  );
};

export default Header;

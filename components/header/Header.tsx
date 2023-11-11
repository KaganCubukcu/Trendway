import CartCount from "@/components/header/CartCount";
import Logo from "@/components/header/Logo";
import Search from "@/components/header/Search";
import User from "@/components/header/User";
import HamburgerMenu from "@/components/header/HamburgerMenu";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 fluid bg-red-400 w-screen px-3 md:px-10">
      <Logo />
      <Search />
      <CartCount />
      <User />
      <HamburgerMenu />
    </div>
  );
};

export default Header;

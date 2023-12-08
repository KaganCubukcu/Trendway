import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="px-2 py-1 rounded-md text-lg text-candlelight-600 md:text-2xl cursor-pointer"
    >
      <span className="text-early-dawn-100">Trendway</span>
    </Link>
  );
};

export default Logo;

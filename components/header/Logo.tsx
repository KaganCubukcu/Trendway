import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer bg-red-500"
    >
      <span>Trendway</span>
    </Link>
  );
};

export default Logo;

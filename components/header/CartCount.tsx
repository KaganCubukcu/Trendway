"use client";
import { MdShoppingBasket } from "react-icons/md";
import useCart from "@/hooks/useCart";
import Link from "next/link";
const CartCount = () => {
  const { productCartContext } = useCart();
  return (
    <Link href="/cart" className="hidden md:flex relative cursor-pointer">
      <MdShoppingBasket size={25} />
      <div className="absolute -top-1 -right-2 text-xs bg-black w-5 h-5 rounded-full flex items-center justify-center">
        {productCartContext?.length}
      </div>
    </Link>
  );
};

export default CartCount;

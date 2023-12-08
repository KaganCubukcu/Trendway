import Image from "next/image";
import { Rating } from "@mui/material";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link
      href={`product/${product.id}`}
      className="w-[240px] shadow-lg p-2 rounded-lg cursor-pointer flex flex-col mt-2 border border-1 border-early-dawn-500 h-[300px] justify-between"
    >
      <div className="relative h-[200px]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="text-center space-y-1">
        <div>{product.title}</div>
        <Rating name="read-only" value={4} readOnly />
        <div className="font-bold text-lg md:text-xl">{product.price} $</div>
      </div>
    </Link>
  );
};

export default ProductCard;

"use client";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Button from "@/components/general/Button";

const CartClient = () => {
  const { productCartContext } = useCart();
  console.log(productCartContext, "productCartContext");
  if (!productCartContext || productCartContext.length === 0) {
    return <div>Sepenizde Ürün Bulunmamaktadır</div>;
  }
  return (
    <div className="my-3 md:my-10">
      <div className="flex items-center gap-3 text-center border-b">
        <div className="w-1/5">Ürün Resmi</div>
        <div className="w-1/5">Ürün Adı</div>
        <div className="w-1/5">Ürün Miktarı</div>
        <div className="w-1/5">Ürün Fiyatı</div>
        <div className="w-1/5"></div>
      </div>
      <div>
        {productCartContext.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between text-center my-5"
          >
            <div className="w-1/5 flex items-center justify-center">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={100}
                height={100}
              />
            </div>
            <div className="w-1/5">{product.title}</div>
            <div className="w-1/5">{product.quantity}</div>
            <div className="w-1/5">{product.price}</div>
            <div className="w-1/5">
              <Button text="Ürünü Sil" onClick={() => {}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartClient;

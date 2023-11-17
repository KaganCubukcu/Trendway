"use client";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Button from "@/components/general/Button";
import Counter from "@/components/general/Counter";

const CartClient = () => {
  const {
    productCartContext,
    removeFromCart,
    removeAllFromCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = useCart();

  console.log(productCartContext, "productCartContext");

  if (!productCartContext || productCartContext.length === 0) {
    return <div>Sepenizde Ürün Bulunmamaktadır</div>;
  }
  // cart total price calculation
  let totalPrice = 0;
  productCartContext.forEach((product) => {
    totalPrice += product.quantity * product.price;
  });

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
            <Counter
              productCart={product}
              increaseFunc={() => addToBasketIncrease(product)}
              decreaseFunc={() => addToBasketDecrease(product)}
            />
            <div className="w-1/5">{product.price}</div>
            <div className="w-1/5">
              <Button
                text="Ürünü Sil"
                onClick={() => removeFromCart(product)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between my-5 py-5 border-t">
        <button
          onClick={() => removeAllFromCart()}
          className="w-1/5 underline text-sm"
        >
          Sepeti Sil
        </button>
        <div className="text-lg md:text-2xl font-bold">{totalPrice} $</div>
      </div>
    </div>
  );
};

export default CartClient;

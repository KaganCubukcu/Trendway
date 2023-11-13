"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductCartProps } from "./interfaces/ProductCartProps.interface";
import Counter from "@/components/general/Counter";
import { Rating } from "@mui/material";
import Button from "@/components/general/Button";
import useCart from "@/hooks/useCart";

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, productCartContext } = useCart();
  const [productCart, setProductCart] = useState<ProductCartProps>({
    id: product.id,
    title: product.title,
    description: product.description,
    thumbnail: product.thumbnail,
    price: product.price,
    quantity: 1,
  });
  console.log(productCartContext, "productCartContext");
  const increaseFunc = () => {
    if (productCart.quantity === 10) return;
    setProductCart({
      ...productCart,
      quantity: productCart.quantity + 1,
    });
  };

  const decreaseFunc = () => {
    if (productCart.quantity > 1) {
      setProductCart({
        ...productCart,
        quantity: productCart.quantity - 1,
      });
    }
  };
  return (
    <div className="mt-10">
      <div className="block justify-center  md:flex gap-10 ">
        <div className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px]">
          <Image src={product.thumbnail} alt={product.title} fill />
        </div>
        <div className="w-full md:w-1/2 space-y-3">
          <div className="text-xl md:text-2xl">{product?.title}</div>
          <Rating name="read-only" value={product?.rating} readOnly />
          <div>{product?.description}</div>
          <div className="flex items-center gap-2">
            <div>Stock: </div>
            {product?.stock ? (
              <div>
                <span className="text-green-600">Ürün stockta mevcut</span>
              </div>
            ) : (
              <div>
                <span className="text-red-600">Ürün stockta mevcut</span>
              </div>
            )}
          </div>
          <Counter
            productCart={productCart}
            increaseFunc={increaseFunc}
            decreaseFunc={decreaseFunc}
          />
          <div className="text-lg md:text-2xl font-bold">
            {product?.price} $
          </div>
          <Button
            text="Sepete Ekle"
            small
            onClick={() => {
              addToBasket(productCart);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailClient;

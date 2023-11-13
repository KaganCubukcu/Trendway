"use client";

import { createContext, useState, useContext, useCallback } from "react";
import { CartContextProps } from "./CartContextProps.interface";
import { ProductCartProps } from "@/components/products-detail/interfaces/ProductCartProps.interface";

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [productCartContext, setProductCartContext] = useState<
    ProductCartProps[] | null
  >(null);
  const addToBasket = useCallback(
    (product: ProductCartProps) => {
      setProductCartContext((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        return updatedCart;
      });
    },
    [productCartContext],
  );
  let value = {
    productCartQty,
    addToBasket,
    productCartContext,
  };
  return <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default useCart;

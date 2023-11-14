"use client";

import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { CartContextProps } from "./CartContextProps.interface";
import { ProductCartProps } from "@/components/products-detail/interfaces/ProductCartProps.interface";
import toast from "react-hot-toast";

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [productCartContext, setProductCartContext] = useState<
    ProductCartProps[] | null
  >(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    let getItemParse: ProductCartProps[] = JSON.parse(getItem);
    setProductCartContext(getItemParse);
  }, []);

  const addToBasket = useCallback(
    (product: ProductCartProps) => {
      console.log("Adding to basket:", product);
      setProductCartContext((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success("Ürün sepete eklendi");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [productCartContext],
  );

  const removeFromCart = useCallback(() => {}, []);
  let value = {
    productCartQty,
    addToBasket,
    productCartContext,
    removeFromCart,
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

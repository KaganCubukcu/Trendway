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

  const addToBasketIncrease = useCallback(
    (product: ProductCartProps) => {
      let updatedCart;
      if (product.quantity === 10) {
        return toast.error("Maksimum 10 adet sepete eklenebilir");
      }
      if (productCartContext) {
        updatedCart = productCartContext.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        updatedCart = [product];
      }
      setProductCartContext(updatedCart);
      toast.success("Ürün sepete eklendi");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    [productCartContext],
  );
  // Create function for decreasing
  const addToBasketDecrease = useCallback(
    (product: ProductCartProps) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Daha fazla ürün silemezsiniz");
      }
      if (productCartContext) {
        updatedCart = productCartContext.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      } else {
        updatedCart = [product];
      }
      setProductCartContext(updatedCart);
      toast.success("Ürün sepetten Silindi");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    [productCartContext],
  );
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

  const removeFromCart = useCallback(
    (productToRemove: ProductCartProps) => {
      if (productCartContext) {
        const filteredProducts = productCartContext.filter(
          (productInCart) => productInCart.id !== productToRemove.id,
        );
        setProductCartContext(filteredProducts);
        toast.success("Ürün sepetten Silindi");
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
      }
    },
    [productCartContext],
  );
  const removeAllFromCart = useCallback(() => {
    setProductCartContext(null);
    toast.success("Ürünler Sepetten Silindi");
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);
  let value = {
    productCartQty,
    addToBasket,
    productCartContext,
    removeFromCart,
    removeAllFromCart,
    addToBasketIncrease,
    addToBasketDecrease,
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

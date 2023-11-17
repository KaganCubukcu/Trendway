import { ProductCartProps } from "@/components/products-detail/interfaces/ProductCartProps.interface";

export interface CartContextProps {
  productCartQty: number;
  productCartContext: ProductCartProps[] | null;
  addToBasket: (product: ProductCartProps) => void;
  addToBasketIncrease: (product: ProductCartProps) => void;
  addToBasketDecrease: (product: ProductCartProps) => void;
  removeFromCart: (product: ProductCartProps) => void;
  removeAllFromCart: () => void;
}

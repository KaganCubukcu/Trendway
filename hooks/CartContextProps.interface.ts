import { ProductCartProps } from "@/components/products-detail/interfaces/ProductCartProps.interface";

export interface CartContextProps {
  productCartQty: number;
  productCartContext: ProductCartProps[] | null;
  addToBasket: (product: ProductCartProps) => void;
}

import { ProductCartProps } from "@/components/products-detail/interfaces/ProductCartProps.interface";

export interface CounterProps {
  productCart: ProductCartProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

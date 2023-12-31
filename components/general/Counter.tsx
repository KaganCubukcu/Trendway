import React from "react";
import { CounterProps } from "@/components/general/interfaces/CounterProps.interface";
const Counter: React.FC<CounterProps> = ({
  productCart,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle =
    "w-8 h-8 border flex items-center justify-center text-lg rounded-md cursor-pointer";
  return (
    <div className="flex items-center gap-2">
      <div className={buttonStyle} onClick={decreaseFunc}>
        -
      </div>
      <div className="text-lg md:text-xl">{productCart.quantity}</div>
      <div className={buttonStyle} onClick={increaseFunc}>
        +
      </div>
    </div>
  );
};

export default Counter;

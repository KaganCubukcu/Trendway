import React from "react";
import { AvatarProps } from "./interfaces/AvatarProps.interface";
import { RxAvatar } from "react-icons/rx";

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  if (image) return <img src={image} alt="" />;
  return (
    <div>
      <RxAvatar size="25" />
    </div>
  );
};
export default Avatar;

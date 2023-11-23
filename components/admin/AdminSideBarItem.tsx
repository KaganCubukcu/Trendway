import React from "react";
import { AdminSideBarItemPropsInterface } from "./interfaces/AdminSideBarItemProps.interface";
import Link from "next/link";

const AdminSideBarItem: React.FC<AdminSideBarItemPropsInterface> = ({
  selected,
  url,
  name,
  icon: Icon,
}) => {
  return (
    <Link
      href={url}
      className={`flex gap-2 items-center p-2 cursor-pointer ${
        selected ? "font-bold underline underline-offset-4" : "font-medium"
      }`}
    >
      <Icon size={25} />
      <div>{name}</div>
    </Link>
  );
};

export default AdminSideBarItem;

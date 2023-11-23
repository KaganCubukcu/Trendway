"use client";

import React from "react";
import AdminSideBarItem from "./AdminSideBarItem";
import { MdDashboard, MdBorderOuter, MdOutlineCreate } from "react-icons/md";
import { usePathname } from "next/navigation";
const AdminSideBar = () => {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "Özetler",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Ürün Oluştur",
      icon: MdOutlineCreate,
      url: "/admin/create",
    },
    {
      name: "Siparişlerim",
      icon: MdBorderOuter,
      url: "/admin/order",
    },
  ];
  return (
    <div className="w-1/6 border-r h-screen">
      <div>
        {adminPanel.map((admin, index) => (
          <AdminSideBarItem
            key={index}
            selected={pathname == admin.url}
            icon={admin.icon}
            name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSideBar;

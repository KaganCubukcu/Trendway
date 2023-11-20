"use client";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserProps } from "./interfaces/UserProps.interface";

const User: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunc = (type: any) => {
    if (type == "logout") {
      setOpenMenu(false);
      signOut();
      router.push("login");
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="hidden md:flex relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-1 cursor-pointer"
      >
        <AiOutlineUser size="25" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      <div>
        {openMenu && (
          <div className="absolute w-[150px] top-10 bg-white text-black shadow-xl right-0 p-2 rounded-md">
            {currentUser ? (
              <div className="space-y-1">
                <div>Admin</div>
                <div onClick={() => menuFunc("logout")}>Logout</div>
              </div>
            ) : (
              <div>
                <div onClick={() => menuFunc("register")}>Register</div>
                <div onClick={() => menuFunc("login")}>Login</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;

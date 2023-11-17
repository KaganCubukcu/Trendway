import React from "react";
const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full w-full background-red-300 flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthContainer;

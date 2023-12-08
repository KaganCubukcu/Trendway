import React from "react";
const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full w-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthContainer;

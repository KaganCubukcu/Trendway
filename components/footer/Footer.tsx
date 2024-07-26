import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="h-[150px] mt-5 flex justify-center items-center text-black">
      <div className="text-center flex flex-col justify-center items-center space-y-4">
        <div>
          <p className="text-lg font-semibold">TrendWay</p>
          <p className="text-sm">Stay Trendy, Shop Smart</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-700">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm">Created by Kağan Çubukçu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

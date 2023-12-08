import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-early-dawn-600 h-[150px] mt-5 flex justify-center items-center text-early-dawn-50">
      <div className="text-center flex flex-col justify-center items-center">
        <div>
          <p className="text-lg font-semibold">TrendWay</p>
          <p className="text-sm">Your trendy online destination</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
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
          <p className="text-sm">Create by Kağan Çubukçu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MenuIcon, X } from "lucide-react";
import { LogoImage } from "../../assets";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white flex items-center justify-between pl-6 lg:px-[200px] md:px-[50px] py-[25px] relative">
      <div>
        <img
          src={LogoImage}
          alt="logo_img"
          className="w-[120px] h-[40px] lg:w-[140px] lg:h-[50px] cursor-pointer"
        />
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-[48px] cursor-pointer font-semibold text-[16px]">
          <li>Home</li>
          <li>Feature</li>
          <li>Who to work</li>
          <li>Pricing</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <button className="bg-white text-black py-2 px-8 rounded-lg">
          Start free trail
        </button>
      </div>
      <div className="lg:hidden pr-[18px]">
        <button
          className={`focus:outline-none ${isOpen ? "hidden" : "block"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            <MenuIcon className="h-6 w-6" />
          </svg>
        </button>
      </div>
      <div
        className={`lg:flex lg:items-center lg:w-auto lg:hidden bg-white absolute z-[1000px] right-0 top-0 transition	delay-75	 ease-in ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-black bg-white pt-[25px] h-screen font-medium mt-4 absolute right-0 top-[-16px] p-[20px] w-[200px]">
          <div className="flex justify-end">
            <X color="black" onClick={() => setIsOpen(false)} />
          </div>
          <li>
            <a
              href="/"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { MenuIcon, X } from "lucide-react";
import { LogoImage } from "../../assets";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white flex items-center justify-between pl-6 lg:px-[200px] py-[25px]">
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
      {/* <header className="pr-5 lg:hidden">
        <div>
          <div>
            <button className="rounded-full">
              <MenuIcon className="h-6 w-6" onClick={() => setIsOpen(!isOpen)} />
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
          <div className={`w-[300px] bg-white h-[100%] p-6 ${isOpen ? 'block' : 'hidden'}`}>
            <nav className="grid gap-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Home
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                About
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Services
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header> */}
      <div className="lg:hidden pr-[8px] relative">
        <button
          className={`focus:outline-none ${isOpen ? 'hidden' : "block"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            <MenuIcon className="h-6 w-6" />
          </svg>
        </button>
      </div>
      <div
        className={`md:flex md:items-center md:w-auto lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div>
          <X color="black" onClick={() => setIsOpen(false)} />
        </div>
        <ul className="text-black bg-white font-medium mt-4 md:flex md:justify-end md:mt-0 absolute right-0 p-[20px] w-[200px]">
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

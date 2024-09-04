import { LogoImage } from "../../assets";

const Header = () => {
  return (
    <div className="text-white flex items-center justify-between pl-6 lg:px-[200px] py-[25px]">
      <div>
        <img src={LogoImage} alt="logo_img" className="w-[140px] h-[50px] cursor-pointer" />
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
    </div>
  );
};

export default Header;

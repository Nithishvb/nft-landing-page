import {
  FacebookImage,
  FooterLogo,
  InstagramImage,
  YoutubeImage,
} from "../../assets";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#EAEBEC] lg:mx-[110px]  lg:pb-[39px] p-[20px] lg:pt-[70px]">
      <footer className="bg-muted w-full flex flex-col lg:flex-row">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2">
            {/* <MountainIcon className="h-6 w-6" /> */}
            <img src={FooterLogo} alt="" />
            {/* <span className="font-semibold text-lg">NftX</span> */}
          </a>
          <p className=" pt-[15px] pb-[32px] text-[#7F848D]">
            Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl.
            Donec ut velit erat.
          </p>
        </div>
        <div className="container flex justify-between flex-col gap-[20px] lg:gap-0 lg:flex-row lg:pl-40 text-[#7F848D] text-[16px]">
          <div className="grid gap-1">
            <a href="#" className="text-sm hover:underline">
              Pricing
            </a>
            <a href="#" className="text-sm hover:underline">
              Features
            </a>
            <a href="#" className="text-sm hover:underline">
              About
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact
            </a>
          </div>
          <div className="grid gap-2">
            <a href="#" className="text-sm hover:underline">
              Blog
            </a>
            <a href="#" className="text-sm hover:underline">
              Documentation
            </a>
            <a href="#" className="text-sm hover:underline">
              Help Center
            </a>
            <a href="#" className="text-sm hover:underline">
              Community
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-black text-[16px]">
              Social Media
            </h4>
            <div className="flex pt-[18px] gap-4">
              <div className="cursor-pointer">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={FacebookImage} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={YoutubeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <p className="text-[18px] text-[#293241]">
          © 2024 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

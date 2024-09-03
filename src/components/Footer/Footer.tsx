import { FooterLogo } from "../../assets";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#EAEBEC] mx-[110px] pt-[70px]">
        <div>
            <div className="flex gap-2 items-center">
                <img src={FooterLogo} alt="" />
                <p>NftX</p>
            </div>
            <div>
                <p>Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. </p>
            </div>
            <div>
                <p>© 2022 All rights reserved.</p>
            </div>
        </div>
        <div>
            <ul>
                <li>Explore</li>
                <li>Explore</li>
                <li>Explore</li>
                <li>Explore</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Explore</li>
                <li>Explore</li>
                <li>Explore</li>
                <li>Explore</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;
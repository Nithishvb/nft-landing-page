import { HomeLeftRectangle, HomeRightRectangle  } from "../../assets";
import Header from "../Header/Header";
import HomeBanner from "./HomeBanner";
import HomeBannerImage from "./HomeBannerImage";

const Home = () => {
  return (
    <div className="bg-[#0D1728] h-[1276px] w-[100%] relative">
      <div className="w-[100%] top-0 left-0 w-full">
        <img
          src={HomeLeftRectangle}
          alt="rect_image"
          className="absolute top-0 left-[-230px]"
        />
        <img
          src={HomeRightRectangle}
          alt=""
          className="absolute top-0 right-0 w-[800px]"
        />
      </div>
      <div className="relative z-10">
        <Header />
      </div>
      <div className="relative z-10">
        <HomeBanner />
      </div>
      <div className="relative z-10">
        <HomeBannerImage />
      </div>
    </div>
  );
};

export default Home;

import { HomeDashboardImage } from "../../assets";

const HomeBannerImage = () => {
  return (
    <div className="flex justify-center pt-[40px] ">
      <img src={HomeDashboardImage} alt="" className="absolute px-[8px]" />
    </div>
  );
};

export default HomeBannerImage;

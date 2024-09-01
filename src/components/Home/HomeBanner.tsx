import HomeInput from "./HomeInput";

const HomeBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <p className="text-[#FFFFFF] text-[24px] pt-[50px] pb-[20px]">
          Using basic skills you can improve your business stuff with Around
        </p>
        <div>
          <h2 className="text-[#FFFFFF] text-[72px] font-bold">
            One Dashboard to Manage
          </h2>
          <h2 className="text-[#FFFFFF] text-[72px] font-bold">
            all Your business
          </h2>
        </div>
        <div className="py-[32px]">
            <HomeInput />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

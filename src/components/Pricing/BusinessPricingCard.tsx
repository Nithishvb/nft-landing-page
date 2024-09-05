import { BlueTrophy, BusinessApprove, CloseYellow } from "../../assets";

const BusinessPricingCard = () => {
  return (
    <div className="lg:w-[424px] h-[539px] bg-white mt-[74px] rounded-2xl border border-2 border-[#1681FE]">
      <div className="flex justify-between p-[32px] border-b-2 border-[#EAEBEC]">
        <div className="flex items-center gap-4 ">
          <div>
            <img src={BlueTrophy} alt="pricing_img" />
          </div>
          <div className="text-left">
            <div className="text-[#1681FE] text-[18px]">Starter</div>
            <p className="font-bold">
              $ <span className="lg:text-[30px]">75</span>{" "}
              <span className="text-[14px] text-[#545B67] lg:pl-[8px] font-medium">
                Per month
              </span>
            </p>
          </div>
        </div>
        {/* <div className="pt-4">
          <span className="bg-[#1681FE] text-white py-1 px-2 rounded-lg text-[5px] lg:text-[14px]">
            Recomended
          </span>
        </div> */}
      </div>
      <div className="p-[32px]">
        <div className="flex items-center gap-3 py-2">
          <img src={BusinessApprove} alt="approve" />
          <p className="text-[#293241] text-[13px] lg:text-[16px]">
            Using basic skills you can
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={BusinessApprove} alt="approve" />
          <p className="text-[#293241] text-[13px] lg:text-[16px]">
            Using basic skills you can
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={BusinessApprove} alt="approve" />
          <p className="text-[#293241] text-[13px] lg:text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={BusinessApprove} alt="approve" />
          <p className="text-[#293241] text-[13px] lg:text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={CloseYellow} alt="approve" />
          <p className="text-[#A9ADB3] text-[13px] lg:text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={CloseYellow} alt="approve" />
          <p className="text-[#A9ADB3] text-[13px] lg:text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
      </div>
      <div className="pt-[20px] px-[32px]">
        <button className="w-[100%] text-[#1681FE] border border-1 border-[#1681FE] rounded-xl h-[47px]">
          Get Start
        </button>
      </div>
    </div>
  );
};

export default BusinessPricingCard;

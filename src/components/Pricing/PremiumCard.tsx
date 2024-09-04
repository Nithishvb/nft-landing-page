import { CloseYellow, GreenTrophy, PremiumApprove } from "../../assets";

const PremiumCard = () => {
  return (
    <div className="lg:w-[424px] h-[539px] bg-white mt-[74px] rounded-2xl">
      <div className="flex justify-between p-[32px]">
        <div className="flex items-center gap-4 border-b-2 border-[#EAEBEC]">
          <div>
            <img src={GreenTrophy} alt="pricing_img" />
          </div>
          <div className="text-left">
            <div className="text-[#448C74] text-[18px]">Starter</div>
            <p className="font-bold">
              $ <span className="text-[30px]">15</span>{" "}
              <span className="text-[14px] text-[#545B67] pl-[8px] font-medium">
                Per month
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-[32px]">
        <div className="flex items-center gap-3 py-2">
          <img src={PremiumApprove} alt="approve" />
          <p className="text-[#293241] text-[16px]">
            Using basic skills you can
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={PremiumApprove} alt="approve" />
          <p className="text-[#293241] text-[16px]">
            Using basic skills you can
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={PremiumApprove} alt="approve" />
          <p className="text-[#293241] text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={PremiumApprove} alt="approve" />
          <p className="text-[#293241] text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={CloseYellow} alt="approve" />
          <p className="text-[#A9ADB3] text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src={CloseYellow} alt="approve" />
          <p className="text-[#A9ADB3] text-[16px]">
            Using basic skills you can improve
          </p>
        </div>
      </div>
      <div className="pt-[20px] px-[32px]">
        <button className="w-[100%] text-[#448C74] border border-1 border-[#448C74] rounded-xl h-[47px]">
          Get Start
        </button>
      </div>
    </div>
  );
};

export default PremiumCard;

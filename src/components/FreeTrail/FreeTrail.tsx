import { HomeDashboardImage } from "../../assets";

const FreeTrail = () => {
  return (
    <div className="bg-[#293241] w-[100%] lg:w-[1320px] h-[546px] rounded-3xl flex flex-col lg:flex-row relative overflow-hidden lg:my-[150px] lg:m-auto">
      <div className="p-[20px] lg:pl-[60px] pt-[60px] lg:pt-[90px] lg:w-[50%]">
        <div>
          <h2 className="text-[22px] lg:text-[48px] font-bold text-white">
            The best flows on the planet, at your fingertips.
          </h2>
        </div>
        <div className="pt-[24px]">
          <p className="text-[15px] lg:text-[22px] text-[#EAEBEC]">
            Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl.
            Donec ut velit erat.{" "}
          </p>
        </div>
        <div className="pt-[32px]">
          <button className="bg-white h-[37px] w-[150px] lg:h-[56px] lg:w-[200px] rounded-xl">
            Start free trail
          </button>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <div className="w-[300px]">
          <img
            src={HomeDashboardImage}
            alt=""
            className="absolute lg:top-10 bottom-[-40px] lg:w-[784px] lg:h-[549px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeTrail;

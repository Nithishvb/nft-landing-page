import { HomeDashboardImage } from "../../assets";

const FreeTrail = () => {
  return (
    <div className="bg-[#293241] w-[100%] lg:w-[1320px] h-[546px] my-[150px] m-auto rounded-3xl flex relative overflow-hidden ">
      <div className="pl-[60px] pt-[90px] w-[50%]">
        <div>
          <h2 className="text-[48px] font-bold text-white">
            The best flows on the planet, at your fingertips.
          </h2>
        </div>
        <div className="pt-[24px]">
          <p className="text-[22px] text-[#EAEBEC]">
            Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl.
            Donec ut velit erat.{" "}
          </p>
        </div>
        <div className="pt-[32px]">
          <button className="bg-white h-[56px] w-[200px] rounded-xl">Start free trail</button>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="w-[300px]"> 
            <img src={HomeDashboardImage} alt="" className="absolute top-10 bottom-0 w-[784px] h-[549px]" />
        </div>
      </div>
    </div>
  );
};

export default FreeTrail;

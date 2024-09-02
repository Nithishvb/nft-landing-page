import {
  UserWithChartOne,
  UserWithChartThree,
  UserWithChartTwo,
} from "../../assets";

const FeaturesChart = () => {
  return (
    <div className="pt-[250px] flex justify-center px-[50px] pb-[150px]">
      <div className="w-[50%] flex justify-center flex-col items-center gap-10">
        <div>
          <img src={UserWithChartOne} alt="img1" />
        </div>
        <div className="pl-[25px]">
          <img src={UserWithChartTwo} alt="img2" />
        </div>
        <div>
          <img src={UserWithChartThree} alt="img3" />
        </div>
      </div>
      <div className="w-[50%] px-[20px]">
        <div>
          <h2 className="text-[48px] text-[#293241] font-bold">The robust and highly customizable data analysis tool</h2>
        </div>
        <div>
          <p className="text-[24px] text-[#7F848D] pt-[24px]">
            Using basic skills you can improve your business stuff with Around
            Using basic skills you can improve your business stuff with Around
            Using basic skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesChart;

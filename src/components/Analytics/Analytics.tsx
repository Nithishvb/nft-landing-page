import { ArcheryImage, GroupAnalytics } from "../../assets";

const Analytics = () => {
  return (
    <div className="bg-[#293241] px-[130px] text-white flex justify-center gap-10">
      <div className="w-[50%] py-[150px]">
        <div className="bg-[#EDCB50] w-[100px] text-[18px] text-black text-center rounded-lg">
          Analytics
        </div>
        <div className="py-[24px]">
          <h2 className="text-[48px] font-bold">
            Analyze our data in a few clicks without too many stteings
          </h2>
        </div>
        <div>
          <div>
            {new Array(5).fill(0).map((_, index: number) => (
              <div className="flex items-center gap-4 py-2" key={index}>
                <img src={ArcheryImage} alt="" />
                <span className="text-[18px] text-[#D4D6D9]">
                  Using basic skills you can improve your business
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50%] py-[120px]">
        <div>
            <img src={GroupAnalytics} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

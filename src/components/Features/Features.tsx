import { FEATURES } from "../../constants";
import FeaturesCard from "./FeaturesCard";
import FeaturesChart from "./FeaturesChart";

const Features = () => {
  return (
    <div className="m-auto pt-[30px]">
      <div>
        <h2 className="font-bold text-[48px] text-[#293241] text-center">
          How Does It Work?
        </h2>
        <p className="pt-[20px] text-[24px] text-[#7F848D] text-center px-4 lg:px-0">
          Using basic skills you can improve your business stuff with Around
        </p>
      </div>
      <div className="flex justify-center flex-col items-center lg:flex-row gap-6 pt-[111px]">
        {FEATURES.map((feat) => (
          <FeaturesCard title={feat.title} description={feat.decription} key={feat.id} />
        ))}
      </div>
      <div>
        <FeaturesChart />
      </div>
    </div>
  );
};

export default Features;

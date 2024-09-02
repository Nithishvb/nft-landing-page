import { CardWaveimage } from "../../assets";

interface FeaturesCardPropType {
  title: string;
  description: string;
}

const FeaturesCard = ({ title, description }: FeaturesCardPropType) => {
  return (
    <div className="w-[312px] h-[200px] bg-[#1E2746] text-white rounded-2xl">
      <div>
        <img src={CardWaveimage} alt="" className="absolute" />
      </div>
      <div className="p-[24px]">
        <h2 className="font-bold text-[18px]">{title}</h2>
      </div>
      <div className="px-[24px] pb-[24px]">
        <span className="text-[#D4D6D9] text-[16px]">{description}</span>
      </div>
    </div>
  );
};

export default FeaturesCard;

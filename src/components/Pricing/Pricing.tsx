import BusinessPricingCard from "./BusinessPricingCard";
import PremiumCard from "./PremiumCard";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <div className="bg-[#F0F9FF] py-[150px] lg:px-[100px] text-center">
      <div>
        <h2 className="text-[48px] text-[#293241] font-bold">Pricing</h2>
        <p className="text-[24px] text-[#7F848D] pt-[32px]">
          Using basic skills you can improve your business stuff with Around
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row gap-10">
        <PricingCards />
        <BusinessPricingCard />
        <PremiumCard />
      </div>
    </div>
  );
};

export default Pricing;

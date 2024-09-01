import { FEEDBACKS } from "../../constants";
import FeedbackCards from "./FeedbackCards";

const Feedback = () => {
  return (
    <div className="mt-[400px] pb-[70px]">
      <div className="text-center">
        <h2 className="text-[48px] font-bold text-[#293241]">
          Customers have consistently
        </h2>
        <h2 className="text-[48px] font-bold text-[#293241]">
          rated Around 4.7/5 stars
        </h2>
      </div>
      <div className="flex justify-center items-center pt-[70px]">
        {FEEDBACKS.map((feedback) => (
          <FeedbackCards
            key={feedback.id}
            feedbackText={feedback.feedback}
            rating={feedback.rating}
            logo={feedback.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;

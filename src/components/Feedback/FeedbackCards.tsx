import { Star } from 'lucide-react';

interface FeedBackCardpropType {
  rating: number;
  feedbackText: string;
  logo: string;
}

const FeedbackCards = ({
  rating,
  feedbackText,
  logo,
}: FeedBackCardpropType) => {
    console.log(logo);
  return (
    <div>
      <div className="w-[440px] p-6 grid gap-6">
        <div className="flex items-center justify-center">
            <div className="flex justify-center gap-4">
                {Array(rating).fill(0).map(() => (
                    <Star color="#EDCB50" fill="#EDCB50" />
                ))}
            </div>
        </div>
        <div className="space-y-2">
          <p className='text-center'>
            {feedbackText}
          </p>
        </div>
        <div className="flex justify-center pt-[24px]">
          <img
            src="/placeholder.svg"
            width="100"
            height="50"
            alt="Logo"
            className="aspect-[2/1] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCards;

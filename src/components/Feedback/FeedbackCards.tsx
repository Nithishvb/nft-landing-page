import { Star } from 'lucide-react';
import { AmazondImage, GoogleImage, SpotifyImage } from '../../assets';

interface FeedBackCardpropType {
  rating: number;
  feedbackText: string;
  logo: string;
};

interface FeedbacksLogosType {
  google: typeof GoogleImage;
  amazon: typeof AmazondImage;
  spotify: typeof SpotifyImage;
}


const FeedbacksLogos: FeedbacksLogosType = {
  "google": GoogleImage,
  "amazon": AmazondImage,
  "spotify": SpotifyImage 
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
                {Array(rating).fill(0).map((_, index: number) => (
                    <Star color="#EDCB50" fill="#EDCB50" key={index} />
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
            src={FeedbacksLogos[logo]}
            width="200"
            height="78"
            alt="Logo"
            className="aspect-[2/1] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCards;

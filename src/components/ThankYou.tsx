import { useRating } from "../hooks/useRating";
import { ThankYouIcon } from "../components/icons/ThankYou";

export function ThankYou() {
  const { rating } = useRating();

  return (
    <div className="bg-blue-800 sm:max-w-[360px] max-w-[400px] w-full h-[380px] flex flex-col items-center pt-8 px-5 rounded-3xl">
      <ThankYouIcon />

      <div className="text-orange-800 bg-gray-700 rounded-full px-3 py-1 mt-8">
        <span>You selected {rating} out of 5</span>
      </div>

      <h3 className="text-gray-100 text-2xl font-bold mb-3 mt-7">Thank you!</h3>

      <p className="text-gray-400 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

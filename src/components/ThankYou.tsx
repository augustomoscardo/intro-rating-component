import { useRating } from "../hooks/useRating";

export function ThankYou() {
  const { rating } = useRating();

  return (
    <div className="bg-blue-800 max-w-[400px] w-full flex flex-col items-center p-7 rounded-3xl">
      <img className="" src="/img/illustration-thank-you.svg" alt="" />

      <div className="text-orange-800 bg-gray-700 rounded-full px-3 py-1 mt-8">
        <span>You selected {rating} out of 5</span>
      </div>

      <div className="flex justify-between w-full mt-6"></div>

      <h3 className="text-gray-100 text-2xl font-bold mb-3">Thank you!</h3>
      <p className="text-gray-400 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

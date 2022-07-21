import { useRating } from "../hooks/useRating";
import { ButtonRate } from "./ButtonRate";
import toast from "react-hot-toast";

interface RateProps {
  handleSubmit: () => void;
}

export function Rate({ handleSubmit }: RateProps) {
  const { rating, handleSelectRating } = useRating();

  return (
    <div className="bg-blue-800 sm:max-w-[360px] max-w-[400px] h-[380px] w-full flex flex-col items-start p-5 rounded-3xl">
      <img
        className=" p-3 bg-gray-700 rounded-full sm:mb-4 mb-6 sm:mt-3"
        src="/img/icon-star.svg"
        alt=""
      />

      <div>
        <h3 className="text-gray-100 text-2xl font-bold mb-3">
          How did we do?
        </h3>
        <p className="text-gray-400">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="flex justify-between w-full mt-6">
        {[...Array.from({ length: 5 })].map((_, i) => (
          <ButtonRate
            key={i}
            score={i + 1}
            selected={rating === i + 1}
            selectRating={() => handleSelectRating(i + 1)}
          />
        ))}
      </div>

      <button
        className="w-full bg-orange-800 sm:text-sm justify-center items-center rounded-3xl text-gray-100 font-bold uppercase tracking-widest hover:bg-gray-100 hover:text-orange-800 transition-colors px-2 py-3 mt-7 mb-4"
        type="button"
        onClick={
          rating > 0
            ? handleSubmit
            : () => toast.error("Please, choose a valid rating.")
        }
      >
        Submit
      </button>
    </div>
  );
}

import { useRating } from "../hooks/useRating";
import { ButtonRate } from "./ButtonRate";
import toast from "react-hot-toast";

interface RateProps {
  handleSubmit: () => void;
}

const scores = [1, 2, 3, 4, 5];

export function Rate({ handleSubmit }: RateProps) {
  const { rating, handleSelectRating } = useRating();

  return (
    <div className="bg-blue-800 sm:max-w-[350px] max-w-[400px] w-full flex flex-col items-start sm:p-4 p-7 rounded-3xl">
      <img
        className="sm:p-2 p-3 bg-gray-700 rounded-full sm:mb-6 mb-8"
        src="/img/icon-star.svg"
        alt=""
      />

      <div>
        <h3 className="text-gray-100 sm:text-lg text-xl font-bold mb-3">
          How did we do?
        </h3>
        <p className="text-gray-400 sm:text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="flex justify-between w-full mt-6">
        {/* {[...Array.from({ length: 5 })].map((_, i) => (
          <ButtonRate
            key={i}
            score={i + 1}
            // selectScore={handleSelectScore}
          />
        ))} */}
        {scores.map((score) => (
          <ButtonRate
            score={score}
            selected={rating === score}
            selectRating={() => handleSelectRating(score)}
          />
        ))}
      </div>

      <button
        className="w-full bg-orange-800 sm:text-sm justify-center items-center rounded-3xl text-gray-100 font-bold uppercase tracking-widest hover:bg-gray-100 hover:text-orange-800 transition-colors p-2 mt-6 "
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

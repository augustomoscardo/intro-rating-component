interface ButtonRateProps {
  score: number;
  selectRating: () => void;
  selected: boolean;
}

export function ButtonRate({ score, selectRating, selected }: ButtonRateProps) {
  return (
    <button
      onClick={selectRating}
      className={`${
        selected
          ? "bg-gray-300 text-gray-100"
          : "bg-gray-700 text-gray-400 hover:bg-orange-800 hover:text-gray-100"
      } sm:text-sm  font-bold rounded-full sm:w-10 sm:h-10 w-12 h-12  transition-colors`}
    >
      {score}
    </button>
  );
}

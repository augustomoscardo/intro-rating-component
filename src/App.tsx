import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Rate } from "./components/Rate";
import { ThankYou } from "./components/ThankYou";
import { RatingProvider } from "./hooks/useRating";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <RatingProvider>
      <div className="sm:max-w-[375px] max-w-[1440px] p-4 mx-auto my-0 h-screen flex justify-center items-center flex-col">
        {isSubmitted ? <ThankYou /> : <Rate handleSubmit={handleSubmit} />}

        <div className="flex gap-4 mt-10">
          <p className="text-gray-300">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
              target="_blank"
              rel="noreferrer"
              className="text-orange-800 hover:text-gray-100 font-bold"
            >
              Frontend Mentor
            </a>
            .
          </p>
          <p className="text-gray-300">
            Coded by{" "}
            <a
              href="https://github.com/augustomoscardo"
              target="_blank"
              rel="noreferrer"
              className="text-orange-800 hover:text-gray-100 font-bold"
            >
              Augusto Moscardo
            </a>
            .
          </p>
        </div>
      </div>
      <Toaster />
    </RatingProvider>
  );
}

export default App;

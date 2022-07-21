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
      <div className="sm:max-w-[375px] max-w-[1440px] p-2 mx-auto my-0 h-screen flex justify-center items-center">
        {isSubmitted ? <ThankYou /> : <Rate handleSubmit={handleSubmit} />}
      </div>
      <Toaster />
    </RatingProvider>
  );
}

export default App;

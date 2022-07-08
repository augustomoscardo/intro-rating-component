import { createContext, ReactNode, useContext, useState } from "react";

interface RatingProviderProps {
  children: ReactNode;
}

interface RatingContextData {
  rating: number;
  handleSelectRating: (n: number) => void;
}

const RatingContext = createContext<RatingContextData>({} as RatingContextData);

export function RatingProvider({ children }: RatingProviderProps) {
  const [rating, setRating] = useState(0);

  function handleSelectRating(n: number) {
    setRating(n);
  }

  return (
    <RatingContext.Provider value={{ rating, handleSelectRating }}>
      {children}
    </RatingContext.Provider>
  );
}

export function useRating() {
  const context = useContext(RatingContext);

  return context;
}

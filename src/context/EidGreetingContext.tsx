
import React, { createContext, useContext, useState, ReactNode } from "react";

interface EidGreetingContextType {
  name: string;
  setName: (name: string) => void;
  isCardReady: boolean;
  setIsCardReady: (ready: boolean) => void;
  greetingType: string;
  setGreetingType: (type: string) => void;
}

const EidGreetingContext = createContext<EidGreetingContextType | undefined>(undefined);

export const EidGreetingProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [isCardReady, setIsCardReady] = useState(false);
  const [greetingType, setGreetingType] = useState("standard");

  return (
    <EidGreetingContext.Provider
      value={{
        name,
        setName,
        isCardReady,
        setIsCardReady,
        greetingType,
        setGreetingType
      }}
    >
      {children}
    </EidGreetingContext.Provider>
  );
};

export const useEidGreeting = () => {
  const context = useContext(EidGreetingContext);
  if (context === undefined) {
    throw new Error("useEidGreeting must be used within an EidGreetingProvider");
  }
  return context;
};

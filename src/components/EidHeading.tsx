
import React from 'react';
import { cn } from "@/lib/utils";

interface EidHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const EidHeading = ({ children, className }: EidHeadingProps) => {
  return (
    <h1 
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold text-eid-gold text-center leading-tight",
        "mb-6 font-serif tracking-wide animate-fade-in",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default EidHeading;

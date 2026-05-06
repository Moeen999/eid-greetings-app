
import React from 'react';

interface CrescentMoonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CrescentMoon = ({ className = "", size = "md" }: CrescentMoonProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-float`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M76.9,11.7c-2.9,0.5-7.2,1.7-9.5,2.8c-21.1,9.4-31.8,33.4-24.8,55.7c2.3,7.3,8.2,16.3,13.8,21.2c2.6,2.2,3.1,2.5,2.2,1.1c-6.2-9.3-8.8-18.8-8.5-31c0.2-11.5,2.6-19.9,8.6-30.1c5.8-9.9,14-17.4,24.6-22.3c4-1.8,4.2-2,3.2-1.9C85.3,7.4,80.6,6.4,76.9,11.7z" 
          fill="#D4AF37"
        />
      </svg>
    </div>
  );
};

export default CrescentMoon;

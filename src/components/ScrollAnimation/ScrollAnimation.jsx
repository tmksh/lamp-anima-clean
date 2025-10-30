import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ScrollAnimation = ({ 
  children, 
  className = ""
}) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
    >
      {children}
    </div>
  );
};


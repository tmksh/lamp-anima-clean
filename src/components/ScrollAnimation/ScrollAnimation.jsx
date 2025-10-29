import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ScrollAnimation = ({ 
  children, 
  className = "",
  animation = "fade-in", // fade-in, fade-in-left, fade-in-right, scale-in
  delay = 0,
  threshold = 0.1
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const animationClass = `scroll-${animation}`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};


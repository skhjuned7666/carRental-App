import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const Card = ({ children, className = "", glow = false }: CardProps) => {
  const baseClasses =
    "bg-gradient-to-br from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-2xl border border-[#2E2E2E]";
  const glowClass = glow ? "glow-effect" : "";

  return (
    <div className={`${baseClasses} ${glowClass} ${className}`}>{children}</div>
  );
};

export default Card;

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E50914]";

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-[#E50914] to-[#FF3838] hover:from-[#FF3838] hover:to-[#E50914] text-white",
      secondary:
        "bg-gradient-to-r from-[#2E2E2E] to-black hover:from-[#FF3838] hover:to-[#E50914] text-white",
      outline:
        "bg-transparent border-2 border-[#E50914] hover:bg-[#E50914]/20 text-white",
    };

    const sizeClasses = {
      sm: "py-2 px-4 text-sm",
      md: "py-3 px-6 text-base",
      lg: "py-4 px-8 text-lg",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

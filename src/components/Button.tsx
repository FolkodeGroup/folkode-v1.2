"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    fullWidth = false, 
    children, 
    ...props 
  }, ref) => {
    
    // Clases base comunes
    const baseClasses = `
      inline-flex items-center justify-center 
      font-roboto font-bold rounded-lg 
      transition-colors duration-300 
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-60 disabled:cursor-not-allowed
      ${fullWidth ? "w-full" : ""}
    `;
    
    // Tamaños
    const sizeClasses = {
      md: "px-4 py-2 text-button",
      lg: "px-6 py-3 text-button",
    };
    
    // Variantes usando tus variables CSS
    const variantClasses = {
      primary: "bg-primary text-inverse hover:bg-primary-hover focus:ring-primary",
      secondary: "bg-secondary text-inverse hover:bg-secondary-hover focus:ring-secondary",
      accent: "bg-accent text-inverse hover:bg-accent-hover focus:ring-accent",
    };

    return (
      <button
        ref={ref}
        className={`
          ${baseClasses} 
          ${sizeClasses[size]} 
          ${variantClasses[variant]} 
          ${className || ''}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
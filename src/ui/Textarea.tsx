"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";


export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "primary" | "secondary";
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseClasses = "px-4 py-2 rounded-lg border transition-colors min-h-[100px]";
    const variantClasses = {
      primary: "bg-surface border-default text-primary focus:border-primary",
      secondary: "bg-background border-subtle text-secondary focus:border-secondary",
    };

    return (
      <textarea
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
        placeholder="Escribime algo bonito"
        {...props}
      />
    );
  }
);


Textarea.displayName = "Textarea";

export default Textarea;
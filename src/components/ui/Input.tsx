import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full bg-transparent border-b border-ink/20 px-0 py-2 text-lg ring-offset-paper file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink/30 focus-visible:outline-none focus-visible:border-ink focus-visible:placeholder:text-ink/60 transition-colors disabled:cursor-not-allowed disabled:opacity-50 font-serif italic",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";
export { Input };

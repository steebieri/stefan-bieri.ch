import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center transition-colors duration-300 disabled:opacity-50",
                    "px-6 py-2 font-serif italic text-lg tracking-wide",
                    // Primary: Minimalist underline/border style
                    variant === "primary" && "border border-ink/10 hover:border-ink/60 hover:bg-ink/5 rounded-sm",
                    // Secondary: Muted text, no border
                    variant === "secondary" && "text-ink/60 hover:text-ink",
                    // Ghost: Pure text, subtle hover
                    variant === "ghost" && "hover:bg-ink/5 rounded-sm",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
export { Button };

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("w-full py-20 px-6 md:px-12 max-w-screen-xl mx-auto", className)}
                {...props}
            />
        );
    }
);
Section.displayName = "Section";
export { Section };

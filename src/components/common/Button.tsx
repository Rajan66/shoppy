import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
    "flex items-center justify-center gap-2 rounded-lg text-base font-medium transition duration-300",
    {
        variants: {
            variant: {
                default: "bg-foreground text-background hover:bg-foreground/80",
                primary:
                    "bg-primary text-primary-foreground hover:bg-secondary hover:text-primary",
                secondary: "bg-secondary text-secondary-foreground hover:bg-primary/80",
                destructive: "bg-destructive text-white hover:bg-destructive/80",
            },
            size: {
                sm: "text-sm h-6 px-2 py-1",
                md: "text-base h-8 px-4 py-2",
                lg: "text-lg h-10 px-6 py-4",
                xl: "text-lg h-10 px-8 py-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "lg",
        },
    }
);

// Extends base button properties while adding variant and size props
interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariantProps {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
);

export default Button;

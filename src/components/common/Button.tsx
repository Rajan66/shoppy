import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
    "flex items-center justify-center gap-2 rounded-lg text-base font-medium",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/80",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            },
            size: {
                sm: "text-sm h-6 px-2 py-1",
                md: "text-base h-8 px-4 py-2",
                lg: "text-lg h-10 px-6 py-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "lg",
        },
    }
);

// extends the properties of base html button and custom button variant
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => (
    <button className={buttonVariants({ className, variant, size })} {...props}></button>
);
export default Button;

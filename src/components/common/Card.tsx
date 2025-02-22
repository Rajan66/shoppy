import React from "react";

import { cn } from "@/lib/utils";

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn("border bg-card bg-card-foreground shadow", className)}
        {...props}
    />
);

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col p-4", className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-lg font-semibold", className)} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-4", className)} {...props} />
);

const CardDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-base opacity-90", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex items-center p-4", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter };

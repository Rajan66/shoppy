import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Loader2Icon className="size-10 text-foreground duration-300 animate-spin" />
        </div>
    );
};

export default Loading;

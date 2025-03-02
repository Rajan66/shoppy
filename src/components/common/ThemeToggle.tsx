"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    if (theme === undefined) {
        return <Sun className="theme" />;
    }

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center"
        >
            <Sun className={cn("theme", theme === "dark" ? "block" : "hidden")} />
            <Moon className={cn("theme", theme === "light" ? "block" : "hidden")} />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
};

export default ThemeToggle;

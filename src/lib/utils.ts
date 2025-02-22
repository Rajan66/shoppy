// utils to merge tailwind classes
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* clsx helps join class names conditionally,
 * while twmegre resolve conflicting classes (eg: px-2 px-4 => px-4)
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

"use client";
import { useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";

import { items } from "./list/items";
import Link from "next/link";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);
    return (
        <div>
            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <div className="h-screen w-screen fixed bg-background text-foreground inset-0 p-10">
                    <X
                        onClick={() => setIsOpen(false)}
                        className="text-destructive mb-10"
                    />
                    <ul className="flex flex-col gap-6 justify-center items-center">
                        {items.map((item, index) => (
                            <Link href={item.url} key={index}>
                                <li className="uppercase text-sm group transition duration-300 opacity-80 hover:opacity-100">
                                    {item.name}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background"></span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;

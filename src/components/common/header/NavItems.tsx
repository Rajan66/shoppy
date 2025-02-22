import React from "react";
import Link from "next/link";

import { items } from "./list/items";

const NavItems = () => {
    return (
        <div>
            {/* TODO add on hover color change stuff */}
            <ul className="flex gap-6 justify-center items-center">
                {items.map((item, index) => (
                    <Link href={item.url} key={index}>
                        <li className="uppercase text-sm group transition duration-300 opacity-90 hover:opacity-100">
                            {item.name}
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background"></span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default NavItems;

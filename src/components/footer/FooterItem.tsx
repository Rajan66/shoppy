import React from "react";
import Link from "next/link";

import { items } from "./list/items";

const FooterItem = () => {
    return (
        <div>
            <ul className="flex gap-4 justify-center items-center">
                {items.map((item, index) => (
                    <Link href={item.url} key={index}>
                        <li>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default FooterItem;

import React from "react";
import Link from "next/link";

type FooterItemProps = {
    name: string;
    url: string;
};

const FooterItem = ({ items, title }: { items: FooterItemProps[]; title: string }) => {
    return (
        <div className="flex flex-col gap-4 tracking-wide">
            <h2 className="uppercase font-semibold">{title}</h2>
            <ul className="flex flex-col gap-2 justify-center text-start items-start">
                {items.map((item, index) => (
                    <Link href={item.url} key={index}>
                        <li className="transition duration-300 opacity-80 hover:opacity-100">
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default FooterItem;

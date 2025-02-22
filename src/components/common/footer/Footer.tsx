import React from "react";

import FooterItem from "./FooterItem";
import { items, discounts, support } from "./list/items";

const Footer = () => {
    return (
        <footer className="w-full bottom-0 p-4 overflow-x-hidden bg-foreground text-background opacity-90">
            <div className="flex justify-between items-start mt-14 mb-20 mx-14 gap-10">
                <div className="flex flex-col items-start w-[400px] gap-4">
                    <h2 className="text-sm text-pretty break-words">
                        {`We believe fashion is more than just Clothing—it’s a statement, a
                        Mood, and a way of life. Our mission is to bring you the latest
                        trends, timeless styles, and everyday essentials, all at the tap
                        of a button.`}
                    </h2>
                </div>
                <FooterItem items={items} title="Shoppy" />
                <FooterItem items={support} title="Support" />
                <FooterItem items={discounts} title="Promotions & Discounts" />
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";

import FooterItem from "./FooterItem";
import { items, discounts, support } from "./list/items";

const Footer = () => {
    return (
        <footer className="w-full bottom-0 p-4 overflow-x-hidden bg-foreground text-background">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:flex justify-between items-start mt-14 mb-20 mx-2 sm:mx-6 lg:mx-14 gap-10">
                <div className="flex flex-col items-start gap-4 col-span-1 lg:w-[400px]">
                    <h2 className="text-base text-pretty break-words">
                        {`We believe fashion is more than just Clothing—it’s a statement, a
                        Mood, and a way of life. Our mission is to bring you the latest
                        trends, timeless styles, and everyday essentials, all at the tap
                        of a button.`}
                    </h2>
                </div>
                <div className="col-span-1">
                    <FooterItem items={items} title="Shoppy" />
                </div>

                <div className="col-span-1">
                    <FooterItem items={support} title="Support" />
                </div>

                <div className="col-span-1">
                    <FooterItem items={discounts} title="Promotions & Discounts" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

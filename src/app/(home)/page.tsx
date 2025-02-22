import React from "react";

import Hero from "@/components/home/Hero";
import Trending from "@/components/home/Trending";

const page = () => {
    return (
        <div className="">
            <Hero />
            <div className="mx-14">
                <Trending />
            </div>
        </div>
    );
};

export default page;

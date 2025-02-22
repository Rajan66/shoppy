import React from "react";

import Button from "../common/Button";
import TrendingCard from "./TrendingCard";

import tees from "@/assets/tees.jpg";
import shirts from "@/assets/shirts.jpg";
import jorts from "@/assets/jorts.jpg";
import shorts from "@/assets/shorts.jpg";

const Trending = () => {
    return (
        <div className="section-margin">
            <div className="flex justify-between">
                <h1 className="uppercase text-3xl font-extrabold tracking-wide">
                    Trending Categories
                </h1>
                <div className="flex gap-6">
                    <Button
                        variant="secondary"
                        size="xl"
                        className="text-base rounded-none uppercase"
                    >
                        Mens
                    </Button>
                    <Button
                        variant="primary"
                        size="xl"
                        className="text-base border border-secondary rounded-none uppercase"
                    >
                        Womens
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 mt-4 gap-6">
                <TrendingCard title="tees" image={tees} />
                <TrendingCard title="jorts" image={shirts} />
                <TrendingCard title="shirts" image={jorts} />
                <TrendingCard title="shorts" image={shorts} />
            </div>
        </div>
    );
};

export default Trending;

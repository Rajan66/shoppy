import React, { Dispatch, SetStateAction } from "react";
import Button from "../common/Button";

type TrendingCategoryProps = {
    genderFilter: "Mens" | "Womens";
    setGenderFilter: Dispatch<SetStateAction<"Mens" | "Womens">>;
};

const TrendingCategory = ({ setGenderFilter, genderFilter }: TrendingCategoryProps) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row justify-between">
            <h1 className="uppercase text-3xl font-extrabold tracking-wide">
                Trending Categories
            </h1>
            <div className="flex gap-6">
                <Button
                    variant={genderFilter === "Mens" ? "secondary" : "primary"}
                    size="xl"
                    className="text-base border border-secondary rounded-none uppercase"
                    onClick={() => setGenderFilter("Mens")}
                >
                    Mens
                </Button>
                <Button
                    variant={genderFilter === "Womens" ? "secondary" : "primary"}
                    size="xl"
                    className="text-base border border-secondary rounded-none uppercase"
                    onClick={() => setGenderFilter("Womens")}
                >
                    Womens
                </Button>
            </div>
        </div>
    );
};

export default TrendingCategory;

"use client";
import { Category } from "@/types";
import { useGetCategories } from "@/hooks/categoryQueries";
import { useEffect, useState } from "react";

import Button from "../common/Button";
import TrendingCard from "./TrendingCard";
import TrendingCardSkeleton from "./skeleton/TrendingCardSkeleton";
import TrendingCategory from "./TrendingCategory";

const Trending = () => {
    const [genderFilter, setGenderFilter] = useState<"Mens" | "Womens">("Mens");
    const { data: categories, isLoading, error } = useGetCategories();
    const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

    useEffect(() => {
        const filtered = categories?.filter(
            (category: Category) => category?.gender === genderFilter
        );
        setFilteredCategories(filtered || []);
    }, [categories, genderFilter]);

    useEffect(() => {
        console.log(filteredCategories);
    }, [filteredCategories]);
    if (isLoading) {
        return (
            <div className="mx-4 my-6 md:section-margin">
                <TrendingCategory
                    genderFilter={genderFilter}
                    setGenderFilter={setGenderFilter}
                />

                <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 mt-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <TrendingCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-4 my-6 md:section-margin">
                <TrendingCategory
                    genderFilter={genderFilter}
                    setGenderFilter={setGenderFilter}
                />
                <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 mt-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <TrendingCard key={index} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="mx-4 my-6 md:section-margin">
            <TrendingCategory
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
            />
            <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 mt-4 gap-6">
                {filteredCategories
                    ?.slice(0, 4)
                    .map((category: Category, index: number) => (
                        <TrendingCard
                            key={index}
                            title={category.title}
                            imageUrl={category.imageUrl}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Trending;

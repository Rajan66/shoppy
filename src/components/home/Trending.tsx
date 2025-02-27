"use client";
import { Category } from "@/types";
import { useGetCategories } from "@/hooks/categoryQueries";

import Button from "../common/Button";
import TrendingCard from "./TrendingCard";
import TrendingCardSkeleton from "./skeleton/TrendingCardSkeleton";

const Trending = () => {
    const { data: categories, isLoading, error } = useGetCategories();

    if (isLoading) {
        return (
            <div className="section-margin grid grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <TrendingCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="section-margin grid grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <TrendingCard key={index} />
                ))}
            </div>
        );
    }
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
                {categories?.items?.map((category: Category, index: number) => (
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

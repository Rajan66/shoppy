import React from "react";

import Hero from "@/components/home/Hero";
import Trending from "@/components/home/Trending";
import SponsorCard from "@/components/home/SponsorCard";

import billie from "@/assets/billie.jpg";
import ProductCard from "@/components/home/ProductCard";

const page = () => {
    return (
        <div className="">
            <Hero
                title="Elevate Your Style"
                description="Discover the latest trends and timeless classics, all in one place."
                imageUrl="/hero.jpg"
                btnTitles={["Shop Now", "Explore Collections"]}
                secondBtn={true}
            />
            <Trending />
            <Hero
                title="Back to Reality"
                imageUrl="/hero1.jpg"
                btnTitles={["Shop Now"]}
                secondBtn={false}
                flag={true}
            />
            <SponsorCard
                title="Graphic Tees"
                image={billie}
                description="Billie Ellish Oversized Tee $70"
                buttonTitle="Shop Womens"
            />
            <div className="section-margin flex gap-6">
                {Array.from({ length: 4 }, (_, i) => (
                    <ProductCard
                        key={i}
                        title="Luck & Trouble"
                        image={billie}
                        description="Frankie cap sleeve mini dress brown"
                        price={90.0}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;

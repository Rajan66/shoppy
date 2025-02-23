import Hero from "@/components/home/Hero";
import Trending from "@/components/home/Trending";
import SponsorCard from "@/components/home/SponsorCard";
import ProductList from "@/components/home/ProductList";

import billie from "@/assets/billie.jpg";
import party from "@/assets/party.jpg";

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

            <div className="grid grid-cols-1 lg:grid-cols-2 section-margin gap-4">
                <SponsorCard
                    title="Graphic Tees"
                    image={billie}
                    description="Billie Ellish Oversized Tee $70"
                    buttonTitle="Shop Womens"
                />
                <SponsorCard
                    title="Party Shirts"
                    image={party}
                    description="Neovision on Lock Shirt $70"
                    buttonTitle="Shop Mens"
                />
            </div>
            <ProductList />
        </div>
    );
};

export default page;

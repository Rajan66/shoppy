import React from "react";
import Link from "next/link";
import Button from "../common/Button";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
            <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"></div>
            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-5xl font-bold md:text-6xl">Elevate Your Style</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Discover the latest trends and timeless classics, all in one place.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <Link href="/shop">
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200"
                        >
                            Shop Now
                        </Button>
                    </Link>
                    <Link href="/collections">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="border border-white text-white bg-transparent hover:bg-white hover:text-black"
                        >
                            Explore Collections
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from "react";
import Link from "next/link";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Button from "../common/Button";
import { cn } from "@/lib/utils";

type HeroProps = {
    title?: string;
    description?: string;
    imageUrl: string;
    btnTitles: string[];
    secondBtn?: boolean;
    flag?: boolean;
};

const Hero = ({
    title,
    description,
    imageUrl,
    btnTitles,
    secondBtn,
    flag,
}: HeroProps) => {
    return (
        <section
            className={cn(
                " relative w-full flex flex-col justify-center items-center text-center bg-gray-900 text-white",
                flag ? "h-[500px]" : "h-screen"
            )}
        >
            <div
                className={`absolute inset-0 bg-cover opacity-50 `}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">{description}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <Link href="/shop">
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 rounded-none"
                        >
                            {btnTitles[0]}
                        </Button>
                    </Link>
                    {secondBtn && (
                        <Link href="/collections">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="border border-white text-white bg-transparent hover:bg-white hover:text-black rounded-none"
                            >
                                {btnTitles[1]}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

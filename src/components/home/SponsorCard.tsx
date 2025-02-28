import React from "react";
import Image from "next/image";
import Link from "next/link";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { Card, CardDescription, CardHeader } from "../common/Card";

type SponsorCardProps = {
    image: string | StaticImport;
    title: string;
    description: string;
    buttonTitle: string;
};

const SponsorCard = ({ title, description, image, buttonTitle }: SponsorCardProps) => {
    return (
        <Link href={"/product"} className="flex">
            <Card className="w-full h-[800px]">
                <CardHeader className="relative p-0 h-full">
                    <Image
                        src={image}
                        width={1000}
                        height={600}
                        alt="model"
                        className="w-full h-full object-cover"
                    />
                    <CardDescription className="absolute bottom-4 flex flex-col items-start text-white px-4 gap-2">
                        <h2 className="text-3xl font-bold uppercase">{title}</h2>
                        <p className="text-base font-semibold uppercase">{description}</p>
                        <p className="uppercase tracking-wide">{buttonTitle}</p>
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
};

export default SponsorCard;

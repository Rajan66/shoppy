import React from "react";
import Image from "next/image";
import Link from "next/link";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { Card, CardDescription, CardHeader } from "../common/Card";

type TrendingCardProps = {
    imageUrl?: string | StaticImport;
    title?: string;
};

const TrendingCard = ({ imageUrl, title = "Tees" }: TrendingCardProps) => {
    return (
        <Link href={"/product"} className="flex">
            <Card className="w-[430px] h-[600px]">
                <CardHeader className="relative p-0 h-full">
                    <Image
                        src={imageUrl ?? "/tees.jpg"}
                        width={400}
                        height={600}
                        alt="model"
                        className="w-full h-full object-cover"
                    />
                    <CardDescription className="absolute bottom-4 flex flex-col items-start text-white px-4 gap-2">
                        <h2 className="text-4xl font-bold uppercase">{title}</h2>
                        <p className="uppercase tracking-wide">Shop now</p>
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
};

export default TrendingCard;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader } from "../common/Card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProductCardProps = {
    image: string | StaticImport;
    title: string;
    description: string;
    price: number;
};

const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
    return (
        <Link href={"/shop"} className="flex">
            <Card>
                <CardHeader className="p-0">
                    <Image
                        src={image}
                        width={400}
                        height={600}
                        alt="model"
                        className="w-full h-full"
                    />
                </CardHeader>
                <CardContent className="flex flex-col items-start px-4 uppercase text-sm tracking-wider">
                    <CardDescription>{title}</CardDescription>
                    <CardDescription>{description}</CardDescription>
                    <CardDescription>{`$${price}`}</CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;

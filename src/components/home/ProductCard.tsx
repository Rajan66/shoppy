import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader } from "../common/Card";

import billie from "@/assets/billie.jpg";

type ProductCardProps = {
    image?: string;
    title: string;
    category: string;
    price: number;
};

const ProductCard = ({
    title = "Billie Ellish Oversized Tee",
    category = "Graphic Tees",
    price = 70,
    image,
}: ProductCardProps) => {
    return (
        <Link href={"/shop"} className="flex">
            <Card>
                <CardHeader className="p-0">
                    <Image src={image ?? billie} width={500} height={500} alt="model" />
                </CardHeader>
                <CardContent className="flex flex-col gap-1 items-start px-4 uppercase text-sm tracking-wider">
                    <CardDescription className="text-xs">{category}</CardDescription>
                    <CardDescription>{title}</CardDescription>
                    <CardDescription>{`$${price.toFixed(2)}`}</CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;

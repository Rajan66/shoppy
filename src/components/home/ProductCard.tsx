import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader } from "../common/Card";
import AddCart from "../cart/AddCart";

import billie from "@/assets/billie.jpg";

type ProductCardProps = {
    id?: string;
    imageUrl?: string;
    title?: string;
    category?: string;
    price?: number;
};

const ProductCard = ({
    id,
    title = "Billie Ellish Oversized Tee",
    category = "Graphic Tees",
    price = 70,
    imageUrl,
}: ProductCardProps) => {
    return (
        <Card>
            <CardHeader className="p-0">
                <Link href={`/product/${id}`}>
                    <Image
                        src={imageUrl ?? billie}
                        width={500}
                        height={500}
                        alt="model"
                    />
                </Link>
            </CardHeader>
            <CardContent className="flex justify-between items-end">
                <div className="flex flex-col gap-1 items-start px-4 uppercase text-sm tracking-wider">
                    <CardDescription className="text-xs">{category}</CardDescription>
                    <CardDescription>{title}</CardDescription>
                    <CardDescription>{`$${price.toFixed(2)}`}</CardDescription>
                </div>
                <AddCart
                    productId={id}
                    title={title}
                    category={category}
                    price={price}
                    imageUrl={imageUrl}
                />
            </CardContent>
        </Card>
    );
};

export default ProductCard;

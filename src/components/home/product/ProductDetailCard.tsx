"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useGetProduct } from "@/hooks/productQueries";
import AddCart from "@/components/cart/AddCart";
import Button from "@/components/common/Button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/common/Card";
import ProductDetailSkeletonCard from "../skeleton/ProductDetailCardSkeleton";

const ProductDetailCard = () => {
    const { id: id } = useParams();
    const { data: product, isLoading, error } = useGetProduct(id?.toString());

    if (isLoading) return <ProductDetailSkeletonCard />;
    return (
        <Card>
            <CardContent className="flex gap-4 justify-start items-start">
                <CardHeader>
                    <Image
                        src={product?.imageUrl ?? "/thrills.jpg"}
                        height={600}
                        width={600}
                        alt="detail image"
                        className="h-[450px] object-center"
                    />
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-start w-1/2 gap-4">
                    <CardDescription className="text-lg">
                        {product?.category}
                    </CardDescription>

                    <CardDescription className="text-2xl font-semibold">
                        {product?.title}
                    </CardDescription>

                    <CardDescription className="text-justify">
                        {product?.description}
                    </CardDescription>

                    <CardContent className="p-0 flex justify-between w-full">
                        <CardDescription className="text-lg">
                            ${product?.price?.toFixed(2)}
                        </CardDescription>
                        <AddCart
                            productId={product?.id}
                            category={product?.category}
                            title={product?.title}
                            imageUrl={product?.imageUrl}
                            price={product?.price}
                        />
                    </CardContent>
                    <Button className="w-full">Checkout</Button>
                </CardContent>
            </CardContent>
        </Card>
    );
};

export default ProductDetailCard;

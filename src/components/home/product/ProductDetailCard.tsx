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
    if (error)
        return (
            <div className="flex justify-center items-center text-3xl text-destructive">
                Something went wrong!
            </div>
        );
    return (
        <Card className="border-0 shadow-none">
            <CardContent className="flex flex-col gap-4 justify-center items-center lg:items-start lg:flex-row ">
                <CardHeader>
                    <Image
                        src={product?.imageUrl ?? "/thrills.jpg"}
                        height={600}
                        width={500}
                        alt="detail image"
                    />
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-start gap-4 lg:w-1/2">
                    <CardDescription className="text-lg uppercase tracking-wider">
                        {product?.category}
                    </CardDescription>

                    <CardDescription className="text-2xl font-semibold uppercase tracking-wider">
                        {product?.title}
                    </CardDescription>

                    <CardDescription className="text-justify">
                        {product?.description}
                    </CardDescription>

                    <CardContent className="p-0 flex justify-between w-full">
                        <CardDescription className="text-lg">
                            ${Number(product?.price).toFixed(2)}
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

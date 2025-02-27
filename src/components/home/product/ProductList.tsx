"use client";
import React from "react";
import { useGetProducts } from "@/hooks/productQueries";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";

const ProductList = () => {
    const { data: products, isLoading, error } = useGetProducts();
    console.log(products);

    if (isLoading) {
        return (
            <div className="mx-4 my-6 md:section-margin grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-4 my-6 md:section-margin grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className="mx-4 my-6 md:section-margin grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.slice(0, 4).map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    category={product.category}
                    imageUrl={product.imageUrl}
                    price={Number(product.price)}
                />
            ))}
        </div>
    );
};

export default ProductList;

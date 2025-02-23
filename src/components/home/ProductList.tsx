"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useGetProducts } from "@/hooks/productQueries";
import { Product } from "@/types";
import Loading from "../common/Loading";

const ProductList = () => {
    const { data: products, isLoading, error } = useGetProducts();

    console.log(error);
    if (isLoading) {
        return <Loading />;
    }

    if (error?.message === "Network Error") {
        return (
            <div className="section-margin grid grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className="section-margin grid grid-cols-4 gap-6">
            {products?.items?.slice(0, 4).map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    category={product.category}
                    image={product.imageUrl}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductList;

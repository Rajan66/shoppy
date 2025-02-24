"use client";
import React from "react";
import { useGetProducts } from "@/hooks/productQueries";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import Loading from "../common/Loading";

const ProductList = () => {
    const { data: products, isLoading, error } = useGetProducts();

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="section-margin grid grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCard key={index}/>
                ))}
            </div>
        );
    }

    return (
        <div className="section-margin grid grid-cols-4 gap-6">
            {products?.items?.slice(0, 4).map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    category={product.category}
                    imageUrl={product.imageUrl}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductList;

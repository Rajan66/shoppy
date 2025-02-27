import React from "react";
import ProductList from "@/components/home/product/ProductList";

const page = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold opacity-80 uppercase mx-4 my-6 md:section-margin">
                All Products
            </h2>
            <ProductList flag={false} />
        </div>
    );
};

export default page;

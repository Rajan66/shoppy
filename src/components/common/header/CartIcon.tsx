"use client";
import React from "react";
import Link from "next/link";

import { useCartStore } from "@/hooks/store";
import { ShoppingBag } from "lucide-react";

const CartIcon = () => {
    const { count } = useCartStore();
    return (
        <Link href={"/cart"} className="relative w-fit">
            <div className="cart-count">{count}</div>
            <ShoppingBag />
        </Link>
    );
};

export default CartIcon;

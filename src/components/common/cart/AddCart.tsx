"use client";
import { useMutation } from "@tanstack/react-query";
import { ShoppingCartIcon } from "lucide-react";
import { toast } from "react-toastify";

import { createCart } from "@/api/carts";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/hooks/store";

type CartProductProps = {
    productId?: string;
};

const AddCart = ({ productId }: CartProductProps) => {
    const { addItem: addCartItem } = useCartStore();
    const { isPending, mutate } = useMutation({
        mutationFn: createCart,
        onSuccess: () => {
            toast.success("Item added to cart");
        },
        onError: () => {
            toast.error("Failed to add to cart");
        },
    });

    const addToCart = () => {
        if (!productId) {
            toast.error("Product ID is missing!");
            return;
        }
        const payload = { userId: 1, products: [productId] };
        addCartItem(productId); // adds cart to global state
        mutate(payload);
    };
    return (
        <ShoppingCartIcon
            className={cn("cursor-pointer", isPending ? "opacity-50" : "")}
            onClick={addToCart}
        />
    );
};

export default AddCart;

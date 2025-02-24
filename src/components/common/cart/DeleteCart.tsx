"use client";
import { useMutation } from "@tanstack/react-query";
import { ShoppingCartIcon, Trash2Icon } from "lucide-react";
import { toast } from "react-toastify";

import { useCartStore } from "@/hooks/store";
import { deleteCart } from "@/api/carts";
import { cn } from "@/lib/utils";

type CartProductProps = {
    productId?: string;
};

const DeleteCart = ({ productId }: CartProductProps) => {
    const { removeItem: removeCartItem } = useCartStore();
    const { isPending, mutate } = useMutation({
        mutationFn: deleteCart,
        onSuccess: () => {
            toast.success("Item removed from cart");
        },
        onError: () => {
            toast.error("Failed to remove item from cart");
        },
    });

    const removeFromCart = () => {
        if (!productId) {
            toast.error("Product ID is missing!");
            return;
        }
        removeCartItem(productId);
        mutate(productId);
    };
    return (
        <Trash2Icon
            className={cn(
                "cursor-pointer text-destructive",
                isPending ? "opacity-50" : ""
            )}
            onClick={removeFromCart}
        />
    );
};

export default DeleteCart;

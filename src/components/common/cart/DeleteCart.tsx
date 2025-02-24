"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { toast } from "react-toastify";

import { useCartStore } from "@/hooks/store";
import { updateCart } from "@/api/carts";
import { cn } from "@/lib/utils";

type CartProductProps = {
    productId?: string;
};

const DeleteCart = ({ productId }: CartProductProps) => {
    const queryClient = useQueryClient();

    const { cartId, items, removeItem: removeCartItem } = useCartStore();
    const { isPending, mutate } = useMutation({
        mutationFn: () => {
            const updatedProductIds = items
                .map((item) => item?.id)
                .filter((id) => id !== productId);

            const updatePayload = {
                userId: 1,
                products: updatedProductIds,
            };

            return updateCart(cartId, updatePayload);
        },
        onSuccess: () => {
            toast.success("Item removed from cart");
            queryClient.invalidateQueries({ queryKey: ["carts"] });
            removeCartItem(productId || "");
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
        mutate();
    };

    return (
        <X
            className={cn(
                "cursor-pointer text-destructive",
                isPending ? "opacity-50" : ""
            )}
            onClick={removeFromCart}
        />
    );
};

export default DeleteCart;

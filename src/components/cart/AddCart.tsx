"use client";
import { useEffect } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ShoppingCartIcon } from "lucide-react";

import { useCartStore } from "@/hooks/store";
import { createCart, updateCart } from "@/api/carts";
import { cn } from "@/lib/utils";

type CartProductProps = {
    productId?: string;
    title?: string;
    category?: string;
    imageUrl?: string;
    price: number;
};

const AddCart = ({ productId, title, category, imageUrl, price }: CartProductProps) => {
    const queryClient = useQueryClient();
    const { cartId, addItem: addCartItem } = useCartStore();
    const { items } = useCartStore();

    const {
        data: response,
        isPending,
        mutate,
    } = useMutation({
        mutationFn: (payload: any) => {
            if (!cartId) {
                // cart doesn't exist => create new cart
                return createCart(payload);
            } else {
                // cart exist => update existing cart
                const productIds = items.map((item) => item?.id);
                const updatePayload = {
                    user_id: 1,
                    products: [...productIds, productId],
                };
                queryClient.invalidateQueries({ queryKey: ["carts"] });
                return updateCart(cartId, updatePayload);
            }
        },
        onError: () => {
            toast.error("Failed to add to cart");
        },
    });

    // when response promise completes add the item to the cart
    useEffect(() => {
        console.log(response);
        if ((response?.status === 201 && response.data?.id) || response?.status === 200) {
            toast.success("Item added to cart");
            const product = {
                id: productId || "",
                title: title || "",
                category: category || "",
                imageUrl: imageUrl || "",
                price,
            };
            addCartItem(product, response.data.id);
        }
    }, [response, addCartItem]);

    const addToCart = () => {
        if (!productId) {
            toast.error("Product ID is missing!");
            return;
        }
        const payload = {
            user_id: 1,
            products: [productId],
        };
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

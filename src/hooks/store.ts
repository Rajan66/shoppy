import { Product } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Cart = {
    count: number;
    cartId: string;
    items: (Product | undefined)[];
    addItem: (item: Product, cartId: string) => void;
    removeItem: (id: string) => void;
};

export const useCartStore = create<Cart>()(
    persist(
        (set, get) => ({
            count: 0,
            cartId: "",
            items: [],
            addItem: (item: Product, cartId: string) => {
                const existingItem = get().items.find(
                    (existingItem) => existingItem?.id === item.id
                );

                if (!existingItem) {
                    set({
                        items: [...get().items, item],
                        count: get().count + 1,
                        cartId: cartId,
                    });
                }
            },
            removeItem: (id: string) => {
                set({
                    items: get().items.filter((item) => item?.id !== id),
                    count: get().count - 1,
                });
            },
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

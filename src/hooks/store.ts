import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Cart = {
    count: number;
    items: string[];
    addItem: (id: string) => void;
    removeItem: (id: string) => void;
};

export const useCartStore = create<Cart>()(
    persist(
        (set, get) => ({
            count: 0,
            items: [],
            addItem: (id: string) => {
                // check if the id already exists
                if (!get().items.includes(id)) {
                    set({ items: [...get().items, id], count: get().count + 1 });
                }
            },
            removeItem: (id: string) => {
                set({
                    items: get().items.filter((itemId) => itemId !== id),
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

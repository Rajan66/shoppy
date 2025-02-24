"use client";
import Image from "next/image";

import { Minus, PlusIcon } from "lucide-react";

import { useCartStore } from "@/hooks/store";
import DeleteCart from "@/components/common/cart/DeleteCart";
import { Card, CardContent, CardDescription } from "../Card";

import billie from "@/assets/billie.jpg";

const CartList = () => {
    const { items } = useCartStore();
    return (
        <div>
            {items.map((item, index) => (
                <Card key={index} className="border-none shadow-none">
                    <CardContent className="flex gap-10 items-center justify-between    ">
                        <div className="flex gap-10 items-center">
                            <DeleteCart productId={item?.id} />
                            <Image
                                src={item?.imageUrl ?? billie}
                                width={100}
                                height={200}
                                alt="product image"
                                className=""
                            />
                            <CardDescription>
                                <p>{item?.category}</p>
                                <p>{item?.title}</p>
                                <p>${item?.price.toFixed(2)}</p>
                            </CardDescription>
                        </div>
                        <div>
                            <CardDescription className="flex gap-3 border justify-center cursor-pointer">
                                <Minus className="border-r" />
                                <p>1</p>
                                <PlusIcon className="border-l" />
                            </CardDescription>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default CartList;

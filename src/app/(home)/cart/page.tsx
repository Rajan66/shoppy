import { ShoppingBag } from "lucide-react";
import CartList from "@/components/cart/CartList";
import Button from "@/components/common/Button";

const page = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-4 p-10">
            <div className="flex flex-col justify-start items-center gap-4">
                <div className="flex items-center justify-center gap-4">
                    <ShoppingBag />
                    <h2 className="text-2xl font-light">Shopping Cart</h2>
                </div>
                <CartList />
            </div>
        </div>
    );
};

export default page;

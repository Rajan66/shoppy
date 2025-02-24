import CartList from "@/components/cart/CartList";
import { ShoppingBag } from "lucide-react";

const page = () => {
    return (
        <div className="flex flex-col justify-start items-center gap-4 p-10 h-screen">
            <div className="flex items-center justify-center gap-4">
                <ShoppingBag />
                <h2 className="text-2xl font-light">Shopping Cart</h2>
            </div>
            <CartList />
        </div>
    );
};

export default page;

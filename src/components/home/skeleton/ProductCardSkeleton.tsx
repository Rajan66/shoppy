import { ShoppingCartIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../common/Card";

const ProductCard = () => {
    return (
        <Card>
            <CardHeader className="p-0">
                <CardTitle>
                    <div className="w-full bg-gray-200 h-[500px]"></div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-end">
                <div className="flex flex-col gap-1 items-start px-4 uppercase text-sm tracking-wider w-full text-gray-200">
                    <CardDescription className="text-xs bg-gray-200 rounded-xl w-full">
                        dummy
                    </CardDescription>
                    <CardDescription className="bg-gray-200 rounded-xl w-1/2 text-gray-200">
                        dummy
                    </CardDescription>
                    <CardDescription className="bg-gray-200 rounded-xl w-fit">
                        30.00
                    </CardDescription>
                </div>
                <ShoppingCartIcon className="cursor-pointer opacity-50" />
            </CardContent>
        </Card>
    );
};

export default ProductCard;

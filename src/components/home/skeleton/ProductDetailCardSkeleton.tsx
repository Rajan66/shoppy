import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import Button from "@/components/common/Button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/common/Card";

const ProductDetailSkeletonCard = () => {
    return (
        <Card>
            <CardContent className="flex gap-4 justify-start items-start">
                <CardHeader>
                    <Image
                        src={"/thrills.jpg"}
                        height={600}
                        width={600}
                        alt="detail image"
                        className="h-[450px] object-center"
                    />
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-start w-1/2 gap-4">
                    <CardDescription className="text-lg skeleton">
                        Category
                    </CardDescription>

                    <CardDescription className="text-2xl font-semibold w-full skeleton">
                        title
                    </CardDescription>

                    <CardDescription className="text-justify w-full h-[300px] skeleton">
                        description
                    </CardDescription>

                    <CardContent className="p-0 flex justify-between w-full">
                        <CardDescription className="text-lg skeleton">
                            $20.00
                        </CardDescription>
                        <ShoppingCartIcon className="opacity-50 cursor-pointer" />
                    </CardContent>
                    <Button className="w-full">Checkout</Button>
                </CardContent>
            </CardContent>
        </Card>
    );
};

export default ProductDetailSkeletonCard;

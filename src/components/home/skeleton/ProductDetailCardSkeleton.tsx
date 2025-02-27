import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import Button from "@/components/common/Button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/common/Card";

const ProductDetailSkeletonCard = () => {
    return (
        <Card>
            <CardContent className="flex gap-4 justify-center items-start">
                <CardHeader>
                    <Image
                        src={"/thrills.jpg"}
                        height={600}
                        width={500}
                        alt="detail image"
                    />
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-start w-1/2 gap-4">
                    <CardDescription className="text-lg uppercase tracking-wider skeleton">
                        Category
                    </CardDescription>
                    <CardDescription className="text-2xl w-full font-semibold uppercase tracking-wider skeleton">
                        Title
                    </CardDescription>

                    <CardDescription className="text-justify w-full h-[300px] skeleton">
                        Description
                    </CardDescription>

                    <CardContent className="p-0 flex justify-between w-full">
                        <CardDescription className="text-lg skeleton">
                            $30.00
                        </CardDescription>
                        <ShoppingCartIcon className="cursor-pointer opacity-50" />
                    </CardContent>
                <Button className="w-full">Checkout</Button>
                </CardContent>
            </CardContent>
        </Card>
    );
};

export default ProductDetailSkeletonCard;

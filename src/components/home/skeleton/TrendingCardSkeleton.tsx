import { Card, CardDescription, CardHeader } from "../../common/Card";

const TrendingCardSkeleton = () => {
    return (
        <div className="flex">
            <Card className="w-[430px] h-[600px]">
                <CardHeader className="relative p-0 h-full">
                    <div
                        className="w-full h-full object-cover bg-gray-200"
                    ></div>
                    <CardDescription className="absolute bottom-4 flex flex-col items-start px-4 gap-2 text-gray-200 w-full">
                        <h2 className="text-4xl font-bold uppercase bg-gray-100 text-gray-100 rounded-xl">title</h2>
                        <p className="uppercase tracking-wide bg-gray-100 text-gray-100 rounded-xl">Shop now</p>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default TrendingCardSkeleton;
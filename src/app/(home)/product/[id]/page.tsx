import Divider from "@/components/common/Divider";
import ProductDetailCard from "@/components/home/product/ProductDetailCard";
import ProductList from "@/components/home/product/ProductList";

const page = () => {
    return (
        <div className="flex flex-col gap-10">
            <ProductDetailCard />
            <Divider />
            <div className="flex flex-col justify-start items-start w-full">
                <h2 className="mx-4 my-6 md:section-margin text-4xl font-semibold uppercase opacity-80">
                    You may also like
                </h2>
                <ProductList />
            </div>
        </div>
    );
};

export default page;

import { getProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
    return { data, isLoading, error, refetch };
};

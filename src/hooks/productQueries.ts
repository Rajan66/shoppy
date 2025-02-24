import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/products";

export const useGetProducts = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
    return { data, isLoading, error, refetch };
};

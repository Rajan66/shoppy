import { useQuery } from "@tanstack/react-query";
import { getProducts, getProduct } from "@/api/products";

export const useGetProducts = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
    return { data, isLoading, error, refetch };
};

export const useGetProduct = (id?: string) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["products", id],
        queryFn: () => getProduct(id),
    });
    return { data, isLoading, error, refetch };
};

import { getCarts } from "@/api/carts";
import { useQuery } from "@tanstack/react-query";

export const useGetCarts = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["carts"],
        queryFn: getCarts,
    });
    return { data, isLoading, error, refetch };
};


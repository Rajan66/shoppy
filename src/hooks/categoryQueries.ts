import { getCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });
    return { data, isLoading, error, refetch };
};

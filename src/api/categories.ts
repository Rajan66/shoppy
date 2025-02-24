import { GetRequest } from "@/lib/axios";

export const getCategories = async () => {
    try {
        const response = await GetRequest(
            "http://localhost:8090/api/collections/categories/records"
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

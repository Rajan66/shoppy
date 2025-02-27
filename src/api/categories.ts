import { GetRequest } from "@/lib/axios";

export const getCategories = async () => {
    try {
        const response = await GetRequest(
            "http://localhost:8000/api/categories/"
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

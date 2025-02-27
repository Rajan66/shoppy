import { GetRequest, api } from "@/lib/axios";

export const getCategories = async () => {
    try {
        const response = await GetRequest(`${api}/categories/`);
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

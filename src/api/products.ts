import { GetRequest } from "@/lib/axios";

export const getProducts = async () => {
    try {
        const response = await GetRequest(
            "http://localhost:8000/api/products/"
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export const getProduct = async (id?: string) => {
    try {
        const response = await GetRequest(
            `http://localhost:8000/api/products/${id}`
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

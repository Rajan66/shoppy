import { GetRequest, api } from "@/lib/axios";

export const getProducts = async () => {
    try {
        const response = await GetRequest(`${api}/products/`);
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getProduct = async (id?: string) => {
    try {
        const response = await GetRequest(`${api}/products/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

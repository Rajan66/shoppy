import { GetRequest } from "@/lib/axios";

export const getProducts = async () => {
    try {
        const response = await GetRequest("https://fakestoreapi.com/products");
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

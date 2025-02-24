import { DeleteRequest, GetRequest, PostRequest } from "@/lib/axios";

export const getCarts = async () => {
    try {
        const response = await GetRequest(
            "http://localhost:8090/api/collections/cart/records"
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export const createCart = async (cart: any) => {
    try {
        console.log(cart);
        const response = await PostRequest(
            "http://localhost:8090/api/collections/cart/records",
            { ...cart },
            {}
        );
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteCart = async (id: string) => {
    try {
        const response = await DeleteRequest(
            "http://localhost:8090/api/collections/cart/records"
        );
        return response;
    } catch (error) {
        throw error;
    }
};

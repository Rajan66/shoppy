import { DeleteRequest, GetRequest, PatchRequest, PostRequest } from "@/lib/axios";

export const getCarts = async () => {
    try {
        const response = await GetRequest(
            "http://localhost:8000/api/carts/"
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export const createCart = async (body: any) => {
    try {
        const response = await PostRequest(
            "http://localhost:8000/api/carts/",
            { ...body },
            {}
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateCart = async (id: string, body: any) => {
    try {
        const response = await PatchRequest(
            `http://localhost:8000/api/carts/${id}`,
            { ...body }
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteCart = async (id: string) => {
    try {
        const response = await DeleteRequest(
            `http://localhost:8000/api/carts/${id}`
        );
        return response;
    } catch (error) {
        throw error;
    }
};

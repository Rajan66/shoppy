import { DeleteRequest, GetRequest, PatchRequest, PostRequest, api } from "@/lib/axios";

export const getCarts = async () => {
    try {
        const response = await GetRequest(`${api}/carts/`);
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export const createCart = async (body: any) => {
    try {
        const response = await PostRequest(`${api}/carts/`, { ...body }, {});
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateCart = async (id: string, body: any) => {
    try {
        const response = await PatchRequest(`${api}/carts/${id}/`, {
            ...body,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteCart = async (id: string) => {
    try {
        const response = await DeleteRequest(`${api}/carts/${id}/`);
        return response;
    } catch (error) {
        throw error;
    }
};

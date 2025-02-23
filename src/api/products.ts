import { GetRequest } from "@/lib/axios";

export const getProducts = async () => {
    try {
        const response = await GetRequest(
            "http://localhost:8090/api/collections/products/records"
        );
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

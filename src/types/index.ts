export type Product = {
    id: string;
    title: string;
    price: number;
    category: string;
    description?: string;
    image?: string;
    imageUrl: string;
};

export type Category = {
    id: string;
    title: string;
    image: string;
    gender: string;
    imageUrl: string;
};

export type Cart = {
    id: string;
    userId: number;
    date: Date;
    products: Product[];
};

export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    imageUrl: string;
};

export type Cart = {
    id: number;
    userId: number;
    date: Date;
    products: Product[];
};

export interface recipe {
    id: string;
    title: string;
    ingredient: ingredient[];
};

export interface ingredient {
    name: string;
    quantity: string;
    unit: string;
};
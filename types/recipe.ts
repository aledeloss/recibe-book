export interface recipe {
    id: string;
    title: string;
    ingredients: ingredient[];
    directions: string;
};

export interface ingredient {
    name: string;
    quantity?: string;
    unit?: string;
};
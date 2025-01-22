export interface Item {
    id: number;
    name: string;
    description: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export interface ItemProps {
    item: Item;
}

export interface ItemListProps {
    items: Item[];
}
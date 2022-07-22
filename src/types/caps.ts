export interface ICap {
    id: number;
    brand: {
        name: string,
        icon: string
    },
    name: string;
    price: number;
    size: {
        value: string
    }[];
    description: string;
    is_available: boolean;
    new_price: number;
    created_data: string;
    capsimage: {
        id: number,
        photo: string
    }[] | [];
}

export interface ICaps {
    caps: ICap[]
}

export interface IBasket {
    id: number;
    item: number;
    quantity: number;
    user: number;
}
import {IBasket} from "./caps";

export interface IUser {
    id: number;
    username: string;
    email: string;
    phone: string;
    date_joined: string;
    last_active: string | null;
    photo: string | null;
    first_name: string;
    last_name: string;
    is_verified: boolean;
    favourites: IBasket[];
    basket: IBasket[];
    orders: IBasket[];
}
import axios from "axios";
import {CAPS_URL} from "../common/constants";
import {IBasket, ICap} from "../types/caps";

//=slider=
//get slider
export const getSliderPost = async () => {
    try {
        const resp = await axios.get(`http://164.92.190.147:8003/api/caps/?limit=12`);
        return resp.data.results;
    }catch (e: any){
        return e.message;
    }
}


//=caps=
//get cap
export const getCapById = async (id: string | undefined | number) => {
    try {
        const response = await axios.get(`http://164.92.190.147:8003/api/caps/${id}/`);
        return response.data;
    }catch (e: any){
        return e.message;
    }
}
//get caps in basket
export const getCapsInBasket = async (baskets: IBasket[], caps: ICap[]) => {
    for (let i = 0; i < baskets.length; ++i) {
        caps.push(await getCapById(baskets[i].item));
    }
}


//=basket=
//post basket
export const postBasket = async (cap: IBasket) => {
    try {
        await axios.post(`http://164.92.190.147:8003/api/users/basket/`, cap);
    }catch (e: any) {
        return e.message
    }
}
//delete basket
export const deleteBasket = async (id: number, access: string) => {
    try {
        await axios.delete(
            `http://164.92.190.147:8003/api/users/basket/${id}/`,
            { headers: {authorization: `Bearer ${access}`} }
            );
    }catch (e: any) {
        return e.message
    }
}
//delete basket group
const deleteBasketGroup = async (caps: IBasket[], access: string) => {
    try {
        for (const cap of caps) {
            await axios.delete(
                `http://164.92.190.147:8003/api/users/basket/${cap.id}/`,
                { headers: {authorization: `Bearer ${access}`} });
        }
    }catch (e: any) {
        return e.message
    }
}


//=order=
export const postOrder = async (caps: IBasket[], access: string) => {
    try {
        for (const cap of caps) {
            await axios.post(
                `http://164.92.190.147:8003/api/orders/`,
                {item: cap.item, user: cap.user},
                { headers: {authorization: `Bearer ${access}`} }
            );
        }
        await deleteBasketGroup(caps, access); //clear basket
    }catch (e: any) {
        return e.message
    }
}
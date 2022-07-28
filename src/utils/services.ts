import axios from "axios";
import {CAPS_URL} from "../common/constants";
import {IBasket, ICap} from "../types/caps";

//=slider=
//get slider
export const getSliderPost = async () => {
    try {
        const resp = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=12`);
        return resp.data.results;
    }catch (e: any){
        return e.message;
    }
}


//=caps=
//get cap
export const getCapById = async (id: string | undefined | number) => {
    try {
        const response = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/${id}/`);
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
        await axios.post(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.BASKET}/`, cap);
    }catch (e: any) {
        return e.message
    }
}
//delete basket
export const deleteBasket = async (id: number, access: string) => {
    try {
        await axios.delete(
            `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.BASKET}/${id}/`,
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
                `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.BASKET}/${cap.id}/`,
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
                `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.ORDERS}/`,
                {item: cap.item, user: cap.user},
                { headers: {authorization: `Bearer ${access}`} }
            );
        }
        await deleteBasketGroup(caps, access); //clear basket
    }catch (e: any) {
        return e.message
    }
}

//custom caps in digit
export const getCapsInNumber = async () => {
    try {
        const resp = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.DIGITS}/`);
        return resp.data[0]
    }catch (e: any) {
        return e.message;
    }
}
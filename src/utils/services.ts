import axios from "axios";
import {CAPS_URL} from "../common/constants";
import {IBasket, ICap} from "../types/caps";

export const getSliderPost = async () => {
    try {
        const resp = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=12`);
        return resp.data.results;
    }catch (e: any){
        return e.message;
    }
}

export const getCapById = async (id: string | undefined | number) => {
    try {
        const response = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/${id}/`);
        return response.data;
    }catch (e: any){
        return e.message;
    }
}

export const getCapsInBasket = async (baskets: IBasket[], caps: ICap[]) => {
    for (let i = 0; i < baskets.length; ++i) {
        caps.push(await getCapById(baskets[i].item));
    }
}

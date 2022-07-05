import axios from "axios";
import {CAPS_URL} from "../common/constants";

export const getSliderPost = async () => {
    try {
        const resp = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=12`);
        return resp.data.results;
    }catch (e: any){
        return e.message;
    }
}

export const getCapById = async (id: number) => {
    try {

    }catch (e){

    }
}
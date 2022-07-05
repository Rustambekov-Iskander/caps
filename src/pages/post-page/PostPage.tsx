import React, {useEffect, useState} from 'react';
import Slider from "../../components/slider/Slider";
import axios from "axios";
import {CAPS_URL} from "../../common/constants";
import {ICaps} from "../../types/caps";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const params = useParams();
    const [cap, setCap] = useState();
    const [caps, setCaps] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        ( async () => {
            const response = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/${params.id}`);
            const resp = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=12`);
            setCap(response.data);
            setCaps(resp.data.results);
            setIsLoading(false);
        })()
    }, [])
    return (
        <div>
            <Slider caps={caps}/>
        </div>
    );
};

export default PostPage;

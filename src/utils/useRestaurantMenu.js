import { useState,useEffect } from "react";
import { menuAPI } from "../utils/constants";

// custome hook for api calls
const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    const fetchData = async()=>{
        const data = await fetch(menuAPI+resId);
        const json = await data.json();
        setResInfo(json);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return resInfo;
}

export default useRestaurantMenu;
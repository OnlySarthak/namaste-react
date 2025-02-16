import { useState,useEffect } from "react";
import { resListAPI } from "./constants";

const useListOfRestaurant = ()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [backUpData,setbackUpData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    async function fetchData() {
        const data = await fetch(resListAPI);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setbackUpData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return {listOfRestaurants , setListOfRestaurants, backUpData};
}

export default useListOfRestaurant;
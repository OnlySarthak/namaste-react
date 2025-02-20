import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import getLatLng from "../utils/getLatLng";

const useListOfRestaurant = () => {
    const { userLocation } = useContext(UserContext);
    const FinalUserLocation = userLocation || "Nashik"; // ✅ Fallback location

    const [resListAPI, setResListAPI] = useState(null);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [backUpData, setBackUpData] = useState([]);

    // ✅ Fetch lat/lng and update API
    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                const obj = await getLatLng(FinalUserLocation);
                console.log("Fetched Lat/Lng:", obj);

                if (!obj.lat || !obj.lng) return;

                setResListAPI(
                    `https://thingproxy.freeboard.io/fetch/https://swiggy.com/dapi/restaurants/list/v5?lat=${obj.lat}&lng=${obj.lng}&page_type=DESKTOP_WEB_LISTING`
                );
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocationData();
    }, [FinalUserLocation]); // ✅ Runs when `userLocation` changes

    // ✅ Fetch restaurants when API URL is ready
    useEffect(() => {
        if (!resListAPI) return;

        const fetchData = async () => {
            try {
                const data = await fetch(resListAPI);
                const json = await data.json();

                setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
                setBackUpData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };

        fetchData();
    }, [resListAPI]); // ✅ Runs when API URL updates

    return { listOfRestaurants, setListOfRestaurants, backUpData };
};

export default useListOfRestaurant;












// import { useState,useEffect } from "react";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";
// import getLatLng from "../utils/getLatLng";

// const useListOfRestaurant = ()=>{
//     const [resListAPI, setResListAPI ] = useState('https://thingproxy.freeboard.io/fetch/https://swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999998&page_type=DESKTOP_WEB_LISTING');
//     const [listOfRestaurants, setListOfRestaurants] = useState([]);
//     const [backUpData,setbackUpData] = useState([]);
    
//     const {userLocation} = useContext(UserContext);
//     const FinalUserLocation = (userLocation || 'Nashik');

//     fetchData();

//     async function temp(){
//         const obj = await getLatLng(FinalUserLocation);
//         setResListAPI(`https://thingproxy.freeboard.io/fetch/https://swiggy.com/dapi/restaurants/list/v5?lat=${obj.lat}&lng=${obj.lng}&page_type=DESKTOP_WEB_LISTING`);
//     }

//     async function fetchData() {
//         const data = await fetch(resListAPI);
//         const json = await data.json();
//         setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setbackUpData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
//         console.log("h"+listOfRestaurants);
//     }

//     useEffect(()=>{
//         if(FinalUserLocation != 'Nashik'){    
//             temp();
//             fetchData();                    
//         }
//     },[userLocation]);
        
//     return {listOfRestaurants , setListOfRestaurants, backUpData};
// }

// export default useListOfRestaurant;
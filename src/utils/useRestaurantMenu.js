import { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import getLatLng from "../utils/getLatLng";

const useRestaurantMenu = (resId) => {
    const { userLocation } = useContext(UserContext);
    const location = userLocation || "Nashik"; // ✅ Fallback if userLocation is null

    const [resInfo, setResInfo] = useState(null);
    const [ResMenuAPI, setResMenuAPI] = useState(null); // ✅ API URL as state

    // 🔹 Get lat/lng based on location
    useEffect(() => {
        const fetchLatLng = async () => {
            try {
                const obj = await getLatLng(location);

                if (!obj.lat || !obj.lng) return;

                setResMenuAPI(
                    `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${obj.lat}&lng=${obj.lng}&restaurantId=`
                );
            } catch (error) {
                console.error("Error fetching Lat/Lng:", error);
            }
        };

        fetchLatLng();
    }, [location]); // Runs when userLocation changes

    // 🔹 Fetch restaurant menu when API URL & resId are available
    useEffect(() => {
        if (!ResMenuAPI || !resId) return;

        const fetchData = async () => {
            try {
                const data = await fetch(ResMenuAPI + resId);
                const json = await data.json();
                setResInfo(json);
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
            }
        };

        fetchData();
    }, [ResMenuAPI, resId]); // Runs when API URL or resId changes

    return resInfo;
};

export default useRestaurantMenu;
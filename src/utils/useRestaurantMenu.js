import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        // console.log("Menu Card", json);
        setResInfo(json.data);
    };
    return resInfo;
}

export default useRestaurantMenu;
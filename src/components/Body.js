import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional Rendering : Will display skelenton data resembles to the actual data
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }
    // Conditional Rendering


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you're offline..!!! Please check your internet connection.</h1>
            </div>
        );
    }


    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-container">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button onClick={() => {
                    // Filter the restaurant and update the UI
                    // SearchText
                    console.log(searchText);
                    const filteredRestaurant = listOfRestaurants
                        .filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilterdRestaurant(filteredRestaurant);
                }}>Search</button>

                {/* Filter Functionality */}

                <button className="filter-btn" onClick={() => {
                    filteredList = resList.filter((res) => {
                        return res.info.avgRating > 4;
                    });
                    setListOfRestaurants(filteredList);
                }}
                >Top Rated Restaurant</button>
            </div>

            {/* map restaurant list */}
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;
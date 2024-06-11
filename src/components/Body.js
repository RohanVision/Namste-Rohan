import RestaurantCard, { withDiscount } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscount } from "./RestaurantCard";
import userContext from "../utils/userContext";

const Body = () => {
    // State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardDiscount = withDiscount(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json); 
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

    const { loggedInUser, setUserName } = useContext(userContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-container flex items-center mb-2 p-2">
                <div className="search">
                    <input type="text" className="border p-1 border-solid border-black outline-none" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        // Filter the restaurant and update the UI
                        // SearchText
                        // console.log(searchText);
                        const filteredRestaurant = listOfRestaurants
                            .filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilterdRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>

                {/* Filter Functionality */}
                <div>
                    <button className="filter-btn bg-orange-600 rounded-lg p-2 text-white" onClick={() => {
                        filteredList = resList.filter((res) => {
                            return res.info.avgRating > 4;
                        });
                        setListOfRestaurants(filteredList);
                    }}
                    >Top Rated Restaurant</button>
                </div>

                <div className="mx-5">
                    <label>UserName: </label>
                    <input className="border border-black p-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>

            {/* map restaurant list */}
            <div className="res-container flex justify-start items-center flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                            <RestaurantCardDiscount resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;
import RestaurantCard, { withDiscount } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
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
    // https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        setListOfRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    // Check online status through Network
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you're offline..!!! Please check your internet connection.</h1>
            </div>
        );
    }

    const { loggedInUser, setUserName } = useContext(userContext);

    // Conditional Rendering : Will display skelenton data resembles to the actual data
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }
    // Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body bg-gray-50 min-h-screen p-6">
            <div className="filter-container flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-white shadow-lg rounded-lg">
                {/* Search Section */}
                <div className="search flex items-center space-x-4 mb-4 md:mb-0">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        id="search-button"
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            // Filter the restaurant and update the UI SearchText
                            // console.log(searchText);
                            setFilterdRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>

                {/* Filter Functionality */}
                <button
                    className="filter-btn bg-red-600 text-white rounded-lg p-3 hover:bg-red-700 transition duration-300"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setFilterdRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>

                {/* Login User Functionality */}
                <div className="mt-4 md:mt-0">
                    <input
                        placeholder="Type your name"
                        className="border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>

            {/* Restaurant List Container */}
            <div className="res-container">
                <div className="flex justify-center flex-wrap gap-6">
                    {filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="transform hover:scale-105 transition duration-300">
                            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                                <RestaurantCardDiscount resData={restaurant} />
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Body;
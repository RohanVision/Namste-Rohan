import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    // const { loggedInUser } = useContext(userContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div data-testid="resCard" className="m-4 w-[250px] rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="overflow-hidden rounded-t-lg">
                <img
                    className="object-cover w-full h-[150px] transform transition-transform duration-300 hover:scale-105"
                    src={CDN_URL + cloudinaryImageId}
                    alt="resLogo"
                />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
                <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
                <div className="flex justify-between items-center text-sm text-gray-700">
                    <span>{avgRating} ⭐</span>
                    <span>{costForTwo}</span>
                </div>
                <h4 className="text-sm text-gray-500">{sla?.slaString}</h4>
                {/* <h4 className="text-sm text-gray-500 italic">{loggedInUser}</h4> */}
            </div>
        </div>

    );
};


export const withDiscount = (RestaurantCard) => {
    return (props) => {
        const { resData } = props;
        const { aggregatedDiscountInfoV3 } = resData?.info;
        return (
            <div className="relative">
                <label className="absolute -top-1 -left-1 bg-black bg-opacity-80 px-3 py-1 text-xs text-white rounded-full shadow-md z-10">
                    ITEMS {aggregatedDiscountInfoV3.subHeader}
                </label>
                <RestaurantCard {...props} />
            </div>

        )
    }
}

export default RestaurantCard;
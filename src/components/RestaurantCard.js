import { CDN_URL } from "../utils/Constant";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { loggedInUser } = useContext(userContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, aggregatedDiscountInfoV3 } = resData?.info;
    return (
        <div className="m-4 w-[270px] rounded-lg h-96 bg-gray-100 hover:shadow-lg">
            <div>
                <img className="rounded-lg h-48 w-full object-cover p-4" src={CDN_URL + cloudinaryImageId} alt="resLogo" />
                <div className="p-4">
                    <h3 className="font-bold">{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating} stars</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla?.slaString}</h4>
                    <h4>{loggedInUser}</h4>
                </div>
            </div>
        </div >
    );
};


export const withDiscount = (RestaurantCard) => {
    return (props) => {
        const { resData } = props;
        const { aggregatedDiscountInfoV3 } = resData?.info;
        return (
            <div>
                <label className="absolute bg-black p-2 text-white rounded-lg ml-2">
                    ITEMS {aggregatedDiscountInfoV3.subHeader}
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
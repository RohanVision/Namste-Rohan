import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage} - {avgRating}</p>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - {"₹"} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
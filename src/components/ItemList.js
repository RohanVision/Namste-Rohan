import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constant";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handledAddItem = (item) => {
        // Dispatch an action
        dispatch(addItems(item));
    }

    return (
        <div>
            {items.map(item =>
                <div data-testid="foodItems" key={item.card.info.id} className="text-left p-4 my-2 border-gray-100 border-b-2 flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold p-2">{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? (item.card.info.price) / 100 : (item.card.info.defaultPrice) / 100}</span>

                            <p className="text-xs p-2">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 relative">
                        <img className="p-4 rounded-3xl h-auto" src={CDN_URL + item.card.info.imageId} ></img>
                        <button className="bg-gray-200 text-green-500 font-bold px-5 py-2 shadow-lg absolute rounded-xl bottom-0 left-1/4" onClick={() => handledAddItem(item)}>ADD</button>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default ItemList;
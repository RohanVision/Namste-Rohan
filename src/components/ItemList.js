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
            {items.map(item => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className="p-4 my-4 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                    {/* Left Section: Item Details */}
                    <div className="w-8/12">
                        <div className="py-2">
                            <h3 className="font-semibold text-lg text-gray-800">{item.card.info.name}</h3>
                            <span className="text-md text-gray-600">₹ {item.card.info.price ? (item.card.info.price) / 100 : (item.card.info.defaultPrice) / 100}</span>
                            <p className="text-sm text-gray-500 mt-1">{item.card.info.description}</p>
                        </div>
                    </div>

                    {/* Right Section: Image and Add Button */}
                    <div className="w-4/12 flex flex-col items-center relative">
                        <img
                            className="rounded-xl w-full h-auto object-cover shadow-md mb-3"
                            src={CDN_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                        />
                        <button
                            className="bg-green-500 text-white font-bold px-4 py-2 shadow-md rounded-full hover:bg-green-600 transition-colors duration-300"
                            onClick={() => handledAddItem(item)}
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ItemList;
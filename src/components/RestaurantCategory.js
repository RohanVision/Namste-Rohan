import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleToggle = () => {
        setShowIndex()
    }

    // console.log(data);
    return (
        <div className="flex justify-between">
            <div className="md:w-7/12 w-8/12 m-auto bg-gray-50 p-4 my-4 shadow-lg rounded-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleToggle}>
                    <span className="font-bold">{data.title} ({data.title.length})</span>
                    <span data-testid="resmenuArrow">🔽</span>
                </div>

                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;
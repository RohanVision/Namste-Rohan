import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch()
    const handleClearCart = (item) => {
        dispatch(clearCart())
    }

    const cartItem = useSelector((store) => store.cart.items)
    return (
        <div className="w-6/12 m-auto p-4 text-center">
            <h1 className="font-bold">Cart</h1>
            <button className="m-2 p-4 bg-black text-white rounded-lg hover:bg-red-600"
                onClick={handleClearCart}>Clear Cart</button>
            {cartItem.length === 0 && <h1>Cart is Empty please add some Item</h1>}
            <div><ItemList items={cartItem} /></div>
        </div>
    )
}

export default Cart;
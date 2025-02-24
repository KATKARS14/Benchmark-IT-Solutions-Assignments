import { useAppContext } from "../context/AppContext";
import React from "react";

const Cart: React.FC = () => {
    const { state, dispatch } = useAppContext();
    return (
        <div>
            <h1>Cart</h1>
            {state.cart.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
import { useAppContext } from "../context/AppContext";
import React from "react";

const Home: React.FC = () => {
    const { state, dispatch } = useAppContext();
    return (
        <div>
            <h1>Home</h1>
            {state.products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Home;
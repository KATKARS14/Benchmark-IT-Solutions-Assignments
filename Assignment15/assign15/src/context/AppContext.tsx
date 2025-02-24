import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import axios from "axios";

interface Product {
    id: number;
    title: string;
}

interface User {
    username: string;
}

interface State {
    products: Product[];
    cart: Product[];
    user: User | null;
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: State = {
    products: [],
    cart: [],
    user: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(response => {
            dispatch({ type: "SET_PRODUCTS", payload: response.data });
        });
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

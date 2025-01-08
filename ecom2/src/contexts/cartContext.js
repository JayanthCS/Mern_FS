import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/cartReducer.js";

const CartContext = createContext();

const initialState = {
    cart: [],
    total_Price: 0,
};

const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => {
        console.log("Adding product to cart:", product);

        if (!product || !product.id) {
            console.error("Invalid product passed to addToCart:", product);
            return; // Do not dispatch if the product is invalid
        }

        dispatch({ type: 'ADD', payload: { product } }); // Correctly pass the product
    };

    const removeFromCart = (product) => {
        dispatch({ type: "REMOVE", payload: product });
    };

    const calcProduct = () => {
        dispatch({ type: "CALCULATE" });
    };

    useEffect(calcProduct, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, UseCartContext };

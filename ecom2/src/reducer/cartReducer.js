let CartReducer = (state, action) => {
    console.log("Current State:", state);
    console.log("Action:", action);

    switch (action.type) {
        case 'ADD': {
            // const { product } = action.payload; // Extract product from payload
            //  console.log(action.payload.product)

            // Validate payload
            if (!action.payload.product || !action.payload.product.id) {
                console.error("Invalid product payload:", action.payload.product);
                return state; // Return current state if invalid
            }
            console.log(action.payload.product)

            return {
                ...state,
                cart: [...state.cart, action.payload.product], // Add product to the cart array
            };
        }

        case 'REMOVE': {
            const updatedCart = state.cart.filter(el => el.id !== action.payload.id);
            return {
                ...state,
                cart: updatedCart,
            };
        }

        case 'CALCULATE': {
            const total_price = state.cart.reduce((total, el) => {
                if (el?.price) {
                    total += el.price;
                }
                return total;
            }, 0);
            return {
                ...state,
                total_Price: total_price, // Fix property name for consistency
            };
        }

        default:
            return state;
    }
};

export default CartReducer;

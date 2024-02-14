import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("add to cart :",action);
            
            state.cartData.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cartData.filter((item) => item.id !== action.payload)
            console.log("remove from cart :".action);
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
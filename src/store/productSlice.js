import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: {
        productData: []
    },
    reducers: {
      addProduct:(state,action)=>{
        state.productData.push(action.payload)
        console.log("product :",action.payload);
      }
    }
})
export const { addProduct } = productSlice.actions
export default productSlice.reducer
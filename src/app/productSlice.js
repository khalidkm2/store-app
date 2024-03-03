import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: null,
        filteredProducts: null,
        category: null
    },
    reducers: {
        addAllProducts: (state, action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload
        },
        addCategory: (state,action) => {
            state.category = action.payload
        },
        addFilteredProducts: (state,action) => {
            state.filteredProducts = action.payload
        }
    }
});

export const { addAllProducts,addCategory,addFilteredProducts } = productSlice.actions;
export const productSliceReducer = productSlice.reducer;

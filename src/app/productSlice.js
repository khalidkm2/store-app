import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: null,
        filteredProducts: null,
        category: null,
        singleProduct:null,
        cart:[],
        filteredCart:[],
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
        },
        addSingleProduct: (state,action) => {
            state.singleProduct = action.payload
        },
        addCart:(state,action) => {
            
            state.cart.push(action.payload)
        },

        emptyCart:(state) => {
            state.cart = []
        },

        addFilteredCart:(state,action) => {
            state.filteredCart = action.payload
        },
        removeItemCart:(state,action)=> {
           const cart = [...state.cart]
           const index = cart.findIndex(item => item.id === action.payload);

           if (index !== -1) {
               // Remove the item from the cart array 
               cart.splice(index, 1);
           }
           state.cart = cart
           
        },
        removeOneCart:(state,action) => {
            const cart = [...state.cart]
            const filteredCart = cart.filter((item) => item.id !== action.payload)
            console.log(filteredCart);
            state.cart = filteredCart
        }
        
    }
});

export const { addAllProducts,addCategory,addFilteredProducts,addSingleProduct,addCart,addFilteredCart,removeItemCart,removeOneCart,emptyCart } = productSlice.actions;
export const productSliceReducer = productSlice.reducer;

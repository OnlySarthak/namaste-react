import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Storage Slices/cartSlice";

const appStore = configureStore({
    reducer : {
        cart : reducer
    }
})

export default appStore;
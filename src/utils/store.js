import navSlice from "./navSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        nav: navSlice
    }
});

export default store;
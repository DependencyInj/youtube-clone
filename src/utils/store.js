import navSlice from "./navSlice";
import searchCacheSlice from "./searchCacheSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        nav: navSlice,
        search: searchCacheSlice
    }
});

export default store;
import navSlice from "./navSlice";
import searchCacheSlice from "./searchCacheSlice";
import searchQuerySlice from "./searchQuerySlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        nav: navSlice,
        search: searchCacheSlice,
        searchQuery: searchQuerySlice
    }
});

export default store;
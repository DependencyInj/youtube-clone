import { createSlice } from "@reduxjs/toolkit"

const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: {
        searchQuery: ''
    },
    reducers: {
        assigneSearchQuery:(state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { assigneSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
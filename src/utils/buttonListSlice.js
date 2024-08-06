import { createSlice } from "@reduxjs/toolkit";

const buttonListSlice = createSlice({
    name: 'button',
    initialState: {
        buttonSelected: ''
    },
    reducers: {
        selectButton: (state, action) => {
            state.buttonSelected = action.payload;
        }
    }
});

export const { selectButton } = buttonListSlice.action;
export default buttonListSlice.reducer;
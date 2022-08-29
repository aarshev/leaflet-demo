import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = 0;

export const routeSlice = createSlice({
    name: "route",
    initialState: { value: initialStateValue },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
            
        }
    }
})

export const { changeValue } = routeSlice.actions;

export default routeSlice.reducer;
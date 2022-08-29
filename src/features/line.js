import { createSlice } from "@reduxjs/toolkit";
import { data } from './data'

const initialStateValue = data

export const lineSlice = createSlice({
    name: "line",
    initialState: { value: initialStateValue },
    reducers: {
        filter: (state, action) => {
            state.value = initialStateValue
            if (action.payload) {
                state.value = state.value.filter(item =>
                    item.routes[0].transportType === action.payload
                )
            }
        },
        returnDefault: (state, action) => {
            state.value = initialStateValue
            
        }
    }
})

export const { filter, returnDefault } = lineSlice.actions;

export default lineSlice.reducer;
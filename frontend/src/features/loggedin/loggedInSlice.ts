import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

export interface loggedInState{
    isLoggedIn: boolean,
    Name: string,
    balance: number,
}

const initialState: loggedInState = {
    isLoggedIn: false,
    Name: "",
    balance: 0,
}

export const loggedIn = createSlice({
    name: 'logger',
    initialState,
    reducers: {
        flipper: (state,action: {payload: {name: string, balance: number}, type: string}) => {
            state.isLoggedIn = !state.isLoggedIn
            state.Name = action.payload.name
            state.balance = action.payload.balance
        }
    }
})



export const {flipper} = loggedIn.actions;
export const selectLoggedState = (state: RootState) => state.logger.isLoggedIn;
export default loggedIn.reducer;
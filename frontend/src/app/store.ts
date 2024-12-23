import {configureStore} from "@reduxjs/toolkit"
import loggedInReducer from '../features/loggedin/loggedInSlice';

const store = configureStore({
    reducer: {
        logger: loggedInReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState >;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
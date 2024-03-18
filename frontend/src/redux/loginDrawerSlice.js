import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    show : false

}

export const loginDrawerSlice = createSlice({
    name : "loginDrawerSlice",
    initialState,
    reducers: {
        openLoginDrawer: (state) => {
            state.show = true;
        },

        closeLoginDrawer: (state) => {
            state.show = false;
        }
    }
})


export const { closeLoginDrawer, openLoginDrawer } = loginDrawerSlice.actions
export default loginDrawerSlice.reducer
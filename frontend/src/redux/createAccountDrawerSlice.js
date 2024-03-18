import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    show : false

}

export const createAccountDrawerSlice = createSlice({
    name : "createAccountDrawerSlice",
    initialState,
    reducers: {
        openCreateAccountDrawer: (state) => {
            state.show = true;
        },

        closeCreateAccountDrawer: (state) => {
            state.show = false;
        }
    }
})


export const { closeCreateAccountDrawer, openCreateAccountDrawer } = createAccountDrawerSlice.actions
export default createAccountDrawerSlice.reducer
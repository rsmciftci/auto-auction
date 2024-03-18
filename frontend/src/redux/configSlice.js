import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // appliedJobList: []
    path : "http://localhost:3000/"

}

export const configSlice = createSlice({
    name : "configSlice",
    initialState,
    reducers: {
    }
})


// export const {  } = configSlice.actions
export default configSlice.reducer
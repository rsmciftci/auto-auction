import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    "ID": null,
    "Name": null,
    "Surname": null,
    "Email": null,
    "Phone": null,
    "Auction": null,
    "Dob": null

}

export const createAccountDrawerSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

        setUser: (state,action) => {

            state.ID = action.ID,
            state.Name = action.Name,
            state.Surname = action.Surname,
            state.Email = action.Email,
            state.Phone = action.Phone,
            state.Auction = action.Auction,
            state.Dob = action.Dob

        },
     

        initializeUser: (state) => {

            state.ID = null,
            state.Name = null,
            state.Surname = null,
            state.Email = null,
            state.Phone = null,
            state.Auction = null,
            state.Dob = null

        }
    }
})


export const { initializeUser, setUser } = userSlice.actions
export default userSlice.reducer
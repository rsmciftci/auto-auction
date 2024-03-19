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

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.ID = action.payload.ID;
            state.Name = action.payload.Name;
            state.Surname = action.payload.Surname;
            state.Email = action.payload.Email;
            state.Phone = action.payload.Phone;
            state.Auction = action.payload.Auction;
            state.Dob = action.payload.Dob;
        },
        initializeUser: (state) => {
            state.ID = null;
            state.Name = null;
            state.Surname = null;
            state.Email = null;
            state.Phone = null;
            state.Auction = null;
            state.Dob = null;
        }
    }
})

export const { initializeUser, setUser } = userSlice.actions;
export default userSlice.reducer;
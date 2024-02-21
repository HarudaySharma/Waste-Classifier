import { createSlice } from "@reduxjs/toolkit";

type UserSliceInitial = object | null | undefined;

const userSliceInitial: UserSliceInitial = null;

const userSlice = createSlice({
    name: "user",
    initialState: userSliceInitial,
    reducers: {
    }
});

export default userSlice.reducer;


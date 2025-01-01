import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
)
// 5.00 min in part 3

export const authReducer = createSlice({
    name: 'auth',
    initialState:{
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: ""
    },
    reducers : {
        
    },

    extraReducers : () => {

    }
})

export default authReducer.reducer

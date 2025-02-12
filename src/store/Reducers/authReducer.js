import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import {jwtDecode} from "jwt-decode";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    // console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true});
        localStorage.setItem('accessToken', data.token)
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);


export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    // console.log(info);
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true});
        localStorage.setItem('accessToken', data.token)
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);


export const get_user_info = createAsyncThunk(
  "auth/get_user_info",
  async (_ , { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", {
        withCredentials: true});
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log(info);
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true});
        localStorage.setItem('accessToken', data.token)
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);

const returnRole = (token) =>{
 if (token) {
  const decodeToken = jwtDecode(token)
  const expireTime = new Date(decodeToken.exp*1000)
  if (new Date() > expireTime) {
    localStorage.removeItem('accessToken')
    return ''
  } else{
    return decodeToken.role
  }
 } else{
  return '';
 }
}


const initialUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";


export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    // userInfo: "",
    // role: returnRole(localStorage.getItem('accessToken')),
    // token: localStorage.getItem('accessToken')
    userInfo: initialUserInfo, // ✅ Load from localStorage
    role: returnRole(localStorage.getItem("accessToken")),
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error; 
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message; 
        state.token = payload.token; 
        state.role = returnRole(payload.token); 
        state.userInfo = payload.userInfo;  // ✅ Updates userInfo
        localStorage.setItem("userInfo", JSON.stringify(payload.userInfo)); // ✅ Save user info in local storage
      })
      // set the user info in local storage, bcs. ProtectRoutes.jsx need user info, If I dont store it in local storage then it remove user info after every relod.

      // when i logout then I need to clerar locl storage
      /*

        export const logout = createAsyncThunk("auth/logout", async () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("role");
        localStorage.removeItem("userInfo");
        return true;
      });

      builder.addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.userInfo = "";
        state.role = "";
      });

      */


      .addCase(seller_register.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(seller_register.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error; 
      })
      .addCase(seller_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message; 
        state.token = payload.token; 
        state.role = returnRole(payload.token); 
      })
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload.userInfo; 

        localStorage.setItem("userInfo", JSON.stringify(payload.userInfo)); // ✅ Save user info
      })


      .addCase(seller_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(seller_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error; 
      })
      .addCase(seller_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message; 
        state.token = payload.token; 
        state.role = returnRole(payload.token); 
        state.userInfo = payload.userInfo;  // ✅ Updates userInfo
        localStorage.setItem("userInfo", JSON.stringify(payload.userInfo)); // ✅ Save user info
      })
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;

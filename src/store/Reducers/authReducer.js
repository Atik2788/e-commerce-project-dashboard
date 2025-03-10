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


export const profile_image_upload = createAsyncThunk(
  "auth/profile_image_upload",
  async (image , { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/profile-image-upload", image, {
        withCredentials: true});
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// end profile_image_upload method 



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
// end seller_register method

export const profile_info_add = createAsyncThunk(
  "auth/profile_info_add",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/profile-info-add", info, {
        withCredentials: true});
        // localStorage.setItem('accessToken', data.token)
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);
// end profile_info_add method



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


let initialUserInfo = "";
try {
  const storedUserInfo = localStorage.getItem("userInfo");
  initialUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : "";
} catch (error) {
  console.error("Error parsing user info:", error);
  initialUserInfo = "";
}


export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    // userInfo: "",
    token: localStorage.getItem('accessToken'),
    // ✅ Load from localStorage
    userInfo: initialUserInfo, 

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
        console.log("Admin Login Payload:", payload); // Debugging
        // ✅ Updates userInfo
        // state.userInfo = payload.userInfo;  
        localStorage.setItem("userInfo", JSON.stringify(payload.userInfo)); 
        // ✅ Save user info in local storage
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

            // ✅ লোকাল স্টোরেজে সেভ করুন
    if (payload.userInfo) {
      state.userInfo = payload.userInfo;
      localStorage.setItem("userInfo", JSON.stringify(payload.userInfo));
      localStorage.setItem("accessToken", payload.token);
  }
        // localStorage.setItem("userInfo", JSON.stringify(payload.userInfo))

      })


      
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.loader = false;

        state.userInfo = payload.userInfo;
        // localStorage.setItem("userInfo", JSON.stringify(payload.userInfo));
         // ✅ Save user info in local storage
      })
      
      .addCase(profile_image_upload.pending, (state, { payload }) => {
        state.loader = true;
       })
      
      .addCase(profile_image_upload.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload.userInfo;
        state.successMessage = payload.message
      })


      .addCase(profile_info_add.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(profile_info_add.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload.userInfo; 
        // localStorage.setItem("userInfo", JSON.stringify(payload.userInfo)); 
        // ✅ Save user info in local storage
        state.successMessage = payload.message
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
        // state.userInfo = payload.userInfo;
        localStorage.setItem("userInfo", JSON.stringify(payload.userInfo)); 
        // ✅ Save user info
      })
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;

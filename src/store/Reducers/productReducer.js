import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_product = createAsyncThunk(
  "product/add_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    // console.log(name, image);
    // *** here I faced a problem, when I use >>({ product }, { rejectWithValue, fulfillWithValue }) << {} bracket in product then my backend don't get product data.****
    try {
        
      const { data } = await api.post("/product-add", product, {
        withCredentials: true});
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);
//************** */ End add_product  method ***********
 

export const get_products = createAsyncThunk(
  "product/get_products",
  async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {

    try {
        
      const { data } = await api.get(`/products-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`, {
        withCredentials: true});
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);
//************** */ End get_category method ***********

export const productReducer = createSlice({
  name: "product",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    totalProduct: 0
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(add_product.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(add_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      
      .addCase(add_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.products = [...state.products, payload.products]
      })

      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.totalProduct = payload.totalProduct;
        state.products = payload.products;
      })
  },
});

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;

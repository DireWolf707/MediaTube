import { createSlice } from "@reduxjs/toolkit"
import { categories } from "../../utils/constants"

const searchSlice = createSlice({
  name: "data",
  initialState: {
    category: categories[0].name,
  },
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const { changeCategory } = searchSlice.actions
export const searchReducer = searchSlice.reducer

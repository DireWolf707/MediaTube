import { createSlice } from "@reduxjs/toolkit"
import { categories } from "../../utils/constants"

const searchSlice = createSlice({
  name: "data",
  initialState: {
    searchTerm: categories[0].name,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    resetSearchTerm(state, action) {
      state.searchTerm = categories[0].name
    },
  },
})

export const { changeSearchTerm, resetSearchTerm } = searchSlice.actions
export const searchReducer = searchSlice.reducer

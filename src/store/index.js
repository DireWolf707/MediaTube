import { configureStore } from "@reduxjs/toolkit"
import { youtubeApi } from "./apis/youtubeApi"
import { setupListeners } from "@reduxjs/toolkit/query"
import { changeSearchTerm, searchReducer, resetSearchTerm } from "./slices/searchSlice"
import {
  useChannelVideosQuery,
  useDetailChannelQuery,
  useDetailVideoQuery,
  useSearchVideosQuery,
  useSuggestedVideosQuery,
} from "./apis/youtubeApi"

export const store = configureStore({
  reducer: {
    data: searchReducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(youtubeApi.middleware),
})

setupListeners(store.dispatch)

export {
  useChannelVideosQuery,
  useDetailChannelQuery,
  useDetailVideoQuery,
  useSearchVideosQuery,
  useSuggestedVideosQuery,
  changeSearchTerm,
  resetSearchTerm,
}

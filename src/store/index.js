import { configureStore } from "@reduxjs/toolkit"
import { youtubeApi } from "./apis/youtubeApi"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
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
} from "./apis/youtubeApi"

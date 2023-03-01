import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const youtubeApi = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "ea914ea896msh94f546fe0e85896p1e986ajsn86f8b9163431",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  }),
  endpoints(builder) {
    return {
      searchVideos: builder.query({
        query: (searchTerm) => {
          return {
            url: `/search?q=${searchTerm}&part=snippet%2Cid`,
            method: "GET",
          }
        },
      }),

      suggestedVideos: builder.query({
        query: (videoId) => {
          return {
            url: `/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video`,
            method: "GET",
          }
        },
      }),

      detailVideo: builder.query({
        query: (videoId) => {
          return {
            url: `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
            method: "GET",
          }
        },
      }),

      channelVideos: builder.query({
        query: (channelId) => {
          return {
            url: `/search?channelId=${channelId}&part=snippet%2Cid`,
            method: "GET",
          }
        },
      }),

      detailChannel: builder.query({
        query: (channelId) => {
          return {
            url: `/channels?part=snippet%2Cstatistics&id=${channelId}`,
            method: "GET",
          }
        },
      }),
    }
  },
})

export const { useChannelVideosQuery, useDetailChannelQuery, useDetailVideoQuery, useSearchVideosQuery, useSuggestedVideosQuery } =
  youtubeApi

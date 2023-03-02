import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const youtubeApi = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "1cfed548c6msh03827b7f2d7e802p1307d0jsned496e327d03",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  }),
  endpoints(builder) {
    return {
      searchVideos: builder.query({
        query: (searchTerm) => {
          return {
            url: "/search",
            method: "GET",
            params: {
              q: searchTerm,
              part: "snippet,id",
              regionCode: "IN",
              maxResults: "50",
              order: "date",
            },
          }
        },
      }),

      suggestedVideos: builder.query({
        query: (videoId) => {
          return {
            url: "/search",
            method: "GET",
            params: {
              relatedToVideoId: videoId,
              part: "id,snippet",
              type: "video",
              maxResults: "50",
            },
          }
        },
      }),

      detailVideo: builder.query({
        query: (videoId) => {
          return {
            url: "/videos",
            method: "GET",
            params: {
              id: videoId,
              part: "contentDetails,snippet,statistics",
            },
          }
        },
      }),

      channelVideos: builder.query({
        query: (channelId) => {
          return {
            url: "/search",
            method: "GET",
            params: {
              channelId: channelId,
              part: "snippet,id",
              order: "date",
              maxResults: "50",
            },
          }
        },
      }),

      detailChannel: builder.query({
        query: (channelId) => {
          return {
            url: "/channels",
            method: "GET",
            params: {
              part: "snippet,statistics",
              id: channelId,
            },
          }
        },
      }),
    }
  },
})

export const { useChannelVideosQuery, useDetailChannelQuery, useDetailVideoQuery, useSearchVideosQuery, useSuggestedVideosQuery } =
  youtubeApi

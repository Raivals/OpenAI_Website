/* Specific part of the state (global store) */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const articleApi = createApi({
  reducerPath: "artcileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey)
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com",
      )

      return headers
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // Encodes a text string as a valid component of a Uniform Resource
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
})
/* fire the hook */
export const { useLazyGetSummaryQuery } = articleApi

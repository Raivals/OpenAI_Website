import { configureStore } from "@reduxjs/toolkit"
import { articleApi } from "./article"

/*configuring store */
export const store = configureStore({
  /*get a specific slice */
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  /* do smthg with the state before we get it */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
})

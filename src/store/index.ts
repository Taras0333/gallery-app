import { configureStore } from '@reduxjs/toolkit'

import picturesListSlice from './picturesList/picturesListSlice'

export const store = configureStore({
  reducer: {
    picturesList: picturesListSlice,
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

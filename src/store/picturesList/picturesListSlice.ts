import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'

import {
  PictureItem,
  PicturesListState,
  PicturesResponse,
  SortingKeys,
} from './types'
import axios from '../../services/http'
import { formTimestampFromData } from '../../utils/common'

export const retrivePicturesList = createAsyncThunk<
  PicturesResponse,
  void,
  { rejectValue: string }
>('pictures/fetchPicturesList', async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<PicturesResponse> = await axios.get(
      '/api/v1/pictures'
    )
    if (response?.status !== 200) {
      throw new Error('Something went wrong')
    }
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    return rejectWithValue(
      axiosError.response?.data?.message || 'Request failed'
    )
  }
})

const initialState: PicturesListState = {
  picturesList: [],
  sortingState: {
    artist_name: 'desc',
    artwork_name: 'desc',
    creation_year: 'desc',
    views: 'desc',
    price: 'desc',
    status: 'desc',
    documents_number: 'desc',
    date_updated: 'desc',
  },
  loading: false,
  error: null,
}

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    sortListByText: (state, action: PayloadAction<SortingKeys>) => {
      const { payload } = action

      if (state.sortingState[payload] === 'desc') {
        state.sortingState[payload] = 'asc'
        state.picturesList = state.picturesList.sort(
          (firstValue, secondValue) =>
            String(firstValue[payload] ?? '').localeCompare(
              String(secondValue[payload] ?? '')
            )
        )
      } else {
        state.sortingState[payload] = 'desc'
        state.picturesList = state.picturesList.sort(
          (firstValue, secondValue) =>
            String(secondValue[payload] ?? '').localeCompare(
              String(firstValue[payload] ?? '')
            )
        )
      }
    },
    sortListByNumber: (state, action: PayloadAction<SortingKeys>) => {
      const { payload } = action
      if (state.sortingState[payload] === 'desc') {
        state.sortingState[payload] = 'asc'
        state.picturesList = state.picturesList.sort(
          (firstValue, secondValue) =>
            (firstValue[payload] as number) - (secondValue[payload] as number)
        )
      } else {
        state.sortingState[payload] = 'desc'
        state.picturesList = state.picturesList.sort(
          (firstValue, secondValue) =>
            (secondValue[payload] as number) - (firstValue[payload] as number)
        )
      }
    },
    sortListByDate: (state, action: PayloadAction<SortingKeys>) => {
      const { payload } = action
      if (state.sortingState[payload] === 'desc') {
        state.sortingState[payload] = 'asc'
        state.picturesList = state.picturesList.sort(
          (firstValue, secondValue) =>
            formTimestampFromData(
              firstValue[payload as keyof PictureItem['date_updated']]
            ) -
            formTimestampFromData(
              secondValue[payload as keyof PictureItem['date_updated']]
            )
        )
      } else {
        state.sortingState[payload as 'date_updated'] = 'desc'
        state.picturesList = state.picturesList.sort(
          (firstValue, secondValue) =>
            formTimestampFromData(
              secondValue[payload as keyof PictureItem['date_updated']]
            ) -
            formTimestampFromData(
              firstValue[payload as keyof PictureItem['date_updated']]
            )
        )
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrivePicturesList.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        retrivePicturesList.fulfilled,
        (state, action: PayloadAction<PicturesResponse>) => {
          state.loading = false
          state.picturesList = action.payload.items
        }
      )
      .addCase(retrivePicturesList.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { sortListByText, sortListByNumber, sortListByDate } =
  picturesSlice.actions
export default picturesSlice.reducer

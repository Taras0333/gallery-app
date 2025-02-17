import type { RootState } from '../index'
import { SortingKeys } from './types'

export const picturesList = (state: RootState) =>
  state.picturesList.picturesList

export const picturesListLoading = (state: RootState) =>
  state.picturesList.loading

export const picturesListSortingState = (
  state: RootState,
  value: SortingKeys
) => state.picturesList.sortingState[value]

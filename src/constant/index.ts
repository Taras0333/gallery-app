import { AppDispatch } from '../store'
import {
  sortListByNumber,
  sortListByText,
  sortListByDate,
} from '../store/picturesList/picturesListSlice'
import { PictureItem, SortingKeys } from '../store/picturesList/types'

export const TABLE_TITLES: {
  title: PictureItem['artwork_name']
  value: SortingKeys
  sortFunction: (dispatch: AppDispatch, key: SortingKeys) => void
}[] = [
  {
    title: 'Artwork Name',
    value: 'artwork_name',
    sortFunction: (dispatch, key) => dispatch(sortListByText(key)),
  },
  {
    title: 'Artist Name',
    value: 'artist_name',
    sortFunction: (dispatch, key) => dispatch(sortListByText(key)),
  },
  {
    title: 'Views',
    value: 'views',
    sortFunction: (dispatch, key) => dispatch(sortListByNumber(key)),
  },
  {
    title: 'Years',
    value: 'creation_year',
    sortFunction: (dispatch, key) => dispatch(sortListByNumber(key)),
  },
  {
    title: 'Status',
    value: 'status',
    sortFunction: (dispatch, key) => dispatch(sortListByText(key)),
  },
  {
    title: 'Price',
    value: 'price',
    sortFunction: (dispatch, key) => dispatch(sortListByNumber(key)),
  },
  {
    title: 'Docs',
    value: 'documents_number',
    sortFunction: (dispatch, key) => dispatch(sortListByNumber(key)),
  },
  {
    title: 'Updated',
    value: 'date_updated',
    sortFunction: (dispatch, key) => dispatch(sortListByDate(key)),
  },
]

export const STATUS_BADGES = {
  published: 'published',
  ready_for_verification: 'Ready for Verification',
  on_digitalization: 'On Digitalization',
  draft: 'Draft',
  on_sale: 'On Sale',
}

export type PictureImage = {
  preset_key: string
  width: number
  height: number
  filename_disk: string
}

export type PictureItem = {
  id: number
  artwork_name: string
  documents_number: number
  has_notifications: boolean
  status:
    | 'on_sale'
    | 'draft'
    | 'on_digitalization'
    | 'ready_for_verification'
    | 'published'
    | null
  views: number
  main_photo: {
    id: string
    width: number
    height: number
    title: string
    filename_disk: string
    transformations: PictureImage[]
  }
  artist_name: string
  creation_year: number
  date_created: string | null
  date_updated: string | null
  price: number
}

export type SortingKeys = keyof Pick<
  PictureItem,
  | 'artist_name'
  | 'artwork_name'
  | 'creation_year'
  | 'views'
  | 'price'
  | 'status'
  | 'documents_number'
  | 'date_updated'
>
type SortingValues = 'asc' | 'desc'

type SortingData = {
  [K in SortingKeys]: SortingValues
}

export type PicturesListState = {
  picturesList: PictureItem[]
  sortingState: SortingData
  loading: boolean
  error: string | null
}

// Thunk responces
export type PicturesResponse = {
  offset: number
  limit: number
  total: number
  items: PictureItem[]
}

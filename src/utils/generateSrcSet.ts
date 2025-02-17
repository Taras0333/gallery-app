import { PictureItem } from '../store/picturesList/types'

export const generateSrcSet = (
  transformations: PictureItem['main_photo']['transformations']
) => {
  if (!transformations || transformations.length === 0) return ''

  return transformations
    .map((img) => `/assets/pictures/${img.filename_disk} ${img.width}w`)
    .join(', ')
}

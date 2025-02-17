import { PictureItem } from '../store/picturesList/types'

export const formatToThousends = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const formatDate = (date: string | null): string | undefined => {
  if (!date) return
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export const formTimestampFromData = (
  date: PictureItem['date_created'] | PictureItem['date_updated']
) => {
  if (!date) return 0
  const [year, month, day] = date.split('-').map(Number)

  const timestamp = new Date(year, month - 1, day).getTime()
  return timestamp
}

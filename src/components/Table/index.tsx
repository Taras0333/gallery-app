import { useEffect } from 'react'

import { retrivePicturesList } from '../../store/picturesList/picturesListSlice'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { picturesListLoading } from '../../store/picturesList/picturesListSelectors'
import Spinner from '../UI/Spinner'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const Table = () => {
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(picturesListLoading)

  useEffect(() => {
    dispatch(retrivePicturesList())
  }, [dispatch])

  return (
    <div className="flex items-center justify-center min-w-[1030px] min-h-[338px] pt-0 pb-[40px] px-[40px] bg-gray-200">
      {isLoading ? (
        <Spinner />
      ) : (
        <table className="w-full border-collapse border-separate border-spacing-y-[4px]">
          <TableHead />
          <TableBody />
        </table>
      )}
    </div>
  )
}

export default Table

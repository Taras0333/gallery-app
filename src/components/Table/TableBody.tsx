import TableItem from './TableItem'
import { picturesList } from '../../store/picturesList/picturesListSelectors'
import { useAppSelector } from '../../store/hooks'

const TableBody = () => {
  const pictures = useAppSelector(picturesList)

  return (
    <tbody className="h-[200px]">
      {pictures.map((picture) => (
        <TableItem key={picture.id} picture={picture} />
      ))}
    </tbody>
  )
}

export default TableBody

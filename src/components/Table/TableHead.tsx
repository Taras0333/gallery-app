import { TABLE_TITLES } from '../../constant'
import TableButton from '../UI/TableButton'
import { useAppDispatch } from '../../store/hooks'

const TableHead = () => {
  const dispatch = useAppDispatch()

  return (
    <thead className="bgtransparent text-gray-700 font-semibold">
      <tr>
        <th className="py-[18px] px-[10px]" />
        {TABLE_TITLES.map(({ title, value, sortFunction }) => (
          <th key={title} className="py-[18px] px-[10px]">
            <TableButton
              title={title}
              callback={() => sortFunction(dispatch, value)}
              buttonValue={value}
            />
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead

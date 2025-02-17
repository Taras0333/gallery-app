import { picturesListSortingState } from '../../store/picturesList/picturesListSelectors'
import { RootState } from '../../store'
import { SortingKeys } from '../../store/picturesList/types'
import { useAppSelector } from '../../store/hooks'

const TableButton = ({
  callback,
  title,
  buttonValue,
}: {
  callback: () => void
  title: string
  buttonValue: SortingKeys
}) => {
  const sortingState = useAppSelector((state: RootState) =>
    picturesListSortingState(state, buttonValue)
  )
  const shouldRotate = sortingState === 'desc' ? true : false
  return (
    <button
      className="flex items-center justify-center bg-transparent gap-[8px] text-sm font-medium"
      onClick={callback}
    >
      <span>{title}</span>
      <img
        src="/assets/icons/burgerIcon.svg"
        alt="burger icon"
        className={`transition-transform duration-80 ${
          shouldRotate ? 'rotate-180 scale-x-[-1]' : 'rotate-0 scale-x-100'
        }`}
      />
    </button>
  )
}

export default TableButton

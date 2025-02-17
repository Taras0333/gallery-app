import { STATUS_BADGES } from '../../../constant'
import { PictureItem } from '../../../store/picturesList/types'
import CustonBadge from './CustomBadge'

const StatusBadge = ({ status }: { status: PictureItem['status'] }) => {
  if (!status)
    return (
      <CustonBadge
        child={<span>No Status</span>}
        styles="text-gray-600 bg-gray-200"
      />
    )

  const statusStyles: { [key: string]: string } = {
    published: 'bg-red-200 text-red-700',
    ready_for_verification: 'bg-orange-200 text-orange-700',
    on_digitalization: 'bg-blue-200 text-blue-700',
    draft: 'bg-gray-300 text-gray-700',
    on_sale: 'bg-green-200 text-green-700',
  }

  return (
    <span
      className={`px-[10px] py-[4px] rounded-full text-xs font-normal ${
        statusStyles[status] || 'bg-gray-200'
      }`}
    >
      {STATUS_BADGES[status]}
    </span>
  )
}

export default StatusBadge

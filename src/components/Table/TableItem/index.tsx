import { PictureItem } from '../../../store/picturesList/types'
import StatusBadge from '../../UI/Badges/StatusBadge'
import { formatDate, formatToThousends } from '../../../utils/common'
import { generateSrcSet } from '../../../utils/generateSrcSet'
import CustonBadge from '../../UI/Badges/CustomBadge'

const TableItem = ({ picture }: { picture: PictureItem }) => {
  const {
    main_photo,
    artwork_name,
    artist_name,
    creation_year,
    price,
    documents_number,
    date_updated,
    views,
    status,
    has_notifications,
  } = picture

  const srcSet = generateSrcSet(main_photo.transformations)

  const fallbackImage = `/assets/pictures/${main_photo.transformations[0].filename_disk}`

  const UpdateDate = formatDate(date_updated)

  return (
    <tr className="hover:bg-white bg-gray-100 cursor-pointer text-sm font-medium">
      <td className="p-[12px] rounded-l-lg">
        <img
          src={fallbackImage}
          srcSet={srcSet}
          sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 33vw"
          alt={artwork_name}
          className="w-[48px] h-[48px] rounded-md"
        />
      </td>
      <td className="py-[26px] px-[10px]">
        <div className="flex gap-[8px] items-baseline">
          <span className="truncate max-w-[150px]">{artwork_name}</span>
          {has_notifications && (
            <div className="w-[8px] h-[8px] rounded-full bg-indigo-400" />
          )}
        </div>
      </td>
      <td className="py-[26px] px-[10px] text-left">
        <span>{artist_name} </span>
      </td>
      <td className="py-[26px] px-[10px] text-left">
        <span>{formatToThousends(views)}</span>
      </td>
      <td className="py-[26px] px-[10px] text-left">
        <span>{creation_year}</span>
      </td>
      <td className="py-[26px] px-[10px] text-left">
        <span>{<StatusBadge status={status} />}</span>
      </td>
      <td className="py-[26px] px-[10px] font-medium text-left">
        <div className="flex items-center gap-[4px]">
          <img
            src="/assets/icons/dollarIcon.svg"
            alt="dollar icon"
            className="w-4 h-4"
          />
          <span>{formatToThousends(price)}</span>
        </div>
      </td>
      <td className="py-[26px] px-[10px]">
        {documents_number > 0 ? (
          <CustonBadge
            child={
              <>
                <img
                  src="/assets/icons/fileIcon.svg"
                  alt="file icon"
                  className="w-4 h-4"
                />
                <span>{documents_number}</span>
              </>
            }
            styles="text-indigo-800 bg-indigo-200"
          />
        ) : (
          <CustonBadge
            child={<span>No Docs</span>}
            styles="text-gray-600 bg-gray-200"
          />
        )}
      </td>
      <td className="py-[26px] px-[10px] text-left rounded-r-lg whitespace-nowrap">
        <span>
          {UpdateDate || (
            <CustonBadge
              child={<span>No Updates</span>}
              styles="text-gray-600 bg-gray-200"
            />
          )}
        </span>
      </td>
    </tr>
  )
}

export default TableItem

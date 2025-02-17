import clsx from 'clsx'

const CustonBadge = ({
  child,
  styles,
}: {
  child: React.ReactNode
  styles: string
}) => {
  return (
    <div
      className={clsx(
        'text-xs px-[8px] py-[4px] rounded-[4px] flex items-center justify-center gap-[8px] w-fit font-normal',
        styles
      )}
    >
      {child}
    </div>
  )
}
export default CustonBadge

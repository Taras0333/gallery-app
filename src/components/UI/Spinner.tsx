import { CSSProperties } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <HashLoader
        color={'rgba(110, 231, 183, 0.8)'}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner

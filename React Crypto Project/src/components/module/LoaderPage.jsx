import { Vortex } from 'react-loader-spinner'

const LoaderPage = () => {
  return (
    <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh"
}}>
      <Vortex
  visible={true}
  height="190"
  width="190"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
    </div>
  )
}

export default LoaderPage

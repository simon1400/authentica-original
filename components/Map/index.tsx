import { FC } from "react"
import { SMap } from "./styles"

const Map: FC = () => {
  return(
    <SMap>
      <iframe src="https://www.google.com/maps/d/embed?mid=1iTDwU288GF6pb6J8CyXEb7zMI8oeg2Ks&ehbc=2E312F" width="100%" height="700px"></iframe>
    </SMap>
  )
}

export default Map
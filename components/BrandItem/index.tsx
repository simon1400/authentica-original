import { FC } from "react"
import { BrandItem, Logo, LogoWrap } from "./styled"

interface BrandItemProps {
  index: number
}

const BrandItemComponent: FC<BrandItemProps> = ({
  index
}) => {
  return (
    <BrandItem index={index}>
      <LogoWrap>
        <Logo src="/assets/waterdrop.svg" />
      </LogoWrap>
    </BrandItem>
  )
}



export default BrandItemComponent
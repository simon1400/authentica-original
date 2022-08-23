import ImageComponent from "components/Image";
import {IImage} from "interfaces/image";
import { FC } from "react"
import { BrandItem, Logo, LogoWrap } from "./styled"

interface IBrandItem {
  image: IImage;
  logo: IImage;
  link: string
}
interface BrandItemProps {
  index: number;
  data: IBrandItem
}

const BrandItemComponent: FC<BrandItemProps> = ({
  index,
  data
}) => {
  return (
    <BrandItem href={'/'+data.link} index={index} image={data.image.data.attributes.url+'?format=webp&resize=432x432'}>
      <LogoWrap>
        <Logo>
          <ImageComponent
            image={data.logo.data}
            format="&width=210"
            svg={data.logo.data.attributes.url.indexOf('svg') >= 0}
          />
        </Logo>
      </LogoWrap>
    </BrandItem>
  )
}



export default BrandItemComponent
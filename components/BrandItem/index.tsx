import { IImage } from "interfaces/image";
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
    <BrandItem href={'/'+data.link} index={index} image={data.image.data.attributes.url+'?format=webp'}>
      <LogoWrap>
        <Logo src={`${process.env.APP_API}${data.logo.data.attributes.url}`} />
      </LogoWrap>
    </BrandItem>
  )
}



export default BrandItemComponent
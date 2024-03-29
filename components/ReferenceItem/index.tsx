
import { FC } from "react"
import { Typography } from "@mui/material"
import { Image, LogoReference as Logo, ReferenceHead, ReferenceItemComponent } from "./styled"
import { checkColor } from "utility/checkColor"
import { Grow } from "styles/Grow"

interface IReferenceData {
  Background: string;
  description: string;
  title: string;
  image: any;
  logo: any;
  slug: string;
}

interface ReferenceItemProps {
  small?: boolean;
  data: IReferenceData;
}

const ReferenceItem: FC<ReferenceItemProps> = ({
  small = false,
  data
}) => {
  
  return (
    <ReferenceItemComponent href={'/'+data.slug} passHref small={small} bg={data.Background}>
      {!small && <Logo inverse={checkColor(data.Background)}>
        <img src={process.env.APP_API+data.logo.data.attributes.url+'?format=webp&width=210'} />
      </Logo>}
      {small && <ReferenceHead inverse={checkColor(data.Background)} variant="h3">{data.title}</ReferenceHead>}
      {!small && <Typography color={checkColor(data.Background) ? "white" : "black"} component="div" variant="body2" dangerouslySetInnerHTML={{__html: data.description}} />}
      <Grow />
      <Image small={small} src={process.env.APP_API+data.image.data.attributes.url+'?format=webp&width=450'} />
    </ReferenceItemComponent>
  )
}

export default ReferenceItem
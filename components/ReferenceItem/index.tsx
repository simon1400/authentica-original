
import { FC } from "react"
import { Typography } from "@mui/material"
import { Image, LogoReference as Logo, ReferenceHead, ReferenceItemComponent } from "./styled"
import Link from "next/link"
import Waterdrop from 'public/assets/waterdrop.svg'
import { useRouter } from "next/router"
import { checkColor } from "utility/checkColor"

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
  bg?: string;
  inverse?: boolean;
  data: IReferenceData;
}

const ReferenceItem: FC<ReferenceItemProps> = ({
  small = false,
  bg,
  inverse = false,
  data
}) => {  

  const router = useRouter()

  return (
    <Link href={router.asPath+"/"+data.slug} passHref>
      <ReferenceItemComponent small={small} bg={data.Background}>
        {!small && <Logo inverse={checkColor(data.Background)}>
          <img src={process.env.APP_API+data.logo.data.attributes.url} />
        </Logo>}
        {small && <ReferenceHead inverse={checkColor(data.Background)} variant="h3">{data.title}</ReferenceHead>}
        {!small && <Typography color={checkColor(data.Background) ? "white" : "black"} variant="body2"><div dangerouslySetInnerHTML={{__html: data.description}}/></Typography>}
        <Image small={small} src={process.env.APP_API+data.image.data.attributes.url} />
      </ReferenceItemComponent>
    </Link>
  )
}

export default ReferenceItem
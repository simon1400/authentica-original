
import { FC } from "react"
import { Typography } from "@mui/material"
import { Image, LogoReference as Logo, ReferenceHead, ReferenceItemComponent } from "./styled"
import Link from "next/link"

interface ReferenceItemProps {
  small?: boolean;
  bg: string;
  inverse?: boolean;
}

const ReferenceItem: FC<ReferenceItemProps> = ({
  small = false,
  bg,
  inverse = false
}) => {
  return (
    <Link href="/" passHref>
      <ReferenceItemComponent small={small} bg={bg}>
        {!small && <Logo inverse={inverse} />}
        {small && <ReferenceHead inverse={inverse} variant="h3">Shop in shop pro Waterdrop</ReferenceHead>}
        {!small && <Typography color={inverse ? "white" : "black"} variant="body2">Vybavení interiéru první vlajkové prodejny Waterdrop v Brně.</Typography>}
        <Image small={small} src="/assets/image1.png" />
      </ReferenceItemComponent>
    </Link>
  )
}

export default ReferenceItem
import styled from "@emotion/styled"
import { Typography, TypographyProps } from "@mui/material"
import { FC } from "react"

interface ContactItem {
  level?: TypographyProps[`variant`]
}

const ContactItem: FC<ContactItem> = ({
  level = `h4`
}) => {
  return(
    <ContactItemC>
      <Typography variant={level}>Brno - sídlo společnosti</Typography>
      <Typography variant="body2"><b>areál Prologis Syrovice</b><br /> Syrovice 688 -  rampa F <br />664 67 Syrovice Česká republika</Typography>
    </ContactItemC>
  )
}

const ContactItemC = styled.div`
  text-align: center;
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 20px;
  h3, h4{
    margin-bottom: 45px;
  }
`

export default ContactItem
import { Typography, TypographyProps } from "@mui/material"
import { FC } from "react"
import { ContactItemC } from "./styled";
interface ContactItem {
  level?: TypographyProps[`variant`];
  data: any
}

const ContactItem: FC<ContactItem> = ({
  level = `h4`,
  data
}) => {
  return(
    <ContactItemC>
      <Typography variant={level}>{data.title}</Typography>
      <Typography variant="body2"><div dangerouslySetInnerHTML={{__html: data.content}} /></Typography>
    </ContactItemC>
  )
}



export default ContactItem
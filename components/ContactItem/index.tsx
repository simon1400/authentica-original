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
      <Typography variant="body2" component="div" dangerouslySetInnerHTML={{__html: data.content}} />
    </ContactItemC>
  )
}



export default ContactItem
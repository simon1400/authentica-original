import { Container, Grid } from "@mui/material"
import { FC } from "react"
import { ContactItem, Icon } from "./styled";
import Icons from "components/Icons";

interface IContactItem {
  text: string;
  link: string;
  icon: any;
}
interface IContactLine {
  data: IContactItem[]
}

const ContactLine: FC<IContactLine> = ({
  data
}) => {
  return (
    <Container>
      <Grid container spacing={10}>
        {data.map((item, index) => <Grid key={index} item xs={4}>
            <ContactItem>
              <Icon>
                <Icons icon={item.icon} />
              </Icon>
              <span>{item.text}</span>
            </ContactItem>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}



export default ContactLine
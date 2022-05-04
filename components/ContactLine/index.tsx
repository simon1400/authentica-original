import styled from "@emotion/styled"
import { Container, Grid } from "@mui/material"
import { FC } from "react"
import Envelope from 'public/assets/envelope.svg'
import { ContactItem, Icon } from "./styled";

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
                <Envelope />
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
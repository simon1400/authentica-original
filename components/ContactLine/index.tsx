import styled from "@emotion/styled"
import { Container, Grid } from "@mui/material"
import { FC } from "react"
import Envelope from 'public/assets/envelope.svg'

const ContactLine: FC = () => {
  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <ContactItem>
            <Icon>
              <Envelope />
            </Icon>
            <span>authentica@authentica.cz</span>
          </ContactItem>
        </Grid>
        <Grid item xs={4}>
          <ContactItem>
            <Icon>
              <Envelope />
            </Icon>
            <span>authentica@authentica.cz</span>
          </ContactItem>
        </Grid>
        <Grid item xs={4}>
          <ContactItem>
            <Icon>
              <Envelope />
            </Icon>
            <span>authentica@authentica.cz</span>
          </ContactItem>
        </Grid>
      </Grid>
    </Container>
  )
}

const ContactItem = styled.div(({theme}) => `
  text-align: center;
  margin-bottom: 120px;
  span{
    color: ${theme.palette.primary.main};
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.4px;
    display: block;
  }
`)

const Icon = styled.div(({theme}) => `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1.5px rgba(228, 0, 43, 0.3);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  svg{
    color: ${theme.palette.primary.main};
    fill: ${theme.palette.primary.main};
    height: 14px;
    margin: auto;
  }
`)

export default ContactLine
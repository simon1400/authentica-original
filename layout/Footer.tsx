import styled from "@emotion/styled"
import { Container, Grid, Typography } from "@mui/material"
import SocialNav from "components/SocialNav"
import ContentWrap from "styles/ContentWrap"
import { Head } from "styles/Head"

const FooterLayout = () => {
  return (
    <Footer>
      <Content>
        <Typography color="white" variant="body2" marginBottom={12}>Buďme v kontaku</Typography>
        <Head color="white" variant="h2">Pojďme na to</Head>
        <Label>MEMBER OF AUTHENTICA GROUP</Label>
      </Content>
      <Bottom>
        <ContentWrap>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={2}>
                <ul>
                  <li><a href="/">+420 548 217 991</a></li>
                  <li><a href="/">info@authentica.cz</a></li>
                </ul>
              </Grid>
              <Grid item xs={2}>
                <ul>
                  <li>Authentica group, s.r.o.</li>
                  <li>IČO: 123456789</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul>
                  <li><a href="/">Vídeňská 102/113</a></li>
                  <li>Brno, 619 00</li>
                </ul>
              </Grid>
              <Grid item xs={2}>
                <SocialNav />
              </Grid>
            </Grid>
          </Container>
        </ContentWrap>
      </Bottom>
    </Footer>
  )
}

const Footer = styled.footer`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: -1;
`

const Content = styled.div`
  margin: auto;
  text-align: center;
  display: inline-block;
`

const Label = styled.label(({theme}) => `
  color: ${theme.palette.primary.main};
  font-size: 16px;
  letter-spacing: 2.56px;
  line-height: 1;
  font-weight: bold;
  margin-top: ${theme.spacing(6)};
`);

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 50px;
  ul{
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    li{
      list-style-type: none;
      line-height: 1;
      padding-left: 0;
      font-size: 19px;
      line-height: 1.58;
      color: white;
      &:before{
        display: none;
      }
      a{
        font-size: 19px;
        line-height: 1.58;
        color: white;
      }
    }
  }
`

export default FooterLayout
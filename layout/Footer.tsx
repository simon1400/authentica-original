import { useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { Container, Grid, Typography } from "@mui/material"
import SocialNav from "components/SocialNav"
import Link from "next/link"
import footerNavQuery from "queries/footerNav"
import { FC } from "react"
import ContentWrap from "styles/ContentWrap"
import { Head } from "styles/Head"

interface IFooter {
  data: any;
}

const FooterLayout: FC<IFooter> = ({
  data
}) => {

  const {data: nav, loading, error} = useQuery(footerNavQuery)

  if(loading || data === undefined) {
    return null
  }

  const footerNav = nav.navigation.data.attributes
  
  return (
    <Footer>
      <Content>
        <Typography color="white" variant="body2" marginBottom={12}>{data.subTitle}</Typography>
        <Link href={data.link}>
          <a><Head color="white" variant="h2">{data.title}</Head></a>
        </Link>
        <Label>MEMBER OF AUTHENTICA GROUP</Label>
      </Content>
      <Bottom>
        <ContentWrap>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={2}>
                <div dangerouslySetInnerHTML={{__html: footerNav.footer1}} />
              </Grid>
              <Grid item xs={12} md={2}>
                <div dangerouslySetInnerHTML={{__html: footerNav.footer2}} />
              </Grid>
              <Grid item xs={12} md={6}>
                <div dangerouslySetInnerHTML={{__html: footerNav.footer3}} />
              </Grid>
              <Grid item xs={12} md={2}>
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
  a{
    text-decoration: none;
  }
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
  p{
    color: white;
    font-size: 19px;
    &:first-child{
      margin-top: 0;
    }
    &:last-child{
      margin-bottom: 0;
    }
    a{
      color: white;
    }
  }
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
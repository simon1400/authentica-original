import { useQuery } from "@apollo/client"
import { Container, Grid, Typography } from "@mui/material"
import SocialNav from "components/SocialNav"
import Link from "next/link"
import footerNavQuery from "queries/footerNav"
import { FC } from "react"
import ContentWrap from "styles/ContentWrap"
import { Bottom, Content, Footer, Label } from "styles/Footer"
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
          <a className="" target="_blank">
            <Head color="white" variant="h2">{data.title}</Head>
          </a>
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



export default FooterLayout
import styled from "@emotion/styled"
import { Container, Grid, Typography } from "@mui/material"
import Tags from "components/Tags"

const PageHeadInside = () => {
  return (
    <section>
      <Top>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={8}>
              <Typography variant='body1'>Jsme Authentica, navrhujeme a vyrábíme</Typography>
              <Typography variant='h1'>Vybavení interiéru pro Waterdrop</Typography>
            </Grid>
            <Grid item xs={4}>
              <WrapPageImg>
                <img src="/assets/image1.png" />
              </WrapPageImg>
            </Grid>
          </Grid>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <Grid container spacing={18}>
            <Grid item xs={8}>
              <Typography variant='body1'>Vybavení interiéru první vlajkové prodejny Waterdrop v Brně vychází ze stejného konceptu jako signature store ve Vídni a další po celém světě budou následovat. Lokace obchodu v úzkém centru města, na prestižní adrese na Rašínova 4 o podlahové ploše 66 m². Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo ad Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography>
            </Grid>
            <Grid item xs={4}>
              <Tags />
              <Tags />
            </Grid>
          </Grid>
        </Container>
      </Bottom>
    </section>
  )
}

const Top = styled.div`
  background-color: #efeae4;
  padding-top: 355px;
  padding-bottom: 60px;
  p{
    margin-bottom: 30px;
  }
`

const Bottom = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
`
const WrapPageImg = styled.div`
  position: relative;
  height: calc(100% + 60px);
  img{
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 100%;
    left: 0;
    bottom: -60px;
  }
`

export default PageHeadInside
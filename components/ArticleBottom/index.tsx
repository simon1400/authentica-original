import { FC } from "react"
import {Container, Grid, Typography} from '@mui/material'
import SocialNav from "components/SocialNav"
import styled from "@emotion/styled"

const ArticleBottom: FC = () => {
  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center" marginBottom={30}>
        <Grid item>
          <Publication>PUBLIKOVÁNO 25. 2. 2022 / NIKOLA KOKEŠOVÁ</Publication>
        </Grid>
        <Grid item>
          <SocialNav invert big />
        </Grid>
      </Grid>
    </Container>
  )
}

const Publication = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  color: black;
  letter-spacing: 2.56;
  line-height: .94;
  text-transform: uppercase;
`

export default ArticleBottom
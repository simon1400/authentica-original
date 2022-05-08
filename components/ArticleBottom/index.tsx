import { FC } from "react"
import {Container, Grid, Typography} from '@mui/material'
import SocialNav from "components/SocialNav"
import styled from "@emotion/styled"

interface IArticleBottom {
  data: string;
}

const ArticleBottom: FC<IArticleBottom> = ({
  data
}) => {
  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center" marginBottom={30}>
        <Grid item>
          <Publication>{data}</Publication>
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
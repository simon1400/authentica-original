import { FC } from "react"
import {Container, Grid, Typography} from '@mui/material'
import SocialNav, { IShare } from "components/SocialNav"
import styled from "@emotion/styled"

interface IArticleBottom {
  data: string;
  share: IShare;
}

const ArticleBottom: FC<IArticleBottom> = ({
  data,
  share
}) => {
  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Publication>{data}</Publication>
        </Grid>
        <Grid item>
          <SocialNav share={share} invert big />
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
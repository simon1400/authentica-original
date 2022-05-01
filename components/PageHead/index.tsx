import { Button, Container, Grid, SvgIcon, Typography } from "@mui/material"
import PlayIcon from 'public/assets/play.svg'
import { FC } from "react"
import { Head, PageHead } from "./styles";
import SymbolSVG from '../Symbol'

interface PageHeadProps {
  items: string[];
  buttons?: boolean
}

const PageHeadComponent: FC<PageHeadProps> = ({
  items = [],
  buttons = false
}) => {

  return (
    <Container>
      <PageHead>
        <SymbolSVG />
        <Typography variant='body1'>Jsme Authentica, navrhujeme a vyrábíme</Typography>
        {items.map((item, index) => <div key={index}>
          <Head variant='h1'>{item}</Head>
        </div>)}
        {buttons && <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
          spacing={6}
        >
          <Grid item md='auto'>
            <Button variant="contained">naše REFERENCE</Button>
          </Grid>
          <Grid item md='auto'>
            <Button 
              variant="withIcon" 
              disableRipple
              startIcon={<SvgIcon>
                <PlayIcon />
              </SvgIcon>}
            >
              spustit video
            </Button>
          </Grid>
        </Grid>}
      </PageHead>
    </Container>
  )
}



export default PageHeadComponent
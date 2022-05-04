import { Button, Container, Grid, SvgIcon, Typography } from "@mui/material"
import PlayIcon from 'public/assets/play.svg'
import { FC } from "react"
import { Head, PageHead } from "./styles";
import SymbolSVG from '../Symbol'
import Link from "next/link";

interface IHead {
  Text: string;
  article: any;
}

interface PageHeadProps {
  head: IHead[] | string;
  buttons?: boolean;
  label: string
}

const PageHeadComponent: FC<PageHeadProps> = ({
  head,
  buttons = false,
  label
}) => {

  return (
    <Container>
      <PageHead>
        <SymbolSVG />
        <Typography variant='body1'>{label}</Typography>
        {Array.isArray(head) 
          ? head.map((item, index) => <div key={index}>
            <Link href={"/"+item.article.data.attributes.slug} passHref>
              <Head variant='h1'>{item.Text}</Head>
            </Link>
          </div>) 
          : <Head variant='h1'>{head}</Head>
        }
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
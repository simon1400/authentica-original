import { Button, Container, Grid, SvgIcon, Typography, useMediaQuery } from "@mui/material"
import PlayIcon from 'public/assets/play.svg'
import { FC } from "react"
import { Head, PageHead } from "./styles";

import Link from "next/link";
import { useRouter } from "next/router";
import HeadMarkdown from "components/HeadMarkdown";
import useTranslation from 'next-translate/useTranslation';

interface IHead {
  Text: string;
  article: any;
}

interface PageHeadProps {
  head: IHead[] | string;
  buttons?: any;
  label: string;
  openModal?: () => void
}

const PageHeadComponent: FC<PageHeadProps> = ({
  head,
  buttons = false,
  label,
  openModal
}) => {

  const { t } = useTranslation("common")
  const router = useRouter()

  return (
    <Container>
      <PageHead homepage={router.asPath === "/" ? true : false}>
        <div>
          <Typography variant='body1'>{label}</Typography>
          {Array.isArray(head) 
            ? head.map((item, index) => <div key={index}>
              <Link href={"/"+item.article.data?.attributes?.slug} passHref>
                <Head variant='h1'>{item.Text}</Head>
              </Link>
            </div>)
            : <HeadMarkdown lavel='h1' title={head} />
          }

          {buttons && <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
            marginTop={5}
            spacing={6}
          >
            <Grid item xs={12} sm="auto">
              <Button href={buttons.link} variant="contained">
                <span>{buttons.text}</span>
              </Button>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Button 
                variant="withIcon"
                onClick={openModal}
                disableRipple
                startIcon={<SvgIcon>
                  <PlayIcon />
                </SvgIcon>}
              >
                {t("runVideo")}
              </Button>
            </Grid>
          </Grid>}
        </div>
      </PageHead>
    </Container>
  )
}



export default PageHeadComponent
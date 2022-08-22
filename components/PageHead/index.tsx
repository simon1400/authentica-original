import { Button, Container, Grid, SvgIcon, Typography } from "@mui/material"
import PlayIcon from 'public/assets/play.svg'
import { FC } from "react"
import { PageHead } from "./styles";

import { useRouter } from "next/router";
import HeadMarkdown from "components/HeadMarkdown";
import useTranslation from 'next-translate/useTranslation';
import AnimLink from "components/AnimLink";


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
            ? head.map((item, idx) => <AnimLink key={idx} item={item} />)
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
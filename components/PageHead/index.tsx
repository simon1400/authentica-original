import { Button, Container, Grid, SvgIcon, Typography } from "@mui/material"
import PlayIcon from 'public/assets/play.svg'
import { FC } from "react"
import { PageHead } from "./styles";

import { useRouter } from "next/router";
import HeadMarkdown from "components/HeadMarkdown";
import useTranslation from 'next-translate/useTranslation';
import AnimLink from "components/AnimLink";
import SymbolSVG from "components/Symbol";

import { animated, useSpring } from 'react-spring'


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

  const props = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(10px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    },
    delay: 500,
    config: { duration: 500 },
  })

  return (
    <Container>
      <PageHead homepage={router.asPath === "/" ? true : false}>
        <div>
          <animated.div style={props}>
            <Typography variant='body1'>{label}</Typography>
          </animated.div>
          {Array.isArray(head) 
            ? head.map((item, idx) => <AnimLink key={idx} idx={idx} item={item} />)
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
        <SymbolSVG homepage={Array.isArray(head)} />
      </PageHead>
    </Container>
  )
}



export default PageHeadComponent
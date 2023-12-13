import { Container, Grid, Typography } from "@mui/material"
import Tags from "components/Tags"
import { useTranslation } from 'next-i18next';
import { FC } from "react"
import { Bottom, Top, WrapPageImg } from "./styles"

interface IPageHeadeInside {
  label: string;
  title: string;
  image: string;
  content: string;
  background: string;
  tags: any;
  invert: boolean;
}

const PageHeadInside: FC<IPageHeadeInside> = ({
  label,
  title,
  image,
  content,
  background,
  tags,
  invert
}) => {

  const { t } = useTranslation("common")

  return (
    <section>
      <Top background={background} invert={invert}>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={8}>
              <Typography variant='body1'>{label}</Typography>
              <Typography variant='h1'>{title}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <WrapPageImg>
                <img src={process.env.APP_API+image+'?format=webp&width=400'} />
              </WrapPageImg>
            </Grid>
          </Grid>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <Grid container spacing={18}>
            <Grid item xs={12} sm={8}>
              <Typography variant='body1' component="div" dangerouslySetInnerHTML={{__html: content}} />
            </Grid>
            <Grid item xs={12} sm={4}>
              {!!tags.categories.length && <Tags title={t("category")} data={tags.categories} />}
              {!!tags.technologies.length && <Tags title={t("technology")} data={tags.technologies} />}
              {!!tags.materials.length && <Tags title={t("materials")} data={tags.materials} />}
            </Grid>
          </Grid>
        </Container>
      </Bottom>
    </section>
  )
}

export default PageHeadInside
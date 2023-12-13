import { Button, Container, Grid, Typography } from "@mui/material"
import HeadMarkdown from "components/HeadMarkdown";
import Image from "components/Image";
import { IImage } from "interfaces/image";
import { FC } from "react"
import ImageSquare from "styles/ImageSquare"
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

interface IShortItem {
  content: string;
  image: IImage;
  slug: string;
  title: string;
  prefix: string;
}

const ShortItem: FC<IShortItem> = ({
  content,
  image,
  slug,
  title,
  prefix
}) => {

  const { t } = useTranslation("common")
  const router = useRouter()

  return (
    <Container>
      <Grid container rowSpacing={{xs: 4, md: 16}} columnSpacing={{xs: 4, md: 16}} marginBottom={12}>
        <Grid item xs={12} sm={4}>
          <ImageSquare>
            <Image image={image.data} format="&resize=337x337" alt="" />
          </ImageSquare>
        </Grid>
        <Grid item xs={12} sm={8}>
          <HeadMarkdown lavel="h3" marginBottom={8} title={title} />
          <Typography variant="body2" marginBottom={6} component="div" dangerouslySetInnerHTML={{__html: content}} />
          <Button href={`${router.locale !== "cs" ? "/"+router.locale : ""}/${prefix}/${slug}`} disableRipple>{t("readMore")}</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShortItem
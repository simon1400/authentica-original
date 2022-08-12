import { Button, Container, Grid, Typography } from "@mui/material"
import HeadMarkdown from "components/HeadMarkdown";
import { IImage } from "interfaces/image";
import { FC } from "react"
import ImageSquare from "styles/ImageSquare"

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
  return (
    <Container>
      <Grid container rowSpacing={{xs: 4, md: 16}} columnSpacing={{xs: 4, md: 16}} marginBottom={12}>
        <Grid item xs={12} sm={4}>
          <ImageSquare>
            <img src={process.env.APP_API+image.data.attributes.url+'?format=webp&resize=337x337'} alt="asd" />
          </ImageSquare>
        </Grid>
        <Grid item xs={12} sm={8}>
          <HeadMarkdown lavel="h3" marginBottom={8} title={title} />
          <Typography variant="body2" marginBottom={6} component="div" dangerouslySetInnerHTML={{__html: content}} />
          <Button href={`/${prefix}/${slug}`} disableRipple>Zjistěte  více</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShortItem
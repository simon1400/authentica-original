import { Button, Container, Grid, Typography } from "@mui/material"
import { IImage } from "interfaces/image";
import { FC } from "react"
import ImageSquare from "styles/ImageSquare"

interface IShortItem {
  content: string;
  image: IImage;
  slug: string;
  title: string;
}

const ShortItem: FC<IShortItem> = ({
  content,
  image,
  slug,
  title,
}) => {
  return (
    <Container>
      <Grid container spacing={16} marginBottom={12}>
        <Grid item xs={4}>
          <ImageSquare>
            <img src={"http://localhost:1340"+image.data.attributes.url} alt="asd" />
          </ImageSquare>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" component="h2" marginBottom={8}>{title}</Typography>
          <Typography variant="body2" marginBottom={6} component="div" dangerouslySetInnerHTML={{__html: content}} />
          <Button href={`/blog/${slug}`} disableRipple>Zjistěte  více</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShortItem
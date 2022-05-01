import styled from "@emotion/styled"
import { Button, ButtonProps, Container, Grid, Typography } from "@mui/material"
import CategoryItem from "components/CategoryItem";
import ReferenceItem from "components/Reference"
import { FC, useEffect, useState } from "react"
import BigImage from "styles/BigImage";
import ContentWrap from "styles/ContentWrap";
import ImageSquare from "styles/ImageSquare";

interface ChapterProps {
  content?: boolean;
  head?: boolean;
  items?: boolean;
  images?: string[];
  buttonVariant?: ButtonProps['variant'];
  contentBig?: boolean;
  smallLevel?: boolean;
  smallReference?: boolean;
  categoryItems?: boolean;
}

const Chapter: FC<ChapterProps> = ({
  content = false,
  head = false,
  items = false,
  images = [],
  buttonVariant = undefined,
  contentBig = false,
  smallLevel = false,
  smallReference = false,
  categoryItems = false
}) => {

  const [column, setColumn] = useState(0)

  useEffect(() => {
    if(images.length < 4) {
      setColumn(12 / images.length)
    }else{
      setColumn(4)
    }
  }, [])

  return (
    <section>
      {(head || content) && <Container>
        <ContentWrap>
          {head && <Typography variant={smallLevel ? "h3" : "h2"} component="h2" marginBottom={12}>Vybavení prodejen</Typography>}
          {content && <Typography variant={contentBig ? "body1" : "body2"} marginBottom={12}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla pulvinar eleifend sem. Praesent id justo in neque elementum ultrices. Sed convallis magna eu sem. Duis viverra diam non justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas fermentum, sem in pharetra pellentesque, velit tuante, in pharetra metus odio a lectus. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.</Typography>}
        </ContentWrap>
      </Container>}
      {!!images.length && <Container maxWidth="xl">
        <Grid container spacing={10} marginBottom={12} justifyContent="center">
          {images.map((item, index) => <Grid key={index} item xs={column}>
            {column < 12 && <ImageSquare>
              <img src={item} />
            </ImageSquare>}
            {column === 12 && <BigImage>
              <img src={item} />
            </BigImage>}
          </Grid>)}
        </Grid>
      </Container>}
      {categoryItems && <Container maxWidth="xl">
        <Grid container spacing={10} marginBottom={12}>
          <Grid item xs={4}>
            <CategoryItem />
          </Grid>
          <Grid item xs={4}>
            <CategoryItem />
          </Grid>
          <Grid item xs={4}>
            <CategoryItem />
          </Grid>
          <Grid item xs={4}>
            <CategoryItem />
          </Grid>
        </Grid>
      </Container>}
      {items && <Container maxWidth="xl">
        <Grid container spacing={10} marginBottom={24}>
          <Grid item xs={4}>
            <ReferenceItem small={smallReference} inverse bg="#e61e2c" />
          </Grid>
          <Grid item xs={4}>
            <ReferenceItem small={smallReference} inverse bg="#e61e2c" />
          </Grid>
          <Grid item xs={4}>
            <ReferenceItem small={smallReference} inverse bg="#e61e2c" />
          </Grid>
        </Grid>
      </Container>}
      {buttonVariant && <Container>
        <Button variant={buttonVariant} sx={{marginBottom: "60px"}}>ukázka vybavení prodejen</Button>
      </Container>}
    </section>
  )
}



export default Chapter
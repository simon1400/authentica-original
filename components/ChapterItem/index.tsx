import { Button, ButtonProps, Container, Grid, Typography, useMediaQuery } from "@mui/material"
import HeadMarkdown from "components/HeadMarkdown";
import Image from "components/Image";
import ReferenceItem from "components/ReferenceItem"
import { FC, useEffect, useState } from "react"
import BigImage from "styles/BigImage";
import ContentWrap from "styles/ContentWrap";
import ImageSquare from "styles/ImageSquare";

interface IButtonInfo {
  link: string;
  text: string;
}

interface ChapterProps {
  content?: string;
  head?: string;
  items?: any[];
  images?: any[];
  buttonVariant?: ButtonProps['variant'];
  button?: IButtonInfo;
  contentBig?: boolean;
  smallLevel?: boolean;
  smallReference?: boolean;
  categoryItems?: boolean;
}

const ChapterItem: FC<ChapterProps> = ({
  content = "",
  head = "",
  items = [],
  images = [],
  button = {},
  buttonVariant = undefined,
  contentBig = false,
  smallLevel = false,
  smallReference = false,
  categoryItems = false
}) => {

  const [column, setColumn] = useState(0)

  const mediaXs = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    if(images.length < 4) {
      setColumn(12 / images.length)
    }else{
      setColumn(4)
    }
  }, [])

  return (
    <section>
      {(!!head.length || content) && <Container>
        <ContentWrap>
          {!!head.length && <HeadMarkdown marginBottom={12} title={head} lavel={smallLevel ? "h3" : "h2"} />}
          {content && <Typography variant={contentBig ? "body1" : "body2"} component="div" marginBottom={12}><div dangerouslySetInnerHTML={{__html: content}} /></Typography>}
        </ContentWrap>
      </Container>}
      {!!images.length && <Container maxWidth="xl">
        <Grid container spacing={10} marginBottom={12} justifyContent="center">
          {images.map((item, index) => <Grid key={index} item sm={column} md={column} xs={12}>
            {column < 12 && <ImageSquare>
              <Image image={item} format="&resize=440x440" alt="" />
            </ImageSquare>}
            {column === 12 && <BigImage>
              <Image image={item} format="&width=1500" alt="" />
            </BigImage>}
          </Grid>)}
        </Grid>
      </Container>}
      {!!items.length && <Container maxWidth="xl">
        <Grid container spacing={10} marginBottom={24}>
          {items.map((item: any, index: number) => <Grid key={index} item xs={12} sm={6} md={4}>
            <ReferenceItem small={smallReference} data={item.attributes} />
          </Grid>)}
        </Grid>
      </Container>}
      {(button.link && button.text) && <Container>
        <Button 
          variant={buttonVariant} 
          href={button.link} 
          disableRipple={buttonVariant !== 'contained'} 
          sx={{marginBottom: mediaXs ? "80px" : "180px"}} 
          data-replace={button.text}
        >
            <span>{button.text}</span>
        </Button>
      </Container>}
    </section>
  )
}



export default ChapterItem
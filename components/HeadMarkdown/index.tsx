import styled from "@emotion/styled"
import { Typography, TypographyProps } from "@mui/material"
import { FC } from "react";
import { markdown } from "utility/markdown";

interface IHeadMarkdown {
  title: string;
  lavel?: TypographyProps["variant"];
  marginBottom?: number;
}

const HeadMarkdown: FC<IHeadMarkdown> = ({title, lavel = "h2", marginBottom = 0}) => {

  let titleMarkdown = markdown(title)

  return (
    <Head variant={lavel} marginBottom={marginBottom} dangerouslySetInnerHTML={{__html: titleMarkdown}} />
  )
}

const Head = styled(Typography)(({theme}) => `
  b{
    color: ${theme.palette.primary.main};
  }
`)

export default HeadMarkdown
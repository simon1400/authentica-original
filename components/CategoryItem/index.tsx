import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import Link from "next/link"
import { FC } from "react"
import ImageSquare from "styles/ImageSquare"

const CategoryItem: FC = () => {
  return (
    <Link href="/" passHref>
      <CategoryItemC>
        <ImageSquare>
          <img src="/assets/short.jpeg" />
        </ImageSquare>
        <Typography variant="body1">shop in shop - Technics</Typography>
      </CategoryItemC>
    </Link>
  )
}

const CategoryItemC = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  p{
    font-size: 23px;
    line-height: 1.83;
    padding: 10px;
  }
`

export default CategoryItem
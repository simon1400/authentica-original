import styled from "@emotion/styled"
import { Container, Grid } from "@mui/material"
import { FC } from "react"

interface INumbers {
  data: any
}

const Numbers: FC<INumbers> = ({
  data
}) => {

  return (
    <Container>
      <Grid container justifyContent="center" marginBottom={6}>
        {data.map((item: any, index: number) => <Grid key={index} item xs={12} sm={4} md={12 / data.length}>
          <Number>
            <span>{item.number}</span>
            <span>{item.description}</span>
          </Number>
        </Grid>)}
      </Grid>
    </Container>
  )
}

const Number = styled.div`
  margin-bottom: 30px;
  span{
    display: block;
    text-align: center;
    color: black;
    line-height: 1;
    font-weight: bold;
    &:first-of-type{
      font-size: 94px;
    }
    &:last-of-type{
      font-size: 23px;
    }
    @media(max-width: 640px) {
      &:first-of-type{
        font-size: 30px;
        margin-bottom: 10px;
      }
      &:last-of-type{
        font-size: 18px;
      }
    }
  }
`

export default Numbers
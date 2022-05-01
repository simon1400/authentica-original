import styled from "@emotion/styled"
import { Container, Grid } from "@mui/material"

const Numbers = () => {
  return (
    <Container>
      <Grid container marginBottom={6}>
        <Grid item xs={3}>
          <Number>
            <span>1650</span>
            <span>pracovních hodin</span>
          </Number>
        </Grid><Grid item xs={3}>
          <Number>
            <span>1650</span>
            <span>pracovních hodin</span>
          </Number>
        </Grid><Grid item xs={3}>
          <Number>
            <span>1650</span>
            <span>pracovních hodin</span>
          </Number>
        </Grid><Grid item xs={3}>
          <Number>
            <span>1650</span>
            <span>pracovních hodin</span>
          </Number>
        </Grid>
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
    &:first-child{
      font-size: 94px;
    }
    &:last-child{
      font-size: 23px;
    }
  }
`

export default Numbers
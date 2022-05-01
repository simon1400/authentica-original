import styled from "@emotion/styled"
import { Container, Grid } from "@mui/material"
import DropDownItem from "components/DropDownItem"
import { FC } from "react"

interface DropDownProps {
  shown: number;
  setDropShown: (e: number) => void
}

const DropDown: FC<DropDownProps> = ({
  shown,
  setDropShown
}) => {
  return (
    <DropDownC 
      shown={shown} 
      onMouseEnter={() => setDropShown(1)}
      onMouseLeave={() => setDropShown(-1)}>
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={3}>
            <DropDownItem />
          </Grid>
          <Grid item xs={3}>
            <DropDownItem />
          </Grid>
          <Grid item xs={3}>
            <DropDownItem />
          </Grid>
          <Grid item xs={3}>
            <DropDownItem />
          </Grid>
        </Grid>
      </Container>
    </DropDownC>
  )
}

export const DropDownC = styled.div<{shown: number}>(({shown}) => `
  padding-top: 200px;
  padding-bottom: 70px;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 2;
  background: white;
  position: absolute;
  display: ${shown >= 0 ? "block" : "none"};
`)

export default DropDown
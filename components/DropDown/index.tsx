import styled from "@emotion/styled"
import { Container, Grid } from "@mui/material"
import DropDownItem from "components/DropDownItem"
import { FC } from "react"

interface DropDownProps {
  shown: number;
  idx: number;
  data: any;
  setDropShown: (e: number) => void
}

const DropDown: FC<DropDownProps> = ({
  shown,
  setDropShown,
  idx,
  data
}) => {
  return (
    <DropDownC 
      shown={shown === idx} 
      onMouseEnter={() => setDropShown(idx)}
      onMouseLeave={() => setDropShown(-1)}>
      <Container maxWidth="lg">
        <Grid container justifyContent={"center"} spacing={12}>
          {/* @ts-ignore */}
          {data.map((item, index) => <Grid key={index} item xs={12/data.length}>
            <DropDownItem data={item} />
          </Grid>)}
        </Grid>
      </Container>
    </DropDownC>
  )
}

export const DropDownC = styled.div<{shown: boolean}>(({shown}) => `
  padding-top: 200px;
  padding-bottom: 70px;
  width: 100vw;
  left: 0;
  top: ${shown ? 0 : "-1000%"};
  z-index: 2;
  background: white;
  position: absolute;
  transition: all .5s ease;
  display: block;
`)

export default DropDown
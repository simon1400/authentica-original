import styled from "@emotion/styled"
import { Typography } from "@mui/material"


export const Head = styled(Typography)(({theme}) => `
  position: relative;
  display: inline-flex;
  cursor: pointer;
  /* z-index: 99; */
  font-size: 84px!important;
  white-space: nowrap;
  margin-top: -20px;
  >div{
    position: relative;
    /* z-index: -100; */
  }
  &:hover{
    color: ${theme.palette.primary.main};
  }
  @media(max-width: 640px) {
    font-size: 40px!important;
  }
`)
import styled from "@emotion/styled"
import { Typography } from "@mui/material"

const DropDownItem = () => {
  return (
    <DropDownItemC>
      <div>
        <img src="/assets/image1.png" />
      </div>
      <div>
        <Typography variant="h5">in store design</Typography>
        <ul>
          <li><a href="/">Shop in shop</a></li>
          <li><a href="/">Shop in shop</a></li>
        </ul>
      </div>
    </DropDownItemC>
  )
}

const DropDownItemC = styled.div(({theme}) => `
  display: flex;
  align-items: center;
  h5{
    color: ${theme.palette.primary.main};
    margin-bottom: 10px;
  }
  div{
    &:first-child{
      margin-right: 10px;
    }
    &:last-child{
      flex-grow: 1;
    }
  }
  div ul{
    padding-left: 0;
    margin: 0;
    li{
      padding-left: 0;
      list-style-type: none;
      display: block;
      line-height: 1;
      margin-bottom: 7px;
      a{
        font-size: 17px;
        opacity: .7;
        line-height: 1;
        text-transform: none;
        color: black;
        display: block;
        text-decoration: none;
        font-weight: 300;
      }
    }
  }
  img{
    max-height: 100px;
    height: 100px;
  }
`)

export default DropDownItem
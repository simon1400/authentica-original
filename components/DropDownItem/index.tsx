import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import Link from "next/link"
import { FC } from "react"

interface IDropDownItem {
  data: any
}

const DropDownItem: FC<IDropDownItem> = ({
  data
}) => {
  return (
    <DropDownItemC>
      <div>
        <img src={`${process.env.APP_API}${data.image.data.attributes.url}`} />
      </div>
      <div>
        <Typography variant="h5">
          <Link href={data.url} passHref>
            <a>{data.title}</a>
          </Link>
        </Typography>
        <ul>
          {(!!data.subTitle1?.length && !!data.subUrl1?.length) && <li><Link href={data.subUrl1}><a>{data.subTitle1}</a></Link></li>}
          {(!!data.subTitle2?.length && !!data.subUrl2?.length) && <li><Link href={data.subUrl2}><a>{data.subTitle2}</a></Link></li>}
          {(!!data.subTitle3?.length && !!data.subUrl3?.length) && <li><Link href={data.subUrl3}><a>{data.subTitle3}</a></Link></li>}
          {(!!data.subTitle4?.length && !!data.subUrl4?.length) && <li><Link href={data.subUrl4}><a>{data.subTitle4}</a></Link></li>}
          {(!!data.subTitle5?.length && !!data.subUrl5?.length) && <li><Link href={data.subUrl5}><a>{data.subTitle5}</a></Link></li>}
        </ul>
      </div>
    </DropDownItemC>
  )
}

const DropDownItemC = styled.div(({theme}) => `
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  justify-content: center;
  h5{
    a{
      color: ${theme.palette.primary.main}!important;
      text-decoration: none;
      position: relative;
      &:after{
        content: '';
        display: block;
        width: 0;
        transition: all .2s ease;
        height: 1.5px;
        background-color: ${theme.palette.primary.main};
        position: absolute;
        bottom: -3px;
        left: 0;
      }
      &:hover{
        &:after{
          width: 100%;
        }
      }
    }
    margin-bottom: 10px;
  }
  div{
    &:first-child{
      margin-right: 10px;
    }
    /* &:last-child{
      flex-grow: 1;
    } */
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
        position: relative;
        &:after{
          content: '';
          display: block;
          width: 0;
          transition: all .2s ease;
          height: 1px;
          background-color: ${theme.palette.primary.main};
          position: absolute;
          bottom: -2px;
          left: 0;
        }
        &:hover{
          color: ${theme.palette.primary.main}!important;
          opacity: 1;
          &:after{
            width: 100%;
          }
        }
      }
    }
  }
  img{
    max-height: 100px;
    height: 100px;
  }
`)

export default DropDownItem
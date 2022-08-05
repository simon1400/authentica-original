import { Typography } from "@mui/material"
import Link from "next/link"
import { FC } from "react"
import { DropDownItemC } from "./styled"

interface IDropDownItem {
  data: any
}

const DropDownItem: FC<IDropDownItem> = ({
  data
}) => {
  return (
    <DropDownItemC>
      <div>
        <img src={`${process.env.APP_API}${data.image.data.attributes.url}?format=webp&height=100`} />
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


export default DropDownItem
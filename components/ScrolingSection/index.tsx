import { Container } from "@mui/material"
import { FC, ReactChild, useEffect, useRef, useState } from "react"
import { ContainerScroll, ContentScroll, ItemScroll, Scroll } from "./styled"

interface IScrollSection {
  height: string;
  children: ReactChild | ReactChild[];
  widthColumn: string;
  column: number;
}

const ScrollingSection: FC<IScrollSection> = ({
  children,
  height,
  widthColumn,
  column
}) => {

  const ref = useRef(null)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // @ts-ignore
    if(ref?.current?.offsetLeft) {
      // @ts-ignore
      setOffset(ref.current?.offsetLeft)
    }
  }, [ref])

  return (
    <ContainerScroll height={height}>
      <Container ref={ref} maxWidth="xl"></Container>
      <Scroll height={height}>
        <ContentScroll height={height} widthColumn={widthColumn} column={column} left={offset}>
          {children}
        </ContentScroll>
      </Scroll>
    </ContainerScroll>
  )
}

export default ScrollingSection
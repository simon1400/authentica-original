import { Container } from "@mui/material"
import ReferenceItem from "components/Reference"
import { useEffect, useRef, useState } from "react"
import { ContainerScroll, ContentScroll, ItemScroll, Scroll } from "./styled"

const ScrollingSection = () => {

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
    <ContainerScroll>
      <Container ref={ref} maxWidth="xl"></Container>
      <Scroll>
        <ContentScroll column={9} left={offset}>
          <ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll>
          <ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll><ItemScroll>
            <ReferenceItem bg="#efeae4" />
          </ItemScroll>
        </ContentScroll>
      </Scroll>
    </ContainerScroll>
  )
}

export default ScrollingSection
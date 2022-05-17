import { Container } from "@mui/material"
import HeadMarkdown from "components/HeadMarkdown"
import Page from "layout/Page"

const NotFound = () => {
  return (
    <Page
      title="Not found"
      description="Page not found"
    >
      <Container>
        <div style={{marginTop: "300px"}}>
          <HeadMarkdown lavel="h1" title="*Not* found" />
        </div>
      </Container>
    </Page>
  )
}

export default NotFound
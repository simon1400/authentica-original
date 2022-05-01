import Chapter from "components/Chapter"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"

const PositionFull: NextPage = () => {
  return(
    <Page>
      <PageHead items={[
        'People & Culture Manager'
      ]} />

      <Chapter content contentBig />
      <Chapter content />
      <Chapter head content smallLevel />
      <Chapter head content buttonVariant="contained" smallLevel />
      <Chapter head items smallReference />
    </Page>
  )
}

export default PositionFull
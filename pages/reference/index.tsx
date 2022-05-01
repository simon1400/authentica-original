import Chapter from "components/Chapter"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"

const ReferenceCategory: NextPage = () => {
  return (
    <Page>
      <PageHead
        items={[
          'Shop in shop',
        ]} 
      />

      <Chapter content contentBig />
      <Chapter items smallReference />
      <Chapter head categoryItems /> 
    </Page>
  )
}

export default ReferenceCategory
import Chapter from "components/Chapter"
import PageHead from "components/PageHead"
import ShortItem from "components/ShortItem"
import TabsNav from "components/TabsNav"
import Page from "layout/Page"
import { NextPage } from "next"

const Blog: NextPage = () => {
  return (
    <Page>
      <PageHead items={[
        'Volné pracovní pozice'
      ]} />

      <Chapter content contentBig />

      <TabsNav />

      <ShortItem />
      <ShortItem />
      <ShortItem />
      <ShortItem />

      <Chapter />
      <Chapter head content />

    </Page>
  )
}

export default Blog
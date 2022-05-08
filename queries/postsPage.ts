import { gql } from "@apollo/client";

const postsPageQuery = gql`
  query PostsPage {
    blogOverview {
      data{
        attributes{
          title
          label
          content
          meta{
            title
            description
          }
          footer{
            title
            link
            subTitle
          }
        }
      }
    }
  }
`

export default postsPageQuery
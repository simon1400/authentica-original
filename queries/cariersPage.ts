import { gql } from "@apollo/client";

const cariersPageQuery = gql`
  query CariersPage {
    vacancyOverview {
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

export default cariersPageQuery
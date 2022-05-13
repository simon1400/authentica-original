import { gql } from "@apollo/client";

const cariersCategoryQuery = gql`
  query CariersCategory {
    vacancyCategories {
      data{
        attributes{
          title
          slug
        }
      }
    }
  }
`

export default cariersCategoryQuery
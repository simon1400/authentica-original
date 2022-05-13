import { gql } from "@apollo/client";

const postsCategoryQuery = gql`
  query PostsCategory {
    blogCategories {
      data{
        attributes{
          title
          slug
        }
      }
    }
  }
`

export default postsCategoryQuery
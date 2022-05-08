import { gql } from "@apollo/client";

const postsQuery = gql`
  query Posts {
    blogs {
      data{
        attributes{
          title
          slug
          content
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`

export default postsQuery
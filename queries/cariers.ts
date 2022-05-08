import { gql } from "@apollo/client";

const cariersQuery = gql`
  query Cariers {
    vacancies {
      data{
        attributes{
          title
          slug
          label
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

export default cariersQuery
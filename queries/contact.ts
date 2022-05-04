import { gql } from "@apollo/client";

const contactQuery = gql`
  query Contact {
    contact {
      data{
        attributes{
          title
          label
          content
          contactItem{
            text
            link
            icon{
              data{
                attributes{
                  url
                }
              }
            }
          }
          headquarters{
            title
            content
          }
          adresses{
            title
            content
          }
          footer{
            title
            link
            subTitle
          }
          meta{
            title
            description
          }
        }
      }
    }
  }
`

export default contactQuery
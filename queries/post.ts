import { gql } from "@apollo/client";

const postQuery = gql`
  query Post($slug: String!) {
    blogs(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          slug
          label
          content
          textPublication
          chapters{
            ... on ComponentElementHead{
              title
            }
            ... on ComponentElementImages{
              images{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            ... on ComponentElementNumbers{
              number{
                number
                description
              }
            }
            ... on ComponentElementReference{
              references{
                data{
                  attributes{
                    image{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                    description
                    Background
                    title
                    slug
                  }
                }
              }
            }
            ... on ComponentElementText{
              content
            }
            ... on ComponentElementButton{
              title
              link
              type
            }
          }
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

export default postQuery
import { gql } from "@apollo/client";

const carierQuery = gql`
  query Carier($slug: String!) {
    vacancies(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          slug
          label
          content
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

export default carierQuery
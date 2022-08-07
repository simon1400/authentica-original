import { gql } from "@apollo/client";

const articleQuery = gql`
  query getArticles($slug: String!, $locale: I18NLocaleCode!) {
    techArticles(filters: { slug: { eq: $slug } }, locale: $locale) {
      data{
        attributes{
          title
          label
          slug
          content
          meta{
            title
            description
          }
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

export default articleQuery
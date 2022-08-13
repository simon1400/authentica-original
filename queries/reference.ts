import { gql } from "@apollo/client";

const referenceQuery = gql`
  query getReferences($slug: String!, $locale: I18NLocaleCode!) {
    references(filters: { slug: { eq: $slug } }, locale: $locale) {
      data{
        attributes{
          title
          label
          slug
          Background
          content
          meta{
            title
            description
          }
          image{
            data{
              attributes{
                url
              }
            }
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
          references{
            data{
              attributes{
                logo{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                description
                Background
                slug
              }
            }
          }
          footer{
            title
            link
            subTitle
          }
          categories{
            data{
              attributes{
                title
                slug
              }
            }
          }
          technologies{
            data{
              attributes{
                title
                slug
              }
            }
          }
          materials{
            data{
              attributes{
                title
                slug
              }
            }
          }
          localizations{
            data{
							attributes{
                slug,
                locale
              }
            }
          }
        }
      }
    }
  }
`

export default referenceQuery
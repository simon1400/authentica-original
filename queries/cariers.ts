import { gql } from "@apollo/client";

export const cariersQuery = gql`
  query Cariers($locale: I18NLocaleCode!) {
    vacancies(locale: $locale) {
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

export const cariersFilterQuery = gql`
  query FilterCariers($category: String!, $locale: I18NLocaleCode!) {
    vacancies(
      filters: { 
        category: { 
          slug: {
            eq: $category 
          }
        } 
      },
      locale: $locale
    ) {
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

export const carierQuery = gql`
  query Carier($slug: String!, $locale: I18NLocaleCode!) {
    vacancies(filters: { slug: { eq: $slug } }, locale: $locale) {
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

export const cariersCategoryQuery = gql`
  query CariersCategory($locale: I18NLocaleCode!) {
    vacancyCategories(locale: $locale) {
      data{
        attributes{
          title
          slug
        }
      }
    }
  }
`

export const cariersPageQuery = gql`
  query CariersPage($locale: I18NLocaleCode!) {
    vacancyOverview(locale: $locale) {
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
          localizations{
            data{
							attributes{
                locale
              }
            }
          }
        }
      }
    }
  }
`
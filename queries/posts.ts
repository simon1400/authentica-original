import { gql } from "@apollo/client";

export const postsQuery = gql`
  query Posts($locale: I18NLocaleCode!) {
    blogs(
      locale: $locale
      pagination: {pageSize: 50},
      sort: "createdAt:desc"
    ) {
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

export const postsFilterQuery = gql`
  query Posts($category: String!, $locale: I18NLocaleCode!) {
    blogs(
      filters: { 
        categories: { 
          slug: {
            eq: $category 
          }
        } 
      },
      locale: $locale,
      pagination: {pageSize: 50},
      sort: "createdAt:desc"
    ) {
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


export const postQuery = gql`
  query Post($slug: String!, $locale: I18NLocaleCode!) {
    blogs(
      filters: { 
        slug: { 
          eq: $slug 
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
          textPublication
          chapters{
            ... on ComponentElementHead{
              title
            }
            ... on ComponentElementVideo{
              videoUrl
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
                locale
                slug
              }
            }
          }
        }
      }
    }
  }
`

export const postsCategoryQuery = gql`
  query PostsCategory($locale: I18NLocaleCode!) {
    blogCategories(locale: $locale) {
      data{
        attributes{
          title
          slug
        }
      }
    }
  }
`

export const postsPageQuery = gql`
  query PostsPage($locale: I18NLocaleCode!) {
    blogOverview(locale: $locale) {
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
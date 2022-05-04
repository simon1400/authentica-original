import { gql } from "@apollo/client";

const topNavQuery = gql`
  query TopNav {
    navigation {
      data{
        attributes{
          topNav{
            title
            url
            subNav{
              title
              url
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
              tech_articles{
                data{
                  attributes{
                    title
                    slug
                  }
                }
              }
              blogs{
                data{
                  attributes{
                    title
                    slug
                  }
                }
              }
              references{
                data{
                  attributes{
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default topNavQuery
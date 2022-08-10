import { gql } from "@apollo/client";

const topNavQuery = gql`
  query TopNav($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
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
            }
          }
          headNav {
            title
            url
          }
        }
      }
    }
  }
`

export default topNavQuery
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
              subTitle1
              subUrl1
              subTitle2
              subUrl2
              subTitle3
              subUrl3
              subTitle4
              subUrl4
              subTitle5
              subUrl5
            }
          }
        }
      }
    }
  }
`

export default topNavQuery
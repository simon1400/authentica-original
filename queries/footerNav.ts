import { gql } from "@apollo/client";

const footerNavQuery = gql`
  query FooterNav($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
      data{
        attributes{
          footer1
          footer2
          footer3
          socNav {
            title
            url
            icon
          }
        }
      }
    }
  }
`

export default footerNavQuery
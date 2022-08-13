import { gql } from "@apollo/client";

const contactQuery = gql`
  query Contact($locale: I18NLocaleCode!) {
    contact(locale: $locale) {
      data{
        attributes{
          title
          label
          content
          contactItem{
            text
            link
            icon
          }
          headquarters{
            title
            content
          }
          adresses{
            title
            content
          }
          footer{
            title
            link
            subTitle
          }
          meta{
            title
            description
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

export default contactQuery
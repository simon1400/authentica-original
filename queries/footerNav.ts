import { gql } from "@apollo/client";

const footerNavQuery = gql`
  query FooterNav {
    navigation {
      data{
        attributes{
          footer1
          footer2
          footer3
        }
      }
    }
  }
`

export default footerNavQuery
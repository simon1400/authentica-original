import { gql } from "@apollo/client";

const homepageQuery = gql`
  query Homepage {
    homepage {
      data{
        attributes{
          titles {
            Text
            article {
              data{
                attributes{
                  slug
                }
              }
            }
          }
          label
          video{
            data{
              attributes{
                url
                hash
                formats
                name
              }
            }
          }
          content
          cta{
            text
            link
          }
          references{
            data{
              attributes{
                slug
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
                title
                Background
              }
            }
          }
          contentReference
          refCta{
            text
            link
          }
          titlePartners
          partners{
            link
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
          topButton {
            text
            link
          }
        }
      }
    }
  }
`

export default homepageQuery
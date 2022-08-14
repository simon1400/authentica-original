import styled from "@emotion/styled"

export const Icon = styled.div(({theme}) => `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1.5px rgba(228, 0, 43, 0.3);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  transform: scale(1);
  transition: all .5s ease;
  svg{
    color: ${theme.palette.primary.main};
    fill: ${theme.palette.primary.main};
    height: 14px;
    transform: scale(1);
    transition: all .5s ease;
    margin: auto;
  }
`)

export const ContactItem = styled.a`
  text-align: center;
  margin-bottom: 120px;
  display: block;
  text-decoration: none;
  &:hover{
    > div {
      transform: scale(1.1);
      border: solid 1.5px rgba(228, 0, 43, 1);
      svg{
        transform: scale(0.9);
      }
    }
  }
  span{
    color: ${({theme}) => theme.palette.primary.main};
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.4px;
    display: block;
  }
  @media(max-width: 640px) {
    margin-bottom: 0px;
    span{
      font-size: 17px;
    }
  }
`


import styled from "@emotion/styled"

export const ContactItem = styled.div(({theme}) => `
  text-align: center;
  margin-bottom: 120px;
  span{
    color: ${theme.palette.primary.main};
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.4px;
    display: block;
  }
`)

export const Icon = styled.div(({theme}) => `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1.5px rgba(228, 0, 43, 0.3);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  svg{
    color: ${theme.palette.primary.main};
    fill: ${theme.palette.primary.main};
    height: 14px;
    margin: auto;
  }
`)
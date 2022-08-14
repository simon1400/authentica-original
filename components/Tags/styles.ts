import styled from "@emotion/styled";

export const TagsC = styled.div`
  margin-bottom: 30px;
  label{
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }
  ul{
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    li{
      list-style-type: none;
      line-height: 1;
      a{
        color: black;
        font-size: 19px;
        line-height: 1;
        font-weight: bold;
      }
    }
  }
`
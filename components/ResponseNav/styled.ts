import styled from "@emotion/styled";

export const Nav = styled.div<{menu: boolean}>`
  position: fixed;
  background-color: white;
  display: block;
  height: ${({menu}) => menu ? "calc(100vh - 92px)" : 0};
  width: 100vw;
  transition: all .5s ease;
  top: 92px;
  left: 0;
  z-index: 100;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: scroll;
  > ul{
    padding-left: 0;
    margin: 0;
    padding-top: 50px;
    > li{
      list-style-type: none;
      line-height: 1;
      display: block;
      font-size: 14px;
      margin-bottom: 27px;
      > a{
        text-decoration: none;
        display: inline-block;
        letter-spacing: 2.24px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        svg, path{
          height: 20px;
          transform: translateY(5px) translateX(5px);
          fill: red!important;
        }
      }
      > ul{
        padding-left: 0;
        padding-top: 0;
        transition: all .2 ease;
        height: 0;
        overflow: hidden;
        &.open-drop{
          height: auto;
          padding-top: 20px;
        }
        >li{
          list-style-type: none;
          margin-bottom: 30px;
          div{
            justify-content: flex-start;
            img{
              height: auto;
              max-height: none;
              max-width: 100px;
              width: 100px;
            }
          }
        }
      }
    }
  }
`
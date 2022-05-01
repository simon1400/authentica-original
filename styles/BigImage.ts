import styled from "@emotion/styled";

const BigImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 695px;
  img{
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default BigImage
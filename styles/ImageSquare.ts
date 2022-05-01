import styled from "@emotion/styled";

const ImageSquare = styled.div`
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  max-height: 695px;
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

export default ImageSquare
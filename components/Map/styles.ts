import styled from "@emotion/styled";

export const SMap = styled.div`
  overflow: hidden;
  height: 500px;
  width: 100%;
  iframe{
    margin-top: -61px;
  }
  @media(max-width: 640px) {
    margin-top: 60px;
  }
`
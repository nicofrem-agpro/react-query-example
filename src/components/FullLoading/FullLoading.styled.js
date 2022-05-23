import styled from "styled-components";

export const FullLoading = styled.div`
  position: fixed;
  right: calc(50% - 50px);
  bottom: calc(50% - 50px);

  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 20px solid #eceff1;
  border-top-color: #757575;
  box-sizing: border-box;
  background: transparent;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
`;

import styled from "styled-components";

export const Loading = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;

  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 6px solid #eceff1;
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

import styled from "styled-components";

export const UserContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 32px 16px;
  background-color: #eceff1;
  border-radius: 8px;

  text-decoration: none;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #263238;
  text-decoration: none;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ExtraInfo = styled.div`
  font-size: 14px;
  color: #757575;
  text-decoration: none;
`;

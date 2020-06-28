import styled from "styled-components";

export const Root = styled.div`
  height: 40px;
  background-color: ${({ theme }) => theme.palette.green};
  padding: 10px 25px;
  display: flex;
  align-items: center;
`;

export const TitleLabel = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.white};
`;

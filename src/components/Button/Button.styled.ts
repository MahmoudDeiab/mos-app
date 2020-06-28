import styled from "styled-components";

const CleanButton = styled.button`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled(CleanButton)`
  font-size: 16px;
  font-weight: 500;
  border-radius: 100px;
  height: 45px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
  transition: border 1s, color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.green};
    color: ${({ theme }) => theme.palette.white};
  }
`;

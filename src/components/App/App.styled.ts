import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.almostWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 50vw;
  transition: box-shadow 0.5s;
  box-shadow: 0px 12px 12px 0px rgba(36, 42, 50, 0.05);
  &:hover {
    box-shadow: 0px 24px 24px 0px rgba(36, 42, 50, 0.1);
  }
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ContentWrapper = styled.div`
  height: 60vh;
  overflow-y: scroll;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

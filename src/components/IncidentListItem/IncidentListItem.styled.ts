import styled from "styled-components";

export const Root = styled.div`
  padding: 15px 25px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.almostWhite};
`;

export const AddressLabel = styled.span`
  font-size: 21px;
  color: ${({ theme }) => theme.palette.green};
`;

export const VerifiedLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.lightGrey};
  text-transform: uppercase;
`;

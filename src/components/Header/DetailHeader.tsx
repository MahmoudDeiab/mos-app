import React, { FC } from "react";
import { Root } from "./Header.styled";
import { StyledLink } from "../App/App.styled";

export const DetailHeader: FC = () => {
  return (
    <Root>
      <StyledLink to="/">Back</StyledLink>
    </Root>
  );
};

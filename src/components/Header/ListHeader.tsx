import React, { FC } from "react";

import { Root } from "./Header.styled";
import { TitleLabel } from "./Header.styled";

export const ListHeader: FC = () => {
  return (
    <Root>
      <TitleLabel>Incidents</TitleLabel>
    </Root>
  );
};

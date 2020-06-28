import React, { FC } from "react";
import { PulseLoader } from "react-spinners";
import { useTheme } from "styled-components";

import { StyledButton } from "./Button.styled";
import { Theme } from "../../constants/theme";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  isLoading = false,
}) => {
  const theme = useTheme() as Theme;
  return (
    <StyledButton onClick={onClick}>
      {isLoading ? (
        <PulseLoader size={10} color={theme.palette.green} loading={true} />
      ) : (
        label
      )}
    </StyledButton>
  );
};

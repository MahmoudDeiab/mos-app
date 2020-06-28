import React, { FC } from "react";
import { PulseLoader } from "react-spinners";
import { useTheme } from "styled-components";

import { IncidentsList } from "../../components/IncidentsList/IncidentsList";
import { Incident } from "../../reducers/incidents/incidentsReducer.types";
import {
  ContentWrapper,
  SpinnerWrapper,
} from "../../components/App/App.styled";
import { ListHeader } from "../../components/Header/ListHeader";
import { Theme } from "../../constants/theme";

export type IncidentListRouteProps = {
  isLoading: boolean;
  incidents: Array<Incident>;
};

export const IncidentListRoute: FC<IncidentListRouteProps> = ({
  isLoading,
  incidents,
}) => {
  const theme = useTheme() as Theme;
  return (
    <div>
      <ListHeader />
      <ContentWrapper>
        {isLoading ? (
          <SpinnerWrapper>
            <PulseLoader size={20} color={theme.palette.green} loading={true} />
          </SpinnerWrapper>
        ) : (
          <IncidentsList incidents={incidents} />
        )}
      </ContentWrapper>
    </div>
  );
};

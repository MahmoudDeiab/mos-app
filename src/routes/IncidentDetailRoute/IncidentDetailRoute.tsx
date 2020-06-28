import React, { FC } from "react";

import { IncidentDetail } from "../../components/IncidentDetail/IncidentDetail";
import { useIncidentDetailRoute } from "./IncidentDetailRoute.hook";
import { DetailHeader } from "../../components/Header/DetailHeader";
import {
  ContentWrapper,
  SpinnerWrapper,
} from "../../components/App/App.styled";

export const IncidentDetailRoute: FC = () => {
  const { selectedIncident, onUpdateIcident } = useIncidentDetailRoute();
  return (
    <div>
      <DetailHeader />
      <ContentWrapper>
        {selectedIncident ? (
          <IncidentDetail
            incident={selectedIncident}
            onUpdateIcident={onUpdateIcident}
          />
        ) : (
          <SpinnerWrapper>
            <p>Failed to load incident</p>
          </SpinnerWrapper>
        )}
      </ContentWrapper>
    </div>
  );
};

import React, { FC } from "react";

import { Root, AddressLabel, VerifiedLabel } from "./IncidentListItem.styled";
import { Incident } from "../../reducers/incidents/incidentsReducer.types";
import { CriticalityIndicator } from "../CriticalityIndicator/CriticalityIndicator";
import { StyledLink } from "../App/App.styled";

export type IncidentListItemProps = {
  incidnet: Incident;
};

export const IncidentListItem: FC<IncidentListItemProps> = ({
  incidnet: {
    id,
    address,
    status: { criticality, verified },
  },
}) => {
  return (
    <Root>
      <StyledLink to={`/${id}`}>
        <AddressLabel>{address}</AddressLabel>
      </StyledLink>
      <CriticalityIndicator criticality={criticality} />
      <VerifiedLabel>{verified ? "Verified" : "Not Verified"}</VerifiedLabel>
    </Root>
  );
};

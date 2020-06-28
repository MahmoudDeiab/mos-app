import React, { FC } from "react";

import { Incident } from "../../reducers/incidents/incidentsReducer.types";
import { IncidentListItem } from "../IncidentListItem/IncidentListItem";
import { Root } from "./IncidentsList.styled";

export type IncidentsListProps = {
  incidents: Array<Incident>;
};

export const IncidentsList: FC<IncidentsListProps> = ({ incidents }) => {
  return (
    <Root>
      {incidents.map((incident) => (
        <IncidentListItem key={incident.id} incidnet={incident} />
      ))}
    </Root>
  );
};

import React, { FC } from "react";
import { IncidentCriticality } from "../../reducers/incidents/incidentsReducer.types";

import { Root, Text, Circle } from "./CriticalityIndicator.styled";
import { CriticalityIndicatorLabels } from "./CriticalityIndicator.consts";

export type CriticalityIndicatorProps = {
  criticality: IncidentCriticality;
};

export const CriticalityIndicator: FC<CriticalityIndicatorProps> = ({
  criticality,
}) => {
  return (
    <Root>
      <Circle criticality={criticality} />
      <Text criticality={criticality}>
        {CriticalityIndicatorLabels[criticality]}
      </Text>
    </Root>
  );
};

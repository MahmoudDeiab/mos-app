import styled from "styled-components";
import { IncidentCriticality } from "../../reducers/incidents/incidentsReducer.types";
import { CriticalityIndicatorColors } from "./CriticalityIndicator.consts";

export const Root = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Text = styled.span<{
  criticality: IncidentCriticality;
}>`
  font-size: 16px;
  color: ${({ theme, criticality }) => {
    const color = CriticalityIndicatorColors[criticality];
    return theme.palette[color];
  }};
`;

export const Circle = styled.div<{
  criticality: IncidentCriticality;
}>`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background-color: ${({ theme, criticality }) => {
    const color = CriticalityIndicatorColors[criticality];
    return theme.palette[color];
  }};
  margin-right: 5px;
`;

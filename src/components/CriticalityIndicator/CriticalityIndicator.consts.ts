import { IncidentCriticality } from "../../reducers/incidents/incidentsReducer.types";

export const CriticalityIndicatorLabels: {
  [criticality in IncidentCriticality]: string;
} = {
  [IncidentCriticality.Critical]: "Critical",
  [IncidentCriticality.Warning]: "Warning",
  [IncidentCriticality.Info]: "Info",
};

export const CriticalityIndicatorColors: {
  [criticality in IncidentCriticality]: "blue" | "red" | "orange";
} = {
  [IncidentCriticality.Critical]: "red",
  [IncidentCriticality.Warning]: "orange",
  [IncidentCriticality.Info]: "blue",
};

export const criticalityOptions = [
  {
    value: IncidentCriticality.Critical,
    label: CriticalityIndicatorLabels[IncidentCriticality.Critical],
  },
  {
    value: IncidentCriticality.Warning,
    label: CriticalityIndicatorLabels[IncidentCriticality.Warning],
  },
  {
    value: IncidentCriticality.Info,
    label: CriticalityIndicatorLabels[IncidentCriticality.Info],
  },
];

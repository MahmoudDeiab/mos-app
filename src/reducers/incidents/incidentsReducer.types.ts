export enum IncidentCriticality {
  Warning = "warning",
  Critical = "critical",
  Info = "info",
}

export type IncidentInterval = {
  startTime: string;
  endTime: string;
  entryTime: string;
};

export type IncidentStatus = {
  criticality: IncidentCriticality;
  verified: boolean;
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type IncidentPosition = {
  from: Coordinate;
  to: Coordinate;
};

export type Incident = {
  id: string;
  status: IncidentStatus;
  address: string;
  position: IncidentPosition;
  interval: IncidentInterval;
};

export type IncidentsState = {
  data: Array<Incident>;
  isLoading: boolean;
  isUpdating: boolean;
};

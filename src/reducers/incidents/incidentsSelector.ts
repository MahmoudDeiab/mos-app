import { State } from "../index";
import { Incident } from "./incidentsReducer.types";

export const getIncidents = (state: State): Array<Incident> =>
  state.incidents.data;

export const getIncidentById = (incidentId: string) => (state: State) =>
  getIncidents(state).find(({ id }) => id === incidentId);

export const getIsLoading = (state: State) => state.incidents.isLoading;

export const getIsUpdating = (state: State) => state.incidents.isUpdating;

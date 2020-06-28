import { Incident } from "../../reducers/incidents/incidentsReducer.types";

export const FETCH_INCIDENTS = "FETCH_INCIDENTS";
export const REPLACE_INCIDENTS = "REPLACE_INCIDENTS";
export const REPLACE_INCIDENT = "REPLACE_INCIDENT";
export const UPDATE_INCIDENT = "UPDATE_INCIDENT";
export const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
export const TOGGLE_IS_UPDATING = "TOGGLE_IS_UPDATING";

export type FetchIncidentsAction = {
  type: typeof FETCH_INCIDENTS;
};

export type UpdateIncidentAction = {
  type: typeof UPDATE_INCIDENT;
  payload: Incident;
};

export type ReplaceIncidentAction = {
  type: typeof REPLACE_INCIDENT;
  payload: Incident;
};

export type ReplaceIncidentsAction = {
  type: typeof REPLACE_INCIDENTS;
  payload: Array<Incident>;
};

export type ToggleIsLoadingAction = {
  type: typeof TOGGLE_IS_LOADING;
};

export type ToggleIsUpdatingAction = {
  type: typeof TOGGLE_IS_UPDATING;
};

export type IncidentActions =
  | FetchIncidentsAction
  | UpdateIncidentAction
  | ReplaceIncidentsAction
  | ToggleIsLoadingAction
  | ReplaceIncidentAction
  | ToggleIsUpdatingAction;

import {
  UPDATE_INCIDENT,
  FETCH_INCIDENTS,
  TOGGLE_IS_LOADING,
  REPLACE_INCIDENTS,
  REPLACE_INCIDENT,
  TOGGLE_IS_UPDATING,
  UpdateIncidentAction,
  FetchIncidentsAction,
  ToggleIsLoadingAction,
  ReplaceIncidentsAction,
  ReplaceIncidentAction,
  ToggleIsUpdatingAction,
} from "./incidentsActions.types";
import { Incident } from "../../reducers/incidents/incidentsReducer.types";

export const fetchIncidents = (): FetchIncidentsAction => ({
  type: FETCH_INCIDENTS,
});

export const replaceIncidents = (
  incidents: Array<Incident>
): ReplaceIncidentsAction => ({
  type: REPLACE_INCIDENTS,
  payload: incidents,
});

export const updateIncident = (incident: Incident): UpdateIncidentAction => ({
  type: UPDATE_INCIDENT,
  payload: incident,
});

export const replaceIncident = (incident: Incident): ReplaceIncidentAction => ({
  type: REPLACE_INCIDENT,
  payload: incident,
});

export const toggleIsLoading = (): ToggleIsLoadingAction => ({
  type: TOGGLE_IS_LOADING,
});

export const toggleIsUpdating = (): ToggleIsUpdatingAction => ({
  type: TOGGLE_IS_UPDATING,
});

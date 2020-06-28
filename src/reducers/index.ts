import { combineReducers } from "redux";
import { IncidentsState } from "./incidents/incidentsReducer.types";
import incidentsReducer from "./incidents/incidentsReducer";

export type State = {
  incidents: IncidentsState;
};

export const state = combineReducers({
  incidents: incidentsReducer,
});

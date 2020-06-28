import { IncidentsState } from "./incidentsReducer.types";
import {
  IncidentActions,
  REPLACE_INCIDENTS,
  REPLACE_INCIDENT,
  TOGGLE_IS_LOADING,
  TOGGLE_IS_UPDATING,
} from "../../actions/incidents/incidentsActions.types";

export const defaultState: IncidentsState = {
  data: [],
  isLoading: false,
  isUpdating: false,
};

export default function (
  state = defaultState,
  action: IncidentActions
): IncidentsState {
  switch (action.type) {
    case REPLACE_INCIDENTS: {
      const { payload } = action;
      return {
        ...state,
        data: payload,
      };
    }

    case REPLACE_INCIDENT: {
      const { payload } = action;
      const sliceIndex = state.data.findIndex(({ id }) => id === payload.id);
      const updateData = [
        ...state.data.slice(0, sliceIndex),
        payload,
        ...state.data.slice(sliceIndex + 1),
      ];
      return {
        ...state,
        data: updateData,
      };
    }

    case TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }

    case TOGGLE_IS_UPDATING: {
      return {
        ...state,
        isUpdating: !state.isUpdating,
      };
    }

    default:
      return state;
  }
}

import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  FETCH_INCIDENTS,
  UPDATE_INCIDENT,
  UpdateIncidentAction,
} from "../../actions/incidents/incidentsActions.types";
import { apiEndpoints } from "../../constants/api";
import {
  replaceIncidents,
  toggleIsLoading,
  replaceIncident,
  toggleIsUpdating,
} from "../../actions/incidents/incidentsActions";

export function* handleUpdateIncident(action: UpdateIncidentAction) {
  yield put(toggleIsUpdating());
  try {
    const { payload } = action;
    yield call(fetch, apiEndpoints.putIncident(payload.id), {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    // Add some delay to mimic network latency
    yield delay(1000);
    yield put(replaceIncident(payload));
  } catch (error) {
    console.error("Failed to fetch incidents", error);
    return 0;
  } finally {
    yield put(toggleIsUpdating());
  }
}

export function* handleFetchIncidents() {
  yield put(toggleIsLoading());
  try {
    const response: Response = yield call(fetch, apiEndpoints.getIncidents());
    const incidents = yield response.json();
    // Add some delay to mimic network latency
    yield delay(500);
    yield put(replaceIncidents(incidents));
    return incidents;
  } catch (error) {
    console.error("Failed to fetch incidents", error);
    return 0;
  } finally {
    yield put(toggleIsLoading());
  }
}

export function* watchIncidentsActions() {
  yield takeLatest(FETCH_INCIDENTS, handleFetchIncidents);
  yield takeLatest(UPDATE_INCIDENT, handleUpdateIncident);
}

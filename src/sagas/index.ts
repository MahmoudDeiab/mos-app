import { all, fork } from "redux-saga/effects";

import { watchIncidentsActions } from "./incidents/incidentsSaga";

export const rootSaga = function* root() {
  yield all([fork(watchIncidentsActions)]);
};

import createSagaMiddleware, { Saga } from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export const runSaga = (saga: Saga) => sagaMiddleware.run(saga);

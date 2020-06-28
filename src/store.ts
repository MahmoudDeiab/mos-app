import { createStore, applyMiddleware, compose } from "redux";
import { state } from "./reducers";

// Redux middleware imports
import { sagaMiddleware, runSaga } from "./middleware/sagaMiddleware";
import { rootSaga } from "./sagas";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(state, enhancer);

runSaga(rootSaga);

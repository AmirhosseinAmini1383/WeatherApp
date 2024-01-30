import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./Weather/WeatherReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga, watcherSaga } from "./Weather/WeatherSaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(rootSaga);

export default store;

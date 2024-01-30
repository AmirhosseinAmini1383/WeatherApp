// import axios, { all } from "axios";
// import { ReceiveWeatherError, ReceiveWeatherResponse } from "./WeatherAcion";
// import { SEND_WEATHER_REQUEST } from "./WeatherTypes";
// import { call, fork, put, takeEvery } from "redux-saga/effects";

// const getWeatherRequest = (query) => {
//   return axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=d181d636d3255d31b912ce123b2defa3`
//   );
// };

// function* handleGetWeather(action) {
//   try {
//     const res = yield call(getWeatherRequest, action.payload);
//     yield put(ReceiveWeatherResponse(res.data));
//   } catch (error) {
//     yield put(ReceiveWeatherError(error.message));
//   }
// }

// export function* watcherSaga() {
//   yield takeEvery(SEND_WEATHER_REQUEST, handleGetWeather);
// }

// // // function* handleGetWeather2(action) {
// // //   try {
// // //     const res = yield call(getWeatherRequest, action.payload);
// // //     yield put(ReceiveWeatherResponse(res.data));
// // //   } catch (error) {
// // //     yield put(ReceiveWeatherError(error.message));
// // //   }
// // // }

// // // export function* watcherSaga2() {
// // //   yield takeEvery(SEND_WEATHER_REQUEST, handleGetWeather2);
// // // }

// // // export function* rootSaga() {
// // //   yield all([fork(watcherSaga), fork(watcherSaga2)]);
// // // }

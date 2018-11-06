import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api/index';

function *getLatestLaunch() {
  try {
    const launchData = yield call(api.fetchLatestLaunch);
    const payload = {
      missionName: launchData.mission_name,
      rocketName: launchData.rocket.rocket_name,
      launchDate: launchData.launch_date_local,
    };
    yield put({type: "INCREMENT_COUNTER"});
    yield put({type: "ADD_LATEST_LAUNCH_SUCCESS", payload });
  } catch (error) {
    console.log('Error fetching latest launch data');
  }
}

function *getNextLaunch() {
  try {
    const launchData = yield call(api.fetchNextLaunch);
    const payload = {
      missionName: launchData.mission_name,
      rocketName: launchData.rocket.rocket_name,
      launchDate: launchData.launch_date_local,
    };
    yield put({type: "INCREMENT_COUNTER"});
    yield put({type: "ADD_NEXT_LAUNCH_SUCCESS", payload });
  } catch (error) {
    console.log('Error fetching next launch data');
  }
}

function *rootSaga() {
  yield takeEvery("ADD_LATEST_LAUNCH", getLatestLaunch);
  yield takeEvery("ADD_NEXT_LAUNCH", getNextLaunch);
}

export default rootSaga
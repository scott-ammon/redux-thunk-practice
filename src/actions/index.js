import * as api from '../api/index';

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const ADD_LATEST_LAUNCH = "ADD_LATEST_LAUNCH";
export const ADD_LATEST_LAUNCH_SUCCESS = "ADD_LATEST_LAUNCH_SUCCESS";
export const ADD_NEXT_LAUNCH = "ADD_NEXT_LAUNCH";
export const ADD_NEXT_LAUNCH_SUCCESS = "ADD_NEXT_LAUNCH_SUCCESS";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const addLatestLaunchSuccess = ({ missionName, rocketName, launchDate }) => ({
  type: ADD_LATEST_LAUNCH_SUCCESS,
  payload: {
    missionName,
    rocketName,
    launchDate,
  },
});

export const addLatestLaunch = () => {
  return (dispatch) => {
    return api.fetchLatestLaunch()
      .then((launchData) => {
        const launchObj = {
          missionName: launchData.mission_name,
          rocketName: launchData.rocket.rocket_name,
          launchDate: launchData.launch_date_local,
        }
        dispatch(addLatestLaunchSuccess(launchObj));
      });
  }
};

export const addNextLaunchSuccess = ({ missionName, rocketName, launchDate }) => ({
  type: ADD_NEXT_LAUNCH_SUCCESS,
  payload: {
    missionName,
    rocketName,
    launchDate,
  },
});

export const addNextLaunch = () => {
  return (dispatch) => {
    return api.fetchNextLaunch()
      .then((launchData) => {
        const launchObj = {
          missionName: launchData.mission_name,
          rocketName: launchData.rocket.rocket_name,
          launchDate: launchData.launch_date_local,
        }
        dispatch(addNextLaunchSuccess(launchObj));
      });
  }
};
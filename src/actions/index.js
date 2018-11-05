import * as api from '../api/index';

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const ADD_LATEST_LAUNCH = "ADD_LATEST_LAUNCH";
export const ADD_LATEST_LAUNCH_SUCCESS = "ADD_LATEST_LAUNCH_SUCCESS";
export const ADD_NEXT_LAUNCH = "ADD_NEXT_LAUNCH";

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
        console.log(launchData);
        const launchObj = {
          missionName: launchData.mission_name,
          rocketName: launchData.rocket.rocket_name,
          launchDate: launchData.launch_date_local,
        }
        dispatch(addLatestLaunchSuccess(launchObj));
      });
  }
};

export const addNextLaunch = ({ missionName, rocketName, launchDate }) => ({
  type: ADD_NEXT_LAUNCH,
  payload: {
    missionName,
    rocketName,
    launchDate,
  },
});
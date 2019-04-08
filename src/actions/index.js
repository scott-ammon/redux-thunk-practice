import * as api from '../api/index';

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const ADD_LATEST_LAUNCH_SUCCESS = "ADD_LATEST_LAUNCH_SUCCESS";
export const ADD_NEXT_LAUNCH_SUCCESS = "ADD_NEXT_LAUNCH_SUCCESS";
export const IS_FETCHING = "IS_FETCHING";

export const isFetching = () => ({
  type: IS_FETCHING,
})

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
    dispatch(isFetching());
    return api.fetchLatestLaunch()
      .then((launchData) => {
        const launchObj = {
          missionName: launchData.mission_name,
          rocketName: launchData.rocket.rocket_name,
          launchDate: launchData.launch_date_local,
        }
        // Simulate longer API delay
        setTimeout(() => {
          dispatch(addLatestLaunchSuccess(launchObj));
          dispatch(incrementCounter());
        }, 2000);
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
    dispatch(isFetching());
    return api.fetchNextLaunch()
      .then((launchData) => {
        const launchObj = {
          missionName: launchData.mission_name,
          rocketName: launchData.rocket.rocket_name,
          launchDate: launchData.launch_date_local,
        }
        // Simulate longer API delay
        setTimeout(() => {
          dispatch(addNextLaunchSuccess(launchObj));
          dispatch(incrementCounter());
        }, 2000);
      });
  }
};
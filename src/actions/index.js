export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const ADD_LATEST_LAUNCH = "ADD_LATEST_LAUNCH";
export const ADD_LATEST_LAUNCH_SUCCESS = "ADD_LATEST_LAUNCH_SUCCESS";
export const ADD_NEXT_LAUNCH = "ADD_NEXT_LAUNCH";
export const ADD_NEXT_LAUNCH_SUCCESS = "ADD_NEXT_LAUNCH_SUCCESS";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const addLatestLaunch = () => ({
  type: ADD_LATEST_LAUNCH,
});

export const addNextLaunch = () => ({
  type: ADD_NEXT_LAUNCH,
});

export const addLatestLaunchSuccess = ({ missionName, rocketName, launchDate }) => ({
  type: ADD_LATEST_LAUNCH_SUCCESS,
  payload: {
    missionName,
    rocketName,
    launchDate,
  },
});

export const addNextLaunchSuccess = ({ missionName, rocketName, launchDate }) => ({
  type: ADD_NEXT_LAUNCH_SUCCESS,
  payload: {
    missionName,
    rocketName,
    launchDate,
  },
});
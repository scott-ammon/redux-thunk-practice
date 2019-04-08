import { combineReducers } from 'redux';
import { INCREMENT_COUNTER,
         ADD_LATEST_LAUNCH_SUCCESS,
         ADD_NEXT_LAUNCH_SUCCESS,
         IS_FETCHING } from '../actions/index';

const initialLaunchState = {
  isFetching: false,
  latest: {
    missionName: '',
    rocketName: '',
    launchDate: '',
  },
  next: {
    missionName: '',
    rocketName: '',
    launchDate: '',
  }
};

const initialCountState = {
  count: 0,
};

const counterReducer = (state = initialCountState, action) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
      const newCount = {
        count: state.count + 1
      };
      return newCount;
    default:
      return state;
  }
}

const launchReducer = (state = initialLaunchState, action) => {
  switch(action.type) {
    case ADD_LATEST_LAUNCH_SUCCESS:
      const latestLaunch = Object.assign({}, state, {
        latest: {
          missionName: action.payload.missionName,
          rocketName: action.payload.rocketName,
          launchDate: action.payload.launchDate,
        },
        isFetching: false,
      });
      return latestLaunch;
    case ADD_NEXT_LAUNCH_SUCCESS:
      const nextLaunch = Object.assign({}, state, {
        next: {
          missionName: action.payload.missionName,
          rocketName: action.payload.rocketName,
          launchDate: action.payload.launchDate,
        },
        isFetching: false,
      });
      return nextLaunch;
    case IS_FETCHING:
      const fetchStatus = Object.assign({}, state, {
        isFetching: true,
      });
      return fetchStatus;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer,
  launchReducer
});

export default rootReducer
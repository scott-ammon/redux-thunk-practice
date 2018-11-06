import { combineReducers } from 'redux';
import { INCREMENT_COUNTER,
         ADD_LATEST_LAUNCH_SUCCESS,
         ADD_NEXT_LAUNCH_SUCCESS } from '../actions/index';

const initialState = {
  count: 0,
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
}

const counterReducer = (state = initialState, action) => {
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

const launchReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LATEST_LAUNCH_SUCCESS:
      console.log(action);
      const latestLaunch = Object.assign({}, state, {
        latest: {
          missionName: action.payload.missionName,
          rocketName: action.payload.rocketName,
          launchDate: action.payload.launchDate,
        },
      });
      return latestLaunch;
    case ADD_NEXT_LAUNCH_SUCCESS:
      const nextLaunch = Object.assign({}, state, {
        next: {
          missionName: action.payload.missionName,
          rocketName: action.payload.rocketName,
          launchDate: action.payload.launchDate,
        },
      });
      return nextLaunch;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer,
  launchReducer
});

export default rootReducer
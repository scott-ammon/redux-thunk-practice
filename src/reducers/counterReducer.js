import { INCREMENT_COUNTER } from '../actions/index';

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
    console.log(action)
      const newCount = action.count + 1;
      return newCount;
    default:
      return state;
  }
}

export default counterReducer;
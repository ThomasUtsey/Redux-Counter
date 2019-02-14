import { INCREMENT, DECREMENT } from '../actions';

const inst = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = inst, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload
      };
    case DECREMENT:
      return {
        count: state.count + action.payload
      }
    default:
      return state;
  }
};

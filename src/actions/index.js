export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  return { type: INCREMENT } ;
}

export const decrement = () => {
  return { type: INCREMENT } ;
}
// The action component or function exports just the description
// of the operation to be included as the type of store change
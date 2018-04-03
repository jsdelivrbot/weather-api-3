import { FETCH_WEATHER } from "../actions/index.js";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);
      // NEVER manipulate state, create an entirely new array
      return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [ city, city ] ]
  }
  return state;
}
import * as Actions from "./actions";

const initialState = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
  isFetching: false,
  error: null
};

export function starWars(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SUCCESS:
      return {
        ...state,
        films: action.data.films,
        people: action.data.people,
        planets: action.data.planets,
        species: action.data.species,
        starships: action.data.starships,
        vehicles: action.data.vehicles,
        isFetching: false
      };
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

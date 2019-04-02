import { MOVIE_LOADING_INITIATED, MOVIE_LOADING_SUCCESS, MOVIE_LOADING_FAILED, LOAD_GENRE_LIST_INITIATED, LOAD_GENRE_LIST_SUCCESS, LOAD_GENRE_LIST_FAILED } from "./actionTypes";

const initialState = {
  fetching: false,
  error: false,
  success: false,
  genres: [],
  movies: []
};

export function movieListingReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_GENRE_LIST_INITIATED:
      return { ...state, fetching: true, error: false, success: false };

    case LOAD_GENRE_LIST_SUCCESS:
      return { ...state, fetching: false, error: false, success: true, genres: [...state.genres,...action.payload] };

    case LOAD_GENRE_LIST_FAILED:
      return { ...state, fetching: false, error: true, success: false, genres: [], showMessage: action.payload };

    case MOVIE_LOADING_SUCCESS:
      return { ...state, fetching: false, error: false, success: true, movies: [...state.movies,...action.payload]};

    default:
      return state;
  }
}

import instialState from "./character.instialState";
import actionTypes from "./character.actionTypes";

const characterReducer = (state = instialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHARACTER_LOAD_START:
      return {
        ...state,
        isLoading: true,
        character: null,
        errorMessage: null,
      };
    case actionTypes.CHARACTER_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: payload,
      };
    case actionTypes.CHARACTER_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case actionTypes.MOVIE_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieArray: payload,
      };
    case actionTypes.LAST_DATE:
      return {
        ...state,
        isLoading: false,
        lastDate: payload,
      };
    case actionTypes.CHARACTER_NAME:
      return {
        ...state,
        characterName: payload,
      };
    default:
      return state;
  }
};

export default characterReducer;

import actionTypes from "./character.actionTypes";

const characterLoadStart = () => ({
  type: actionTypes.CHARACTER_LOAD_START,
});

const characterLoadSuccess = (users) => ({
  type: actionTypes.CHARACTER_LOAD_SUCCESS,
  payload: users,
});

const characterLoadFail = (errorMessage) => ({
  type: actionTypes.CHARACTER_LOAD_FAIL,
  payload: errorMessage,
});

const movieLoadSuccess = (users) => ({
  type: actionTypes.MOVIE_LOAD_SUCCESS,
  payload: users,
});
const characterName = (users) => ({
  type: actionTypes.CHARACTER_NAME,
  payload: users,
});
const lastDate = (users) => ({
  type: actionTypes.LAST_DATE,
  payload: users,
});
export default {
  characterLoadStart,
  characterLoadSuccess,
  characterLoadFail,
  movieLoadSuccess,
  lastDate,
  characterName,
};

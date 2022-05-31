import axios from "axios";
import actions from "./character.actions";

export const loadCharacterAsync = () => (dispatch) => {
  dispatch(actions.characterLoadStart());

  axios
    .get("https://swapi.dev/api/people/")
    .then(
      (response) => dispatch(actions.characterLoadSuccess(response.data))
      // console.log(response.data)
    )
    .catch((error) => actions.characterLoadFail(error.message));
};

export const movieLoaderAsync = (movieList) => (dispatch) => {
  let fetchMovieArr = movieList.map((everyMovie) =>
    axios.get(`${everyMovie}`).then((res) => res.data)
  );

  Promise.all(fetchMovieArr).then(
    (res) => dispatch(actions.MovieLoadSuccess(res))

    // dispatch(actions.lastDate())
  );
};

export const chracterName = (charcterName) => (dispatch) => {
  dispatch(actions.characterName(charcterName));
};

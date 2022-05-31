import axios from "axios";
import actions from "./character.actions";

export const loadCharacterAsync = () => (dispatch) => {
  dispatch(actions.characterLoadStart());

  axios
    .get("https://swapi.dev/api/people/")
    .then((response) => dispatch(actions.characterLoadSuccess(response.data)))
    .catch((error) => actions.characterLoadFail(error.message));
};

export const movieLoaderAsync = (movieList) => (dispatch) => {
  let fetchMovieArr = movieList.map((everyMovie) =>
    axios.get(`${everyMovie}`).then((res) => res.data)
  );

  Promise.all(fetchMovieArr).then((res) => {
    dispatch(actions.movieLoadSuccess(res));

    const findingLattestDate = res.filter((res) => res.release_date);

    const filterDate = findingLattestDate
      .map((x) => {
        return ` ${x.title} - ${new Date(x.release_date).getFullYear()}`;
      })
      .sort()
      .slice(-1);
    dispatch(actions.lastDate(filterDate));
  });
};

export const chracterName = (charcterName) => (dispatch) => {
  dispatch(actions.characterName(charcterName));
};

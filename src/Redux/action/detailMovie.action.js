// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "GET_DETAIL_FAILED";

// function untuk constanta Detail Movie
export const getDetailRequest = (data) => {
  return {
    type: GET_DETAIL_REQUEST,
    playload: data,
  };
};

export const getDetailSuccess = (result) => {
  return {
    type: GET_DETAIL_SUCCESS,
    result,
  };
};
export const getDetailFailed = (error) => {
  return {
    type: GET_DETAIL_FAILED,
    error,
  };
};

// Function untuk ambil film Detail
export const getDetail = (movie_id) => {
  return async (dispatch) => {
    const ambilFilm = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=4ff887f7912cc8621c53af345daac0cd`
      )
      .then((result) => dispatch(getDetailSuccess(result.data)))
      .catch((error) => dispatch(getDetailFailed(error)));

    dispatch(getDetailRequest(ambilFilm.data));
    console.log("Ini data film di file action", ambilFilm);
  };
};

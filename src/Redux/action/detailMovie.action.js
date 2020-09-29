// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "GET_DETAIL_FAILED";
// export const BEFORE_FATCH = "BEFORE_FATCH";

// function untuk constanta Detail Movie
export const getDetailRequest = () => {
  return {
    type: GET_DETAIL_REQUEST,
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
export const getDetail = (id) => {
  //   return (dispatch) => {
  //     dispatch(getDetailRequest());
  //     axios
  //       .get(
  //         "https://api.themoviedb.org/3/movie/upcoming?api_key=4ff887f7912cc8621c53af345daac0cd"
  //       )
  //       .then((result) => dispatch(getUpcomingSuccess(result.data)))
  //       .catch((error) => dispatch(getUpcomingFailed(error)));
  //   };

  //   Get Data film API dengan axios
  return async (dispatch) => {
    // dispatch({ type: BEFORE_FATCH });
    const ambilFilm = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4ff887f7912cc8621c53af345daac0cd`
      )
      .then((result) => dispatch(getDetailSuccess(result.data)))
      .catch((error) => dispatch(getDetailFailed(error)));
    // Pengiriman data function constanta dan dari data dengan axios
    dispatch(getDetailRequest(ambilFilm.data));
    console.log("Ini data film di detail action", ambilFilm);
  };
};

// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_UPCOMING_REQUEST = "GET_UPCOMING_REQUEST";
export const GET_UPCOMING_SUCCESS = "GET_UPCOMING_SUCCESS";
export const GET_UPCOMING_FAILED = "GET_UPCOMING_FAILED";
// export const BEFORE_FATCH = "BEFORE_FATCH";

// function untuk constanta Upcoming Movie
export const getUpcomingRequest = () => {
  return {
    type: GET_UPCOMING_REQUEST,
  };
};

export const getUpcomingSuccess = (result) => {
  return {
    type: GET_UPCOMING_SUCCESS,
    result,
  };
};
export const getUpcomingFailed = (error) => {
  return {
    type: GET_UPCOMING_FAILED,
    error,
  };
};

// Function untuk ambil film upcoming
export const getUpcoming = () => {
  //   return (dispatch) => {
  //     dispatch(getUpcomingRequest());
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
        `https://api.themoviedb.org/3/movie/upcoming?api_key=4ff887f7912cc8621c53af345daac0cd`
      )
      .then((result) => dispatch(getUpcomingSuccess(result.data)))
      .catch((error) => dispatch(getUpcomingFailed(error)));
    // Pengiriman data function constanta dan dari data dengan axios
    dispatch(getUpcomingRequest(ambilFilm.data));
    console.log("Ini data film di action", ambilFilm);
  };
};

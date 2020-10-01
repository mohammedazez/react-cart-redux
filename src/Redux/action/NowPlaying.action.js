// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_NOWPLAYING_REQUEST = "GET_NOWPLAYING_REQUEST";
export const GET_NOWPLAYING_SUCCESS = "GET_NOWPLAYING_SUCCESS";
export const GET_NOWPLAYING_FAILED = "GET_NOWPLAYING_FAILED";
// export const BEFORE_FATCH = "BEFORE_FATCH";

// function untuk constanta NowPlaying Movie
export const getNowPlayingRequest = () => {
  return {
    type: GET_NOWPLAYING_REQUEST,
  };
};

export const getNowPlayingSuccess = (result) => {
  return {
    type: GET_NOWPLAYING_SUCCESS,
    result,
  };
};
export const getNowPlayingFailed = (error) => {
  return {
    type: GET_NOWPLAYING_FAILED,
    error,
  };
};

// Function untuk ambil film NowPlaying
export const getNowPlaying = () => {
  //   return (dispatch) => {
  //     dispatch(getNowPlayingRequest());
  //     axios
  //       .get(
  //         "https://api.themoviedb.org/3/movie/now_playing?api_key=4ff887f7912cc8621c53af345daac0cd"
  //       )
  //       .then((result) => dispatch(getNowPlayingSuccess(result.data)))
  //       .catch((error) => dispatch(getNowPlayingFailed(error)));
  //   };

  //   Get Data film API dengan axios
  return async (dispatch) => {
    // dispatch({ type: BEFORE_FATCH });
    const ambilFilm = await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=4ff887f7912cc8621c53af345daac0cd`
      )
      .then((result) => dispatch(getNowPlayingSuccess(result.data)))
      .catch((error) => dispatch(getNowPlayingFailed(error)));
    // Pengiriman data function constanta dan dari data dengan axios
    dispatch(getNowPlayingRequest(ambilFilm.data));
    console.log("Ini data film di action", ambilFilm);
  };
};

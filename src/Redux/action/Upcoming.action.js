// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_UPCOMING_MOVIE = "GET_UPCOMING_MOVIE";
export const BEFORE_FATCH = "BEFORE_FATCH";

// function untuk constanta Upcoming Movie
const getUpcoming = (data) => {
  return {
    type: GET_UPCOMING_MOVIE,
    loading: data,
  };
};

// Function untuk ambil film upcoming
export const getUpcomingAction = () => {
  //   Get Data film API dengan axios
  return async (dispatch) => {
    dispatch({ type: BEFORE_FATCH });
    const ambilFilm = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4ff887f7912cc8621c53af345daac0cd`
    );
    // Pengiriman data function constanta dan dari data dengan axios
    dispatch(getUpcoming(ambilFilm.data));
    console.log("Ini data film di action", ambilFilm);
  };
};

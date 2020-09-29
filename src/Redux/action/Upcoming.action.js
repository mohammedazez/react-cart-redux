// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_UPCOMING_MOVIE = "GET_UPCOMING_MOVIE";

// function untuk constanta
const getUpcoming = (data) => {
  return {
    type: GET_UPCOMING_MOVIE,
    loading: data,
  };
};

// Function untuk ambil film
export const getUpcomingAction = () => {
  //   Get Data film API dengan axios
  return async (dispatch) => {
    const ambilFilm = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4ff887f7912cc8621c53af345daac0cd"
    );
    // Pengiriman data function constanta dan dari data dari axios
    dispatch(getUpcoming(ambilFilm.data));
    console.log("Ini data film di action", ambilFilm);
  };
};

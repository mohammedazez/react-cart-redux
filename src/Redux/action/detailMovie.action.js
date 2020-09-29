// Import Axioss
import axios from "axios";

// constanta dengan situasi ketika ambil data film
export const GET_DETAIL_MOVIE = "GET_DETAIL_MOVIE";

// funtion untuk constanta Detail Movie
const getDetail = (data) => {
  return {
    type: GET_DETAIL_MOVIE,
    loading: data,
  };
};

// Function untuk ambil detail movie
export const getDetailMovie = (dispatch) => {
  // Get data film api dengan axios
  return async () => {
    const ambilDetail = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4ff887f7912cc8621c53af345daac0cd`
    );
    // Pengiriman data function constanta dari data dengan axios
    dispatch(getDetail(ambilDetail.data));
    console.log("ini data film untuk detail movie", ambilDetail);
  };
};

// Import use Effect
import React, { useEffect } from "react";
// import useParams
import { useParams } from "react-router-dom";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";

// Import action dari Function untuk ambil data film
import { getDetail } from "../Redux/action/detailMovie.action";

const DetailMovie = () => {
  // Gunakan useDispatch untuk
  const dispatch = useDispatch();
  // Gunakan useparams
  const { movie_id } = useParams();

  // Gunakan useEffect untuk
  useEffect(() => {
    dispatch(getDetail(movie_id));
  }, []);

  // Gunakan useSelector untuk mengambil data film dari action
  const daftarDetail = useSelector((state) => state.getDetailReducers);
  console.log("Ini daftar film di file view", daftarDetail);

  return (
    <div>
      <h1>Ini Detail movie</h1>
      {/* <div>
        {daftarDetail !== undefined ? (
          daftarDetail.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div> */}
    </div>
  );
};

export default DetailMovie;

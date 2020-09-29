// Import use Effect
import React, { useEffect } from "react";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";

// Import action dari Function untuk ambil data film
import { getDetail } from "../Redux/action/detailMovie.action";

function DetailMovie() {
  // Gunakan useDispatch untuk
  const pengiriman = useDispatch();
  // Gunakan useSelector untuk mengambil data film dari action
  const daftarDetail = useSelector(
    (state) => state.getDetailReducers.data.results
  );
  console.log("Ini daftar film di detail", daftarDetail);

  // Gunakan useEffect untuk
  useEffect(() => {
    pengiriman(getDetail());
  }, [pengiriman]);

  return (
    <div>
      <h1>Detail Movie</h1>
    </div>
  );
}

export default DetailMovie;

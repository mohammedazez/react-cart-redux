// Import use Effect
import React, { useEffect } from "react";
// import useParams
import { useParams } from "react-router-dom";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";

// Import action dari Function untuk ambil data film
import { getDetail } from "../Redux/action/detailMovie.action";

function DetailMovie() {
  // Gunakan useSelector untuk mengambil data film dari action
  const daftarDetail = useSelector((state) => state.getDetailReducers.data);
  console.log("Ini daftar film di detail", daftarDetail);
  // Gunakan useDispatch untuk
  const pengiriman = useDispatch();
  const { id } = useParams();

  // Gunakan useEffect untuk
  useEffect(() => {
    pengiriman(getDetail());
  }, [pengiriman]);

  return (
    <div>
      <h1>Ini Detail movie</h1>
      <div>
        <div>
          <div>
            <div>
              {daftarDetail.genres !== undefined ? (
                daftarDetail.genres.map((item, index) => (
                  <div key={index}>
                    <p>{item.name}</p>
                  </div>
                ))
              ) : (
                <h1>Loading</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;

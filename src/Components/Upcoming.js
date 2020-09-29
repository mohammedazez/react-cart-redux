// Import use Effect
import React, { useEffect } from "react";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";
// Import action dari Function untuk ambil data film
import { getUpcomingAction } from "../Redux/action/Upcoming.action";

function Upcoming() {
  // Gunakan useDispatch untuk
  const pengiriman = useDispatch();
  // Gunakan useSelector untuk mengambil data film dari action
  const daftarFilm = useSelector((state) => state.data);
  console.log("Ini daftar film di view", daftarFilm);
  // Gunakan useEffect untuk
  useEffect(() => {
    pengiriman(getUpcomingAction());
  }, [pengiriman]);

  return (
    <div>
      <h1>Upcoming Movie</h1>
      {/* Tampilkan semua data film ke website supaya bisa dilihat user menggunakan Map (array method) gunakan dari useSelector*/}
      {/* <div className="daftar-film">
        {daftarFilm !== undefined ? (
          daftarFilm.map((item, index) => (
            <div key={index}>
              <h1>{item.results}</h1>
            </div>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div> */}
    </div>
  );
}

export default Upcoming;

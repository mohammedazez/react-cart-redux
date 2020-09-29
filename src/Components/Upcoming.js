// Import use Effect
import React, { useEffect } from "react";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";
// Import useHistory React Router Dom
import { useHistory } from "react-router-dom";
// Import action dari Function untuk ambil data film
import { getUpcoming } from "../Redux/action/Upcoming.action";
import "./upcoming.css";

function Upcoming() {
  // Gunakan useDispatch untuk
  const pengiriman = useDispatch();
  // Gunakan useSelector untuk mengambil data film dari action
  const daftarFilm = useSelector((state) => state.geUpcomingReducers);
  console.log("Ini daftar film di view", daftarFilm);
  // Gunakan useHistory yang digunakan push halaman ke detail movie
  const pindah = useHistory();
  // Gunakan useEffect untuk
  useEffect(() => {
    pengiriman(getUpcoming());
  }, [pengiriman]);

  // Fungsi tombol untuk memunculkan detail film
  const handleClick = (id) => {
    alert("tombol berfungsi");
    pindah.push();
  };

  return (
    <div>
      <h1>Upcoming Movie</h1>
      {/* Tampilkan semua data film ke website supaya bisa dilihat user menggunakan Map (array method) gunakan dari useSelector*/}
      <div className="daftar-film">
        {daftarFilm && daftarFilm.results ? (
          daftarFilm.results.map((item, index) => (
            <div key={index}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt="poster"
                  onClick={() => handleClick(item.id)}
                />
                <div className="container">
                  <h4>
                    <b>{item.title}</b>
                  </h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default Upcoming;

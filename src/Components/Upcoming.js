// Import use Effect
import React, { useEffect } from "react";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";
// Import action dari Function untuk ambil data film
import { getUpcomingAction } from "../Redux/action/Upcoming.action";

function Upcoming() {
  // Gunakan useDispatch untuk
  const pengiriman = useDispatch();
  console.log(pengiriman);
  // Gunakan useSelector untuk
  const daftarFilm = useSelector();
  // Gunakan useEffect untuk
  useEffect();

  return (
    <div>
      <h1>Upcoming Movie</h1>
    </div>
  );
}

export default Upcoming;

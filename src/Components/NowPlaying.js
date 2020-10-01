// Import use Effect
import React, { useEffect } from "react";
// Import useSelector dan useDispatch
import { useSelector, useDispatch } from "react-redux";
// Import useHistory React Router Dom untuk pindah halaman
import { useHistory } from "react-router-dom";
// Import action dari Function untuk ambil data film
import { getNowPlaying } from "../Redux/action/NowPlaying.action";
// Import react bootstrap
import { Card, CardDeck } from "react-bootstrap";
import "../Style/NowPlaying.css";

function Upcoming() {
  // Gunakan useDispatch untuk
  const pengiriman = useDispatch();
  // Gunakan useSelector untuk mengambil data film dari action
  const daftarFilm = useSelector(
    (state) => state.getNowPlayingReducers.data.results
  );
  console.log("Ini daftar film di view", daftarFilm);
  // Gunakan useHistory yang digunakan push halaman ke detail movie
  const pindah = useHistory();
  // Gunakan useEffect untuk
  useEffect(() => {
    pengiriman(getNowPlaying());
  }, [pengiriman]);

  // Fungsi tombol untuk memunculkan detail film
  const handleClick = (id) => {
    console.log("tombol berfungsi");
    // Diambil dari path app js
    pindah.push(`/detail/${id}`);
  };

  return (
    <div>
      <h1 className="judul">Now Playing Movie</h1>
      {/* Tampilkan semua data film ke website supaya bisa dilihat user menggunakan Map (array method) gunakan dari useSelector*/}
      <div className="daftar-film">
        {daftarFilm !== undefined ? (
          daftarFilm.map((item, index) => (
            <div key={index}>
              <CardDeck className="container-utama">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt="poster"
                    onClick={() => handleClick(item.id)}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.overview}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Rilis : {item.release_date}
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                    alt="poster"
                    onClick={() => handleClick(item.id)}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.overview}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Rilis : {item.release_date}
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt="poster"
                    onClick={() => handleClick(item.id)}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.overview}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Rilis : {item.release_date}
                    </small>
                  </Card.Footer>
                </Card>
              </CardDeck>
              {/* <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt="poster"
                  onClick={() => handleClick(item.id)}
                />
                <div className="container">
                  <h4>
                    <b>{item.title}</b>
                  </h4>
                </div>
              </div> */}
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

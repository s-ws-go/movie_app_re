import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movies";

function App() {
  const [loading, setLoading] = useState(true);

  const [movielist, setMovielist] = useState({
    movielist: [],
  });

  const getMovies = useEffect(async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    const mov = movies.data.data.movies;
    console.log(mov);
    setMovielist({ movielist: mov });
    setLoading(false);
  }, []);

  console.log(movielist);

  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movielist">
          {movielist.movielist.map((mm) => {
            return (
              <Movie
                key={mm.id}
                id={mm.id}
                year={mm.year}
                title={mm.title}
                summary={mm.summary}
                poster={mm.medium_cover_image}
                genres={mm.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;

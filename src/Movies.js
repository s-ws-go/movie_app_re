import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className="movies">
      <img src={poster} alt={title} title={title} />
      <div className="movies__data">
        <h3 className="movies__title">{title}</h3>
        <h5 className="movies__year">{year}</h5>
        <div className="movies__genres">
          <ul className="genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movies__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="movies__summary">{summary}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

//시벌 맵 함수 안에 return {} 아니면 그냥 () 둘 중 하나로 뽑아내야 결과 나온다. 시벌.

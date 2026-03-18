import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import MovieReviews from "../components/movieReviews/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";

const MovieReviewPage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieReviews movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie reviews</p>
      )}
    </>
  );
};

export default MovieReviewPage;

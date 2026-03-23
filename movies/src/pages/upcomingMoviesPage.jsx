import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";  // useQuery, не useQueries
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const UpcomingMoviesPage = () => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['upcoming'],   // было 'discover' — конфликт с HomePage
    queryFn: getUpcomingMovies,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;  // должно быть ДО использования переменной

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => null}
    />
  );
}
export default UpcomingMoviesPage;
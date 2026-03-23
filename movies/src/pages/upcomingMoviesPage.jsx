import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";  // useQuery, не useQueries
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
const UpcomingMoviesPage = () => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['upcoming'],   // было 'discover' — конфликт с HomePage
    queryFn: getUpcomingMovies,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;  // должно быть ДО использования переменной

  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  const addToPlaylist = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
      return <AddToPlaylistIcon movie={movie} />
    }}
    /> ) }

export default UpcomingMoviesPage;
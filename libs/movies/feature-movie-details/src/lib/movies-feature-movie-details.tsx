import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {Movie} from "@monorepo/types";
type TParams = { id: string };

import './movies-feature-movie-details.module.scss';


/* eslint-disable-next-line */
export interface MoviesFeatureMovieDetailsProps extends RouteComponentProps<TParams> {}

export function MoviesFeatureMovieDetails(props: MoviesFeatureMovieDetailsProps) {
  const [data, setData] = useState<Movie>();
  useEffect(() => {
    fetch(`api/movies/${props.match.params.id}`)
    .then(res => res.json())
    .then((data:Movie) => {
      setData(data);
    })
  },[props.match.params.id])

  return (
    <div>
      <h1>Title: {data?.title}</h1>
      <p>Genre: {data?.genre}</p>
      <p>Runtime: {data?.runtime}</p>
      <p>Year: {data?.year}</p>
    </div>
  );
}

export default MoviesFeatureMovieDetails;

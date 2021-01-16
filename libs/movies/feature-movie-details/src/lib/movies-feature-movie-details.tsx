import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { id: string };

import './movies-feature-movie-details.module.scss';


/* eslint-disable-next-line */
export interface MoviesFeatureMovieDetailsProps extends RouteComponentProps<TParams> {}

export function MoviesFeatureMovieDetails(
  props: MoviesFeatureMovieDetailsProps
) {
  return (
    <div>
      <h1>Welcome to movie {props.match.params.id}!</h1>

    </div>
  );
}

export default MoviesFeatureMovieDetails;
